const Joi = require("joi");

const componentSchema = {
  label: Joi.object({
    id: Joi.string().required(),
    type: Joi.string().valid("label").required(),
    subType: Joi.string()
      .valid("title", "subTitle", "textBlock", "hint", "subtitle")
      .required(),
    text: Joi.string().allow("").required(),
    visible: Joi.string(),
    width: Joi.string(),
    height: Joi.string(),
    onChange: Joi.object(),
    onValidated: Joi.object({
      reload: Joi.object(),
      reloadComponents: Joi.array().items(Joi.string()),
      nextStep: Joi.string(),
    }),
  }),
  text: Joi.object({
    id: Joi.string().required(),
    type: Joi.string().valid("text").required(),
    subType: Joi.string().valid("singleLine", "multiLine", "blocks"),
    title: Joi.string(),
    subTitle: Joi.string(),
    hint: Joi.string().allow(''),
    blockCount: Joi.string(),
    blockLength: Joi.string(),
    secure: Joi.string().valid("yes", "no"),
    height: Joi.string(),
    width: Joi.string(),
    visible: Joi.string(),
    // TODO: implement a custom check to throw warnings if value is null
    value: Joi.string().allow('').allow(null),
    enabled: Joi.string(),
    required: Joi.string(),
    keyboard: Joi.string().valid("text", "number", "email", "phone"),
    validation: Joi.array().items(
      Joi.object({
        type: Joi.string().valid("regex", "rule").required(),
        value: Joi.string().required(),
        errorMsg: Joi.string(),
      })
    ),
    onValidated: Joi.object({
      reload: Joi.object(),
      reloadComponents: Joi.array().items(Joi.string()),
      nextStep: Joi.string(),
    }),
    onChange: Joi.object(),
  }),
  date: Joi.object({
    id: Joi.string().required(),
    type: Joi.string().valid("date").required(),
    subType: Joi.string().valid("spinner", "default"),
    title: Joi.string(),
    hint: Joi.string(),
    dateRange: Joi.object(),
    visible: Joi.string(),
    format: Joi.string(),
    required: Joi.string(),
    enabled: Joi.string(),
    value: Joi.string().allow(null),
    width: Joi.string(),
    height: Joi.string(),
    content: Joi.string(),
    validation: Joi.array().items(
      Joi.object({
        type: Joi.string().valid("regex", "rule").required(),
        value: Joi.string().required(),
        errorMsg: Joi.string().required(),
      })
    ),
    onValidated: Joi.object({
      reload: Joi.object(),
      reloadComponents: Joi.array().items(Joi.string()),
      nextStep: Joi.string(),
    }),
    onChange: Joi.object(),
    dynamicHandlers: Joi.object({
      children: Joi.array().items(Joi.string()).required(),
      handlers: Joi.array().items(Joi.object()),
    }),
    keyboard: Joi.string().forbidden().meta({ warnings: true}),
  }),
  dropdown: Joi.object({
    id: Joi.string().required(),
    type: Joi.string().valid("dropdown").required(),
    subType: Joi.string().valid("dropdown"),
    title: Joi.string().allow(''),
    items: Joi.array().items(Joi.string().allow('')).required().unique(),
    hint: Joi.string().allow(''),
    value: Joi.string(),
    labels: Joi.object().pattern(Joi.string(), Joi.string().allow('')).required(),
    visible: Joi.string(),
    required: Joi.string(),
    enabled: Joi.string(),
    validation: Joi.array().items(
      Joi.object({
        type: Joi.string().valid("regex", "rule").required(),
        value: Joi.string().required(),
        errorMsg: Joi.string().required(),
      })
    ),
    onValidated: Joi.object({
      reload: Joi.object(),
      reloadComponents: Joi.array().items(Joi.string()),
      nextStep: Joi.string(),
    }),
    onChange: Joi.object(),
    keyboard: Joi.string().forbidden().meta({ warnings: true}),
  }).custom((value, helpers) => {
    const { items, labels } = value;

    if (!items || !Array.isArray(items) || items.length === 0) {
      return helpers.message("Items array is missing or empty.");
    }

    if (!labels || typeof labels !== "object" || Object.keys(labels).length === 0) {
      return helpers.message("Labels object is missing or empty.");
    }
  
    const labelKeys = Object.keys(labels);
    const itemSet = new Set(items);

    const allItemsHaveLabels = items.every(item => labelKeys.includes(item));
    const allLabelsHaveItems = labelKeys.every(key => itemSet.has(key));

    if (!allItemsHaveLabels || !allLabelsHaveItems) {
      const missingItems = items.filter(item => !labelKeys.includes(item));
      const missingLabels = labelKeys.filter(key => !itemSet.has(key));

      const message = `Items and labels must match. Missing items: ${missingItems.join(', ') || 'none'}, Missing labels: ${missingLabels.join(', ') || 'none'}`;
      return helpers.message(message);
    }
  }),
  button: Joi.object({
    id: Joi.string().required(),
    type: Joi.string().valid("button").required(),
    subType: Joi.string().valid("primary", "secondary", "tertiary"),
    text: Joi.string().required(),
    visible: Joi.string(),
    enabled: Joi.string(),
    width: Joi.string(),
    height: Joi.string(),
    loading: Joi.string(),
    onClick: Joi.object({
      reload: Joi.object(),
      reloadComponents: Joi.array().items(Joi.string()),
      nextStep: Joi.string(),
    }),
    onChange: Joi.object(),
    dynamicHandlers: Joi.object({
      children: Joi.array().items(Joi.string()).required(),
      handlers: Joi.array().items(Joi.object()),
    }),
    onValidated: Joi.object({
      reload: Joi.object(),
      reloadComponents: Joi.array().items(Joi.string()),
      nextStep: Joi.string(),
    }),
    validation: Joi.array().forbidden().meta({ warnings: true }),
  }),
  checkbox: Joi.object({
    id: Joi.string().required(),
    type: Joi.string().valid("checkbox").required(),
    subType: Joi.string().valid("checkbox"),
    value: Joi.string().valid("yes", "no"),
    text: Joi.string().required(),
    required: Joi.string(),
    visible: Joi.string(),
    enabled: Joi.string(),
    width: Joi.string(),
    height: Joi.string(),
    onChange: Joi.object(),
    validation: Joi.array().items(
      Joi.object({
        type: Joi.string().valid("regex", "rule").required(),
        value: Joi.string().required(),
        errorMsg: Joi.string().required(),
      })
    ),
    onValidated: Joi.object({
      reload: Joi.object(),
      reloadComponents: Joi.array().items(Joi.string()),
      nextStep: Joi.string(),
    }),
  }),
  file: Joi.object({
    id: Joi.string().required(),
    type: Joi.string().valid("file").required(),
    subType: Joi.string().valid("file"),
    title: Joi.string(),
    visible: Joi.string(),
    errorTextFile: Joi.string(),
    helperTextIdle: Joi.string(),
    helperTextActive: Joi.string(),
    subTitle: Joi.string(),
    errorTextSizeMax: Joi.string().allow(''),
    maxFileSize: Joi.number().integer().positive(),
    pickerTitle: Joi.string(),
    enabled: Joi.string(),
    errorTextSizeMin: Joi.string(),
    minFileSize: Joi.number().integer().positive(),
    allowMultipleTypes: Joi.string().valid("yes", "no"),
    supportedFiles: Joi.array().items(
      Joi.object({
        type: Joi.string().valid("documents", "images", "videos", "audios").required(),
        title: Joi.string().required(),
        extensions: Joi.array().items(Joi.string()).required(),
        overrideAllowedTypes: Joi.array().items(
          Joi.string().valid("documents", "images", "videos", "audios")
        ),
      })
    ),
    required: Joi.string(),
    validation: Joi.array().items(
      Joi.object({
        type: Joi.string().valid("regex", "rule").required(),
        value: Joi.string().required(),
        errorMsg: Joi.string().required(),
      })
    ),
    onValidated: Joi.object({
      reload: Joi.object(),
      reloadComponents: Joi.array().items(Joi.string()),
      nextStep: Joi.string(),
    }),
    onChange: Joi.object(),
    version: Joi.string().valid("1", "2"),
  }),
  image: Joi.object({
    id: Joi.string().required(),
    type: Joi.string().valid("image").required(),
    subType: Joi.string().valid("image"),
    visible: Joi.string(),
    height: Joi.string(),
    width: Joi.string(),
    value: Joi.string().required(),
    text: Joi.string(),
    onChange: Joi.object(),
    onValidated: Joi.object({
      reload: Joi.object(),
      reloadComponents: Joi.array().items(Joi.string()),
      nextStep: Joi.string(),
    }),
  }),
  vertical: Joi.object({
    id: Joi.string().required(),
    type: Joi.string().valid("vertical").required(),
    subType: Joi.string().valid("vertical"),
    visible: Joi.string(),
    text: Joi.string(),
    nextStep: Joi.string(),
    enabled: Joi.string(),
    width: Joi.string(),
    height: Joi.string(),

    onClick: Joi.object({
      reload: Joi.object(),
      reloadComponents: Joi.array().items(Joi.string()),
      nextStep: Joi.string(),
    }),
    subComponents: Joi.array().items(Joi.object()),
    onChange: Joi.object(),
    onValidated: Joi.object({
      reload: Joi.object(),
      reloadComponents: Joi.array().items(Joi.string()),
      nextStep: Joi.string(),
    }),
  }),
  horizontal: Joi.object({
    id: Joi.string().required(),
    type: Joi.string().valid("horizontal").required(),
    subType: Joi.string().valid("horizontal"),
    visible: Joi.string(),
    text: Joi.string(),
    width: Joi.string(),
    height: Joi.string(),
    nextStep: Joi.string(),
    enabled: Joi.string(),
    onClick: Joi.object({
      reload: Joi.object(),
      reloadComponents: Joi.array().items(Joi.string()),
      nextStep: Joi.string(),
    }),
    subComponents: Joi.array().items(Joi.object()),
    onChange: Joi.object(),
    onValidated: Joi.object({
      reload: Joi.object(),
      reloadComponents: Joi.array().items(Joi.string()),
      nextStep: Joi.string(),
    }),
  }),
  timer: Joi.object({
    id: Joi.string().required(),
    type: Joi.string().valid("timer").required(),
    text: Joi.string(),
    subType: Joi.string().valid("timer", "countdown").required(),
    visible: Joi.string(),
    duration: Joi.string().required(),
    onComplete: Joi.object({
      reload: Joi.object(),
      reloadComponents: Joi.array().items(Joi.string()),
    }),
    onValidated: Joi.object({
      reload: Joi.object(),
      reloadComponents: Joi.array().items(Joi.string()),
      nextStep: Joi.string(),
    }),
  }),
  loader: Joi.object({
    id: Joi.string().required(),
    type: Joi.string().valid("loader").required(),
    subType: Joi.string().valid("loader").required(),
    visible: Joi.string(),
    height: Joi.string(),
    text: Joi.string(),
    weight: Joi.string(),
    onValidated: Joi.object({
      reload: Joi.object(),
      reloadComponents: Joi.array().items(Joi.string()),
      nextStep: Joi.string(),
    }),
  }),
  divider: Joi.object({
    id: Joi.string().required(),
    type: Joi.string().valid("divider").required(),
    subType: Joi.string().valid("optional").required(),
    visible: Joi.string(),
    text: Joi.string(),
    onValidated: Joi.object({
      reload: Joi.object(),
      reloadComponents: Joi.array().items(Joi.string()),
      nextStep: Joi.string(),
    }),
  }),
  chip: Joi.object({
    id: Joi.string().required(),
    type: Joi.string().valid("chip").required(),
    subType: Joi.string().valid("default").required(),
    enabled: Joi.string(),
    visible: Joi.string(),
    required: Joi.string(),
    onClick: Joi.object({
      reload: Joi.object(),
      reloadComponents: Joi.array().items(Joi.string()),
      nextStep: Joi.string(),
    }),
    text: Joi.string(),
    value: Joi.string(),
    selected: Joi.string(),
    leadingIcon: Joi.object({
      imageUrl: Joi.string(),
      selectedImageUrl: Joi.string(),
      disabledImageUrl: Joi.string(),
    }),
    trailingIcon: Joi.object({
      imageUrl: Joi.string(),
      selectedImageUrl: Joi.string(),
      disabledImageUrl: Joi.string(),
    }),
    onValidated: Joi.object({
      reload: Joi.object(),
      reloadComponents: Joi.array().items(Joi.string()),
      nextStep: Joi.string(),
    }),
  }),
  radio: Joi.object({
    id: Joi.string().required(),
    type: Joi.string().valid("radio").required(),
    subType: Joi.string().valid("default"),
    enabled: Joi.string(),
    visible: Joi.string(),
    required: Joi.string(),
    onClick: Joi.object({
      reload: Joi.object(),
      reloadComponents: Joi.array().items(Joi.string()),
      nextStep: Joi.string(),
    }),
    text: Joi.string(),
    value: Joi.string(),
    selected: Joi.string(),
    onValidated: Joi.object({
      reload: Joi.object(),
      reloadComponents: Joi.array().items(Joi.string()),
      nextStep: Joi.string(),
    }),
  }),
};

