const fs = require('fs');
const { get } = require("lodash");
const axios = require('axios');
const path = require('path');
const { conditionalOperators, predefinedVariables, formComponentsExposedVariables } = require('../constants/misc');

const listFilesRecursively = (dirPath, fileList = []) => {
  try {
      const files = fs.readdirSync(dirPath, { withFileTypes: true });
      files.forEach((file) => {
          const filePath = path.join(dirPath, file.name);
          if (file.isDirectory()) {
              listFilesRecursively(filePath, fileList);
          } else {
              fileList.push(filePath);
          }
      });
  } catch (err) {
      console.log('ERROR listing directory : ', dirPath, err);
  }
  return fileList;
}

const listAllFilesFromBasePaths = (basePaths) => {
  return basePaths.flatMap((basePath) => listFilesRecursively(basePath));
};

const arrayToJson = (arr) => {
  const obj = {};
  arr.forEach((element) => {
    obj[element.id] = element;
  });
  return obj;
};

const getNextStepForFormV2Component = (
  componentConfig,
  componentId,
  includeDynamicHandlers = false
) => {
  const nextSteps = [];
  const eventsConfig = componentConfig?.events || {};
  const events = Object.keys(eventsConfig);
  events.forEach((nextStepEvent) => {
    const currentNextStep = eventsConfig[nextStepEvent]?.nextStep;
    if (currentNextStep) {
      nextSteps.push({
        nextStep: currentNextStep,
        path: `${componentId}.events.${nextStepEvent}.nextStep`,
        key: nextStepEvent,
      });
    }
  });
  if (
    includeDynamicHandlers &&
    Array.isArray(componentConfig?.dynamicHandlers?.handlers)
  ) {
    const handlers = componentConfig?.dynamicHandlers?.handlers || [];
    handlers.forEach((handler, index) => {
      const currentNextStep = handler?.nextStep;
      if (currentNextStep) {
        nextSteps.push({
          nextStep: currentNextStep,
          path: `${componentId}.dynamicHandlers.handlers[${index}].nextStep`,
          key: `handler${index}`,
        });
      }
    });
  }
  return nextSteps;
};

const getNextStepForComponent = (
  component,
  nextStepEvents = [],
  includeDynamicHandlers = false
) => {
  const nextSteps = [];
  if (
    includeDynamicHandlers &&
    Array.isArray(component?.dynamicHandlers?.handlers)
  ) {
    component?.dynamicHandlers?.handlers.forEach((handler, index) => {
      if (handler?.nextStep) {
        nextSteps.push({
          nextStepId: handler.nextStep,
          componentId: component?.id,
          nextStepEvent: `dynamicHandlers.handlers[${index}]`,
        });
      }
    });
  }

  nextStepEvents.forEach((nextStepEvent) => {
    if (component?.[nextStepEvent]?.nextStep) {
      nextSteps.push({
        nextStepId: component?.[nextStepEvent]?.nextStep,
        componentId: component?.id,
        nextStepEvent,
      });
    }
  });
  return nextSteps;
};

const getAllNextSteps = (
  components,
  nextStepEvents = [],
  includeDynamicHandlers = false
) => {
  const nextSteps = [];
  (components || []).forEach((component) => {
    const nextStepsOfCurrentComponent = getNextStepForComponent(
      component,
      nextStepEvents,
      includeDynamicHandlers
    );
    nextSteps.push(...nextStepsOfCurrentComponent);
    if (component?.subComponents?.length) {
      const subNextSteps = getAllNextSteps(
        component.subComponents || [],
        nextStepEvents,
        includeDynamicHandlers
      );
      nextSteps.push(...subNextSteps);
    }
  });
  return nextSteps;
};

const getFormComponents = (module, rootPath = "components") =>
  get(module?.properties?.sections?.[0], rootPath, []);

const formComponentsBasePath = {
  main: 'components', // main component list
  footer: 'footer.components', // footer component list
};

const getAllFormComponentsObj = (module) => {
  const basePaths = Object.keys(formComponentsBasePath);
  const componentsObj = {};
  basePaths.forEach((basePath) => {
    componentsObj[basePath] = getFormComponents(
      module,
      formComponentsBasePath[basePath]
    );
  });
  return componentsObj;
};

