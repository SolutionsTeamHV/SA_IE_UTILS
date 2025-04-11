const { errors } = require("../constants/errorCodes");
const { getModuleVariables } = require("./misc");
const { predefinedInputVariables, predefinedSdkVariables } = require("../constants/misc");

const predefinedVariableCheck = (operand, workflow, conditionId) => {   
    const [id, ...varArray] = operand.split('.');
    const issues = [];
    if (!!workflow?.modules?.find((module) => module.id === id)) {
        const module = workflow?.modules?.find((module) => module.id === id);
        if (varArray.length > 0) {
            const [_, ...varArray] = operand.split('.');
            const definedVariable = varArray.join('.');
            const moduleVariables = getModuleVariables(module);
            if (!moduleVariables) {
                issues.push({
                    type: "ERROR",
                    text: conditionId ? `Variable : ${definedVariable} not found in module: ${id} referenced in condition: ${conditionId}` : `Variable : ${definedVariable} not found in module: ${id} referenced as ${operand}`,
                    code: errors.VARIABLE_NOT_FOUND,
                });
            } else {
                const variable = moduleVariables.find((variable) => variable.id === definedVariable);

                if (!variable) {
                    const listVariable = moduleVariables.find(
                        (variable) => variable.componentType === 'list' && definedVariable.startsWith(variable.id)
                    );
        
                    if (!listVariable) {
                        const partialMatch = moduleVariables.find(
                            (variable) => definedVariable.startsWith(variable.id)
                        );
                        if (!partialMatch) {
                            issues.push({
                                type: "ERROR",
                                text: conditionId ? `Variable : ${definedVariable} not found in module: ${id} referenced in condition: ${conditionId}` : `Variable : ${definedVariable} not found in module: ${id} referenced as ${operand}`,
                                code: errors.VARIABLE_NOT_FOUND,
                            });
                        } else {
                            issues.push({
                                type: "WARNING",
                                text: conditionId ? `Variable : ${definedVariable} not found in module: ${id} referenced in condition: ${conditionId}` : `Variable : ${definedVariable} not found in module: ${id} referenced as ${operand}`,
                                code: errors.VARIABLE_NOT_FOUND,
                            });
                        }
                    }
                }
            }
        }
    } else if (!!workflow?.conditions?.[id]) {
        const condition = workflow?.conditions?.[id];
        if (!condition) {
            issues.push({
                type: "ERROR",
                text: `Condition not found: ${id}`,
                code: errors.CONDITION_NOT_FOUND,
            });
        }
    } else if (id === 'conditionalVariables') {
        const conditionalVariableId = operand.split('.')[1];
        const cv = workflow?.conditionalVariables?.[conditionalVariableId];
        if (!cv) {
            issues.push({
                type: "ERROR",
                text: conditionId ? `Conditional variable not found: ${conditionalVariableId} in ${conditionId}` : `Conditional variable not found: ${conditionalVariableId}`,
                code: errors.CONDITIONAL_VARIABLE_NOT_FOUND,
            });
        }
    } else if (id === 'inputs') {
        const inputVariable = operand.split('.')[1];
        const input = workflow?.properties?.inputsRequired?.[inputVariable];
        if (!input && !predefinedInputVariables.includes(inputVariable)) {
            issues.push({
                type: "ERROR",
                text: conditionId ? `Input not found: ${inputVariable} in ${conditionId}` : `Input not found: ${inputVariable}`,
                code: errors.INPUT_NOT_FOUND,
            });
        }
    } else if (id === 'sdk'){
        const sdkVariable = operand.split('.')[1];
        if (!predefinedSdkVariables.includes(sdkVariable)) {
            issues.push({
                type: "ERROR",
                text: conditionId ? `Invalid operand: ${operand} referenced in condition: ${conditionId}` : `Invalid operand: ${operand} referenced`,
                code: errors.INVALID_OPERAND,
            });
        }
    }
    else {
        issues.push({
            type: "ERROR",
            text: conditionId ? `Invalid operand: ${operand} referenced in condition: ${conditionId}` : `Invalid operand: ${operand} referenced`,
            code: errors.INVALID_OPERAND,
        });
    }
    return { issues };
}

module.exports = predefinedVariableCheck;
