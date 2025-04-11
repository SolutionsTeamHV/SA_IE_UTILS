const jsep = require('jsep');
const { errors } = require("../constants/errorCodes");
const { convertToJSON, parenthesesCheck } = require("../helper/misc");
const { operandCheck, operatorsCheck } = require("../helper/operandOperatorChecks");

const validateRuleExpression = (rule, workflow, conditionId) => {
    const issues = [];
    try {
        const { isValid, issues: ruleIssues } = parenthesesCheck(rule, conditionId);
        if (!isValid) {
            issues.push(...ruleIssues);
            return { issues };
        }
        const expression = jsep(rule);
        const parsedExpression = convertToJSON(expression);
        if (parsedExpression) {
            if (parsedExpression.type === 'ArrayExpression') {
                issues.push({
                    type: "ERROR",
                    text: `Unsupported expression type: ArrayExpression in ${conditionId}`,
                    code: errors.UNSUPPORTED_EXPRESSION_TYPE,
                });
            } else if (parsedExpression.type === 'SequenceExpression') {
                issues.push({
                    type: "ERROR",
                    text: `Missing operator IN RULE: ${rule} in ${conditionId}`,
                    code: errors.MISSING_OPERATOR,
                });
            } else {
                const { issues: operandCheckResult } = operandCheck(parsedExpression, workflow, rule, conditionId);
                issues.push(...operandCheckResult);
                const { issues: operatorsCheckResult } = operatorsCheck(parsedExpression, rule, conditionId);
                issues.push(...operatorsCheckResult);
            }
        }
    } catch (err) {
        if (err.description) {
            if (err.description.includes('Unclosed (') || err.description.includes('Unexpected ")"')) {
                issues.push({
                    type: "ERROR",
                    text: `Parentheses are not balanced in ${conditionId}`,
                    code: errors.PARENTHESES_NOT_BALANCED,
                });
            } else if (err.description.includes('Unexpected "="')) {
                issues.push({
                    type: "ERROR",
                    text: `Missing Operand in ${conditionId}`,
                    code: errors.MISSING_OPERAND,
                });
            } else {
                issues.push({
                    type: "ERROR",
                    text: `Invalid rule expression in ${conditionId}, ${err}`,
                    code: errors.INVALID_RULE_EXPRESSION,
                });
            }
        } else {
            issues.push({
                type: "ERROR",
                text: `Unexpected ERROR: ${err} in ${conditionId}`,
                code: errors.INVALID_RULE_EXPRESSION,
            });
        }
    }

    return { issues };
}

const ruleCheck = (workflow) => {
    const conditions = (workflow?.conditions || {});
    const conditionalVariables = (workflow.conditionalVariables || {});
    const allRules = [...Object.entries(conditions), ...Object.entries(conditionalVariables)];
    const issues = allRules
        .map(([conditionId, condition]) => {
            const rule = condition.rule;
            const { issues: allRuleIssues } = validateRuleExpression(rule, workflow, conditionId);
            return allRuleIssues;
        })
        .reduce((acc, currentIssues) => acc.concat(currentIssues), []);
    return { issues };
};

module.exports = {
    ruleCheck,
};
