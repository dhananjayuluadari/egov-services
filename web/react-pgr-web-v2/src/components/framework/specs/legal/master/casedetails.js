var dat = {
    "legal.update": {
        numCols: 4,
        title: "legal.create.caseDetails",
        useTimestamp: true,
        objectName: "cases",
        searchUrl: "/lcms-services/legalcase/case/_search?code={code}",
        documentsPath: "cases[0].summon",
        groups: [
         {
        name: "CaseType",
        label: "legal.create.group.title.CaseType",
        fields: [
          {
            name: "isSummon",
            jsonPath: "cases[0].summon.isSummon",
            label: "legal.create.isSummon",
            type: "radio",
            styleObj:{"display": "-webkit-box"},
            isRequired: true,
            isDisabled: false,
            patternErrorMsg: "",
            values: [
              {
                label: "legal.create.Summon",
                value: true
              },
              {
                label: "legal.create.Warrant",
                value: false
              }
            ]          }
        ]
      },
            {
                name: "CaseTypeDetails",
                label: "legal.create.group.title.CaseTypeDetails",
                fields: [
                {
            name: "orignatedBYULB",
            jsonPath: "cases[0].summon.orignatedBYULB",
            label: "legal.create.orignatedBYULB",
            type: "checkbox",
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: ""
          },
                    {
                        name: "referenceNo",
                        jsonPath: "cases[0].summon.summonReferenceNo",
                        label: "legal.create.referenceNo",
                        type: "text",
                        isRequired: false,
                        isDisabled: false,
                        patternErrorMsg: ""
                    },
                    {
                        name: "summonDate",
                        jsonPath: "cases[0].summon.summonDate",
                        label: "legal.create.summonDate",
                        type: "datePicker",
                        isRequired: false,
                        isDisabled: false,
                        patternErrorMsg: ""
                    },
                    {
                        name: "year",
                        jsonPath: "cases[0].summon.year",
                        label: "legal.create.year",
                        type: "singleValueList",
                        isRequired: true,
                        isDisabled: false,
                        url:
                        "/egov-mdms-service/v1/_get?&moduleName=lcms&masterName=year|$..code|$..name",
                        patternErrorMsg: ""
                    }, {
                        name: "side",
                        jsonPath: "cases[0].summon.side.code",
                        label: "legal.create.side",
                        type: "singleValueList",
                        isRequired: true,
                        isDisabled: false,
                        patternErrorMsg: "",
                        url:
                        "/egov-mdms-service/v1/_get?&moduleName=lcms&masterName=side|$..code|$..name"
                    },
                    {
                        name: "caseType",
                        jsonPath: "cases[0].summon.caseType.code",
                        label: "legal.create.caseType",
                        type: "singleValueList",
                        isRequired: true,
                        isDisabled: false,
                        patternErrorMsg: "",
                        url:
                        "/egov-mdms-service/v1/_get?&moduleName=lcms&masterName=caseType|$..code|$..name"
                    },
                    {
                        name: "plantiffName",
                        jsonPath: "cases[0].summon.plantiffName",
                        label: "legal.create.plantiffName",
                        type: "text",
                        isRequired: true,
                        isDisabled: false,
                        patternErrorMsg: ""
                    },
                    {
                        name: "caseNo",
                        jsonPath: "cases[0].summon.caseNo",
                        label: "legal.create.caseNo",
                        type: "text",
                        isRequired: true,
                        isDisabled: false,
                        patternErrorMsg: ""
                    },
                    {
                        name: "plantiffAddress",
                        jsonPath: "cases[0].summon.plantiffAddress.addressLine1",
                        label: "legal.create.plantiffAddress",
                        type: "text",
                        isRequired: true,
                        isDisabled: false,
                        patternErrorMsg: ""
                    },
                    {
                        name: "caseDetails",
                        jsonPath: "cases[0].summon.caseDetails",
                        label: "legal.create.caseDetails",
                        type: "textarea",
                        fullWidth: true,
                        isRequired: true,
                        isDisabled: false,
                        patternErrorMsg: ""
                    },
                    {
                        name: "defendant",
                        jsonPath: "cases[0].summon.defendant",
                        label: "legal.create.defendant",
                        type: "text",
                        isRequired: true,
                        isDisabled: false,
                        patternErrorMsg: ""
                    },
                    {
                        name: "departmentName",
                        jsonPath: "cases[0].summon.departmentName.code",
                        label: "legal.create.departmentName",
                        type: "singleValueList",
                        isRequired: true,
                        isDisabled: false,
                        patternErrorMsg: "",
                        url: "/egov-common-masters/departments/_search?|$..code|$..name",
                        depedants: [
                            {
                                jsonPath: "cases[0].departmentPerson",
                                type: "dropDown",
                                pattern:
                                "/hr-employee/employees/_search?tenantId=default&departmentId={cases[0].summon.departmentName.id}|$..name|$..name"
                            }
                        ]
                    },
                    {
                        name: "courtName",
                        jsonPath: "cases[0].summon.courtName.code",
                        label: "legal.create.courtName",
                        type: "singleValueList",
                        isRequired: true,
                        isDisabled: false,
                        patternErrorMsg: "",
                        url:
                        "/egov-mdms-service/v1/_get?&moduleName=lcms&masterName=court|$..code|$..name"
                    },
                    {
                        name: "hearingTime",
                        jsonPath: "cases[0].summon.hearingTime",
                        label: "legal.create.hearingTime",
                        type: "timePicker",
                        isRequired: false,
                        isDisabled: false,
                        patternErrorMsg: ""
                    },
                    {
                        name: "hearingDate",
                        jsonPath: "cases[0].summon.hearingDate",
                        label: "legal.create.hearingDate",
                        type: "datePicker",
                        isRequired: true,
                        isDisabled: false,
                        patternErrorMsg: ""
                    },
                    {
                        name: "ward",
                        jsonPath: "cases[0].summon.ward",
                        label: "legal.create.ward",
                        type: "singleValueList",
                        isRequired: true,
                        isDisabled: false,
                        patternErrorMsg: "",
                        url: "/egov-location/boundarys/getByBoundaryType?tenantId=default&boundaryTypeId=10|$.Boundary.*.id|$.Boundary.*.name"
                    },
                    {
                        name: "stamp",
                        jsonPath: "cases[0].summon.register.code",
                        label: "legal.create.stamp",
                        type: "singleValueList",
                        isRequired: true,
                        isDisabled: false,
                        patternErrorMsg: "",
                        url:
                        "/lcms-services/legalcase/register/_search?|$..code|$..register"
                    },
                    {
                        name: "bench",
                        jsonPath: "cases[0].summon.bench.code",
                        label: "legal.create.bench",
                        type: "singleValueList",
                        isRequired: true,
                        isDisabled: false,
                        patternErrorMsg: "",
                        url:
                        "/egov-mdms-service/v1/_get?&moduleName=lcms&masterName=bench|$..code|$..name"
                    },
                    {
                        name: "sectionApplied",
                        jsonPath: "cases[0].summon.sectionApplied",
                        label: "legal.create.sectionApplied",
                        type: "text",
                        isRequired: false,
                        isDisabled: false,
                        patternErrorMsg: ""
                    }
                ]
            },
            {
                name: "UploadDocument",
                label: "legal.create.group.title.UploadDocument",
                fields: [
                    {
                        "name": "UploadDocument",
                        "jsonPath": "cases[0].summon.documents",
                        "label": "legal.create.sectionApplied",
                        "type": "fileTable",
                        "isRequired": false,
                        "isDisabled": false,
                        "patternErrMsg": "",
                        "fileList": {
                            "name": "documentName",
                            "id": "fileStoreId"
                        },
                        "fileCount": 3
                    }
                ]
            }    
        ],
         url:
      "/lcms-services/legalcase/summon/_update",
    tenantIdRequired: true
         
    },
  "legal.view": {
        numCols: 4,
        title: "legal.create.caseDetails",
        useTimestamp: true,
        objectName: "cases",
        url: "/lcms-services/legalcase/case/_search?code={id}&searchResultLevel=full",
        documentsPath: "cases[0].summon",
        groups: [
            {
                name: "CaseTypeDetails",
                label: "legal.create.group.title.CaseTypeDetails",
                fields: [
                    {
                        name: "CaseType",
                        jsonPath: "cases[0].summon.entryType",
                        label: "legal.create.group.title.CaseType",
                        type: "text",
                        isRequired: false,
                        isDisabled: false,
                        patternErrorMsg: ""
                    },
                    {
                        name: "referenceNo",
                        jsonPath: "cases[0].summon.summonReferenceNo",
                        label: "legal.create.referenceNo",
                        type: "text",
                        isRequired: false,
                        isDisabled: false,
                        patternErrorMsg: ""
                    },
                    {
                        name: "summonDate",
                        jsonPath: "cases[0].summon.summonDate",
                        label: "legal.create.summonDate",
                        type: "datePicker",
                        isRequired: false,
                        isDisabled: false,
                        patternErrorMsg: ""
                    },
                    {
                        name: "year",
                        jsonPath: "cases[0].summon.year",
                        label: "legal.create.year",
                        type: "text",
                        isRequired: true,
                        isDisabled: false,
                        url:
                        "/egov-mdms-service/v1/_get?&moduleName=lcms&masterName=year|$..code|$..name",
                        patternErrorMsg: ""
                    }, {
                        name: "side",
                        jsonPath: "cases[0].summon.side.code",
                        label: "legal.create.side",
                        type: "text",
                        isRequired: true,
                        isDisabled: false,
                        patternErrorMsg: "",
                        url:
                        "/egov-mdms-service/v1/_get?&moduleName=lcms&masterName=side|$..code|$..name"
                    },
                    {
                        name: "caseType",
                        jsonPath: "cases[0].summon.caseType.code",
                        label: "legal.create.caseType",
                        type: "text",
                        isRequired: true,
                        isDisabled: false,
                        patternErrorMsg: "",
                        url:
                        "/egov-mdms-service/v1/_get?&moduleName=lcms&masterName=caseType|$..code|$..name"
                    },
                    {
                        name: "plantiffName",
                        jsonPath: "cases[0].summon.plantiffName",
                        label: "legal.create.plantiffName",
                        type: "text",
                        isRequired: true,
                        isDisabled: false,
                        patternErrorMsg: ""
                    },
                    {
                        name: "caseNo",
                        jsonPath: "cases[0].summon.caseNo",
                        label: "legal.create.caseNo",
                        type: "text",
                        isRequired: true,
                        isDisabled: false,
                        patternErrorMsg: ""
                    },
                    {
                        name: "plantiffAddress",
                        jsonPath: "cases[0].summon.plantiffAddress.addressLine1",
                        label: "legal.create.plantiffAddress",
                        type: "text",
                        isRequired: true,
                        isDisabled: false,
                        patternErrorMsg: ""
                    },
                    {
                        name: "caseDetails",
                        jsonPath: "cases[0].summon.caseDetails",
                        label: "legal.create.caseDetails",
                        type: "textarea",
                        fullWidth: true,
                        isRequired: true,
                        isDisabled: false,
                        patternErrorMsg: ""
                    },
                    {
                        name: "defendant",
                        jsonPath: "cases[0].summon.defendant",
                        label: "legal.create.defendant",
                        type: "text",
                        isRequired: true,
                        isDisabled: false,
                        patternErrorMsg: ""
                    },
                    {
                        name: "departmentName",
                        jsonPath: "cases[0].summon.departmentName.code",
                        label: "legal.create.departmentName",
                        type: "text",
                        isRequired: true,
                        isDisabled: false,
                        patternErrorMsg: "",
                        url: "/egov-common-masters/departments/_search?|$..code|$..name"
                    },
                    {
                        name: "courtName",
                        jsonPath: "cases[0].summon.courtName.code",
                        label: "legal.create.courtName",
                        type: "text",
                        isRequired: true,
                        isDisabled: false,
                        patternErrorMsg: "",
                        url:
                        "/egov-mdms-service/v1/_get?&moduleName=lcms&masterName=court|$..code|$..name"
                    },
                    {
                        name: "hearingTime",
                        jsonPath: "cases[0].summon.hearingTime",
                        label: "legal.create.hearingTime",
                        type: "timePicker",
                        isRequired: false,
                        isDisabled: false,
                        patternErrorMsg: ""
                    },
                    {
                        name: "hearingDate",
                        jsonPath: "cases[0].summon.hearingDate",
                        label: "legal.create.hearingDate",
                        type: "datePicker",
                        isRequired: true,
                        isDisabled: false,
                        patternErrorMsg: ""
                    },
                    {
                        name: "ward",
                        jsonPath: "cases[0].summon.ward",
                        label: "legal.create.ward",
                        type: "text",
                        isRequired: true,
                        isDisabled: false,
                        patternErrorMsg: "",
                        url: "/egov-location/boundarys/getByBoundaryType?tenantId=default&boundaryTypeId=10|$.Boundary.*.id|$.Boundary.*.name"
                    },
                    {
                        name: "stamp",
                        jsonPath: "cases[0].summon.register.code",
                        label: "legal.create.stamp",
                        type: "text",
                        isRequired: true,
                        isDisabled: false,
                        patternErrorMsg: "",
                        url:
                        "/lcms-services/legalcase/register/_search?|$..code|$..register"
                    },
                    {
                        name: "bench",
                        jsonPath: "cases[0].summon.bench.code",
                        label: "legal.create.bench",
                        type: "text",
                        isRequired: true,
                        isDisabled: false,
                        patternErrorMsg: "",
                        url:
                        "/egov-mdms-service/v1/_get?&moduleName=lcms&masterName=bench|$..code|$..name"
                    },
                    {
                        name: "sectionApplied",
                        jsonPath: "cases[0].summon.sectionApplied",
                        label: "legal.create.sectionApplied",
                        type: "text",
                        isRequired: false,
                        isDisabled: false,
                        patternErrorMsg: ""
                    }
                ]
            },
            {
                name: "caseDetails",
                label: "",
                fields: [
                    {
                        name: "departmentConcernedPerson",
                        jsonPath: "cases[0].departmentPerson",
                        label: "caseRegistration.create.departmentConcernedPerson",
                        type: "text",
                        isRequired: false,
                        isDisabled: false,
                        patternErrorMsg: "",
                        defaultValue: [],
                        url: ""
                    },
                    {
                        name: "caseRegistrationDate",
                        jsonPath: "cases[0].caseRegistrationDate",
                        label: "caseRegistration.create.caseRegistrationDate",
                        type: "datePicker",
                        isRequired: true,
                        isDisabled: false,
                        patternErrorMsg: ""
                    }
                ]
            },
            {
                name: "assignAdvocate",
                label: "legal.create.group.title.assignAdvocate",
                fields: [
                    {
                        type: "tableList",
                        jsonPath: "cases[0].advocateDetails",
                        tableList: {
                            actionsNotRequired: true,
                            header: [
                                {
                                    label: "legal.create.advocateName"
                                },
                                {
                                    label: "legal.create.advocateAssignDate"
                                },
                                {
                                    label: "legal.create.advocateStatus"
                                }
                            ],
                            values: [
                                {
                                    name: "advocateName",
                                    pattern: "",
                                    type: "text",
                                    jsonPath: "cases[0].advocateDetails[0].advocate.code",
                                    isRequired: true,
                                    isDisabled: true,
                                    url:
                                    "/lcms-services/legalcase/advocate/_search?|$..code|$..name"
                                },
                                {
                                    name: "advocateAssignDate",
                                    pattern: "",
                                    type: "datePicker",
                                    jsonPath: "cases[0].advocateDetails[0].assignedDate",
                                    isRequired: true,
                                    isDisabled: true
                                },
                                 {
                                      name: "advocatestaus",
                                      pattern: "",
                                      type: "text",
                                      jsonPath: "cases[0].advocateDetails[0].advocate.status",
                                      isRequired: false,
                                      isDisabled: true
                                 }
                            ]
                        }
                    }
                ]
            },
            {
                name: "caseDetails",
                label: "caseRegistration.create.group.title.caseDetails",
                fields: [
                    {
                        name: "referenceCaseNo",
                        jsonPath: "cases[0].summon.summonReferenceNo",
                        label: "caseRegistration.create.referenceCaseNo",
                        type: "text",
                        isRequired: false,
                        isDisabled: false,
                        patternErrorMsg: ""
                    },
                    {
                        name: "departmentConcernedPerson",
                        jsonPath: "cases[0].departmentPerson",
                        label: "caseRegistration.create.departmentConcernedPerson",
                        type: "text",
                        isRequired: true,
                        isDisabled: false,
                        patternErrorMsg: "",
                        defaultValue: [],
                        url: ""
                    },
                    {
                        name: "caseRegistrationDate",
                        jsonPath: "cases[0].caseRegistrationDate",
                        label: "caseRegistration.create.caseRegistrationDate",
                        type: "datePicker",
                        isRequired: true,
                        isDisabled: false,
                        patternErrorMsg: ""
                    }
                ]
            },
            {
                name: "UploadDocument",
                label: "legal.create.group.title.DownloadDocument",
                fields: [
                    {
                        "name": "UploadDocument",
                        "jsonPath": "cases[0].summon.documents",
                        "label": "legal.create.sectionApplied",
                        "type": "fileTable",
                        "configlabel" : true,
                        "screenView":true,
                        "isRequired": false,
                        "isDisabled": false,
                        "patternErrMsg": "",
                        "fileList": {
                            "name": "documentName",
                            "id": "fileStoreId"
                        },
                        "fileCount": 3
                    }
                ]
            },
            {
                label: "legal.vakalatnama.create.group.title.generateVakalatnama",
                name: "Vakalatnama",
                fields: [
                    {
                        name: "caseNumber",
                        jsonPath: "cases[0].summon.caseNo",
                        label: "legal.vakalatnama.create.caseNumber",
                        pattern: "",
                        type: "text",
                        isRequired: true,
                        isDisabled: true,
                        requiredErrMsg: "",
                        patternErrMsg: ""
                    },
                    {
                        name: "exhibitNumber",
                        jsonPath: "exhibitNumber",
                        label: "legal.vakalatnama.create.exhibitNumber",
                        pattern: "",
                        type: "text",
                        isRequired: false,
                        isDisabled: false,
                        requiredErrMsg: "",
                        patternErrMsg: ""
                    },
                    {
                        name: "chiefOfficerDetails",
                        jsonPath: "cases[0].coName",
                        label: "legal.vakalatnama.create.chiefOfficerDetails",
                        pattern: "",
                        type: "text",
                        isRequired: false,
                        isDisabled: false,
                        requiredErrMsg: "",
                        patternErrMsg: ""
                    },
                    {
                        name: "vakalatnamDate",
                        jsonPath: "cases[0].vakalatnamaGenerationDate",
                        label: "legal.vakalatnama.create.vakalatnamaDate",
                        pattern: "",
                        type: "datePicker",
                        isRequired: true,
                        isDisabled: false,
                        requiredErrMsg: "",
                        patternErrMsg: ""
                    },
                    {
                        name: "courtName",
                        jsonPath: "cases[0].summon.courtName.code",
                        label: "legal.create.courtName",
                        type: "text",
                        isRequired: false,
                        isDisabled: false,
                        patternErrorMsg: "",
                        url:
                        "/egov-mdms-service/v1/_get?&moduleName=lcms&masterName=court|$..code|$..name"
                    },
                    {
                        name: "addWitness",
                        jsonPath: "cases[0].witness",
                        label: "legal.vakalatnama.create.addWitness",
                        pattern: "",
                        type: "arrayText",
                        isRequired: true,
                        isDisabled: false,
                        requiredErrMsg: "",
                        patternErrMsg: ""
                    },
                    {
                        name: "GenerateVakalatnama",
                        jsonPath: "cases[0].isVakalatnamaGenerated",
                        label: "legal.vakalatnama.create.generateVakalatnama",
                        pattern: "",
                        type: "checkbox",
                        isRequired: true,
                        isDisabled: false,
                        requiredErrMsg: "",
                        patternErrMsg: "",
                        "enableDisableFields": [{
                            "ifValue": true,
                            "disable": [],
                            "enable": ["exhibitNumber"]
                        }]
                    }
                ]
            },
            {
                name: "hearingdetails",
                label: "legal.create.group.title.hearingDetails",
                fields: [
                    {
                        type: "tableList",
                        jsonPath: "cases[0].hearingDetails",
                        tableList: {
                            actionsNotRequired: true,
                            header: [
                                {
                                    label: "legal.create.caseStatus"
                                },
                                {
                                    label: "legal.create.caseFinalDecision"
                                },
                                {
                                    label: "legal.create.caseJudgement"
                                },
                                {
                                    label: "legal.create.nextHearingDate"
                                }
                            ],
                            values: [
                                {
                                    name: "caseStatus",
                                    pattern: "",
                                    jsonPath: "cases[0].hearingDetails[0].caseStatus.code",
                                    type: "text",
                                    isRequired: true,
                                    isDisabled: true,
                                    patternErrorMsg: "",
                                    url: "/egov-mdms-service/v1/_get?&moduleName=lcms&masterName=caseStatus|$..code|$..name"
                                },
                                {
                                    name: "caseFinalDecision",
                                    pattern: "",
                                    jsonPath: "cases[0].hearingDetails[0].caseFinalDecision",
                                    type: "text",
                                    isRequired: true,
                                    isDisabled: true,
                                    patternErrorMsg: ""
                                },
                                {
                                    name: "caseJudgeMent",
                                    pattern: "",
                                    jsonPath: "cases[0].hearingDetails[0].caseJudgeMent",
                                    type: "text",
                                    isRequired: true,
                                    isDisabled: true,
                                    patternErrorMsg: ""
                                }, {
                                    name: "nextHearingDate",
                                    pattern: "",
                                    jsonPath: "cases[0].hearingDetails[0].nextHearingDate",
                                    type: "datePicker",
                                    isRequired: false,
                                    isDisabled: true,
                                    patternErrorMsg: ""
                                }
                            ]
                        }
                    }
                ]
            },
            {
                name: "parawisecomments",
                label: "legal.parawisecomments.create.group.title.parawiseComment",
                fields: [
                    {
                        type: "tableList",
                        jsonPath: "cases[0].parawiseComments",
                        tableList: {
                            actionsNotRequired: true,
                            header: [
                                {
                                    label: "legal.parawisecomments.create.dateOfCommentsAsked"
                                },
                                {
                                    label: "legal.parawisecomments.create.dateOfCommentsReceived"
                                },
                                {
                                      label: "legal.parawisecomments.create.dateOfInfoProvidedByHod",
                                },
                                {
                                    label: "legal.parawisecomments.create.resolutionDate"
                                },
                                {
                                    label: "legal.parawisecomments.create.group.parawiseComments"
                                }
                            ],
                            values: [
                                {
                                    name: "parawiseCommentsAskedDate",
                                    jsonPath: "cases[0].parawiseComments[0].parawiseCommentsAskedDate",
                                    pattern: "",
                                    type: "datePicker",
                                    isRequired: true,
                                    isDisabled: true,
                                    requiredErrMsg: "",
                                    patternErrMsg: ""
                                },
                                {
                                    name: "parawiseCommentsReceivedDate",
                                    jsonPath:
                                    "cases[0].parawiseComments[0].parawiseCommentsReceivedDate",
                                    pattern: "",
                                    type: "datePicker",
                                    isRequired: true,
                                    isDisabled: true,
                                    requiredErrMsg: "",
                                    patternErrMsg: ""
                                },
                                {
                                    name: "hodProvidedDate",
                                    jsonPath: "cases[0].parawiseComments[0].hodProvidedDate",
                                    pattern: "",
                                    type: "datePicker",
                                    isRequired: true,
                                    isDisabled: true,
                                    requiredErrMsg: "",
                                    patternErrMsg: ""
                                },
                                {
                                    name: "resolutionDate",
                                    jsonPath: "cases[0].parawiseComments[0].resolutionDate",
                                    pattern: "",
                                    type: "datePicker",
                                    isRequired: true,
                                    isDisabled: true,
                                    requiredErrMsg: "",
                                    patternErrMsg: ""
                                },
                                {
                                    name: "paraWiseComments",
                                    jsonPath: "cases[0].parawiseComments[0].paraWiseComments",
                                    pattern: "",
                                    type: "textarea",
                                    fullWidth: true,
                                    isRequired: true,
                                    isDisabled: true,
                                    requiredErrMsg: "",
                                    patternErrMsg: ""
                                }
                            ]
                        }
                    }
                ]
            },
            {
                name: "addReferenceEvidences",
                label: "referenceEvidence.create.group.title.addReferenceEvidences",
                fields: [
                    {
                        type: "tableList",
                        jsonPath: "cases[0].referenceEvidences",
                        tableList: {
                            actionsNotRequired: true,
                            header: [
                                {
                                    label: "referenceEvidence.create.typeOfReference"
                                },
                                {
                                    label: "referenceEvidence.create.referenceDate"
                                },
                                {
                                    label: "referenceEvidence.create.description"
                                }
                            ],
                            values: [
                                {
                                    name: "typeOfReference",
                                    jsonPath: "cases[0].referenceEvidences[0].referenceType",
                                    type: "text",
                                    isRequired: false,
                                    isDisabled: true,
                                    patternErrorMsg: ""
                                },
                                {
                                    name: "referenceDate",
                                    jsonPath: "cases[0].referenceEvidences[0].referenceDate",
                                    type: "datePicker",
                                    isRequired: false,
                                    isDisabled: true,
                                    patternErrorMsg: ""
                                },
                                {
                                    name: "description",
                                    jsonPath: "cases[0].referenceEvidences[0].description",
                                    type: "textarea",
                                    fullWidth: true,
                                    isRequired: true,
                                    isDisabled: true,
                                    patternErrorMsg: ""
                                }
                            ]
                        }
                    }
                ]
            }
        ],
        tenantIdRequired: true
    }
};
export default dat;
