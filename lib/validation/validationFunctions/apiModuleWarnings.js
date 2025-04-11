const { warnings } = require("../constants/warningCodes");

const apiModuleCheck = (workflow) => {
    const { modules } = workflow;
    const issues = [];

    modules.forEach((module) => {
        const type = module?.type;
        
        if (type === "api") {
            const { id, properties } = module;
            const { requestParameters, requestBody } = properties;

            if (Array.isArray(requestParameters)) {
                if (requestParameters.length === 0) {
                    issues.push({
                        type: "WARNING",
                        text: `Request parameters in module id: ${id} are empty.`,
                        code: warnings.EMPTY_REQUEST_PARAMETER_OR_BODY,
                    });
                } else {
                    requestParameters.forEach((param) => {
                        if (!param.value || (typeof param.value === 'string' && param.value.trim() === "")) {
                            issues.push({
                                type: "WARNING",
                                text: `Request parameter '${param.name}' in module id: ${id} has an empty value.`,
                                code: warnings.EMPTY_REQUEST_PARAMETER_OR_BODY,
                            });
                        }
                    });
                }
            } 

            if (requestBody && typeof requestBody === "object") {
                if (Object.keys(requestBody).length === 0) {
                    issues.push({
                        type: "WARNING",
                        text: `Request body in module id: ${id} is empty.`,
                        code: warnings.EMPTY_REQUEST_PARAMETER_OR_BODY,
                    });
                } else {
                    Object.keys(requestBody).forEach((key) => {
                        const value = requestBody[key];
                        if (!value ||
                            (typeof value === 'string' && value.trim() === "") ||
                            (Array.isArray(value) && value.length === 0)
                        ) {
                            issues.push({
                                type: "WARNING",
                                text: `Request body key '${key}' in module id: ${id} has an empty value.`,
                                code: warnings.EMPTY_REQUEST_PARAMETER_OR_BODY,
                            });
                        }
                    });
                }
            }
            
        }
    });
    return {
        issues,
    };
};

module.exports = {
    apiModuleCheck,
};
