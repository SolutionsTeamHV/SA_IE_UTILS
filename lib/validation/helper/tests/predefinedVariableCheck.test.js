const predefinedVariableCheck = require('../predefinedVariableCheck');
const { errors } = require('../../constants/errorCodes');
const { expect } = require('@playwright/test');

describe('predefinedVariableCheck', () => {
    const mockWorkflow = {
        properties: {
            inputsRequired: {
                input1: 'string',
                input2: 'string',
            },
        },
        modules: [
            {
                id: 'module_1',
                type: 'api',
                properties: {
                    url: 'https://example.com',
                },
                variables: [
                    {
                        name: 'url',
                        path: 'response.result.url',
                    },
                ],
            },
            {
                id: 'module_2',
                type: 'dynamicForm',
                properties: {
                    sections: [
                        {
                            "id": "basicDetails",
                            "components": [
                                {
                                    "id": "titleLabel",
                                    "type": "text",
                                    "subType": "multiLine",
                                    "title": "Title Label",
                                    "value": "module_2.titleLabel.value",
                                    "onValidated": {
                                        "reloadComponents": [],
                                    },
                                },
                            ],
                            "footer": {
                                "components": [],
                            },
                        },
                    ],
                },
            },
            {
                id: 'module_3',
                type: 'webview',
                properties: {
                    url: 'https://example.com',
                    data: {
                        queryParams: {
                            param1: 'value1',
                        },
                    },
                },
                variables: [
                    {
                        name: 'url',
                        path: 'response.result.url',
                    },
                    {
                        name: 'param1',
                        path: 'response.result.data.queryParams.param1',
                    },
                ],
            }
        ],
        conditions: {
            condition_1: {
                rule: 'module_1.url == "https://example.com"',
            },
            condition_2: {
                rule: 'module_2.titleLabel == true',
            },
            condition_3: {
                rule: 'module_3.url == "https://example.com"',
            },
        },
        conditionalVariables: {
            demo_1: {
                rule: 'module_1.url =="https://example.com"',
            },
        },
    };

    it('should return an empty issues array when the moduleId and the variable is defined in the workflow', () => {
        const result = predefinedVariableCheck('module_1.url', mockWorkflow, 'condition1');

        expect(result.issues).toEqual([]);
    });

    it('should return an Invalid operand error when the module is not found', () => {
        const result = predefinedVariableCheck('module_4.url', mockWorkflow, 'condition1');

        expect(result.issues).toEqual([
            {
                type: "ERROR",
                text: "Invalid operand: module_4.url referenced in condition: condition1",
                code: errors.INVALID_OPERAND,
            },
        ]);
    });

    it('should return an VARIABLE_NOT_FOUND warning when the variable is not found in the module or if it is not predefined', () => {
        const result = predefinedVariableCheck('module_1.url1', mockWorkflow, 'condition1');

        expect(result.issues).toEqual([
            {
                type: "WARNING",                
                text: "Variable : url1 not found in module: module_1 referenced in condition: condition1",
                code: errors.VARIABLE_NOT_FOUND,
            },
        ]);
    });

    it('should not return an VARIABLE_NOT_FOUND error when the variable is predefined for the module', () => {
        const result = predefinedVariableCheck('module_1.attempts', mockWorkflow, 'condition1');
        expect(result.issues).toEqual([]);
    });
    
    it('should not return an VARIABLE_NOT_FOUND error when the variable is defined for the module of type dynamicForm', () => {
        const result = predefinedVariableCheck('module_2.titleLabel.value', mockWorkflow, 'condition_2');
        expect(result.issues).toEqual([]);
    });

    it('should return an VARIABLE_NOT_FOUND error when the variable is not defined for the module of type dynamicForm', () => {
        const result = predefinedVariableCheck('module_2.titleLael.value', mockWorkflow, 'condition_2');
        expect (result.issues).toEqual([
            {
                type: "ERROR",
                text: "Variable : titleLael.value not found in module: module_2 referenced in condition: condition_2",
                code: errors.VARIABLE_NOT_FOUND,
            },
        ]);
    });

    it('should return an VARIABLE_NOT_FOUND error when a wrong predefined variable is used module of type dynamicForm', () => {
        const result = predefinedVariableCheck('module_2.titleLabel.demo', mockWorkflow, 'condition_2');
        expect (result.issues).toEqual([
            {
                type: "ERROR",
                text: "Variable : titleLabel.demo not found in module: module_2 referenced in condition: condition_2",
                code: errors.VARIABLE_NOT_FOUND,
            },
        ]);
    });

    it('should not return any error when the condition is defined', () => {
        const result = predefinedVariableCheck('condition_1', mockWorkflow, 'condition_1');

        expect(result.issues).toEqual([]);
    });

    it('should not return any error when the condition is defined', () => {
        const result = predefinedVariableCheck('condition_6', mockWorkflow, 'condition_1');

        expect(result.issues).toEqual([
            {
                type: "ERROR",
                text: "Invalid operand: condition_6 referenced in condition: condition_1",
                code: errors.INVALID_OPERAND,
            },
        ]);
    });

    it('should not return any error when the variable is defined in the conditionalVariables', () => {
        const result = predefinedVariableCheck('conditionalVariables.demo_1', mockWorkflow, 'condition_1');

        expect(result.issues).toEqual([]);
    });

    it('should return an error when the variable is not found in the conditionalVariables', () => {
        const result = predefinedVariableCheck('conditionalVariables.module_5', mockWorkflow, 'condition1');

        expect(result.issues).toEqual([
            {
                type: "ERROR",
                text: "Conditional variable not found: module_5 in condition1",
                code: errors.CONDITIONAL_VARIABLE_NOT_FOUND,
            },
        ]);
    });

    it('should not return any error when the input variable is defined', () => {
        const result = predefinedVariableCheck('inputs.input1', mockWorkflow, 'condition1');

        expect(result.issues).toEqual([]);
    });

    it('should not return any error when the input variable is predefined', () => {
        const result = predefinedVariableCheck('inputs.transactionId', mockWorkflow, 'condition1');

        expect(result.issues).toEqual([]);
    });

    it('should return an error when the variable is not found in the inputs', () => {
        const result = predefinedVariableCheck('inputs.url', mockWorkflow, 'condition1');

        expect(result.issues).toEqual([
            {
                type: "ERROR",
                text: "Input not found: url in condition1",
                code: errors.INPUT_NOT_FOUND,
            },
        ]);
    });

});
