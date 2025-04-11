const Joi = require("joi");
const { countries } = require("../constants/countries");
const { validSubTypes } = require("../constants/misc");

const countryIds = countries.map(({ id }) => id);
const apiTypes = [
  "multipart_post",
  "multipart_put",
  "multipart_patch",
  "json_post",
  "json_put",
  "json_get",
  "json_patch",
  "plainText_post",
  "plainText_put",
  "plainText_patch",
  "plainText_get",
];

const apiSchema = Joi.object({
  url: Joi.string().required(),
  headers: Joi.object().pattern(Joi.string(), Joi.string().allow('')),
  parameters: Joi.array().items(Joi.object()),
  allowedStatusCodes: Joi.array().items(Joi.number()),
});

const checksSchema = Joi.object({
  enable: Joi.string().valid("yes", "no"),
  allowIfCheckFailed: Joi.string().valid("yes", "no"),
  rule: Joi.string(),
  maxOutOfFrameTime: Joi.number().positive(),
});

// TODO: subtype checking
const moduleSchema = {
  countries: Joi.object({
    type: Joi.string().valid("countries").required(),
    subType: Joi.string().valid(...validSubTypes).required(),
    id: Joi.string().required(),
    version: Joi.string(),
    next_node_type: Joi.alternatives().try(
      Joi.object(),
      Joi.string().empty('')
    ),
    name: Joi.string().allow(""),
    nextStep: Joi.string().required(),
    skipCPRPut: Joi.string(),
    properties: Joi.object({
      expiresAfter: Joi.string(),
      countriesSupported: Joi.array()
        .items(Joi.string().valid(...countryIds))
        .min(1)
        .required(),
    }),
  }),
  face: Joi.object({
    type: Joi.string().valid("face").required(),
    subType: Joi.string().valid(...validSubTypes).required(),
    version: Joi.string(),
    superModuleId: Joi.string(),
    id: Joi.string().required(),
    superModuleType: Joi.string(),
    mappingId: Joi.string(),
    next_node_type: Joi.alternatives().try(
      Joi.object(),
      Joi.string().empty('')
    ),
    name: Joi.string().allow(""),
    nextStep: Joi.string().required(),
    previousStep: Joi.string().allow(""),
    skipCPRPut: Joi.string(),
    variables: Joi.array().items(
      Joi.object({
        name: Joi.string().required(),
        path: Joi.string().required(),
        predefinedValues: Joi.array().items(
          Joi.object({
            label: Joi.string().required(),
            value: Joi.string().required(),
          })
        ),
      })
    ),
    properties: Joi.object({
      allowClose: Joi.boolean(),
      showEndState: Joi.string(),
      showInstruction: Joi.boolean(),
      disableLiveness: Joi.boolean(),
      zoomByDefault: Joi.boolean(),
      enableOverlay: Joi.boolean(),
      encryptPayload: Joi.boolean(),
      enableLookStraight: Joi.boolean(),
      showReview: Joi.boolean(),
      isSuccess: Joi.string(),
      showCameraToggle: Joi.boolean(),
      expiresAfter: Joi.string(),
      // TODO: Check if its required.
      apiType: Joi.string(),
      autoCapture: Joi.boolean(),
      autoCaptureDuration: Joi.when('autoCapture', {
        is: true,
        then: Joi.number().integer().positive(),
        otherwise: Joi.number().integer(),
      }),
      videoRecording: Joi.boolean(),
      videoRecordingDuration: Joi.when('videoRecording', {
        is: true,
        then: Joi.number().integer().positive(),
        otherwise: Joi.number().integer(),
      }),
      alertTextBox: Joi.boolean(),
      url: Joi.string().required(),
      allowedStatusCodes: Joi.array().items(Joi.number()),
      headers: Joi.object().pattern(Joi.string(), Joi.string().allow('')),
      defaultCamera: Joi.string().valid("front", "back"),
      requestParameters: Joi.array().items(
        Joi.object({
          name: Joi.string().required(),
          value: Joi.string().allow("").required(),
          type: Joi.string().valid("string", "image", "pdf", "files"),
        })
      ),
      validateSignature: Joi.boolean(),
      faceDetectorTimeout: Joi.number().integer().positive(),
      captureTimeout: Joi.number().integer().positive(),
      retryIfFaceNotPresent: Joi.boolean(),
      maxAttemptsForFaceNotPresent: Joi.when("retryIfFaceNotPresent", {
        is: true,
        then: Joi.number().integer().positive(),
        otherwise: Joi.number().integer()
      }),
    }),
  }),
  // TODO: Add detailed schema here
  form: Joi.object(),
  dynamicFormV2: Joi.object({
    type: Joi.string().valid("dynamicFormV2").required(),
    subType: Joi.string().valid(...validSubTypes).required(),
    version: Joi.string(),
    superModuleId: Joi.string(),
    id: Joi.string().required(),
    nextStep: Joi.string().allow(""),
    previousStep: Joi.string().allow(""),
    skipCPRPut: Joi.string(),
    superModuleType: Joi.string(),
    mappingId: Joi.string(),
    next_node_type: Joi.alternatives().try(
      Joi.object(),
      Joi.string().empty('')
    ),
    name: Joi.string().allow(""),
    properties: Joi.object({
      useFullAvailableHeight: Joi.boolean(),
      useFullAvailableWidth: Joi.boolean(),
      allowClose: Joi.boolean(),
      expiresAfter: Joi.string(),
      componentConfigs: Joi.object(),
      content: Joi.string(),
      scripts: Joi.array().items(Joi.string()),
      styles: Joi.string().allow(''),
      stylesheets: Joi.array().items(Joi.string()),
    }).required(),
    variables: Joi.array().items(
      Joi.object({
        name: Joi.string().required(),
        path: Joi.string().required(),
        predefinedValues: Joi.array().items(
          Joi.object({
            label: Joi.string().required(),
            value: Joi.string().required(),
          })
        ),
      })
    ),
  }),
  // TODO: Revisit this schema to check for correctness
  document: Joi.object({
    type: Joi.string().valid("document").required(),
    subType: Joi.string().valid(...validSubTypes).required(),
    version: Joi.string(),
    superModuleId: Joi.string(),
    id: Joi.string().required(),
    superModuleType: Joi.string(),
    mappingId: Joi.string(),
    next_node_type: Joi.alternatives().try(
      Joi.object(),
      Joi.string().empty('')
    ),
    name: Joi.string().allow(""),
    nextStep: Joi.string().required(),
    previousStep: Joi.string().allow(""),
    skipCPRPut: Joi.string(),
    variables: Joi.array().items(
      Joi.object({
        name: Joi.string().required(),
        path: Joi.string().required(),
        predefinedValues: Joi.array().items(
          Joi.object({
            label: Joi.string().required(),
            value: Joi.string().required(),
          })
        ),
      })
    ),
    properties: Joi.object({
      allowClose: Joi.boolean(),
      allowUpload: Joi.boolean().when('allowCapture', {
        is: false,
        then: Joi.boolean().required().invalid(false),
        otherwise: Joi.boolean()
      }).messages({
        'any.required': 'allowUpload must be present when allowCapture is false',
        'any.invalid': 'allowUpload must be true when allowCapture is false'
      }),
      showEndState: Joi.string(),
      encryptPayload: Joi.boolean(),
      allowCapture: Joi.boolean(),
      // TODO: Verify if its required
      apiType: Joi.string(),
      // TODO: Get exhaustive list of supported file types
      supportedUploadFileTypes: Joi.array().items(Joi.string()) ,
      showInstruction: Joi.boolean().when('allowCapture', {
        is: false,
        then: Joi.boolean().invalid(false),
        otherwise: Joi.boolean()
      }).messages({
        'any.invalid': 'showInstruction must be true when allowCapture is false'
      }),
      assistiveCapture: Joi.boolean(),
      showReview: Joi.boolean(),
      autoCapture: Joi.boolean(),
      autoCaptureDuration: Joi.when('autoCapture', {
        is: true,
        then: Joi.number().integer().positive(),
        otherwise: Joi.number().integer(),
      }),
      disableOCR: Joi.boolean(),
      disableBarcodeSkip: Joi.boolean(),
      barcodeSkipDelay: Joi.number()
        .integer()
        .when("disableBarcodeSkip", { is: false, then: Joi.optional() }),

      enableOverlay: Joi.boolean(),
      defaultCamera: Joi.string().valid("back", "front"),

      documentsSupported: Joi.object().required(),
      countryId: Joi.string(),
      next_node_type: Joi.alternatives().try(
        Joi.object(),
        Joi.string().empty('')
      ),

      url: Joi.string().required(),

      allowedStatusCodes: Joi.array().items(Joi.number()),
      headers: Joi.object().pattern(Joi.string(), Joi.string().allow('')),
      requestParameters: Joi.array().items(
        Joi.object({
          name: Joi.string().required(),
          value: Joi.string().allow("").required(),
          type: Joi.string().valid("string", "image", "pdf", "files"),
        })
      ),
      documentsOverride: Joi.object().pattern(
        Joi.string(),
        Joi.object().pattern(
          Joi.string(),
          Joi.object({
            sides: Joi.array().items(Joi.string()),
            sidesConfig: Joi.object({
              disableOCR: Joi.array().items(Joi.string()).min(1),
              readBarcode: Joi.array().items(Joi.string()).min(1),
            }),
            name: Joi.string(),
            type: Joi.string().valid("card", "a4", "passport").insensitive(),
          })
        )
      ),
      validateSignature: Joi.boolean(),
      expiresAfter: Joi.string(),
    }),
  }),
  api: Joi.object({
    type: Joi.string().valid("api").required(),
    subType: Joi.string().valid(...validSubTypes).required(),
    version: Joi.string(),
    superModuleId: Joi.string(),
    id: Joi.string().required(),
    uiStyle: Joi.string().valid("none"),
    superModuleType: Joi.string(),
    mappingId: Joi.string(),
    next_node_type: Joi.alternatives().try(
      Joi.object(),
      Joi.string().empty('')
    ),
    name: Joi.string().allow(""),
    nextStep: Joi.string().required(),
    previousStep: Joi.string().allow(""),
    skipCPRPut: Joi.string(),
    variables: Joi.array().items(
      Joi.object({
        name: Joi.string().required(),
        path: Joi.string().required(),
        predefinedValues: Joi.array().items(
          Joi.object({
            label: Joi.string().required(),
            value: Joi.string().required(),
          })
        ),
      })
    ),
    properties: Joi.object({
      allowClose: Joi.boolean(),
      showEndState: Joi.string(),
      url: Joi.string().required(),
      isSuccess: Joi.string(),
      allowedStatusCodes: Joi.array().items(Joi.number().integer()),
      apiType: Joi.string()
        .valid(...apiTypes)
        .required(),
      headers: Joi.object().pattern(Joi.string(), Joi.string().allow('')), // Header map of key-value pairs (both strings)
      requestParameters: Joi.array().items(
        Joi.object({
          name: Joi.string().required(),
          value: Joi.string().allow("").required(), // Can be local file path if type is image/pdf
          type: Joi.string()
            .valid("string", "image", "pdf", "files")
            .required(),
        })
      ),
      requestBody: Joi.object(), // Raw JSON object for the request body
      validateSignature: Joi.boolean(),
      expiresAfter: Joi.string(),
      data: Joi.object(),
      encryptPayload: Joi.boolean(),
    }),
  }),
  webview: Joi.object({
    type: Joi.string().valid("webview").required(),
    subType: Joi.string().valid(...validSubTypes).required(),
    version: Joi.string(),

    superModuleId: Joi.string(),
    id: Joi.string().required(),
    superModuleType: Joi.string(),
    mappingId: Joi.string(),
    next_node_type: Joi.alternatives().try(
      Joi.object(),
      Joi.string().empty('')
    ),
    name: Joi.string().allow(""),
    nextStep: Joi.string().required(),
    previousStep: Joi.string().allow(""),
    skipCPRPut: Joi.string(),
    variables: Joi.array().items(
      Joi.object({
        name: Joi.string().required(),
        path: Joi.string().required(),
        predefinedValues: Joi.array().items(
          Joi.object({
            label: Joi.string().required(),
            value: Joi.string().required(),
          })
        ),
      })
    ),
    properties: Joi.object({
      allowClose: Joi.boolean(),
      showEndState: Joi.string(),
      url: Joi.string().required(), // URL is required and must be a valid URI
      openAsPopup: Joi.boolean(), // Boolean value
      showBackButton: Joi.boolean(), // Boolean value
      reloadOnRedirectFailure: Joi.boolean(),
      exitOnCancel: Joi.string().valid("yes", "no"),
      data: Joi.object({
        queryParams: Joi.object().pattern(Joi.string(), Joi.string().allow('').strict()), // Key-value pair object
      }),
      expiresAfter: Joi.string(),
      validateSignature: Joi.boolean(),
      openAsIFrame: Joi.boolean().strict().when("permissions", {
        is: Joi.exist(),
        then: Joi.required(),
        otherwise: Joi.forbidden(),
      }).messages({'any.required': '"openAsIFrame" is required when "permissions" is present', 'any.forbidden': '"openAsIFrame" is not allowed when "permissions" is not present', 'any.unknown': '"openAsIFrame" and "permissions" must always be used together—either both should be present or both should be absent.'}),
      permissions: Joi.array().items(
        Joi.string().valid(
          "accelerometer",
          "camera",
          "microphone",
          "geolocation"
        )
      ),
      allowedStatusCodes: Joi.array().items(Joi.number()),
      openInAppBrowser: Joi.boolean(),
    }),
  }),
  barcode: Joi.object({
    type: Joi.string().valid("barcode").required(),
    subType: Joi.string().valid(...validSubTypes).required(),
    version: Joi.string(),
    superModuleId: Joi.string(),

    id: Joi.string().required(),
    superModuleType: Joi.string(),
    mappingId: Joi.string(),
    next_node_type: Joi.alternatives().try(
      Joi.object(),
      Joi.string().empty('')
    ),
    name: Joi.string().allow(""),
    nextStep: Joi.string().required(),
    previousStep: Joi.string().allow(""),
    skipCPRPut: Joi.string(),
    variables: Joi.array().items(
      Joi.object({
        name: Joi.string().required(),
        path: Joi.string().required(),
        predefinedValues: Joi.array().items(
          Joi.object({
            label: Joi.string().required(),
            value: Joi.string().required(),
          })
        ),
      })
    ),
    properties: Joi.object({
      allowClose: Joi.boolean(),
      showEndState: Joi.string(),
      showInstruction: Joi.boolean(),
      barcodeSkipDelay: Joi.number().integer().positive(),
      expiresAfter: Joi.string(),
    }),
  }),
  nfc: Joi.object({
    type: Joi.string().valid("nfc").required(),
    subType: Joi.string().valid(...validSubTypes).required(),
    version: Joi.string(),

    superModuleId: Joi.string(),
    id: Joi.string().required(),
    superModuleType: Joi.string(),
    mappingId: Joi.string(),
    next_node_type: Joi.alternatives().try(
      Joi.object(),
      Joi.string().empty('')
    ),
    name: Joi.string().allow(""),
    nextStep: Joi.string().required(),
    previousStep: Joi.string().allow(""),
    skipCPRPut: Joi.string(),
    variables: Joi.array().items(
      Joi.object({
        name: Joi.string().required(),
        path: Joi.string().required(),
        predefinedValues: Joi.array().items(
          Joi.object({
            label: Joi.string().required(),
            value: Joi.string().required(),
          })
        ),
      })
    ),
    properties: Joi.object({
      allowClose: Joi.boolean(),
      showEndState: Joi.string(),
      nfcAuthentication: Joi.object({
        documentId: Joi.string(),
        dateOfBirth: Joi.string(),
        dateOfExpiry: Joi.string(),
      }),
      showInstruction: Joi.boolean(),
      allowedAttempts: Joi.number().integer().positive(),
      nfcShowSkipButton: Joi.boolean(),
      nfcSkipDelay: Joi.number().integer().positive(),
      retryOnNFCError: Joi.number().integer(),
      expiresAfter: Joi.string(),
    }),
  }),
  startSession: Joi.object({
    type: Joi.string().valid("startSession").required(),
    subType: Joi.string().valid(...validSubTypes).required(),
    version: Joi.string(),
    superModuleId: Joi.string(),

    id: Joi.string().required(),
    superModuleType: Joi.string(),
    mappingId: Joi.string(),
    next_node_type: Joi.alternatives().try(
      Joi.object(),
      Joi.string().empty('')
    ),
    name: Joi.string().allow(""),
    nextStep: Joi.string().required(),
    previousStep: Joi.string().allow(""),
    skipCPRPut: Joi.string(),
    variables: Joi.array().items(
      Joi.object({
        name: Joi.string().required(),
        path: Joi.string().required(),
        predefinedValues: Joi.array().items(
          Joi.object({
            label: Joi.string().required(),
            value: Joi.string().required(),
          })
        ),
      })
    ),
    properties: Joi.object({
      allowClose: Joi.boolean(),
      showEndState: Joi.string(),
      captureAudio: Joi.boolean().required(),
      showInstruction: Joi.boolean().required(),
      uploadSession: Joi.boolean().required(),
      overlapVideoFeed: Joi.boolean(),
      url: Joi.string().required(),
      expiresAfter: Joi.string(),
    }),
  }),
  stopSession: Joi.object({
    type: Joi.string().valid("stopSession").required(),
    subType: Joi.string().valid(...validSubTypes).required(),
    version: Joi.string(),
    superModuleId: Joi.string(),
    id: Joi.string().required(),
    superModuleType: Joi.string(),
    mappingId: Joi.string(),
    next_node_type: Joi.alternatives().try(
      Joi.object(),
      Joi.string().empty('')
    ),
    name: Joi.string().allow(""),
    nextStep: Joi.string().required(),
    previousStep: Joi.string().allow(""),
    skipCPRPut: Joi.string(),
    variables: Joi.array().items(
      Joi.object({
        name: Joi.string().required(),
        path: Joi.string().required(),
        predefinedValues: Joi.array().items(
          Joi.object({
            label: Joi.string().required(),
            value: Joi.string().required(),
          })
        ),
      })
    ),
    properties: Joi.object({
      allowClose: Joi.boolean(),
      showEndState: Joi.string(),
      captureAudio: Joi.boolean(),
      showReview: Joi.boolean(),
      expiresAfter: Joi.string(),
    }),
  }),
  videoStatementV2: Joi.object({
    type: Joi.string().valid("videoStatementV2").required(),
    subType: Joi.string().valid(...validSubTypes).required(),
    version: Joi.string(),

    superModuleId: Joi.string(),
    id: Joi.string().required(),
    superModuleType: Joi.string(),
    mappingId: Joi.string(),
    next_node_type: Joi.alternatives().try(
      Joi.object(),
      Joi.string().empty('')
    ),
    name: Joi.string().allow(""),
    nextStep: Joi.string().required(),
    previousStep: Joi.string().allow(""),
    skipCPRPut: Joi.string(),
    variables: Joi.array().items(
      Joi.object({
        name: Joi.string().required(),
        path: Joi.string().required(),
        predefinedValues: Joi.array().items(
          Joi.object({
            label: Joi.string().required(),
            value: Joi.string().required(),
          })
        ),
      })
    ),
    properties: Joi.object({
      allowClose: Joi.boolean(),
      allowedAttempts: Joi.number().integer().positive(),
      // TODO: Remove required(), once fixed on webSDK.
      userData: Joi.object().pattern(Joi.string(), Joi.string()).required(),
      showEndState: Joi.string(),
      isSuccess: Joi.string(),
      extractAudioFromVideo: Joi.string().valid("yes", "no"),
      validateSignature: Joi.boolean(),
      liveness: apiSchema.required(),
      faceMatch: apiSchema,
      speechToTextMatch: apiSchema,
      logVideoStatement: apiSchema.required(),
      videoUpload: apiSchema.required(),
      expiresAfter: Joi.string(),

      statement: Joi.object({
        type: Joi.string().valid("text", "code"),
        displayTimer: Joi.string().valid("yes", "no"),
        duration: Joi.number().positive().max(45000),
        minimumDuration: Joi.number().min(1000),
        checks: Joi.object({
          faceDetection: checksSchema,
          liveness: checksSchema,
          faceMatch: checksSchema,
          speechToTextMatch: checksSchema,
        }),
      }).required(),
    }),
  }),
  dynamicForm: Joi.object({
    type: Joi.string().valid("dynamicForm").required(),
    subType: Joi.string().valid(...validSubTypes).required(),
    id: Joi.string().required(),
    superModuleType: Joi.string(),
    dismissible: Joi.string().valid("yes", "no"),
    mappingId: Joi.string(),
    uiStyle: Joi.string().valid("actionSheet"),
    version: Joi.string(),
    superModuleId: Joi.string(),
    next_node_type: Joi.alternatives().try(
      Joi.object(),
      Joi.string().empty('')
    ),
    name: Joi.string().allow(""),
    nextStep: Joi.string().allow(""),
    previousStep: Joi.string().allow(""),
    skipCPRPut: Joi.string(),
    properties: Joi.object({
      allowClose: Joi.boolean(),
      expiresAfter: Joi.string(),
      showBackButton: Joi.boolean(), // Boolean value
      persistState: Joi.string(),
      sections: Joi.array()
        .items(
          Joi.object({
            id: Joi.string().required(),
            components: Joi.array().items(Joi.object()),
            footer: Joi.object({
              components: Joi.array().items(Joi.object()),
            }),
          })
        )
        .min(1)
        .max(1)
        .required()
        .required(),
    }).required(),
    variables: Joi.array().items(
      Joi.object({
        name: Joi.string().required(),
        path: Joi.string().required(),
        predefinedValues: Joi.array().items(
          Joi.object({
            label: Joi.string().required(),
            value: Joi.string().required(),
          })
        ),
      })
    ),
  }),
  // videoStatement is deprecated
  videoStatement: Joi.object(),
  start_session: Joi.object().forbidden().messages({ 'any.unknown': 'start_session is deprecated, use startSession' }),
  stop_session: Joi.object().forbidden().messages({ 'any.unknown': 'stop_session is deprecated, use stopSession' }),
};

module.exports = {
  moduleSchema,
};
