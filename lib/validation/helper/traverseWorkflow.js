const { internalEndStates, endStates } = require("../constants/endStates");
const { arrayToJson, getNextStepForModule } = require("./misc");

const traverseWorkflow = (workflow) => {
    let isEndStateReachable = false;
    const visitedNodes = [];
    const undeclaredNodes = [];
    const invalidNextSteps = [];
    const { modules, conditions } = workflow;
    const moduleJson = arrayToJson(modules);

    // TODO: Add validation to check length of modules > 1

    const startId = modules[0].id;
    const queue = [{ id: startId, parentId: null }];

    const completedNodeIds = [];
    while (queue.length > 0) {
        const { id: nodeId } = queue.shift();
        if (completedNodeIds.includes(nodeId)) continue;
        completedNodeIds.push(nodeId);

        visitedNodes.push(nodeId);

        // If module
        if (moduleJson[nodeId]) {
            const nextSteps = getNextStepForModule(moduleJson[nodeId]);
            nextSteps.forEach(({ nextStep, path }) => {
                if (endStates.includes(nextStep)) {
                    isEndStateReachable = true;
                    invalidNextSteps.push({ parentId: nodeId, path, nextStep })
                } else if (!internalEndStates.includes(nextStep)) {
                    queue.push({ id: nextStep, parentId: nodeId });
                }
            });

        } else if (conditions[nodeId]) {
            const { if_true, if_false } = conditions[nodeId];
            if (endStates.includes(if_true)) isEndStateReachable = true;
            else if (internalEndStates.includes(if_true)) invalidNextSteps.push({ parentId: nodeId, path: 'if_true', if_true });
            else queue.push({ id: if_true, parentId: nodeId });

            if (endStates.includes(if_false)) isEndStateReachable = true;
            else if (internalEndStates.includes(if_false)) invalidNextSteps.push({ parentId: nodeId, path: 'if_false', if_false });
            else queue.push({ id: if_false, parentId: nodeId });
        } else {
            undeclaredNodes.push(nodeId);
        }
    };
    return {
        visitedNodes,
        undeclaredNodes,
        invalidNextSteps,
        isEndStateReachable,
    };
};

module.exports = {
    traverseWorkflow,
};
