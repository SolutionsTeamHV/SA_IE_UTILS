const Joi = require("joi");
const { endStates } = require("../constants/endStates");

const workflowKeys = {
  properties: Joi.object({
    name: Joi.string().meta({ warnings: true }),
    builtOnBuilder: Joi.boolean(),
    builder: Joi.object(),
    builderProperties: Joi.object().pattern(
      Joi.string().min(1),
      Joi.object().pattern(Joi.string(), Joi.any())
    ),
    workflowVersion: Joi.string().pattern(
      /^(\d+)\.(\d+)\.(\d+)(?:-([0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*))?(?:\+([0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*))?$/
    ),
    description: Joi.string().meta({ warnings: true }),
    sdkVersions: Joi.object({
      mobile: Joi.object(),
      web: Joi.object(),
    }),
    enableBipaCompliance: Joi.boolean(),
    enableServerSideResume: Joi.boolean(),
    serverSideResume: Joi.object({
      enable: Joi.boolean(),
      exitOnEndStates: Joi.array().items(Joi.string().valid(...endStates)),
      auth: Joi.object({
        startModuleId: Joi.string().required(),
        authState: Joi.object()
          .pattern(Joi.string(), Joi.string())
          .min(1)
          .required(),
        mainToken: Joi.string().required(),
        authToken: Joi.string().required(),
        triggerModuleId: Joi.string().required(),
      }),
      validateSignature: Joi.boolean(),
      version: Joi.when("auth", {
        is: Joi.exist(),
        then: Joi.number().integer().valid(2).required(),
        otherwise: Joi.number().integer().valid(1, 2),
      }),
    }),
    uiConfigSource: Joi.string().valid("default", "custom"),
    textConfigSource: Joi.object().pattern(
      /^[a-zA-Z]{2}$/, // Language code must be 2 letters
      Joi.string().valid("default", "custom")
    ),
    inputsRequired: Joi.object().pattern(
      Joi.string(),
      Joi.string().valid("string", "boolean", "image", "number") // Values can be string, boolean, image, or number
    ),
    enableResumeWorkflow: Joi.boolean(),
    resumeWorkflowDuration: Joi.number().integer(),
    returnPartialSDKResponse: Joi.boolean()
      .forbidden()
      .meta({ warnings: true }),
    secure: Joi.boolean(),
    useWebForm: Joi.boolean(),
    redirectToMobile: Joi.string()
      .valid("optional", "yes", "no")
      .forbidden()
      .meta({ warnings: true }),
    enforceCameraCheck: Joi.string()
      .valid("yes", "no")
      .forbidden()
      .meta({ warnings: true }),
    web: Joi.object({
      enableSessionRecording: Joi.boolean(),
      redirectToMobile: Joi.string().valid("optional", "yes", "no"), // Optional string with values 'optional', 'yes', 'no'
      qrRedirectBaseURL: Joi.string().uri(),
      enforceCameraCheck: Joi.string().valid("yes", "no"), // Optional string with values 'yes', 'no'
      showPermissionsScreen: Joi.boolean(), // Optional boolean
      returnPartialSDKResponse: Joi.boolean(),
    }),
    mobile: Joi.object({
      exitIfRooted: Joi.boolean(),
    }),
  }).required(),
  modules: Joi.array().items(Joi.object()).required(),
  conditionalVariables: Joi.object().pattern(
    Joi.string(),
    Joi.object({
      name: Joi.string().allow(""),
      rule: Joi.string().required(),
      parent: Joi.string(),
      if_true: Joi.alternatives()
        .try(Joi.string(), Joi.number())
        .allow("")
        .required(),
      if_false: Joi.alternatives()
        .try(Joi.string(), Joi.number())
        .allow("")
        .required(),
    })
  ),
  conditions: Joi.object()
    .pattern(
      Joi.string(),
      Joi.object({
        name: Joi.string(),
        next_node_type: Joi.alternatives().try(
          Joi.object(),
          Joi.string().empty("")
        ),
        rule: Joi.string().required(),
        if_true: Joi.string().required(),
        if_false: Joi.string().required(),
        contributingModuleIds: Joi.array().items(Joi.string()).min(1),
        contributingSuperModuleIds: Joi.array().items(Joi.string()).min(1),
        if_true_reason: Joi.when("ifTrueConfigs", {
          is: Joi.exist(),
          then: Joi.forbidden(),
          otherwise: Joi.string(),
        }),
        if_false_reason: Joi.when("ifFalseConfigs", {
          is: Joi.exist(),
          then: Joi.forbidden(),
          otherwise: Joi.string(),
        }),
        if_true_ignore_results_onwards: Joi.string(),
        if_true_ignore_results_onwards: Joi.string(),
        if_false_ignore_results_onwards: Joi.string(),
        ifFalseConfigs: Joi.object({
          reason: Joi.string(),
          resumeFrom: Joi.string(),
        }),
        ifFalseConfig: Joi.forbidden().meta({ warnings: true }),
        ifTrueConfigs: Joi.object({
          reason: Joi.string(),
          resumeFrom: Joi.string(),
        }),
        ifTrueConfig: Joi.forbidden().meta({ warnings: true }),
        superModuleType: Joi.string(),
      })
    )
    .required(),
  sdkResponse: Joi.object().pattern(
    Joi.string(), // keys are of type string
    Joi.alternatives().try(
      Joi.string().allow(""),
      Joi.boolean(),
      Joi.number().integer()
    )
  ),
  endScreenConfigs: Joi.object(),
  dashboardData: Joi.object().pattern(Joi.string(), Joi.string()),
};

const workflowSchema = Joi.object({
  name: Joi.string().meta({ warnings: true }),
  description: Joi.string().meta({ warnings: true }),
  updatedAt: Joi.string(),
  createdAt: Joi.string(),
  properties: workflowKeys.properties,
  modules: workflowKeys.modules,
  conditions: workflowKeys.conditions,
  conditionalVariables: workflowKeys.conditionalVariables,
  sdkResponse: workflowKeys.sdkResponse,
  dashboardData: workflowKeys.dashboardData,
  endScreenConfigs: workflowKeys.endScreenConfigs,
});

module.exports = {
  workflowSchema,
};
