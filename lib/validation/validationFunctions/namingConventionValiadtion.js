const { errors } = require("../constants/errorCodes");

const validateNamingConventions = (workflow) => {
    const issues = [];
    const moduleIds = (workflow?.modules || []).map((module) => module?.id);
    const unconventionalModuleIds = moduleIds.filter((id) => !id.startsWith("module_"));

    if (unconventionalModuleIds.length > 0) {
        unconventionalModuleIds.forEach((id) => {
            issues.push({
                type: "ERROR",
                text: `Module ID '${id}' is invalid. It should start with 'module_'.`,
                code: errors.MODULE_ID_CONVENTION_ERROR,
            });
        });
    }

    const conditions = workflow?.conditions || {};
    const conditionIds = Object.keys(conditions);
    const unconventionalConditionIds = conditionIds.filter((id) => !id.startsWith("condition_"));

    if (unconventionalConditionIds.length > 0) {
        unconventionalConditionIds.forEach((id) => {
            issues.push({
                type: "ERROR",
                text: `Condition ID '${id}' is invalid. It should start with 'condition_'.`,
                code: errors.CONDITION_ID_CONVENTION_ERROR,
            });
        });
    }
    return { issues };
};

module.exports = {
    validateNamingConventions,
};
