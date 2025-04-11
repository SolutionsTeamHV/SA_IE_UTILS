const { warnings } = require("../constants/warningCodes");
const { getAllFormComponents } = require("../helper/misc");

const isEmptyObject = (obj) =>
  Object.values(obj).every(
    (value) =>
      (Array.isArray(value) && value.length === 0) ||
      (typeof value === "object" && Object.keys(value).length === 0)
  );

const formComponentValidationCheck = (workflow) => {
  const { modules } = workflow;
  const issues = [];

  modules.forEach((module) => {
    const type = module?.type;
    if (type === "dynamicForm") {
      const components = getAllFormComponents(module);

      components.forEach((component) => {
        const { type: componentType, subType, id, value, onValidated, onChange, numberOfColumns } = component;

        if (
          componentType === "text" ||
          componentType === "date" ||
          componentType === "dropdown" ||
          componentType === "checkbox" ||
          componentType === "list"
        ) {
          const validationType = component?.validation;

          if (value === "") {
            issues.push({
              type: "WARNING",
              text: `Value is empty for component type: ${componentType} with id: ${id}`,
              code: warnings.EMPTY_FIELD_VALUE,
            });
          }

          if (value === null) {
            issues.push({
              type: "WARNING",
              text: `Value is null for component type: ${componentType} with id: ${id}`,
              code: warnings.EMPTY_FIELD_VALUE,
            });
          }

          if (!validationType) {
            issues.push({
              type: "WARNING",
              text: `No validation found for component type: ${componentType} with id: ${id}`,
              code: warnings.MISSING_VALIDATION_FOR_COMPONENT,
            });
          }
          else if (!validationType.find(validation => validation.type === 'regex')) {
            issues.push({
              type: "WARNING",
              text: `No regex validation found for component type: ${componentType} with id: ${id}`,
              code: warnings.REGEX_VALIDATION_NOT_FOUND,
            });
          }
        }

        if (componentType === "label" && onValidated) {
          issues.push({
            type: "WARNING",
            text: `onValidated should not be present in label component with id: ${id}`,
            code: warnings.INVALID_ONVALIDATED_FOR_LABEL,
          });
        }

        if (componentType !== 'label' && onValidated && isEmptyObject(onValidated)) {
          issues.push({
            type: "WARNING",
            text: `onValidated is empty for component type: ${componentType} with id: ${id}`,
            code: warnings.EMPTY_ONVALIDATED,
          });
        }

        if (componentType === "list" && onChange) {
          issues.push({
            type: "WARNING",
            text: `ComponentId: ${id} onChange should not be present in list`,
            code: warnings.INVALID_ONCHANGE_FOR_LIST,
          });
        }

        if (componentType === 'list' && subType !== 'grid' && numberOfColumns) {  
          issues.push({
            type: "WARNING",
            text: `ComponentId: ${id} numberOfColumns is allowed only for grid subtype in list `,
            code: warnings.INVALID_NUMBEROFCOLUMNS,
          });
        }

      });
    }
  });
  return { issues };
};

module.exports = {
  formComponentValidationCheck,
};
