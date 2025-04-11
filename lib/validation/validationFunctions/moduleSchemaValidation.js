const { moduleSchema } = require("../schemas/moduleSchema.js");
const { errors } = require("../constants/errorCodes");
const { warnings } = require("../constants/warningCodes");
const { accessMetadata } = require("../helper/misc");

const moduleSchemaValidation = (workflow) => {
  const { modules } = workflow;
  const issues = [];
  modules.forEach((module) => {
    const type = module?.type;
    if (type == "videoStatement") {
      issues.push({
        type: "WARNING",
        text: `The module with ID ${module.id} is of type 'videoStatement', which is deprecated. Consider updating to a supported module type.`,
        code: warnings.DEPRECATED_MODULE,
      });
    }
    // Hyperflo provides an API to execute workflows in the backend.
    // We don't want this API to be called within an existing workflow.
    if (module?.properties?.url?.includes("ind-hyperflo.hyperverge.co")) {
      issues.push({
        type: "ERROR",
        text: `The URL of the module "${module.id}" cannot contain "ind-hyperflo.hyperverge.co".`,
        code: errors.INVALID_URL,
      });
    }
    // Check if the domain contains 'hyperverge.co'
    if (module?.properties?.url && type !== "webview") {
      let domain;
      try {
        domain = new URL(module.properties.url).host;
      } catch {
        domain = null;
      }

      if (domain && !domain.includes("hyperverge.co")) {
        issues.push({
          type: "ERROR",
          text: `The URL in the module "${module.id}" must contain 'hyperverge.co' in the domain.`,
          code: errors.INVALID_URL,
        });
      }
    }

    const schema = moduleSchema[type];
    if (schema) {
      const { error } = schema.validate(module, { abortEarly: false });
      const issueList = (error?.details || []).map((detail) => {
        const path = detail.path;
        const schemaDetail = accessMetadata(schema.describe(), path);
        const isWarning = schemaDetail?.metas?.some(
          (meta) => typeof meta.warnings === "boolean" && meta.warnings
        );
        return {
          type: isWarning ? "WARNING" : "ERROR",
          text: `Module Schema ${
            isWarning ? "warning" : "error"
          } in module of type: ${type} module id: ${module?.id}  message: ${
            detail?.message
          }`,
          code: errors.INCORRECT_MODULE,
        };
      });
      issues.push(...issueList);
    } else {
      issues.push({
        type: "ERROR",
        text: `Schema not found for module type: ${type} id: ${module.id}`,
        code: errors.MODULE_SCHEMA_NOT_FOUND,
      });
    }
  });
  return { issues };
};

module.exports = {
  moduleSchemaValidation,
};
