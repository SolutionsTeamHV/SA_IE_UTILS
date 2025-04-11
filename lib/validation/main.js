const { validateWorkflow } = require("./workflowValidator");
const axios = require("axios");

export const validateWorkflowFromUrl = async (url) => {
  try {
    const response = await axios.get(url);
    const workflow = response.data;
    console.log(workflow);
    const validatorResults = validateWorkflow(workflow, []);

    if (validatorResults?.isValid === false) {
      const validatorCodes = Object.keys(validatorResults?.data || {});
      const issueList = [];
      validatorCodes.forEach((vCode) => {
        const issues = validatorResults.data[vCode];
        if (issues.length) issueList.push(...issues);
      });
      return { success: false, issues: issueList, workflow: workflow };
    }

    return { success: true, issues: [], workflow: workflow };
  } catch (error) {
    console.error("Error fetching or validating the workflow: ", error);
    return {
      success: false,
      issues: ["Error fetching or validating the workflow"],
    };
  }
};
