const { warnings } = require("../constants/warningCodes");

const substringIdsCheck = (workflow) => {
  const moduleIds = (workflow?.modules || []).map((module) => module?.id);
  const substringIds = moduleIds.filter((str, index, self) =>
    self.some(
      (otherStr, otherIndex) =>
        otherIndex !== index && otherStr.includes(str) && otherStr !== str
    )
  );
  const uniqueIds = [...new Set(substringIds)];
  const issues = uniqueIds.map((id) => ({
    type: "WARNING",
    text: `Substring found in module id for: ${id}`,
    code: warnings.SUBSTRING_FOUND_IN_ID,
  }));
  return {
    issues,
  };
};

module.exports = {
  substringIdsCheck,
};