const getAllFormComponents = (module) => {
  const allComponentsObj = getAllFormComponentsObj(module);
  const allComponents = Object.values(allComponentsObj).flat();
  return allComponents;
};

const getAllSubComponents = (components) => {
  const allComponents = [];

  function collectAllComponents(component) {
    allComponents.push(component);

    if (Array.isArray(component.subComponents)) {
      component.subComponents.forEach(collectAllComponents);
    }
  }

  components.forEach(collectAllComponents);
  return allComponents;
};

const eventHandlers = ['onClick', 'onValidated', 'onComplete', 'onChange'];

const getNextStepForModule = (module) => {
  if (module.type === "dynamicForm") {
    const allComponents = getAllFormComponents(module);
    const includeNextStepsFromDynamicHandlers = true;
    const rawNextSteps = getAllNextSteps(
      allComponents,
      eventHandlers,
      includeNextStepsFromDynamicHandlers
    );
    const nextSteps = rawNextSteps.map(
      ({ nextStepId, componentId, nextStepEvent }) => ({
        nextStep: nextStepId,
        path: `${componentId}.${nextStepEvent}.nextStep`,
        key: nextStepEvent,
      })
    );
    return nextSteps;
  }
  if (module.type === "dynamicFormV2") {
    const { componentConfigs = {} } = module?.properties || {};
    const allComponentIds = Object.keys(componentConfigs);
    const allNextSteps = [];
    allComponentIds.forEach((componentId) => {
      const componentConfig = componentConfigs[componentId];
      const nextSteps = getNextStepForFormV2Component(
        componentConfig,
        componentId,
        true
      );
      allNextSteps.push(...nextSteps);
    });
    return allNextSteps;
  }

  return [{ nextStep: module.nextStep, path: "default" }];
};

const getOperand = (node) => {
  if(node.type === 'BinaryExpression') {
    return node.name;
  } else if (node.type === 'Literal') {
    return node.raw;
  } else if (node.type === 'Identifier') {
    return node.name;
  } else if (node.type === 'MemberExpression') {
    return `${getOperand(node.object)}.${getOperand(node.property)}`;
  }
  return null;
};

const convertToJSON = (node) => {
  if (node.type === 'BinaryExpression') {
      if (node.operator === '&&') {
          return {
              all: [convertToJSON(node.left), convertToJSON(node.right)],
          };
      } else if (node.operator === '||') {
          return {
              any: [convertToJSON(node.left), convertToJSON(node.right)],
          };
      } else if (conditionalOperators.includes(node.operator) || node.operator === '===' || node.operator === '!==') {
          return {
              operand1: getOperand(node.left),
              operator: node.operator,
              operand2: getOperand(node.right),
          };
      }
  } else if (node.type === 'ArrayExpression') {
      return {type : "ArrayExpression"};
  } else if (node.type === 'SequenceExpression') {
      return {type : "SequenceExpression"};
  }
  return {};
};

const getValidationRules = (workflow) => {
  const validationRulesMap = [];

  workflow.modules?.forEach((module) => {
      module?.properties?.sections?.forEach((section) => {
          section?.components?.forEach((component) => {
              const ruleValidations =
                  component?.validation?.filter((validationRule) => validationRule.type === 'rule') || [];

              if (ruleValidations.length > 0) {
                  ruleValidations.forEach((rule) => {
                      validationRulesMap.push([
                          component.id,
                          { rule: rule.value }
                      ]);
                  });
              }
          });
      });
  });

  return validationRulesMap;
};

const getHandlerRules = (workflow) => {
  const handlerRulesMap = [];

  workflow.modules?.forEach((module) => {
      module?.properties?.sections?.forEach((section) => {
          section?.components?.forEach((component) => {
              const dynamicHandlers = component?.dynamicHandlers?.handlers || [];
              dynamicHandlers.forEach((handler) => {
                  if (handler.rule) {
                      handlerRulesMap.push([
                          component.id,
                          { rule: handler.rule }
                      ]);
                  }
              });
          });
      });
  });

  return handlerRulesMap;
};

