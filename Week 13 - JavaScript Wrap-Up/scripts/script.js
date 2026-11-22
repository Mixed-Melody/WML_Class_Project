// Get references to the submit button and form log elements
var submitBtn = document.getElementById("submitBtn");
var formLog = document.getElementById("formLog");
var submissions = [];
// Add an event listener to the submit button to call the submitForm function when clicked
submitBtn.onclick = function () {
    submitForm();
}
// Function to submit the form and store the submission data
function submitForm() {
    let attempt = "";
    let admissionsForm = document.getElementById("admissionForm");
    let quizFormData = new FormData(admissionsForm);
    submission = {
        firstName: quizFormData.get("firstName"),
        lastName: quizFormData.get("lastName"),
        dateOfBirth: quizFormData.get("dateOfBirth"),
        degreeLevel: quizFormData.getAll("degreeLevel"),
        programsOfInterest: quizFormData.getAll("programsOfInterest"),
        deliveryMethod: quizFormData.getAll("deliveryMethod"),
        highschoolGPA: quizFormData.get("highschoolGPA"),
        whyThisCollege: quizFormData.get("whyThisCollege")
    }
    submissions.push(submission)
    admissionsForm.reset();;
    getSubmissions();

}
// Function to display the submissions in the form log
function getSubmissions() {
    formLog.innerHTML = "";
    if (submissions.length > 0) {
        submissions.forEach(e => {
            // Create a new div for each submission
            var submissionDiv = document.createElement("div");
            var submissionUl = document.createElement("ul");
            var firstNameLi = document.createElement("li");
            var lastNameLi = document.createElement("li");
            var dateOfBirthLi = document.createElement("li");
            var degreeLevelLi = document.createElement("li");
            var programsOfInterestLi = document.createElement("li");
            var deliveryMethodLi = document.createElement("li");
            var highschoolGPALi = document.createElement("li");
            var whyThisCollegeLi = document.createElement("li");
            // Set the innerHTML of each list item to the corresponding submission data
            // created a span element for each list to edit in CSS
            firstNameLi.innerHTML = "<span>First Name:</span> " + e.firstName;
            lastNameLi.innerHTML = "<span>Last Name:</span> " + e.lastName;
            dateOfBirthLi.innerHTML = "<span>Date of Birth:</span> " + e.dateOfBirth;
            degreeLevelLi.innerHTML = "<span>Degree Level:</span> " + e.degreeLevel;
            programsOfInterestLi.innerHTML = "<span>Programs of Interest:</span> " + e.programsOfInterest;
            deliveryMethodLi.innerHTML = "<span>Delivery Method:</span> " + e.deliveryMethod;
            highschoolGPALi.innerHTML = "<span>High School GPA:</span> " + e.highschoolGPA;
            whyThisCollegeLi.innerHTML = "<span>Why This College:</span> " + e.whyThisCollege;
            // Set the class of the submission div to "submission"
            submissionDiv.setAttribute("class", "submission");
            // set the color of the first name list item to red 
            submissionDiv.style.border = "1px solid #20252a";
            // Append the list items to the unordered list
            submissionUl.appendChild(firstNameLi);
            submissionUl.appendChild(lastNameLi);
            submissionUl.appendChild(dateOfBirthLi);
            submissionUl.appendChild(degreeLevelLi);
            submissionUl.appendChild(programsOfInterestLi);
            submissionUl.appendChild(deliveryMethodLi);
            submissionUl.appendChild(highschoolGPALi);
            submissionUl.appendChild(whyThisCollegeLi);
            // Append the unordered list to the submission div
            submissionDiv.appendChild(submissionUl);
            // Append the submission div to the form log
            formLog.insertBefore(submissionDiv, formLog.firstChild);
            // Decided to insert the new submission at the top of the form log instead of the bottom so the most recent submission is always at the top of the list
        });
    } else {
        formLog.innerHTML = "No submissions yet.";
    }
}
// Call the function to display any existing submissions when the page loads
getSubmissions();
