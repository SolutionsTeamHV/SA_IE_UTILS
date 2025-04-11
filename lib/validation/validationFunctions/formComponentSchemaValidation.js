const { componentSchema } = require("../schemas/componentSchema");
const { errors } = require("../constants/errorCodes");
const { getAllFormComponents, accessMetadata } = require("../helper/misc");

const formComponentSchemaValidation = (workflow) => {
  const { modules } = workflow;
  const issues = [];
  modules.forEach((module) => {
    const type = module?.type;
    if (type === "dynamicForm") {
      const components = getAllFormComponents(module);
      components.forEach((component) => {
        const { type: componentType, id } = component;
        const schema = componentSchema[componentType];
        if (schema) {
          const { error } = schema.validate(component, { abortEarly: false });
          const issueList = (error?.details || []).map((detail) => {
            const path = detail.path;
            const schemaDetail = accessMetadata(schema.describe(), path);
            const isWarning = schemaDetail?.metas?.some((meta) => typeof meta.warnings === 'boolean' && meta.warnings);
            return {
              type: isWarning ? "WARNING" : "ERROR",
              text: `Component Schema ${isWarning ? "warning" : "error"} in component type: ${componentType} component id: ${id} in module of type: ${type} module id: ${module?.id}  message: ${detail?.message}`,
              code: errors.INCORRECT_FORM_COMPONENT,
            }
          });
          issues.push(...issueList);
        } else {
          issues.push({
            type: "ERROR",
            text: `Schema not found for component type: ${componentType} id: ${module.id}`,
            code: errors.FORM_COMPONENT_SCHEMA_NOT_FOUND,
          });
        }
      });
    }
  });
  return { issues };
};

module.exports = {
  formComponentSchemaValidation,
};