const parenthesesCheck = (expression, conditionId) => {
  const issues = [];
  if (expression.includes('{') || expression.includes('}')) {
      issues.push({
          type: "ERROR",
          text: `Expression contains unallowed characters: {} in ${conditionId}`,
          code: "BRACKET_NOT_ALLOWED"
      });
      return { isValid: false, issues };
  }

  const stack = [];

  for (let char of expression) {
      if (char === '(') {
          stack.push(char);
      } else if (char === ')') {
          if (stack.length === 0) {
              issues.push({
                  type: "ERROR",
                  text: `Unbalanced parentheses: Too many closing parentheses in ${conditionId}`,
                  code: "PARENTHESES_NOT_BALANCED"
              });
              return { isValid: false, issues };
          }
          stack.pop();
      }
  }

  if (stack.length !== 0) {
      issues.push({
          type: "ERROR",
          text: `Unbalanced parentheses: Missing closing parentheses in ${conditionId}`,
          code: "PARENTHESES_NOT_BALANCED"
      });
      return { isValid: false, issues };
  }

  return { isValid: true, issues };
};

const isNumber = (operand) => {
  return !isNaN(operand) && isFinite(operand);
};

const isEnclosedInSingleQuotes = (input) => {
  return typeof input === 'string' && input.startsWith("'") && input.endsWith("'");
};

const getChangedFiles = async () => {
  try {
    const GITLAB_TOKEN = process?.env?.SYNC_PROJECT_TOKEN;
    const projectId = process?.env?.CI_PROJECT_ID;
    const commitSHA = process?.env?.CI_COMMIT_SHA;
    const PAGE_SIZE = 30;

    const commitInfoResponse = await axios({
      method: "GET",
      url: `https://gitlab.com/api/v4/projects/${projectId}/repository/commits/${commitSHA}/merge_requests`,
      headers: {
        "PRIVATE-TOKEN": GITLAB_TOKEN,
      },
    });
    const mergeRequestIID = commitInfoResponse?.data[0]?.iid;

    let diffs = [];
    let page = 1;
    let diffsEnded = false;

    while (!diffsEnded) {
      const url = `https://gitlab.com/api/v4/projects/${projectId}/merge_requests/${mergeRequestIID}/diffs?page=${page}&per_page=${PAGE_SIZE}`;
      const mergeRequestDiffsResponse = await axios({
        method: "GET",
        url,
        headers: {
          "PRIVATE-TOKEN": GITLAB_TOKEN,
        },
      });
      const currentPageDiffs = mergeRequestDiffsResponse?.data;
      if (currentPageDiffs.length < PAGE_SIZE) diffsEnded = true;

      page += 1;
      diffs.push(...currentPageDiffs);
    }
    basePath = '..';
    const formattedDiffs = diffs.map((diff) => ({ path: diff.new_path, deleted: diff.deleted_file }));
    const changedFiles = getChangedFilePaths(formattedDiffs, basePath);
    return changedFiles;

  } catch (error) {
    if (error.response) {
      console.error("Error fetching changed files from GitLab:", error.response.status, error.response.data);
      return [];
    }
    console.error("Error fetching changed files from GitLab:", error.message);
    return [];
  }
};

const getChangedFilePaths = (changedFiles, basePath) => {
  return changedFiles
    .filter(file => file.path.endsWith(".json"))
    .map(file => {
      return `${basePath}/${file.path}`;
    });
};

const getVariablesFromComponentConfig = (componentConfig) => {
  const { events = {} } = componentConfig;
  const eventList = Object.keys(events);
  const refreshObjects = eventList.map((event) => events[event]?.refresh || null)
    .filter((obj) => obj !== null);
  const exposedValues = refreshObjects.map((refreshObj) => Object.values(refreshObj));
  return [...new Set(exposedValues.flat(2))];
};

const findFormModuleV2Outputs = (formModule) => {
  const { componentConfigs = {} } = formModule?.properties || {};
  
  return Object.entries(componentConfigs).flatMap(([componentId, componentConfig]) => 
    getVariablesFromComponentConfig(componentConfig).map(output => ({
      name: `${componentId} > ${output}`,
      id: `${componentId}.${output}`,
    }))
  );
};

const getVariablesFromComponents = (component) => {
  const { type } = component;
  const typeSpecificVariables = formComponentsExposedVariables[type] || [];

  return typeSpecificVariables;
};

const findFormModuleOutputs = (formModule) => {
  const allComponents = getAllFormComponents(formModule);
  const flattenedComponents = getAllSubComponents(allComponents);

  const extractOutputs = (components) =>
    components.flatMap((component) => //using flatmap here because the component can have multiple outputs that might be nested.
      getVariablesFromComponents(component).map((output) => ({
        name: `${component.id} > ${output}`,
        id: `${component.id}.${output}`,
        componentType: component.type,
      }))
    );

  return extractOutputs(flattenedComponents);
};


