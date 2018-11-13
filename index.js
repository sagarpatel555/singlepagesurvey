var json = {
    questions: [
        {
            name: "applicantName",
            type: "text",
            title: "Applicant's Name:",
            placeHolder: "Jane Doe",
            isRequired: true
        }, {
            name: "referenceName",
            type: "text",
            title: "Reference Name:",
            placeHolder: "John Doe",
            isRequired: true
        },{
            name: "phone",
            type: "text",
            inputType: "number",
            title: "Reference Phone Number:",
            placeHolder: "111-111-1111",
            isRequired: true
        },{
            name: "title",
            type: "text",
            title: "Reference Title:",
            placeHolder: "Supervisor, Manager etc.",
            isRequired: false
        }, {
            name: "employmentStartDate",
            type: "text",
            inputType: "date",
            title: "Employment start date:",
            isRequired: true
        },{
            name: "employmentEndDate",
            type: "text",
            inputType: "date",
            title: "Employment end date:",
            isRequired: false
        },{
            name: "jobTitle",
            type: "text",
            title: "Applicant's most recent job title?",
            placeHolder: "Analyst, Programmer etc.",
            isRequired: true
        },{
            name: "salary",
            type: "text",
            inputType: "number",
            title: "What was applicant's ending salary?",
            placeHolder: "50000, 60000 etc.",
            isRequired: true
        },{
            name: "directSupervisor",
            type: "text",
            title: "Did you directly supervise applicant?",
            placeHolder: "Yes or No",
            isRequired: true
        }, {
            name: "comments",
            type: "text",
            title: "Comments:",
            placeHolder: "Additional comments",
            isRequired: false,
        }
    ]
};

window.survey = new Survey.Model(json);

survey
.onComplete
.add(function (result) {
window.location = "thankyou.html";
});

$("#surveyElement").Survey({model: survey});
