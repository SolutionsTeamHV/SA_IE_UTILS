const errorWarningExceptionList = [
/*     Example: 
    {
        path: "../buckets/hv-central-config/audit-portal/prod/workflow-builder/workflows/appIds/55a3a6/AnalyticsDemo.json",
        convertAllErrorsToWarnings: false,
        errorClasses: [
            {
                code: "INCORRECT_FORM_COMPONENT",
                reason: "",
                resolutionData: "19-11-2024",
                owner: "Prateek Kaistha",
            },
            {
                code: "UNVISITED_NODE",
                reason: "",
                resolutionData: "19-11-2024",
                owner: "Prateek Kaistha",
            }
        ],
    } */
    {
        path: "../buckets/hv-central-config/audit-portal/prod/workflow-builder/workflows/appIds/0ismsk/usa_user_onboarding_db_checks.json",
        convertAllErrorsToWarnings: false,
        errorClasses: [
            {
                code: "MODULE_ID_CONVENTION_ERROR",
                reason: "This workflow was created for a client a long time ago, and updating (to ensure BIPA compliance) the moduleId without notifying the client could pose a risk to their integration",
                resolutionData: "22-07-2025",
                owner: "Tuba Harmain",
            }
        ],
    },
    {
        path: "../buckets/hv-central-config/audit-portal/prod/workflow-builder/workflows/appIds/0ismsk/workflow_27xtMS0.json",
        convertAllErrorsToWarnings: false,
        errorClasses: [
            {
                code: "INCORRECT_MODULE",
                reason: "This workflow was created for a client a long time ago, and updating (to ensure BIPA compliance) the countries list without notifying the client could pose a risk to their integration",
                resolutionData: "22-07-2025",
                owner: "Tuba Harmain",
            }
        ],
    },
    {
        path: "../buckets/hv-central-config/audit-portal/prod/workflow-builder/workflows/appIds/26r0ug/usa_user_onboarding_db_checks.json",
        convertAllErrorsToWarnings: false,
        errorClasses: [
            {
                code: "MODULE_ID_CONVENTION_ERROR",
                reason: "This workflow was created for a client a long time ago, and updating (to ensure BIPA compliance) the moduleId without notifying the client could pose a risk to their integration",
                resolutionData: "22-07-2025",
                owner: "Tuba Harmain",
            }
        ],
    },
    {
        path: "../buckets/hv-central-config/audit-portal/prod/workflow-builder/workflows/appIds/26r0ug/workflow_27xtMS0.json",
        convertAllErrorsToWarnings: false,
        errorClasses: [
            {
                code: "INCORRECT_MODULE",
                reason: "This workflow was created for a client a long time ago, and updating (to ensure BIPA compliance) the countries list without notifying the client could pose a risk to their integration",
                resolutionData: "22-07-2025",
                owner: "Tuba Harmain",
            }
        ],
    },
    {
        path: "../buckets/hv-central-config/audit-portal/prod/workflow-builder/workflows/appIds/45ou6k/workflow_eAWDpGT.json",
        convertAllErrorsToWarnings: false,
        errorClasses: [
            {
                code: "INCORRECT_MODULE",
                reason: "This workflow was created for a client a long time ago, and updating (to ensure BIPA compliance) the API module without notifying the client could pose a risk to their integration",
                resolutionData: "22-07-2025",
                owner: "Tuba Harmain",
            }
        ],
    },
    {
        path: "../buckets/hv-central-config/audit-portal/prod/workflow-builder/workflows/appIds/cl8zku/workflow_openkart.json",
        convertAllErrorsToWarnings: false,
        errorClasses: [
            {
                code: "INCORRECT_MODULE",
                reason: "This workflow was created for a client a long time ago, and updating (to ensure BIPA compliance) the countries list without notifying the client could pose a risk to their integration",
                resolutionData: "22-07-2025",
                owner: "Tuba Harmain",
            }
        ],
    },
    {
        path: "../buckets/hv-central-config/audit-portal/prod/workflow-builder/workflows/appIds/ivurvl/operadora_workflow.json",
        convertAllErrorsToWarnings: false,
        errorClasses: [
            {
                code: "INCORRECT_MODULE",
                reason: "This workflow was created for a client a long time ago, and updating (to ensure BIPA compliance) the countries list without notifying the client could pose a risk to their integration",
                resolutionData: "22-07-2025",
                owner: "Tuba Harmain",
            }
        ],
    },
    {
        path: "../buckets/hv-central-config/audit-portal/prod/workflow-builder/workflows/appIds/jqabod/workflow_eAWDpGT.json",
        convertAllErrorsToWarnings: false,
        errorClasses: [
            {
                code: "INCORRECT_MODULE",
                reason: "This workflow was created for a client a long time ago, and updating (to ensure BIPA compliance) the API module without notifying the client could pose a risk to their integration",
                resolutionData: "22-07-2025",
                owner: "Tuba Harmain",
            }
        ],
    },
    {
        path: "../buckets/hv-central-config/audit-portal/prod/workflow-builder/workflows/appIds/l666g4/cprAuthTest.json",
        convertAllErrorsToWarnings: false,
        errorClasses: [
            {
                code: "MODULE_ID_CONVENTION_ERROR",
                reason: "This workflow was created for a client a long time ago, and updating (to ensure BIPA compliance) the moduleId without notifying the client could pose a risk to their integration",
                resolutionData: "22-07-2025",
                owner: "Tuba Harmain",
            }
        ],
    },
    {
        path: "../buckets/hv-central-config/audit-portal/prod/workflow-builder/workflows/appIds/x0edl7/workflow_fXxTDqc.json",
        convertAllErrorsToWarnings: false,
        errorClasses: [
            {
                code: "INCORRECT_MODULE",
                reason: "This workflow was created for a client a long time ago, and updating (to ensure BIPA compliance) the countries list without notifying the client could pose a risk to their integration",
                resolutionData: "22-07-2025",
                owner: "Tuba Harmain",
            }
        ],
    },
    {
        path: "../buckets/hv-central-config/audit-portal/prod/workflow-builder/workflows/appIds/55a3a6/hfc_twc_2.json",
        convertAllErrorsToWarnings: false,
        errorClasses: [
            {
                code: "INCORRECT_WORKFLOW",
                reason: "Client is using empty string from SDK response",
                resolutionData: "19-11-2024",
                owner: "Prateek Kaistha",
            },
            {
                code: "UNDEFINED_OPERAND",
                reason: "Use of undefined is needed to evaluate condition ( dummy reason )",
                resolutionData: "19-11-2024",
                owner: "Prateek Kaistha",
            }
        ],
    },
    {
        path: "../buckets/hv-central-config/audit-portal/prod/workflow-builder/workflows/appIds/qg3ogr/stableMoneyPoc.json",
        convertAllErrorsToWarnings: false,
        errorClasses: [
            {
                code: "VARIABLE_NOT_FOUND",
                reason: "This is a workflow created for client demo (stable money)  and won't be used in prod",
                resolutionData: "27-03-2025",
                owner: "Preeti Rana",
            }
        ],
    },

    {
        path: "../buckets/hv-central-config/audit-portal/prod/workflow-builder/workflows/clientIds/stable_money_nb/stableMoneyPoc/draft.json",
        convertAllErrorsToWarnings: false,
        errorClasses: [
            {
                code: "VARIABLE_NOT_FOUND",
                reason: "This is a workflow created for Client demo (stable money) and won't be used in prod",
                resolutionData: "27-03-2025",
                owner: "Preeti Rana",
            }
        ],
    },




    {
        path: "../buckets/hv-central-config/audit-portal/prod/workflow-builder/workflows/appIds/43jqhj/hfc_twl_2.json",
        convertAllErrorsToWarnings: false,
        errorClasses: [
            {
                code: "INCORRECT_WORKFLOW",
                reason: "Validator does not support legacy workflows. Client is using empty string from SDK response.",
                resolutionData: "19-11-2024",
                owner: "Manav Aggarwal",
            },
            {
                code: "UNDEFINED_OPERAND",
                reason: "Validator does not support legacy workflows. Use of undefined is needed to evaluate condition",
                resolutionData: "19-11-2024",
                owner: "Manav Aggarwal",
            }
        ],
    },
    {
        path: "../buckets/hv-central-config/audit-portal/prod/workflow-builder/workflows/appIds/43jqhj/hfc_twl_revamp.json",
        convertAllErrorsToWarnings: false,
        errorClasses: [
            {
                code: "INCORRECT_WORKFLOW",
                reason: "Validator does not support legacy workflows. Client is using empty string from SDK response",
                resolutionData: "19-11-2024",
                owner: "Manav Aggarwal",
            },
            {
                code: "UNDEFINED_OPERAND",
                reason: "Validator does not support legacy workflows. Use of undefined is needed to evaluate condition",
                resolutionData: "19-11-2024",
                owner: "Manav Aggarwal",
            }
        ],
    },
    {
        path: "../buckets/hv-central-config/audit-portal/prod/workflow-builder/workflows/appIds/n55cse/hfc_twl_2.json",
        convertAllErrorsToWarnings: false,
        errorClasses: [
            {
                code: "INCORRECT_WORKFLOW",
                reason: "Validator does not support legacy workflows. Client is using empty string from SDK response.",
                resolutionData: "19-11-2024",
                owner: "Manav Aggarwal",
            },
            {
                code: "UNDEFINED_OPERAND",
                reason: "Validator does not support legacy workflows. Use of undefined is needed to evaluate condition",
                resolutionData: "19-11-2024",
                owner: "Manav Aggarwal",
            }
        ],
    },
    {
        path: "../buckets/hv-central-config/audit-portal/prod/workflow-builder/workflows/appIds/n55cse/hfc_twl_revamp.json",
        convertAllErrorsToWarnings: false,
        errorClasses: [
            {
                code: "INCORRECT_WORKFLOW",
                reason: "Validator does not support legacy workflows. Client is using empty string from SDK response",
                resolutionData: "19-11-2024",
                owner: "Manav Aggarwal",
            },
            {
                code: "UNDEFINED_OPERAND",
                reason: "Validator does not support legacy workflows. Use of undefined is needed to evaluate condition",
                resolutionData: "19-11-2024",
                owner: "Manav Aggarwal",
            }
        ],
    },
    {
        path: "../buckets/hv-central-config/audit-portal/prod/workflow-builder/workflows/appIds/3dbq2b/sbi_mf_workflow.json",
        convertAllErrorsToWarnings: false,
        errorClasses: [
            {
                code: "INCORRECT_WORKFLOW",
                reason: "conditionalVariables.module_jL33p2_wetSignV1_signmode.name is not allowed to be empty",
                resolutionData: "20-11-2024",
                owner: "Sanskar Chandra",
            },
            {
                code: "INVALID_NEXT_STEP",
                reason: "INVALID_NEXT_STEP - Invalid next step: decline present in node: module_0ED6D4_cvl_kra_upload_lib_module_cvlkrauploadapi_genericApiV1 at path: default",
                resolutionData: "20-11-2024",
                owner: "Sanskar Chandra",
            },
            {
                code: "INCORRECT_FORM_COMPONENT",
                reason: "Component Schema error in component type: list component id: chip_list_id1_wi3OeP in module of type: dynamicForm module id: module_CYh65r_form  message: numberOfColumns must be a string",
                resolutionData: "20-11-2024",
                owner: "Sanskar Chandra",
            },
            {
                code: "INVALID_OPERAND",
                reason: "Invalid operand: sdk.platform in condition_module_ITPahE_email_otp_verification_condition_google_native_platform in rule undefined",
                resolutionData: "20-11-2024",
                owner: "Sanskar Chandra",
            },
            {
                code: "MODULE_NOT_FOUND",
                reason: "The variable used from module_NwzTNd_bav_verificationV4_module_error_bankIFSCForm_form doesn't exist as module is not defined",
                resolutionData: "20-11-2024",
                owner: "Sanskar Chandra",
            },
            {
                code: "MISSING_OPERATOR",
                reason: "Missing operator IN RULE",
                resolutionData: "20-11-2024",
                owner: "Sanskar Chandra",
            }
        ],
    },
    {
        path: "../buckets/hv-central-config/audit-portal/prod/workflow-builder/workflows/clientIds/sbi_mf/sbi_mf_workflow/draft.json",
        convertAllErrorsToWarnings: false,
        errorClasses: [
            {
                code: "INCORRECT_WORKFLOW",
                reason: "conditionalVariables.module_jL33p2_wetSignV1_signmode.name is not allowed to be empty",
                resolutionData: "20-11-2024",
                owner: "Sanskar Chandra",
            },
            {
                code: "INVALID_NEXT_STEP",
                reason: "INVALID_NEXT_STEP - Invalid next step: decline present in node: module_0ED6D4_cvl_kra_upload_lib_module_cvlkrauploadapi_genericApiV1 at path: default",
                resolutionData: "20-11-2024",
                owner: "Sanskar Chandra",
            },
            {
                code: "INCORRECT_FORM_COMPONENT",
                reason: "Component Schema error in component type: list component id: chip_list_id1_wi3OeP in module of type: dynamicForm module id: module_CYh65r_form  message: numberOfColumns must be a string",
                resolutionData: "20-11-2024",
                owner: "Sanskar Chandra",
            },
            {
                code: "INVALID_OPERAND",
                reason: "Invalid operand: sdk.platform in condition_module_ITPahE_email_otp_verification_condition_google_native_platform in rule undefined",
                resolutionData: "20-11-2024",
                owner: "Sanskar Chandra",
            },
            {
                code: "MODULE_NOT_FOUND",
                reason: "The variable used from module_NwzTNd_bav_verificationV4_module_error_bankIFSCForm_form doesn't exist as module is not defined",
                resolutionData: "20-11-2024",
                owner: "Sanskar Chandra",
            },
            {
                code: "MISSING_OPERATOR",
                reason: "Missing operator IN RULE",
                resolutionData: "20-11-2024",
                owner: "Sanskar Chandra",
            }
        ],
    },
    {
        path: "../buckets/hv-central-config/audit-portal/prod/workflow-builder/workflows/appIds/orzyub/icm-flow.json",
        convertAllErrorsToWarnings: false,
        errorClasses: [
            {
                code: "INCORRECT_WORKFLOW",
                reason: "INCORRECT_WORKFLOW - sdkResponse.Error is not allowed to be empty",
                resolutionData: "20-11-2024",
                owner: "Sanskar Chandra",
            },
            {
                code: "UNVISITED_NODE",
                reason: "UNVISITED_NODE - Component Schema error in component type: list component id: chip_list_id1_wi3OeP in module of type: dynamicForm module id: module_CYh65r_form  message: numberOfColumns must be a string",
                resolutionData: "20-11-2024",
                owner: "Sanskar Chandra",
            },
            {
                code: "INCORRECT_FORM_COMPONENT",
                reason: "INCORRECT_FORM_COMPONENT - Component Schema error in component type: date component id: dob in module of type: dynamicForm module id: module_panForm  message: title is required",
                resolutionData: "20-11-2024",
                owner: "Sanskar Chandra",
            },
            {
                code: "PARENTHESES_NOT_BALANCED",
                reason: "Unbalanced parentheses: Missing closing parentheses in taxDeclaration",
                resolutionData: "20-11-2024",
                owner: "Sanskar Chandra",
            }
        ],
    },
    {
        path: "../buckets/hv-central-config/audit-portal/prod/workflow-builder/workflows/appIds/xy6hh8/icm-flow.json",
        convertAllErrorsToWarnings: false,
        errorClasses: [
            {
                code: "INCORRECT_WORKFLOW",
                reason: "INCORRECT_WORKFLOW - sdkResponse.Error is not allowed to be empty",
                resolutionData: "20-11-2024",
                owner: "Sanskar Chandra",
            },
            {
                code: "UNVISITED_NODE",
                reason: "UNVISITED_NODE - Component Schema error in component type: list component id: chip_list_id1_wi3OeP in module of type: dynamicForm module id: module_CYh65r_form  message: numberOfColumns must be a string",
                resolutionData: "20-11-2024",
                owner: "Sanskar Chandra",
            },
            {
                code: "INCORRECT_FORM_COMPONENT",
                reason: "INCORRECT_FORM_COMPONENT - Component Schema error in component type: date component id: dob in module of type: dynamicForm module id: module_panForm  message: title is required -ERROR: RULE_CHECK",
                resolutionData: "20-11-2024",
                owner: "Sanskar Chandra",
            },
            {
                code: "PARENTHESES_NOT_BALANCED",
                reason: "PARENTHESES_NOT_BALANCED - Unbalanced parentheses: Missing closing parentheses in taxDeclaration",
                resolutionData: "20-11-2024",
                owner: "Sanskar Chandra",
            }
        ],
    },
    {
        path: "../buckets/hv-central-config/audit-portal/prod/workflow-builder/workflows/appIds/75af97/hfc_ompl_1.json",
        convertAllErrorsToWarnings: false,
        errorClasses: [
            {
                code: "INCORRECT_WORKFLOW",
                reason: "Validator does not support legacy workflows. Client is using empty string from SDK response",
                resolutionData: "21-11-2024",
                owner: "Aditya W and Lekh",
            },
            {
                code: "UNDEFINED_OPERAND",
                reason: "Validator does not support legacy workflows. Use of undefined is needed to evaluate condition",
                resolutionData: "21-11-2024",
                owner: "Aditya W and Lekh",
            },
            {
                code: "UNVISITED_NODE",
                reason: "This helps with better maintainability, reduced effort for change requests on our side",
                resolutionData: "21-11-2024",
                owner: "Aditya W and Lekh",
            }
        ],
    },
    {
        path: "../buckets/hv-central-config/audit-portal/prod/workflow-builder/workflows/appIds/55a3a6/test-workflows/payloadEncryptionTesting.json",
        convertAllErrorsToWarnings: true,
    },
    {
        path: "../buckets/hv-central-config/audit-portal/prod/workflow-builder/workflows/appIds/01jmqv/hfc_ucl_se.json",
        convertAllErrorsToWarnings: true,
    },
    {
        path: "../buckets/hv-central-config/audit-portal/prod/workflow-builder/workflows/appIds/0hbhey/kyc_flow_without_pan.json",
        convertAllErrorsToWarnings: true,
    },
    {
        path: "../buckets/hv-central-config/audit-portal/prod/workflow-builder/workflows/appIds/2kzdeh/ballebaazi_poa.json",
        convertAllErrorsToWarnings: true,
    },
    {
        path: "../buckets/hv-central-config/audit-portal/prod/workflow-builder/workflows/appIds/3okkhb/hfc_lplmobile_2.json",
        convertAllErrorsToWarnings: true,
    },
    {
        path: "../buckets/hv-central-config/audit-portal/prod/workflow-builder/workflows/appIds/9snft7/hfc_paytm_1.json",
        convertAllErrorsToWarnings: true,
    },
    {
        path: "../buckets/hv-central-config/audit-portal/prod/workflow-builder/workflows/appIds/a85cft/hfc_pzb_1.json",
        convertAllErrorsToWarnings: true,
    },
    {
        path: "../buckets/hv-central-config/audit-portal/prod/workflow-builder/workflows/appIds/irixts/hfc_lplchatbot_1.json",
        convertAllErrorsToWarnings: true,
    },
    {
        path: "../buckets/hv-central-config/audit-portal/prod/workflow-builder/workflows/appIds/j4fl96/OmLogistics.json",
        convertAllErrorsToWarnings: true,
    },
    {
        path: "../buckets/hv-central-config/audit-portal/prod/workflow-builder/workflows/appIds/jde17p/hfc_padmasai_1.json",
        convertAllErrorsToWarnings: true,
    },
    {
        path: "../buckets/hv-central-config/audit-portal/prod/workflow-builder/workflows/appIds/km7z83/kyc_flow_without_pan.json",
        convertAllErrorsToWarnings: true,
    },
    {
        path: "../buckets/hv-central-config/audit-portal/prod/workflow-builder/workflows/appIds/le2isl/hfc_lpl_1.json",
        convertAllErrorsToWarnings: true,
    },
    {
        path: "../buckets/hv-central-config/audit-portal/prod/workflow-builder/workflows/appIds/liw2e3/portal_kyc_flow.json",
        convertAllErrorsToWarnings: true,
    },
    {
        path: "../buckets/hv-central-config/audit-portal/prod/workflow-builder/workflows/appIds/ljr1yf/CKYC_OVD_WF2.json",
        convertAllErrorsToWarnings: true,
    },
    {
        path: "../buckets/hv-central-config/audit-portal/prod/workflow-builder/workflows/appIds/nh7652/kyc_flow.json",
        convertAllErrorsToWarnings: true,
    },
    {
        path: "../buckets/hv-central-config/audit-portal/prod/workflow-builder/workflows/appIds/ordmwo/kyc_flow_without_pan.json",
        convertAllErrorsToWarnings: true,
    },
    {
        path: "../buckets/hv-central-config/audit-portal/prod/workflow-builder/workflows/appIds/q18n9u/hfc_ubl_1.json",
        convertAllErrorsToWarnings: true,
    },
    {
        path: "../buckets/hv-central-config/audit-portal/prod/workflow-builder/workflows/appIds/q4m8op/icm-flow.json",
        convertAllErrorsToWarnings: true,
    },
    {
        path: "../buckets/hv-central-config/audit-portal/prod/workflow-builder/workflows/appIds/q4m8op/icm-partial.json",
        convertAllErrorsToWarnings: true,
    },
    {
        path: "../buckets/hv-central-config/audit-portal/prod/workflow-builder/workflows/appIds/qunlh3/cipherepay.json",
        convertAllErrorsToWarnings: true,
    },
    {
        path: "../buckets/hv-central-config/audit-portal/prod/workflow-builder/workflows/appIds/r9f9lm/hfc_ompl_1.json",
        convertAllErrorsToWarnings: true,
    },
    {
        path: "../buckets/hv-central-config/audit-portal/prod/workflow-builder/workflows/appIds/tybqlg/kyc_flow.json",
        convertAllErrorsToWarnings: true,
    },
    {
        path: "../buckets/hv-central-config/audit-portal/prod/workflow-builder/workflows/appIds/tybqlg/zuno_oem_kyc_kyb_flow.json",
        convertAllErrorsToWarnings: true,
    },
    {
        path: "../buckets/hv-central-config/audit-portal/prod/workflow-builder/workflows/appIds/uaciic/IFA_Journey.json",
        convertAllErrorsToWarnings: true,
    },
    {
        path: "../buckets/hv-central-config/audit-portal/prod/workflow-builder/workflows/appIds/uaciic/user_journey.json",
        convertAllErrorsToWarnings: true,
    },
    {
        path: "../buckets/hv-central-config/audit-portal/prod/workflow-builder/workflows/appIds/up5jcs/hfc_cv_1.json",
        convertAllErrorsToWarnings: true,
    },
    {
        path: "../buckets/hv-central-config/audit-portal/prod/workflow-builder/workflows/appIds/55a3a6/test-workflows/reloadComponents_workflow.json",
        convertAllErrorsToWarnings: true,
    },
    {
        path: "../buckets/hv-central-config/audit-portal/prod/workflow-builder/workflows/appIds/55a3a6/mobileOTP_consent_4xlref.json",
        convertAllErrorsToWarnings: true,
    },
    {
        path: "../buckets/hv-central-config/audit-portal/prod/workflow-builder/workflows/appIds/55a3a6/digi_aml_qytddp.json",
        convertAllErrorsToWarnings: true,
    }
];

module.exports = {
    errorWarningExceptionList,
};