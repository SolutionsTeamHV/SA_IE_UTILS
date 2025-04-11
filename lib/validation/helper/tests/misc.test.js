const fs = require("fs");
const { extractVariableSites, listAllFilesFromBasePaths, listFilesRecursively } = require("../misc");

describe('extractVariableSites', () => {
  let mockWorkflow;

  beforeEach(() => {
    mockWorkflow = {
      sdkResponse: 'module_example.value',
      conditions: {
        condition_1: 'condition_key',
        condition_2: {
          nestedKey: 'module_another.example',
        },
      },
      modules: [
        { key: 'inputs.module_key' },
        { key: 'outputs.module_output' },
      ],
      conditionalVariables: {
        var1: 'conditionalVariables.var_key',
        var2: 'module_nested.var_nested_key',
        var3: 'condition_1',
      },
    };
  });

  test('should extract variable sites with correct matches and parent keys', () => {
    const result = extractVariableSites(mockWorkflow);

    expect(result).toEqual([
      {
        match: 'module_example.value',
        parentKeys: ['sdkResponse'],
      },
      {
        match: 'condition_key',
        parentKeys: ['condition_1'],
      },
      {
        match: 'module_another.example',
        parentKeys: ['nestedKey'],
      },
      {
        match: 'inputs.module_key',
        parentKeys: ['key'],
      },
      {
        match: 'outputs.module_output',
        parentKeys: ['key'],
      },
      {
        match: 'conditionalVariables.var_key',
        parentKeys: ['var1'],
      },
      {
        match: 'module_nested.var_nested_key',
        parentKeys: ['var2'],
      },
      {
        match: 'condition_1',
        parentKeys: ['var3'],
      },
    ]);
  });

  test('should ignore keys in the ignoredKeys list', () => {
    mockWorkflow.builderProperties = 'module_ignored.value';
    const result = extractVariableSites(mockWorkflow);

    // Ensure builderProperties is ignored
    expect(result).not.toContainEqual({
      match: 'module_ignored.value',
      parentKeys: ['builderProperties'],
    });
  });

  test('should return an empty array if workflow has no matching keys', () => {
    const emptyWorkflow = {
      sdkResponse: 'no_match_here',
      conditions: {},
      modules: [],
      conditionalVariables: {},
    };
    const result = extractVariableSites(emptyWorkflow);

    expect(result).toEqual([]);
  });

  test('should handle workflows with nested arrays and objects', () => {
    mockWorkflow.modules.push([
      { key: 'module_array.item' },
      { key: 'module_array.anotherItem' },
    ]);

    const result = extractVariableSites(mockWorkflow);

    expect(result).toContainEqual({
      match: 'module_array.item',
      parentKeys: ['key'],
    });
    expect(result).toContainEqual({
      match: 'module_array.anotherItem',
      parentKeys: ['key'],
    });
  });

  test('should handle multiple parent keys', () => {
    mockWorkflow.modules.push([
        { key: 'condition_1' },
      ]);

    const result = extractVariableSites(mockWorkflow);

    expect(result).toEqual([
        {
          match: 'module_example.value',
          parentKeys: ['sdkResponse'],
        },
        {
          match: 'condition_key',
          parentKeys: ['condition_1'],
        },
        {
          match: 'module_another.example',
          parentKeys: ['nestedKey'],
        },
        {
          match: 'inputs.module_key',
          parentKeys: ['key'],
        },
        {
          match: 'outputs.module_output',
          parentKeys: ['key'],
        },
        {
            match: 'condition_1',
            parentKeys: ['key', 'var3'],
        },
        {
          match: 'conditionalVariables.var_key',
          parentKeys: ['var1'],
        },
        {
          match: 'module_nested.var_nested_key',
          parentKeys: ['var2'],
        },
        
      ]);
  })
});

jest.mock("fs", () => ({
  readdirSync: jest.fn(),
}));

describe("listAllFilesFromBasePaths", () => {
  it("should return a flattened list of file paths from multiple base paths", () => {
    // Mocking the behavior of fs.readdirSync
    fs.readdirSync.mockImplementation((dirPath, options) => {
      if (dirPath === "basePath1") {
        return [
          { name: "file1.json", isDirectory: () => false },
          { name: "file2.json", isDirectory: () => false },
        ];
      }
      if (dirPath === "basePath2") {
        return [
          { name: "file3.json", isDirectory: () => false },
        ];
      }
      return [];
    });

    const basePaths = ["basePath1", "basePath2"];
    const result = listAllFilesFromBasePaths(basePaths);

    expect(result).toEqual([
      "basePath1/file1.json",
      "basePath1/file2.json",
      "basePath2/file3.json",
    ]);
  });

  it("should handle empty base paths", () => {
    const result = listAllFilesFromBasePaths([]);
    expect(result).toEqual([]);
  });

  it("should return an empty array when no files are found", () => {
    fs.readdirSync.mockImplementation(() => []);
    
    const basePaths = ["emptyBasePath1", "emptyBasePath2"];
    const result = listAllFilesFromBasePaths(basePaths);

    expect(result).toEqual([]);
  });

  it("should handle directories with subdirectories correctly", () => {
    // Mocking a directory with a subdirectory
    fs.readdirSync.mockImplementation((dirPath, options) => {
      if (dirPath === "basePath1") {
        return [
          { name: "file1.json", isDirectory: () => false },
          { name: "subdir", isDirectory: () => true },
        ];
      }
      if (dirPath === "basePath1/subdir") {
        return [
          { name: "file2.json", isDirectory: () => false },
        ];
      }
      return [];
    });

    const basePaths = ["basePath1"];
    const result = listAllFilesFromBasePaths(basePaths);

    expect(result).toEqual([
      "basePath1/file1.json",
      "basePath1/subdir/file2.json",
    ]);
  });
});
