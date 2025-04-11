const { warnings } = require("../constants/warningCodes");

const basicSchemaValidationWarnings = (workflow) => {

  const { sdkResponse } = workflow;
  const issues = [];
  Object.keys(sdkResponse || {}).forEach((key) => {
    const value = sdkResponse[key];
    if (value === '') issues.push({
      type: "WARNING",
      text: `Empty value used in sdkResponse key: ${key}`,
      code: warnings.EMPTY_SDK_RESPONSE,
    });
  });
  return { issues };
};

module.exports = {
  basicSchemaValidationWarnings,
};
