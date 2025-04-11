const { validateNamingConventions } = require("../namingConventionValiadtion");
const { errors } = require('../../constants/errorCodes');

describe("validateNamingConventions", () => {
    test("returns no issues for valid module and condition IDs", () => {
        const workflow = {
            modules: [
                { id: "module_123" },
                { id: "module_abc" },
            ],
            conditions: {
                condition_valid1: {},
                condition_valid2: {},
            },
        };

        const result = validateNamingConventions(workflow);

        expect(result.issues).toEqual([]);
    });

    test("detects invalid module IDs", () => {
        const workflow = {
            modules: [
                { id: "module_123" },
                { id: "invalidModule" },
            ],
            conditions: {
                condition_valid1: {},
            },
        };

        const result = validateNamingConventions(workflow);

        expect(result.issues).toEqual([
            {
                type: "ERROR",
                text: "Module ID 'invalidModule' is invalid. It should start with 'module_'.",
                code: errors.MODULE_ID_CONVENTION_ERROR,
            },
        ]);
    });

    test("detects invalid condition IDs", () => {
        const workflow = {
            modules: [
                { id: "module_123" },
            ],
            conditions: {
                condition_valid1: {},
                invalidCondition: {},
            },
        };

        const result = validateNamingConventions(workflow);

        expect(result.issues).toEqual([
            {
                type: "ERROR",
                text: "Condition ID 'invalidCondition' is invalid. It should start with 'condition_'.",
                code: errors.CONDITION_ID_CONVENTION_ERROR,
            },
        ]);
    });

    test("detects both invalid module and condition IDs", () => {
        const workflow = {
            modules: [
                { id: "invalidModule" },
            ],
            conditions: {
                invalidCondition: {},
            },
        };

        const result = validateNamingConventions(workflow);

        expect(result.issues).toEqual([
            {
                type: "ERROR",
                text: "Module ID 'invalidModule' is invalid. It should start with 'module_'.",
                code: errors.MODULE_ID_CONVENTION_ERROR,
            },
            {
                type: "ERROR",
                text: "Condition ID 'invalidCondition' is invalid. It should start with 'condition_'.",
                code: errors.CONDITION_ID_CONVENTION_ERROR,
            },
        ]);
    });

    test("handles empty workflow gracefully", () => {
        const workflow = {};

        const result = validateNamingConventions(workflow);

        expect(result.issues).toEqual([]);
    });
});
