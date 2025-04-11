const { traverseWorkflow } = require("../helper/traverseWorkflow");
const { errors } = require("../constants/errorCodes");
const { warnings } = require("../constants/warningCodes");
const { endStates } = require("../constants/endStates");

const nextStepValidation = (workflow) => {
  const { modules, conditions } = workflow;
  const {
    visitedNodes,
    undeclaredNodes,
    invalidNextSteps,
    isEndStateReachable,
  } = traverseWorkflow(workflow);
  const issues = [];
  if (!isEndStateReachable)
    issues.push({
      type: "ERROR",
      text: "No end state reachable",
      code: errors.NO_END_STATE_REACHABLE,
    });
  invalidNextSteps.forEach(({ parentId, path, nextStep }) => {
    if (endStates.includes(nextStep)) {
      issues.push({
        type: "WARNING",
        text: `Invalid next step: ${nextStep} present in node: ${parentId} at path: ${path} should be supported on SDK version 8.10.0 or higher`,
        code: warnings.INVALID_NEXT_STEP,
      });
    } else {
      issues.push({
        type: "ERROR",
        text: `Invalid next step: ${nextStep} present in node: ${parentId} at path: ${path}`,
        code: errors.INVALID_NEXT_STEP,
      }); 
    }
  });
  undeclaredNodes.forEach((nodeId) => {
    issues.push({
      type: "ERROR",
      text: `Undeclared node found: ${nodeId}`,
      code: errors.UNDECLARED_NODE,
    });
  });
  const allNodes = [...modules.map(({ id }) => id), ...Object.keys(conditions)];
  const unvisitedNodes = allNodes.filter(
    (nodeId) => !visitedNodes.includes(nodeId)
  );
  unvisitedNodes.forEach((nodeId) => {
    issues.push({
      type: "WARNING",
      text: `Unvisited node found: ${nodeId}`,
      code: warnings.UNVISITED_NODE,
    });
  });
  return { issues };
};

module.exports = {
  nextStepValidation,
};
