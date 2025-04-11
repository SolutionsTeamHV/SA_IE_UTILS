const { errors } = require("../constants/errorCodes");

const vsv2UrlSourceCheck = (workflow) => {
  const vsv2Modules = (workflow?.modules || []).filter((module) => module?.type === "videoStatementV2")
  const issues = [];
  vsv2Modules.forEach((module) => {
    const { liveness = null, faceMatch = null } = module.properties;
    if (liveness) {
      const livenessUrl = liveness.url || '';

      if (!livenessUrl.endsWith(".baseUrl}/v1/checkLiveness")) {
        issues.push({
          type: "ERROR",
          text: `liveness url should end with '.baseUrl}/v1/checkLiveness', found ${livenessUrl}`,
          code: errors.LIVENESS_URL_NOT_VALID_IN_VSV2,
        })
      }

      if (liveness?.headers?.source !== "videoStatement") {
        issues.push({
          type: "ERROR",
          text: `liveness.headers.source must be videoStatement`,
          code: errors.INVALID_SOURCE_IN_VSV2,
        })
      }
    }
    if (faceMatch) {
      const faceMatchUrl = faceMatch.url || '';

      if (!faceMatchUrl.endsWith(".baseUrl}/v1/matchFace")) {
        issues.push({
          type: "ERROR",
          text: `faceMatch url should end with '.baseUrl/v1/checkLiveness', found ${faceMatchUrl}`,
          code: errors.FACEMATCH_URL_NOT_VALID_IN_VSV2,
        })
      }

      if (faceMatch?.headers?.source !== "videoStatement") {
        issues.push({
          type: "ERROR",
          text: `faceMatch.headers.source must be videoStatement`,
          code: errors.INVALID_SOURCE_IN_VSV2,
        })
      }
    }
  })
  return {
    issues,
  };
};

module.exports = {
  vsv2UrlSourceCheck,
};
