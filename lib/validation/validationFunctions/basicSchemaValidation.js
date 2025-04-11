const { workflowSchema } = require("../schemas/workflowSchema");
const { errors } = require("../constants/errorCodes");
const { accessMetadata, getContributingModuleIds } = require("../helper/misc");


const basicSchemaValidation = (workflow) => {
  const contributingModuleIds = getContributingModuleIds(workflow);
  const missingModuleIds = contributingModuleIds.filter((moduleId) =>
    !workflow?.modules?.some((module) => module.id === moduleId)
  );

  const contributingModuleIdIssues = missingModuleIds.map((moduleId) => ({
    type: "ERROR",
    text: `${moduleId} referenced in the contributingModuleIds does not exist in the workflow.`,
    code: errors.INCORRECT_WORKFLOW,
  }));

  const { error } = workflowSchema.validate(workflow, { abortEarly: false });
  const issues = (error?.details || []).map((detail) => {
    const path = detail.path;
    const schemaDetail = accessMetadata(workflowSchema.describe(), path);
    const isWarning = schemaDetail?.metas?.some((meta) => typeof meta.warnings === 'boolean' && meta.warnings);
    return {
      type: isWarning ? "WARNING" : "ERROR",
      text: `Workflow Schema ${isWarning ? "warning" : "error"}: ${detail?.message}`,
      code: errors.INCORRECT_WORKFLOW,
    };
  });

  

  return {
    issues: [...issues, ...contributingModuleIdIssues],
  };
};

module.exports = {
  basicSchemaValidation,
};