componentSchema['list'] = Joi.object({
  id: Joi.string().required(),
  type: Joi.string().valid("list").required(),
  subType: Joi.string().valid("vertical", "grid", "staggered"),
  selectionMode: Joi.string().valid("single"),
  numberOfColumns: Joi.string()
  // This check has been moved to warnings for now
  // .when('subType', {
  //   is: "grid",
  //   then: Joi.optional(),
  //   otherwise: Joi.forbidden()
  // })
  ,
  visible: Joi.string(),
  value: Joi.object(),
  text: Joi.string(),
  data: Joi.alternatives().try(
    Joi.string(),
    Joi.array().items(Joi.object()).required()
  ).required(),
  itemsGenerator: Joi.alternatives().try(
    componentSchema['label'],
    componentSchema['text'],
    componentSchema['date'],
    componentSchema['dropdown'],
    componentSchema['button'],
    componentSchema['checkbox'],
    componentSchema['file'],
    componentSchema['image'],
    componentSchema['vertical'],
    componentSchema['horizontal'],
    componentSchema['timer'],
    componentSchema['loader'],
    componentSchema['radio'],
    componentSchema['chip'],
  ).required(),
  onValidated: Joi.object({
    reload: Joi.object(),
    reloadComponents: Joi.array().items(Joi.string()),
    nextStep: Joi.string(),
  }),
  onChange: Joi.object(), // Temporarily allowing onChange for list, flagged in warnings; should be removed once builder updates.
});

module.exports = {
  componentSchema,
};
