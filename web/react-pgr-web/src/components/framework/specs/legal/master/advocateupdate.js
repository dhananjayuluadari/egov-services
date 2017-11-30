var dat = {
   "legal.update": {
    numCols: 4,
    title:"advocates.update.document.title",
    useTimestamp: true,
    objectName: "advocates",
    searchUrl:
      "/lcms-services/legalcase/advocate/_search?code={id}",
    groups: [
      {
        name: "applicantType",
        label: "advocates.create.group.title.applicantType",
        fields: [
          {
            name: "primaryOwner",
            jsonPath: "advocates[0].isIndividual",
            label: "advocates.create.primaryOwner",
            type: "radio",
            styleObj:{"display": "-webkit-box"},
            isRequired: true,
            isDisabled: false,
            patternErrorMsg: "",
            values: [
              {
                label: "advocates.create.individual",
                value: true
              },
              {
                label: "advocates.create.Agency_Organization",
                value: false
              }
            ],
            defaultValue:true,
            "showHideFields": [{
              "ifValue":true,
              "hide": [{
                "name": "agencyDetails",
                "isGroup": true,
                "isField": false
                 }],
              "show": [{
             "name": "personalDetails",
             "isGroup": true,
             "isField": false
              }]
             },{
              "ifValue":false,
              "show": [{
                "name": "agencyDetails",
                "isGroup": true,
                "isField": false
                 }],
              "hide": [{
             "name": "personalDetails",
             "isGroup": true,
             "isField": false
              }]
             }],
          }
        ]
      }, {
        name: "agencyDetails",
        hide:true,
        label: "advocates.create.group.title.agencyDetails",
        fields: [
          {
            name: "organizationName",
            jsonPath: "advocates[0].organizationName",
            label: "advocates.create.agencOrganizationName",
            type: "text",
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: ""
          },{
            name: "advocateTitle",
            jsonPath: "advocates[0].title",
            label: "advocates.create.advocateTitle",
            type: "singleValueList",
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: "",
            defaultValue:[{ key:"Mr",value:"Mr"},{ key:"Mrs",value:"Mrs"},{ key:"Ms",value:"Ms"},{ key:"Miss",value:"Miss"}]
          },
          {
            name: "firstName",
            jsonPath: "advocates[0].firstName",
            label: "advocates.create.firstName",
            pattern: "",
            type: "text",
            isRequired: true,
            isDisabled: false,
            requiredErrMsg: "",
            patternErrMsg: ""
          },
          {
            name: "secondName",
            jsonPath: "advocates[0].secondName",
            label: "advocates.create.secondName",
            pattern: "",
            type: "text",
            isRequired: true,
            isDisabled: false,
            requiredErrMsg: "",
            patternErrMsg: ""
          },
          {
            name: "lastName",
            jsonPath: "advocates[0].lastName",
            label: "advocates.create.lastName",
            pattern: "",
            type: "text",
            isRequired: true,
            isDisabled: false,
            requiredErrMsg: "",
            patternErrMsg: ""
          },
          {
            name: "aadharNumber",
            jsonPath: "advocates[0].aadhar",
            label: "advocates.create.aadharNumber",
            pattern: "",
            type: "aadhar",
            isRequired: true,
            isDisabled: false,
            requiredErrMsg: "",
            patternErrMsg: "The UID number is as follows:412521475850 : all 12 digits"
          },
          {
            name: "gender",
            jsonPath: "advocates[0].gender",
            label: "advocates.create.gender",
            pattern: "",
            type: "singleValueList",
            isRequired: true,
            isDisabled: false,
            requiredErrMsg: "",
            patternErrMsg: "",
             defaultValue:[{ key:"Male",value:"Male"},{ key:"Female",value:"Female"}]
          },
          {
            name: "age",
            jsonPath: "advocates[0].age",
            label: "advocates.create.age",
            pattern: "",
            type: "number",
            isRequired: true,
            isDisabled: false,
            requiredErrMsg: "",
            patternErrMsg: ""
          },
          {
            name: "dob",
            jsonPath: "advocates[0].dob",
            label: "advocates.create.dob",
            pattern: "",
            type: "datePicker",
            isRequired: true,
            isDisabled: false,
            requiredErrMsg: "",
            patternErrMsg: ""
          },
          {
            name: "address",
            jsonPath: "advocates[0].address",
            label: "advocates.create.address",
            pattern: "",
            type: "textarea",
            isRequired: true,
            isDisabled: false,
            requiredErrMsg: "",
            patternErrMsg: ""
          },
          {
            name: "mobileNumber",
            jsonPath: "advocates[0].mobileNumber",
            label: "advocates.create.mobileNumber",
            pattern: "",
            type: "text",
            isRequired: true,
            isDisabled: false,
            requiredErrMsg: "",
            patternErrMsg: "The Phone number structure is as follows: 999XXXX999 "
          },
          {
            name: "contactNumber",
            jsonPath: "advocates[0].contactNo",
            label: "advocates.create.contactNumber",
            pattern: "",
            type: "text",
            isRequired: true,
            isDisabled: false,
            requiredErrMsg: "",
            patternErrMsg: "The Phone number structure is as follows: 999XXXX999 "
          },
          {
            name: "email",
            jsonPath: "advocates[0].emailId",
            label: "advocates.create.email",
            pattern: "",
            type: "email",
            isRequired: true,
            isDisabled: false,
            requiredErrMsg: "",
            patternErrMsg: "Email should be in format e.g - abc@abc.com"
          },
          {
            name: "panNumber",
            jsonPath: "advocates[0].pan",
            label: "advocates.create.panNumber",
            pattern: "",
            type: "pan",
            isRequired: false,
            isDisabled: false,
            requiredErrMsg: "",
            patternErrMsg: "The PAN structure is as follows: AAAPL1234C ."
          },
          {
            name: "VATTinNumber",
            jsonPath: "advocates[0].vatTinNo",
            label: "advocates.create.VATTinNumber",
            pattern: "",
            type: "number",
            isRequired: true,
            isDisabled: false,
            requiredErrMsg: "",
            patternErrMsg: ""
          }
        ]
      },
      {
        name: "personalDetails",
        label: "advocates.create.group.title.personalDetails",
        fields: [
          {
            name: "advocateTitle",
            jsonPath: "advocates[0].title",
            label: "advocates.create.advocateTitle",
            type: "singleValueList",
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: "",
            defaultValue:[{ key:"Mr",value:"Mr"},{ key:"Mrs",value:"Mrs"},{ key:"Ms",value:"Ms"},{ key:"Miss",value:"Miss"}]
          },
           {
            name: "firstName",
            jsonPath: "advocates[0].firstName",
            label: "advocates.create.firstName",
            pattern: "",
            type: "text",
            isRequired: true,
            isDisabled: false,
            requiredErrMsg: "",
            patternErrMsg: ""
          },
          {
            name: "secondName",
            jsonPath: "advocates[0].secondName",
            label: "advocates.create.secondName",
            pattern: "",
            type: "text",
            isRequired: true,
            isDisabled: false,
            requiredErrMsg: "",
            patternErrMsg: ""
          },
          {
            name: "lastName",
            jsonPath: "advocates[0].lastName",
            label: "advocates.create.lastName",
            pattern: "",
            type: "text",
            isRequired: true,
            isDisabled: false,
            requiredErrMsg: "",
            patternErrMsg: ""
          },
          {
            name: "aadharNumber",
            jsonPath: "advocates[0].aadhar",
            label: "advocates.create.aadharNumber",
            pattern: "",
            type: "aadhar",
            isRequired: true,
            isDisabled: false,
            requiredErrMsg: "",
            patternErrMsg: "The UID number is as follows:412521475850 : all 12 digits"
          },
          {
            name: "gender",
            jsonPath: "advocates[0].gender",
            label: "advocates.create.gender",
            pattern: "",
            type: "singleValueList",
            isRequired: true,
            isDisabled: false,
            requiredErrMsg: "",
            patternErrMsg: "",
            defaultValue:[{ key:"Male",value:"Male"},{ key:"Female",value:"Female"}]
          },
          {
            name: "age",
            jsonPath: "advocates[0].age",
            label: "advocates.create.age",
            pattern: "",
            type: "number",
            isRequired: true,
            isDisabled: false,
            requiredErrMsg: "",
            patternErrMsg: ""
          },
          {
            name: "dob",
            jsonPath: "advocates[0].dob",
            label: "advocates.create.dob",
            pattern: "",
            type: "datePicker",
            isRequired: true,
            isDisabled: false,
            requiredErrMsg: "",
            patternErrMsg: ""
          },
          {
            name: "address",
            jsonPath: "advocates[0].address",
            label: "advocates.create.address",
            pattern: "",
            type: "textarea",
            isRequired: true,
            isDisabled: false,
            requiredErrMsg: "",
            patternErrMsg: ""
          },
          {
            name: "mobileNumber",
            jsonPath: "advocates[0].mobileNumber",
            label: "advocates.create.mobileNumber",
            pattern: "",
            type: "mobileNumber",
            isRequired: true,
            isDisabled: false,
            requiredErrMsg: "",
            patternErrMsg: "The Phone number structure is as follows: 999XXXX999 "
          },
          {
            name: "contactNumber",
            jsonPath: "advocates[0].contactNo",
            label: "advocates.create.contactNumber",
            pattern: "",
            type: "mobileNumber",
            isRequired: true,
            isDisabled: false,
            requiredErrMsg: "",
            patternErrMsg: "The Phone number structure is as follows: 999XXXX999 "
          },
          {
            name: "email",
            jsonPath: "advocates[0].emailId",
            label: "advocates.create.email",
            pattern: "",
            type: "email",
            isRequired: true,
            isDisabled: false,
            requiredErrMsg: "",
            patternErrMsg: "Email should be in format e.g - abc@abc.com"
          },
          {
            name: "panNumber",
            jsonPath: "advocates[0].pan",
            label: "advocates.create.panNumber",
            pattern: "",
            type: "pan",
            isRequired: false,
            isDisabled: false,
            requiredErrMsg: "",
            patternErrMsg: "The PAN structure is as follows: AAAPL1234C ."
          },
          {
            name: "VATTinNumber",
            jsonPath: "advocates[0].vatTinNo",
            label: "advocates.create.VATTinNumber",
            pattern: "",
            type: "number",
            isRequired: true,
            isDisabled: false,
            requiredErrMsg: "",
            patternErrMsg: ""
          }
        ]
      },
      {
        name: "empanelmentDetails",
        label: "advocates.create.group.title.empanelmentDetails",
        fields: [
          {
            name: "dateOfEmpanelment",
            jsonPath: "advocates[0].dateOfEmpanelment",
            label: "advocates.create.dateOfEmpanelment",
            pattern: "",
            type: "datePicker",
            isRequired: true,
            isDisabled: false,
            requiredErrMsg: "",
            patternErrMsg: ""
          },
          {
            name: "standingCommiteDecisionDate",
            jsonPath: "advocates[0].standingCommitteeDecisionDate",
            label: "advocates.create.standingCommiteDecisionDate",
            pattern: "",
            type: "datePicker",
            isRequired: true,
            isDisabled: false,
            requiredErrMsg: "",
            patternErrMsg: ""
          }, {
            name: "newsPaperAdvertismentDate",
            jsonPath: "advocates[0].newsPaperAdvertismentDate",
            label: "advocates.create.newsPaperAdvertismentDate",
            pattern: "",
            type: "datePicker",
            isRequired: true,
            isDisabled: false,
            requiredErrMsg: "",
            patternErrMsg: ""
          },
          {
            name: "empanelmentFromDate",
            jsonPath: "advocates[0].empanelmentFromDate",
            label: "advocates.create.empanelmentFromDate",
            pattern: "",
            type: "datePicker",
            isRequired: true,
            isDisabled: false,
            requiredErrMsg: "",
            patternErrMsg: ""
          },
          {
            name: "empanelementToDate",
            jsonPath: "advocates[0].empanelmentToDate",
            label: "advocates.create.empanelementToDate",
            pattern: "",
            type: "datePicker",
            isRequired: true,
            isDisabled: false,
            requiredErrMsg: "",
            patternErrMsg: ""
          }
        ]
      },
      {
        name: "bankDetails",
        label: "advocates.create.group.title.bankDetails",
        fields: [
          {
            name: "bankName",
            jsonPath: "advocates[0].bankName",
            label: "advocates.create.bankName",
            pattern: "",
            type: "text",
            isRequired: true,
            isDisabled: false,
            requiredErrMsg: "",
            patternErrMsg: ""
          },
          {
            name: "bankBranch",
            jsonPath: "advocates[0].bankBranch",
            label: "advocates.create.bankBranch",
            pattern: "",
            type: "text",
            isRequired: true,
            isDisabled: false,
            requiredErrMsg: "",
            patternErrMsg: ""
          },
          {
            name: "bankAcc",
            jsonPath: "advocates[0].bankAccountNo",
            label: "advocates.create.bankAcc",
            pattern: "",
            type: "number",
            isRequired: true,
            isDisabled: false,
            requiredErrMsg: "",
            patternErrMsg: ""
          },
          {
            name: "IFSCCode",
            jsonPath: "advocates[0].isfcCode",
            label: "advocates.create.IFSCCode",
            pattern: "",
            type: "text",
            isRequired: true,
            isDisabled: false,
            requiredErrMsg: "",
            patternErrMsg: ""
          },
          {
            name: "MICRCode",
            jsonPath: "advocates[0].micr",
            label: "advocates.create.MICRCode",
            pattern: "",
            type: "text",
            isRequired: true,
            isDisabled: false,
            requiredErrMsg: "",
            patternErrMsg: ""
          }
        ]
      },{
        name: "action",
        label: "advocates.create.group.title.action",
        fields: [
          {
            name: "actionType",
            jsonPath: "advocates[0].actionType",
            label: "advocates.create.actionType",
            type: "radio",
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: "",
            values: [
              {
                label: "advocates.create.active",
                value: "active"
              },
              {
                label: "advocates.create.inactive",
                value: "inactive"
              },{
                label: "advocates.create.terminate",
                value: "terminate"
              }
            ]
          },{
            name: "inActivationDate",
            jsonPath: "advocates[0].inActivationDate",
            label: "advocates.create.inActivationDate",
            pattern: "",
            type: "datePicker",
            isRequired: false,
            isDisabled: false,
            requiredErrMsg: "",
            patternErrMsg: ""
          },{
            name: "terminationDate",
            jsonPath: "advocates[0].terminationDate",
            label: "advocates.create.terminationDate",
            pattern: "",
            type: "datePicker",
            isRequired: false,
            isDisabled: false,
            requiredErrMsg: "",
            patternErrMsg: ""
          },{
            name: "reasonOfTerminationOrDeactivation",
            jsonPath: "advocates[0].reasonOfTerminationOrDeactivation",
            label: "advocates.create.reasonOfTerminationOrDeactivation",
            type: "textArea",
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: ""
          }]
        }
    ],
    url: "/lcms-services/legalcase/advocate/_update",
    tenantIdRequired: true
  },
};
export default dat;
