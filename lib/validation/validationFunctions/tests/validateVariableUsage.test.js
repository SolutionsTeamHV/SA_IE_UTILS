const { validateVariableUsage } = require('../validateVariableUsage');
const { extractVariableSites } = require('../../helper/misc');
const predefinedVariableCheck = require('../../helper/predefinedVariableCheck');

jest.mock('../../helper/misc', () => ({
  extractVariableSites: jest.fn(),
}));

jest.mock('../../helper/predefinedVariableCheck', () => jest.fn());

describe('validateVariableUsage', () => {
  let mockWorkflow;

  beforeEach(() => {
    mockWorkflow = {
      sdkResponse: 'module_example.value',
      conditions: {
        condition1: 'condition_key',
      },
    };

    // Reset mocks before each test
    extractVariableSites.mockReset();
    predefinedVariableCheck.mockReset();
  });

  test('should return no issues if there are no injection sites', () => {
    extractVariableSites.mockReturnValue([]);

    const result = validateVariableUsage(mockWorkflow);

    expect(result.issues).toEqual([]);
    expect(extractVariableSites).toHaveBeenCalledWith(mockWorkflow);
    expect(predefinedVariableCheck).not.toHaveBeenCalled();
  });

  test('should validate injection sites and collect issues', () => {
    extractVariableSites.mockReturnValue([
      { match: 'module_example.value', parentKeys: ['sdkResponse'] },
      { match: 'condition_key', parentKeys: ['condition1'] },
    ]);

    predefinedVariableCheck.mockImplementation((injectionSite) => {
      if (injectionSite === 'module_example.value') {
        return { issues: ['Issue with module_example.value'] };
      }
      if (injectionSite === 'condition_key') {
        return { issues: ['Issue with condition_key'] };
      }
      return { issues: [] };
    });

    const result = validateVariableUsage(mockWorkflow);

    expect(result.issues).toEqual([
      'Issue with module_example.value',
      'Issue with condition_key',
    ]);

    expect(extractVariableSites).toHaveBeenCalledWith(mockWorkflow);
    expect(predefinedVariableCheck).toHaveBeenCalledTimes(2);
    expect(predefinedVariableCheck).toHaveBeenCalledWith(
      'module_example.value',
      mockWorkflow,
    );
    expect(predefinedVariableCheck).toHaveBeenCalledWith(
      'condition_key',
      mockWorkflow,
    );
  });

  test('should handle empty issues from predefinedVariableCheck', () => {
    extractVariableSites.mockReturnValue([
      { match: 'module_example.value', parentKeys: ['sdkResponse'] },
    ]);

    predefinedVariableCheck.mockReturnValue({ issues: [] });

    const result = validateVariableUsage(mockWorkflow);

    expect(result.issues).toEqual([]);
    expect(extractVariableSites).toHaveBeenCalledWith(mockWorkflow);
    expect(predefinedVariableCheck).toHaveBeenCalledWith(
      'module_example.value',
      mockWorkflow,
    );
  });
});
