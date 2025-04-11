const { errors } = require("../constants/errorCodes");

const uniqueIdsCheck = (workflow) => {
  const moduleIds = (workflow?.modules || []).map((module) => module?.id);
  const conditionIds = Object.keys(workflow.conditions || {});
  const allIds = [...moduleIds, ...conditionIds];
  const duplicates = allIds.filter(
    (item, index) => allIds.indexOf(item) !== index
  );
  const duplicateIds = [...new Set(duplicates)];
  const issues = duplicateIds.map((id) => ({
    type: "ERROR",
    text: `Duplicate module/condition id found: ${id}`,
    code: errors.DUPLICATE_ID_FOUND,
  }));
  return {
    issues,
  };
};

module.exports = {
  uniqueIdsCheck,
};