const getModuleVariables = (module = {}) => {
  const { variables = [], type } = module;

  if (type === 'dynamicFormV2') {
    const exposedVariables = findFormModuleV2Outputs(module);
    return [
      ...predefinedVariables.dynamicFormV2.map(item => ({ id: item })),
      ...exposedVariables.map(({ id }) => ({ id }))
    ];
  }

  if (type === 'dynamicForm') {
    const exposedVariables = findFormModuleOutputs(module);
    return [
      ...predefinedVariables.dynamicForm.map(item => ({ id: item })),
      ...exposedVariables.map(({ id, componentType }) => ({ id, componentType }))
    ];
  }

  if (!variables.length) {
    const predefined = predefinedVariables[type] || [];
    return predefined.map(item => ({ id: item }));
  }

  const variableNames = variables.map(variable => variable.name);
  const predefined = predefinedVariables[type] || [];

  return [
    ...variableNames.map(variable => ({ id: variable })),
    ...predefined.map(item => ({ id: item }))
  ];
};

const extractVariableSites = (workflow) => {
  const regex = /\b(module_[a-zA-Z0-9_]+(?:\.[a-zA-Z0-9_]+)*)|condition_[a-zA-Z0-9_]+|(?:inputs|outputs|modules|conditionalVariables)(?:\.[a-zA-Z0-9_]+)*\b/g;

  const injectionSites = new Map();

  const shouldIgnoreParentKey = (parentKey) => {
    const ignoredKeys = [
      'mappingId', 'id', 'builderProperties', 'builder',
      'superModuleMetaData', 'superModuleId', 'superModuleType', 'name'
    ];
    return ignoredKeys.includes(parentKey);
  };

  const findInjections = (data, parentKey = '') => {
    if (typeof data === 'string') {
      if (!shouldIgnoreParentKey(parentKey)) {
        const matches = data.match(regex);
        if (matches) {
          matches.forEach((match) => {
            if (!injectionSites.has(match)) {
              injectionSites.set(match, new Set());
            }
            injectionSites.get(match).add(parentKey);
          });
        }
      }
    } else if (Array.isArray(data)) {
      data.forEach((item) => findInjections(item, parentKey));
    } else if (data && typeof data === 'object') {
      Object.entries(data).forEach(([key, value]) => {
        findInjections(value, key);
      });
    }
  };

  ['sdkResponse', 'conditions', 'modules', 'conditionalVariables'].forEach((key) => {
    if (workflow[key]) findInjections(workflow[key], key);
  });

  return Array.from(injectionSites.entries()).map(([match, parents]) => ({
    match,
    parentKeys: Array.from(parents),
  }));
};

const accessMetadata = (schemaDescription, path) => {
  let current = schemaDescription;

  for (let i = 0; i < path.length; i++) {
    const key = path[i];

    if (!current) return null;

    if (current.keys?.[key]) {
      current = current.keys[key];
    } else if (current.patterns) {
      const matchingPattern = current.patterns.find(pattern => pattern.rule?.keys);
      if (matchingPattern) {
        current = matchingPattern.rule.keys[path[++i]];
      } else {
        return null;
      }
    } else {
      return null;
    }
  }
  return current || null;
};

 const getContributingModuleIds = (workflow) => {
  if (!workflow?.conditions) {
    return [];
  }

  const contributingModuleIds = [];

  Object.values(workflow.conditions).forEach((condition) => {
    if (condition?.contributingModuleIds) {
      contributingModuleIds.push(...condition.contributingModuleIds);
    }
  });

  return contributingModuleIds;
};



module.exports = {
  getContributingModuleIds,
  listFilesRecursively,
  listAllFilesFromBasePaths,
  getAllFormComponents,
  getAllSubComponents,
  getNextStepForModule,
  arrayToJson,
  convertToJSON,
  getOperand,
  getValidationRules,
  getHandlerRules,
  parenthesesCheck,
  isNumber,
  isEnclosedInSingleQuotes,
  getChangedFiles,
  getChangedFilePaths,
  getModuleVariables,
  extractVariableSites,
  accessMetadata,
};
