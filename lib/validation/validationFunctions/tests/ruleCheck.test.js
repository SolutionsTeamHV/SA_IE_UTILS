const { ruleCheck } = require('../ruleCheck');
const { errors } = require('../../constants/errorCodes');

describe('ruleCheck', () => {
    const mockWorkflow = {
        modules: [
            {
                type: 'countries',
                subType: 'country',
                id: 'module_1',
            },
        ],
        conditions: {
            condition_1: {
                rule: "(module_1.region == 'us')",
            },
        },
        conditionalVariables: {},
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should return an empty issues array when there are no issues', () => {

        const result = ruleCheck(mockWorkflow);
        expect(result.issues).toEqual([]);
    });

    it('should identify unallowed characters in the expression', () => {
        const workflowWithIssues = {
            ...mockWorkflow,
            conditions: {
                condition1: { rule: '{module_SQpDGX_nomineeCreationV3_lib_module.guardianpincode.isValid == "yes"}' }, // Invalid due to {
            },
        };

        const result = ruleCheck(workflowWithIssues);

        expect(result.issues).toEqual([
            {
                type: "ERROR",
                text: "Expression contains unallowed characters: {} in condition1",
                code: "BRACKET_NOT_ALLOWED",
            }
        ]);
    });

    it('should catch unbalanced parentheses', () => {
        const workflowWithUnbalancedParentheses = {
            ...mockWorkflow,
            conditions: {
                condition1: { rule: '(module_SQpDGX_nomineeCreationV3_lib_module.guardianpincode.isValid == "yes"' }, // Unbalanced parentheses
            },
        };

        const result = ruleCheck(workflowWithUnbalancedParentheses);

        expect(result.issues).toEqual([
            {
                type: "ERROR",
                text: "Unbalanced parentheses: Missing closing parentheses in condition1",
                code: errors.PARENTHESES_NOT_BALANCED,
            },
        ]);
    });

    it('should handle missing operator', () => {
        const workflowWithMultipleIssues = {
            ...mockWorkflow,
            conditions: {
                condition_2: { rule: "module_1.attempts 5000" },
            },
        };

        const result = ruleCheck(workflowWithMultipleIssues);

        expect(result.issues).toEqual(
            [{
                code: "INVALID_OPERATOR",
                text: "Invalid operator found in rule: module_1.attempts 5000 in condition_2",
                type: "ERROR"
            }]
        );
    });

    it('should handle invalid operator', () => {
        const workflowWithMultipleIssues = {
            ...mockWorkflow,
            conditions: {
                condition_2: { rule: "(module_1.attempts === 5000)" },
            },
        };

        const result = ruleCheck(workflowWithMultipleIssues);

        expect(result.issues).toEqual(
            [{
                code: "INVALID_OPERATOR",
                text: "Invalid operator found in rule: (module_1.attempts === 5000) in condition_2",
                type: "ERROR"
            }]
        );
    });
});
