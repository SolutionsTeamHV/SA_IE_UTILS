const predefinedVariableCheck = require("../helper/predefinedVariableCheck");
const { extractVariableSites } = require("../helper/misc");

const validateVariableUsage = (workflow) => {
  const issues = [];
  const injectionSites = extractVariableSites(workflow);
  if (injectionSites.length === 0) {
    return { issues };
  }

  injectionSites.forEach(({ match: injectionSite, parentKeys }) => {
    const { issues: predefinedCheckIssue } = predefinedVariableCheck(
      injectionSite,
      workflow,
    );
    issues.push(...predefinedCheckIssue);
  });

  return { issues };
};

module.exports = {
  validateVariableUsage,
};