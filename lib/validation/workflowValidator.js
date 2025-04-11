const { errors } = require("./constants/errorCodes");
const { basicSchemaValidation } = require('./validationFunctions/basicSchemaValidation');
const { uniqueIdsCheck } = require('./validationFunctions/uniqueIdsCheck');
const { substringIdsCheck } = require('./validationFunctions/substringIdsCheck');
const { nextStepValidation } = require('./validationFunctions/nextStepValidation');
const { moduleSchemaValidation } = require('./validationFunctions/moduleSchemaValidation');
const { formComponentSchemaValidation } = require('./validationFunctions/formComponentSchemaValidation');
const { ruleCheck } = require('./validationFunctions/ruleCheck');
const { formComponentValidationCheck } = require('./validationFunctions/formComponentWarnings');
const { apiModuleCheck } = require('./validationFunctions/apiModuleWarnings');
const { conditionalVariablesCheck } = require('./validationFunctions/conditionalVariablesWarnings');
const { basicSchemaValidationWarnings } = require("./validationFunctions/basicSchemaValidationWarnings");
const { validateVariableUsage } = require("./validationFunctions/validateVariableUsage");
const { validateNamingConventions } = require("./validationFunctions/namingConventionValiadtion");
const { vsv2UrlSourceCheck } = require("./validationFunctions/vsv2UrlSourceCheck");

const checkValidity = (validationData) => {
  let isValid = true;
  let hasWarnings = false;
  const validatorCodes = Object.keys(validationData || {});
  validatorCodes.forEach((vCode) => {
    const issues = validationData[vCode];
    const nonWarningIssues = issues.filter(({ type }) => type === 'ERROR');
    if (nonWarningIssues.length > 0) isValid = false;
    const warningIssues = issues.filter(({ type }) => type === 'WARNING');
    if (warningIssues.length > 0) hasWarnings = true;
  }); 
  return { isValid, hasWarnings };
};

const convertErrorsToWarnings = (validationResult, exceptionConfig) => {
  if (!exceptionConfig) return validationResult;
  const { convertAllErrorsToWarnings = false } = exceptionConfig;
  const errorCodesToConvert = (exceptionConfig?.errorClasses || []).map(({code}) => code);

  const tweakedValidationResult = {};
  const validatorCodes = Object.keys(validationResult || {});
  validatorCodes.forEach((vCode) => {
    const issues = validationResult[vCode];
    tweakedValidationResult[vCode] = issues.map(({ code, type, ...rest }) => {
      return (convertAllErrorsToWarnings || errorCodesToConvert.includes(code)) ? ({
          ...rest,
          code,
          type: 'WARNING',
        })
      : ({
          ...rest,
          code,
          type,
      });
    });
  }); 
  return tweakedValidationResult;
};

const validate = (workflow, validators, exceptionConfig) => {
  const validationResults = {};
  validators.forEach(({ code, fn: validator, dryRun }) => {
    let validationResult;
    try {
      const { issues = [] } = validator(workflow);
      validationResult = issues;
    } catch (err) {
      validationResult = [
        {
          type: "ERROR",
          text: `Error executing check: ${code} message: ${err?.message}`,
          code: errors.CHECK_EXECUTION_FAILED,
        }
      ];
    }
    if (dryRun) {
      validationResults[code] = convertErrorsToWarnings({ [code]: validationResult }, {convertAllErrorsToWarnings: true})[code];
    } else {
      validationResults[code] = validationResult;
    }
  });

  const finalValidationResults = convertErrorsToWarnings(validationResults, exceptionConfig);
  const { isValid, hasWarnings } = checkValidity(finalValidationResults);
  return { isValid, hasWarnings, data: finalValidationResults };
};

const validateWorkflow = (workflow, exceptionConfig) => {
  const validators = [
    { code: "BASIC_SCHEMA_VALIDATION", fn: basicSchemaValidation, dryRun: false },
    { code: "BASIC_SCHEMA_VALIDATION_WARNINGS", fn: basicSchemaValidationWarnings, dryRun: false },
    { code: "UNIQUE_ID_CHECK", fn: uniqueIdsCheck, dryRun: false },
    { code: "SUBSTRING_ID_CHECK", fn: substringIdsCheck, dryRun: false },
    { code: "NEXT_STEP_VALIDATION", fn: nextStepValidation, dryRun: false },
    { code: "MODULE_SCHEMA_VALIDATION", fn: moduleSchemaValidation, dryRun: false },
    { code: "FORM_COMPONENT_SCHEMA_VALIDATION", fn: formComponentSchemaValidation, dryRun: false },
    { code: "NAMING_CONVENTION_VALIDATION", fn: validateNamingConventions, dryRun: false },
    { code: "RULE_CHECK", fn: ruleCheck, dryRun: false },
    { code: "VARIABLE_USAGE_VALIDATION", fn: validateVariableUsage, dryRun: true },
    { code: "FORM_COMPONENT_WARNINGS", fn: formComponentValidationCheck, dryRun: false },
    { code: "API_WARNINGS", fn: apiModuleCheck, dryRun: false },
    { code: "CONDITIONAL_VARIABLES_WARNINGS", fn: conditionalVariablesCheck, dryRun: false },
    { code: "VSV2_URL_SOURCE_VALIDATION", fn: vsv2UrlSourceCheck, dryRun: false }, 
  ];
  return validate(workflow, validators, exceptionConfig);
};

module.exports = {
  validateWorkflow,
  checkValidity,
  convertErrorsToWarnings,
}