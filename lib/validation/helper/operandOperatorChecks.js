const predefinedVariableCheck = require('./predefinedVariableCheck');
const { errors } = require("../constants/errorCodes");
const { warnings } = require("../constants/warningCodes");
const { conditionalOperators } = require("../constants/misc");
const { isNumber, isEnclosedInSingleQuotes } = require('./misc');

const NonstringOperands = ['true', 'false', 'null'];

const operandCheck = (parsedExpression, workflow, rule, conditionId) => {
    const issues = [];
    function validateOperand(operand) {
        if (
            typeof operand === 'string' &&
            !isEnclosedInSingleQuotes(operand) &&
            !isNumber(Number(operand)) &&
            !NonstringOperands.includes(operand)
        ) {
            if (operand === 'undefined') {
                issues.push({
                    type: "ERROR",
                    text: `Undefined is not supported, please use null in ${conditionId}`,
                    code: errors.UNDEFINED_OPERAND,
                });
            } else {
                const { issues: predefinedCheckResult } = predefinedVariableCheck(operand, workflow, conditionId);
                issues.push(...predefinedCheckResult);
            }
        }
    }


    function validateEmptyStringOperand(expression, parentExpressions) {
        const { operand1, operand2 } = expression;
    
        const checkForNullInAnyArray = (operand1, parentExpressions) => {
            if (!parentExpressions || (!parentExpressions.all && !parentExpressions.any)) {
                issues.push({
                    type: "WARNING",
                    text: `rule in '${conditionId}' has an empty string in operand2. It is recommended to also check for 'null'.`,
                    code: warnings.MISSING_NULL_CHECK_IN_RULE,
                });
            } else {
                const anyCheck = parentExpressions.any?.some(
                    (subExpression) =>
                        subExpression.operand1 === operand1 && subExpression.operand2 === 'null'
                );
        
                const allCheck = parentExpressions.all?.some(
                    (subExpression) =>
                        subExpression.operand1 === operand1 && subExpression.operand2 === 'null'
                );
                if(!anyCheck && !allCheck) {
                    issues.push({
                        type: "WARNING",
                        text: `Condition in '${conditionId}' has an empty string in operand2. It is recommended to also check for 'null'.`,
                        code: warnings.MISSING_NULL_CHECK_IN_RULE,
                    });
                }
            } 
        };
    
        if (operand2 === "''") {
            checkForNullInAnyArray(operand1, parentExpressions);
        }
    };
    
    const processExpression = (expression, parentExpressions) => {
        if (expression.any) {
            expression.any.forEach((subExpression) => processExpression(subExpression, expression));
        } else if (expression.all) {
            expression.all.forEach((subExpression) => processExpression(subExpression, expression));
        } else if (expression.operand1 && expression.operand2) {
            validateEmptyStringOperand(expression, parentExpressions);
            validateOperand(expression.operand1);
            validateOperand(expression.operand2);
        }
    };

    processExpression(parsedExpression, parsedExpression);
    return {
        issues,
    };
};

const operatorsCheck = (parsedExpression, rule, conditionId) => {
    const issues = [];
    const validateOperator = (operation, rule) => {
        if (!conditionalOperators.includes(operation)) {
            issues.push({
                type: "ERROR",
                text: `Invalid operator found in rule: ${rule} in ${conditionId}`,
                code: errors.INVALID_OPERATOR,
            });
        }
    };

    const processExpression = (expression, rule) => {
        if (expression.any) {
            expression.any.forEach((subExpression) => processExpression(subExpression, rule));
        } else if (expression.all) {
            expression.all.forEach((subExpression) => processExpression(subExpression, rule));
        } else if (expression.operator) {
            validateOperator(expression.operator, rule);
        } else {
            issues.push({
                type: "ERROR",
                text: `Invalid operator found in rule: ${rule} in ${conditionId}`,
                code: errors.INVALID_OPERATOR,
            });
        }
    };

    processExpression(parsedExpression, rule);
    return {
        issues,
    };
}

module.exports = {
    operandCheck,
    operatorsCheck,
};