const { warnings } = require("../constants/warningCodes");

const conditionalVariablesCheck = (workflow) => {
    const { conditionalVariables } = workflow;
    const issues = [];

    if (conditionalVariables) {
        Object.entries(conditionalVariables).forEach(([key, conditionalVariable]) => {
            const { if_false, if_true } = conditionalVariable;
            if (!if_false || !if_true) {
                issues.push({
                    type: "WARNING",
                    text: `'${key}' has empty if_true or if_false.`,
                    code: warnings.EMPTY_IF_TRUE_OR_IF_FALSE_CONDITIONAL,
                });
            }
        });
    }
    return {
        issues,
    };
};

module.exports = {
    conditionalVariablesCheck,
};