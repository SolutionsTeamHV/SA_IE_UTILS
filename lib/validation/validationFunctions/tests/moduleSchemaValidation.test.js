const { moduleSchemaValidation } = require("../moduleSchemaValidation");
const { errors } = require("../../constants/errorCodes");
const { warnings } = require("../../constants/warningCodes");

jest.mock("../../schemas/moduleSchema", () => ({
    moduleSchema: {
      validType: {
        validate: jest.fn(() => ({ error: null })), // Simulates a valid module schema validation
        describe: jest.fn(() => ({})),
      },
      webview: {
        validate: jest.fn(() => ({ error: null })), // Simulates schema validation for 'webview'
        describe: jest.fn(() => ({})),
      },
    },
  }));

describe("moduleSchemaValidation", () => {
  it("should add a warning for deprecated module type 'videoStatement'", () => {
    const workflow = {
      modules: [
        { id: "module1", type: "videoStatement" },
      ],
    };
    const { issues } = moduleSchemaValidation(workflow);
    expect(issues).toContainEqual({
      type: "WARNING",
      text: "The module with ID module1 is of type 'videoStatement', which is deprecated. Consider updating to a supported module type.",
      code: warnings.DEPRECATED_MODULE,
    });
  });

  it("should add an error for a URL containing 'ind-hyperflo.hyperverge.co'", () => {
    const workflow = {
      modules: [
        {
          id: "module1",
          type: "validType",
          properties: { url: "https://ind-hyperflo.hyperverge.co/path" },
        },
      ],
    };
    const { issues } = moduleSchemaValidation(workflow);
    expect(issues).toContainEqual({
      type: "ERROR",
      text: 'The URL of the module "module1" cannot contain "ind-hyperflo.hyperverge.co".',
      code: errors.INVALID_URL,
    });
  });

  it("should add an error for a URL without 'hyperverge.co' in the domain", () => {
    const workflow = {
      modules: [
        {
          id: "module1",
          type: "validType",
          properties: { url: "https://example.com/path" },
        },
      ],
    };
    const { issues } = moduleSchemaValidation(workflow);
    expect(issues).toContainEqual({
      type: "ERROR",
      text: `The URL in the module "module1" must contain 'hyperverge.co' in the domain.`,
      code: errors.INVALID_URL,
    });
  });

  it("should not add an error for a URL without 'hyperverge.co' in the domain for module type 'webview'", () => {
    const workflow = {
      modules: [
        {
          id: "module1",
          type: "webview",
          properties: { url: "https://google.com/test" },
        },
      ],
    };
    const { issues } = moduleSchemaValidation(workflow);
    expect(issues).toEqual([]);
  });

  it("should not add an error for a URL with 'hyperverge.co' in the domain", () => {
    const workflow = {
      modules: [
        {
          id: "module1",
          type: "validType",
          properties: { url: "https://hyperverge.co/test" },
        },
      ],
    };
    const { issues } = moduleSchemaValidation(workflow);
    expect(issues).toEqual([]);
  });

  it("should add an error for missing module schema", () => {
    const workflow = {
      modules: [
        { id: "module1", type: "unknownType" },
      ],
    };
    const { issues } = moduleSchemaValidation(workflow);
    expect(issues).toContainEqual({
      type: "ERROR",
      text: "Schema not found for module type: unknownType id: module1",
      code: errors.MODULE_SCHEMA_NOT_FOUND,
    });
  });

  it("should validate modules without issues", () => {
    const workflow = {
      modules: [
        { id: "module1", type: "validType" },
      ],
    };
    const { issues } = moduleSchemaValidation(workflow);
    expect(issues).toEqual([]);
  });
});
