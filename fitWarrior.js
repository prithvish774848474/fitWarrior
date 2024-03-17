// "Let's Start" button makes the first page disppear and pulls the second page
let firstPageButton = document.getElementById("firstPage").children[2];
firstPageButton.addEventListener("click", () => {
    document.getElementById("firstPage").style.display = "none";
    document.getElementById("secondPage").style.display = "block";
});

// We are dealing with the second page now!
let progressBar = document.getElementById("secondPage").querySelector("progress");
// Clicking either "Metric" or "Imperial" button closes the first section and pulls the second section
// We create a variable "chosenMeasuringSystem" to remember the user's chosen system
//  The value of progress bar increses to 20%
let firstSectionMetricButton = document.getElementById("firstSection").children[1];
let firstSectionImperialButton = document.getElementById("firstSection").children[2];
let chosenMeasuringSystem = "";
firstSectionMetricButton.addEventListener("click", () => {
    document.getElementById("firstSection").style.display = "none";
    document.getElementById("secondSection").style.display = "block";
    chosenMeasuringSystem = "Metric";
    progressBar.value = 20;
});
firstSectionImperialButton.addEventListener("click", () => {
    document.getElementById("firstSection").style.display = "none";
    document.getElementById("secondSection").style.display = "block";
    chosenMeasuringSystem = "Imperial";
    progressBar.value = 20;
});
// Clicking either "Male" or "Female" button closes the second section and pulls the third section
// The value of progress bar increses to 30
// As soon as the third section gets pulled, an alert suggesting age input  will be displayed
let secondSectionMaleButton = document.getElementById("secondSection").children[1];
let secondSectionFemaleButton = document.getElementById("secondSection").children[2];
secondSectionMaleButton.addEventListener("click", () => {
    document.getElementById("secondSection").style.display = "none";
    document.getElementById("thirdSection").style.display = "block";
    progressBar.value = 30;
    setTimeout( () => alert("Your age must be in between 18 and 99"), 1000 );
});
secondSectionFemaleButton.addEventListener("click", () => {
    document.getElementById("secondSection").style.display = "none";
    document.getElementById("thirdSection").style.display = "block";
    progressBar.value = 30;
    setTimeout(() => alert("Your age must be in between 18 and 99!"), 1000);
});
// Clicking on either "Male" or "Female" button makes the "Next" button of third section disappear
// The "Next" button will only be visible only if the user inputs a valid age
let thirdSectionPreviousButton = document.getElementById("thirdSection").children[1];
let thirdSectionNextButton = document.getElementById("thirdSection").children[2];
secondSectionMaleButton.addEventListener("click", () => {
    thirdSectionNextButton.style.display = "none";
});
secondSectionFemaleButton.addEventListener("click", () => {
    thirdSectionNextButton.style.display = "none";
});
let ageInputs = document.getElementById("thirdSection").querySelectorAll("input");
ageInputs[1].addEventListener("click", () => {
    if (ageInputs[0].value.trim().length === 0) {
        alert("Age cannot be empty!");
    }
    else if (Number(ageInputs[0].value) < 18) {
        alert("Age must be greater than 17!");
    }
    else if (isNaN(Number(ageInputs[0].value))) {
        alert("Age should be a number!");
    }
    else {
        thirdSectionNextButton.style.display = "block";
    }
});
// On clicking "Previous" button, third section will close and second section appears
// The value of progress bar decreases to 20
thirdSectionPreviousButton.addEventListener("click", () => {
    document.getElementById("thirdSection").style.display = "none";
    document.getElementById("secondSection").style.display = "block";
    progressBar.value = 20;
});
// On clicking "Next" button, third section will close and fourth section appears
// As soon as the fourth section is pulled, an alert suggesting height input will be displayed
// The progress bar increases to 40
thirdSectionNextButton.addEventListener("click", () => {
    document.getElementById("thirdSection").style.display = "none";
    document.getElementById("fourthSection").style.display = "block";
    progressBar.value = 40;
    setTimeout(() => alert("Enter a valid 'Integer' height!"), 1000);
});
// The "Metric" height & assocaited "Go!" button will be active by default
// We hide the "Imperial" height & associated "Go!" button
let heightInputs = document.getElementById("fourthSection").querySelectorAll("input");
heightInputs[2].style.display = "none";
heightInputs[3].style.display = "none";
heightInputs[4].style.display = "none";
// The "Imperial" heights will only be displayed if the user selects "Imperial" system at the beginning
firstSectionImperialButton.addEventListener("click", () => {
    heightInputs[0].style.display = "none";
    heightInputs[1].style.display = "none";
    heightInputs[2].style.display = "inline";
    heightInputs[3].style.display = "inline";
    heightInputs[4].style.display = "inline";
});
// The "Next" button of the fourth section should not be visible
// When the "Next" button of third section is clicked then the "Next" button of fourth section disappears
let fourthSectionPreviousButton = document.getElementById("fourthSection").children[1];
let fourthSectionNextButton = document.getElementById("fourthSection").children[2];
thirdSectionNextButton.addEventListener("click", () => {
    fourthSectionNextButton.style.display = "none";
});
// The "Next" button of the fourth section will only be displayed if the user inputs a valid height
// Firstly, we validate the "Matric" height using the associated "Go!" button
heightInputs[1].addEventListener("click", () => {
    if (heightInputs[0].value.trim().length === 0) {
        alert("The input height cannot be empty!");
    }
    else if (heightInputs[0].value.length > 0 && heightInputs[0].value.length < 3) {
        alert("You are not 'that' short! \nYour height must be in between 100cm and 240cm!");
    }
    else if (Number(heightInputs[0].value) > 240) {
        alert("You are not 'that' tall! \nYour height must be in betweem 100cm and 240cm");
    }
    else if (isNaN(Number(heightInputs[0].value))) {
        alert("That's not even a number! \nPlease enter a valid height!");
    }
    else {
        fourthSectionNextButton.style.display = "block";
    }
});
// Secondly, we validate the "Imperial" heights using the associated "Go!" button
heightInputs[4].addEventListener("click", () => {
    if (heightInputs[2].value.trim().length === 0 && heightInputs[3].value.trim().length === 0) {
        alert("The input height cannot be empty!");
    }
    else if (heightInputs[2].value.trim().length === 0 && heightInputs[3].value.trim().length !== 0) {
        alert("The 'feet' input can take the value from 3 to 8!\nEnter a valid height in the 'feet box'!");
    }
    else if (Number(heightInputs[2].value) < 3 || Number(heightInputs[2].value) > 8) {
        alert("You have entered an invalid height! \nThe 'feet' input can take the value from 3 to 8!");
    }
    else if (isNaN(Number(heightInputs[2].value))) {
        alert("That's not even a number in 'feet box'! \nEnter a valid number!");
    }
    else if (heightInputs[2].value.trim().length !== 0 && heightInputs[3].value.trim().length === 0) {
        alert("The 'inches' input can take the value from 0 to 12!\nEnter 0 in the 'inches box' if there is no measure available!");
    }
    else if (Number(heightInputs[3].value) < 0 || Number(heightInputs[3].value) > 12) {
        alert("You have entered an invalid height! \nThe 'inches' input can take the value from 0 to 12!");
    }
    else if (isNaN(Number(heightInputs[3].value))) {
        alert("That's not even a number in 'inches box'! \nEnter a valid number!");
    }
    else {
        fourthSectionNextButton.style.display = "block";
    }
});
// On clicking the "Previous" button, the fourth section will close and third section will appear
// The "Next" button of the third section will disappear as well
// The progress bar value decreases to 30
fourthSectionPreviousButton.addEventListener("click", () => {
    document.getElementById("fourthSection").style.display = "none";
    document.getElementById("thirdSection").style.display = "block";
    thirdSectionNextButton.style.display = "none";
    progressBar.value = 30;
});
// On clicking the "Next" button, the fourth section will close and fifth section will appear
// As soon as the fifth section is pulled, an alert suggesting the weight input will be displayed
// The progress bar value increses to 50
fourthSectionNextButton.addEventListener("click", () => {
    document.getElementById("fourthSection").style.display = "none";
    document.getElementById("fifthSection").style.display = "block";
    progressBar.value = 50;
    setTimeout(() => alert("Enter a valid 'Integer' weight!"), 1000);
});
// The "Metric" weight & assocaited "Go!" button will be active by default
// We hide the "Imperial" weight & associated "Go!" button
let weightInputs = document.getElementById("fifthSection").querySelectorAll("input");
weightInputs[2].style.display = "none";
weightInputs[3].style.display = "none";
// The "Imperial" weight will only be displayed if the user selects "Imperial" system at the beginning
firstSectionImperialButton.addEventListener("click", () => {
    weightInputs[0].style.display = "none";
    weightInputs[1].style.display = "none";
    weightInputs[2].style.display = "inline";
    weightInputs[3].style.display = "inline";
});
// The "Next" button of the fifth section should not be visible
// When the "Next" button of the "fourth" section is clicked then the "Next" button of the fifth section disappears
let fifthSectionPreviousButton = document.getElementById("fifthSection").children[1];
let fifthSectionNextButton = document.getElementById("fifthSection").children[2];
fourthSectionNextButton.addEventListener("click", () => {
    fifthSectionNextButton.style.display = "none";
});
// The "Next" button of the fifth section will only be displayed if the user inputs a valid weight
// Firstly, we validate the "Matric" weight using the associated "Go!" button
weightInputs[1].addEventListener("click", () => {
    if (weightInputs[0].value.trim().length === 0) {
        alert("The input weight cannot be empty!");
    }
    else if (Number(weightInputs[0].value) < 20 || Number(weightInputs[0].value) > 200) {
        alert("Your weight must be in between 20kg and 200kg! \nEnter a valid weight!");
    }
    else if (isNaN(Number(weightInputs[0].value))) {
        alert("That's not even a number! \nEnter a valid number!");
    }
    else {
        fifthSectionNextButton.style.display = "block";
    }
});
// Secondly, we validate the "Imperial" weight using the associated "Go!" button
weightInputs[3].addEventListener("click", () => {
    if (weightInputs[2].value.trim().length === 0) {
        alert("The input weight cannot be empty!");
    }
    else if (Number(weightInputs[2].value) < 45 || Number(weightInputs[2].value) > 450) {
        alert("Your weight must be in between 45lbs and 450lbs!");
    }
    else if (isNaN(Number(weightInputs[2].value))) {
        alert("That's not even a number! \nEnter a valid number!");
    }
    else {
        fifthSectionNextButton.style.display = "block";
    }
});
// On clicking the "Previous" button, the fifth section will close and fourth section will appear
// The "Next" button of the fourth section will disappear as well
// The progress bas value decreases to 40
fifthSectionPreviousButton.addEventListener("click", () => {
    document.getElementById("fifthSection").style.display = "none";
    document.getElementById("fourthSection").style.display = "block";
    fourthSectionNextButton.style.display = "none";
    progressBar.value = 40;
});
// On clicking the "Next" button, the fifth section will close and sixth section will appear
// As soon as the sixth section is pulled, an alert suggesting the neck input will be displayed
// The progress bar value increases to 60
fifthSectionNextButton.addEventListener("click", () => {
    document.getElementById("fifthSection").style.display = "none";
    document.getElementById("sixthSection").style.display = 'block';
    progressBar.value = 60;
    setTimeout(() => alert("Enter a valid integer for the 'Neck' measure!"), 1000);
});
// The "Metric" neck input section & assocaited "Go!" button will be active by default
// We hide the "Imperial" neck input section & associated "Go!" button
let neckInputs = document.getElementById("sixthSection").querySelectorAll("input");
neckInputs[2].style.display = "none";
neckInputs[3].style.display = "none";
// The "Imperial" neck input section will only be displayed if the user selects "Imperial" system at the beginning
firstSectionImperialButton.addEventListener("click", () => {
    neckInputs[0].style.display = "none";
    neckInputs[1].style.display = "none";
    neckInputs[2].style.display = "inline";
    neckInputs[3].style.display = "inline";
});
// The "Next" button of the sixth section should not be visible
// When the "Next" button of the fifth section is clicked then the "Next" button of the sixth section disappears
let sixthSectionPreviousButton = document.getElementById("sixthSection").children[1];
let sixthSectionNextButton = document.getElementById("sixthSection").children[2];
fifthSectionNextButton.addEventListener("click", () => {
    sixthSectionNextButton.style.display = "none";
});
// The "Next" button of the sixth section will only be displayed if the user inputs a valid neck circumference
// Firstly, we validate the "Matric" neck circumference using the associated "Go!" button
neckInputs[1].addEventListener("click", () => {
    if (neckInputs[0].value.trim().length === 0) {
        alert("The neck circumference cannot be empty!");
    }
    else if (Number(neckInputs[0].value) < 25 || Number(neckInputs[0].value) > 64) {
        alert("Your neck measurement must be in between 25cm and 64cm! \nEnter a valid circumference!");
    }
    else if (isNaN(Number(neckInputs[0].value))) {
        alert("That's not even a number! \nEnter a valid Integer!");
    }
    else {
        sixthSectionNextButton.style.display = "block";
    }
});
// Secondly, we validate the "Imperial" neck circumference using the associated "Go!" button
neckInputs[3].addEventListener("click", () => {
    if (neckInputs[2].value.trim().length === 0) {
        alert("The neck circumference cannot be empty!");
    }
    else if (Number(neckInputs[2].value) < 10 || Number(neckInputs[2].value) > 25) {
        alert("Your neck measurement must be in between 10inches and 25inches! \nEnter a valid circumference!");
    }
    else if (isNaN(Number(neckInputs[2].value))) {
        alert("That's not even a number! \nEnter a valid Integer!");
    }
    else {
        sixthSectionNextButton.style.display = "block";
    }
});
// On clicking the "Previous" button, the sixth section will close and fifth section will appear
// The "Next" button of the fifth section will disappear as well
// The progress bar value decreases to 50
sixthSectionPreviousButton.addEventListener("click", () => {
    document.getElementById("sixthSection").style.display = "none";
    document.getElementById("fifthSection").style.display = "block";
    fifthSectionNextButton.style.display = "none";
    progressBar.value = 50;
});
// On clicking the "Next" button, the sixth section will close and seventh section will appear
// As soon as the seventh section is pulled, an alert suggesting the waist input will be displayed
// The progress bar value increases to 70
sixthSectionNextButton.addEventListener("click", () => {
    document.getElementById("sixthSection").style.display = "none";
    document.getElementById("seventhSection").style.display = 'block';
    progressBar.value = 70;
    setTimeout(() => alert("Enter a valid integer for the 'Waist' measure!"), 1000);
});
// The "Metric" waist input section & assocaited "Go!" button will be active by default
// We hide the "Imperial" waist input section & associated "Go!" button
let waistInputs = document.getElementById("seventhSection").querySelectorAll("input");
waistInputs[2].style.display = "none";
waistInputs[3].style.display = "none";
// The "Imperial" waist input section will only be displayed if the user selects "Imperial" system at the beginning
firstSectionImperialButton.addEventListener("click", () => {
    waistInputs[0].style.display = "none";
    waistInputs[1].style.display = "none";
    waistInputs[2].style.display = "inline";
    waistInputs[3].style.display = "inline";
});
// The "Next" button of the seventh section should not be visible
// When the "Next" button of the sixth section is clicked then the "Next" button of the seventh section disappears
let seventhSectionPreviousButton = document.getElementById("seventhSection").children[1];
let seventhSectionNextButton = document.getElementById("seventhSection").children[2];
sixthSectionNextButton.addEventListener("click", () => {
    seventhSectionNextButton.style.display = "none";
});
// The "Next" button of the seventh section will only be displayed if the user inputs a valid waist circumference
// Firstly, we validate the "Matric" waist circumference using the associated "Go!" button
waistInputs[1].addEventListener("click", () => {
    if (waistInputs[0].value.trim().length === 0) {
        alert("The waist circumference cannot be empty!");
    }
    else if (Number(waistInputs[0].value) < 50) {
        alert("Your waist measurement must be in between 50cm and 99cm! \nEnter a valid circumeference!");
    }
    else if (isNaN(Number(waistInputs[0].value))) {
        alert("That's not even a number! \nEnter a valid Integer!");
    }
    else {
        seventhSectionNextButton.style.display = "block";
    }
});
// Secondly, we validate the "Imperial" waist circumference using the associated "Go!" button
waistInputs[3].addEventListener("click", () => {
    if (waistInputs[2].value.trim().length === 0) {
        alert("The waist circumeference cannot be empty!");
    }
    else if (Number(waistInputs[2].value) < 20 || Number(waistInputs[2].value) > 40) {
        alert("Your waist measurement must be in between 20inches and 40inches! \nEnter a valid circumeference!");
    }
    else if (isNaN(Number(waistInputs[2].value))) {
        alert("That's not even a number! \nEnter a valid Integer!");
    }
    else {
        seventhSectionNextButton.style.display = "block";
    }
});
// On clicking the "Previous" button, the seventh section will close and sixth section will appear
// The "Next" button of the sixth section will diappear as well
// The progress bar value decreases to 60
seventhSectionPreviousButton.addEventListener("click", () => {
    document.getElementById("seventhSection").style.display = "none";
    document.getElementById("sixthSection").style.display = "block";
    sixthSectionNextButton.style.display = "none";
    progressBar.value = 60;
});
// On clicking the "Next" button, the seventh section will close and eighth section will appear
// The progress bar value increases to 80
seventhSectionNextButton.addEventListener("click", () => {
    document.getElementById("seventhSection").style.display = "none";
    document.getElementById("eighthSection").style.display = "block";
    progressBar.value = 80;
});
// The "Next" button of the eighth section should not be visible
// When the "Next" button of the seventh section is clicked then the "Next" button of the eighth section disappears
let eighthSectionPreviousButton = document.getElementById("eighthSection").querySelectorAll("button")[0];
let eighthSectionNextButton = document.getElementById("eighthSection").querySelectorAll("button")[1];
seventhSectionNextButton.addEventListener("click", () => {
    eighthSectionNextButton.style.display = "none";
});
// The "Next" button of the eighth section will only be displayed if the user selects any of the radio buttons
let radioButtons = document.getElementById("eighthSection").querySelectorAll("input");
for (let i = 0; i < radioButtons.length; i++) {
    radioButtons[i].addEventListener("change", () => {
        eighthSectionNextButton.style.display = "block";
    });
}
// On clicking the "Previous" button, the eighth section will close and seventh section will appear
// The "Next" button of the seventh section will disappear as well
// The progress bar value decreases to 70
eighthSectionPreviousButton.addEventListener("click", () => {
    document.getElementById("eighthSection").style.display = "none";
    document.getElementById("seventhSection").style.display = "block";
    seventhSectionNextButton.style.display = "none";
    progressBar.value = 70;
});
// On clicking the "Next" button, the eighth section will close and ninth or tenth section will appear
// As soon as the ninth section is pulled, an alert suggesting the hip input will be displayed
// The "Hip" circumference is only required for females and hence will only appear if the user choose "Female"
// If the user chooses "Male" then the tenth section will automatically appear skipping the ninth section

// For this to work, we create a variable "chosenGender" that will store the gender chosen at the very beginning
// If chosenGender is Female then move to ninth section, else skip to tenth section
// Accordingly, the progress bar value increases to either 90 or 100
let chosenGender = "";
secondSectionMaleButton.addEventListener("click", () => {
    chosenGender = secondSectionMaleButton.value;
});
secondSectionFemaleButton.addEventListener("click", () => {
    chosenGender = secondSectionFemaleButton.value;
});
eighthSectionNextButton.addEventListener("click", () => {
    switch (chosenGender) {
        case "Male":
            document.getElementById("eighthSection").style.display = "none";
            document.getElementById("tenthSection").style.display = "block";
            progressBar.value = 100;
            setTimeout(() => alert("Click on 'Skip' button if data is not available!"), 1000);
            break;
        case "Female":
            document.getElementById("eighthSection").style.display = "none";
            document.getElementById("ninthSection").style.display = "block";
            progressBar.value = 90;
            setTimeout(() => alert("Hey beautiful lady! \nEnter a valid integer for the 'Hip' measure!"), 1000);
            break;
    }
});

// The "Metric" hip input section & assocaited "Go!" button will be active by default
// We hide the "Imperial" hip input section & associated "Go!" button
let hipInputs = document.getElementById("ninthSection").querySelectorAll("input");
hipInputs[2].style.display = "none";
hipInputs[3].style.display = "none";
// The "Imperial" hip input section will only be displayed if the user selects "Imperial" system at the beginning
firstSectionImperialButton.addEventListener("click", () => {
    hipInputs[0].style.display = "none";
    hipInputs[1].style.display = "none";
    hipInputs[2].style.display = "inline";
    hipInputs[3].style.display = "inline";
});
// The "Next" button of the ninth section should not be visible
// When the "Next" button of the eighth section is clicked then the "Next" button of the ninth section disappears
let ninthSectionPreviousButton = document.getElementById("ninthSection").children[1];
let ninthSectionNextButton = document.getElementById("ninthSection").children[2];
eighthSectionNextButton.addEventListener("click", () => {
    ninthSectionNextButton.style.display = "none";
});
// The "Next" button of the ninth section will only be displayed if the user inputs a valid hip circumference
// Firstly, we validate the "Matric" hip circumference using the associated "Go!" button
hipInputs[1].addEventListener("click", () => {
    if (hipInputs[0].value.trim().length === 0) {
        alert("The hip input cannot be empty!");
    }
    else if (Number(hipInputs[0].value) < 75 || Number(hipInputs[0].value) > 115) {
        alert("Your hip measure must be in between 75cm and 115cm! \nEnter a valid circumference!");
    }
    else if (isNaN(Number(hipInputs[0].value))) {
        alert("That's not even a number! \nEnter a valid Integer!");
    }
    else {
        ninthSectionNextButton.style.display = "block";
    }
});
// Secondly, we validate the "Imperial" hip circumference using the associated "Go!" button
hipInputs[3].addEventListener("click", () => {
    if (hipInputs[2].value.trim().length === 0) {
        alert("The hip input cannot be empty!");
    }
    else if (Number(hipInputs[2].value) < 30 || Number(hipInputs[2].value) > 45) {
        alert("Your hip measure must be in between 30inches and 45inches! \nEnter a valid circumference!");
    }
    else if (isNaN(Number(hipInputs[2].value))) {
        alert("That's not even a number! \nEnter a valid Integer!");
    }
    else {
        ninthSectionNextButton.style.display = "block";
    }
});
// On clicking the "Previous" button, the ninth section will close and eighth section will appear
// The "Next" button of the eighth section will disappear as well
// The progress bar value decreases to 80
ninthSectionPreviousButton.addEventListener("click", () => {
    document.getElementById("ninthSection").style.display = "none";
    document.getElementById("eighthSection").style.display = "block";
    eighthSectionNextButton.style.display = "none";
    progressBar.value = 80;
});
// On clicking the "Next" button, the ninth section will close and tenth section will appear
// As soon as the tenth section is pulled, an alert suggesting the Fat Percentage input will be displayed
// The progress bar value increases to 100
ninthSectionNextButton.addEventListener("click", () => {
    document.getElementById("ninthSection").style.display = "none";
    document.getElementById("tenthSection").style.display = "block";
    progressBar.value = 100;
    setTimeout(() => alert("Click on 'Skip' button if data is not available!"), 1000);
});
// Clicking on the "Previous" button pulls either ninth or eighth section, depending on "chosenGender"
// If chosenGender is "Female" then ninth section will be displayed, else eighth section
// The "Next" button of either eighth or ninth section will disappear as well
// Accordingly, the progress bar value decreases to either 80 or 90
let tenthSectionPreviousButton = document.getElementById("tenthSection").children[1];
let tenthSectionNextButton = document.getElementById("tenthSection").children[2];
tenthSectionPreviousButton.addEventListener("click", () => {
    if (chosenGender === "Female") {
        document.getElementById("tenthSection").style.display = "none";
        document.getElementById("ninthSection").style.display = "block";
        ninthSectionNextButton.style.display = "none";
        progressBar.value = 90;
    }
    else {
        document.getElementById("tenthSection").style.display = "none";
        document.getElementById("eighthSection").style.display = "block";
        eighthSectionNextButton.style.display = "none";
        progressBar.value = 80;
    }
});
// Clicking on "Go!" button will check your input
// If the input is invalid, then the "Skip" button disappears
// If the input is valid, then the "Skip" becomes "Proceed" button
let fatInputs = document.getElementById("tenthSection").querySelectorAll("input");
fatInputs[1].addEventListener("click", () => {
    if (fatInputs[0].value.trim().length === 0) {
        tenthSectionNextButton.style.display = "none";
        setTimeout(() => alert("Enter a valid Fat Percentage to proceed further!"), 1000);
    }
    else if (Number(fatInputs[0].value) < 0 || Number(fatInputs[0].value) > 40) {
        tenthSectionNextButton.style.display = "none";
        setTimeout(() => alert("The Fat Percentage must be in between 0 and 40! \nEnter a valid measure!"), 1000);
    }
    else if (isNaN(Number(fatInputs[0].value))) {
        tenthSectionNextButton.style.display = "none";
        setTimeout(() => alert("That's not even a number! \nEnter a valid integer!"), 1000);
    }
    else {
        tenthSectionNextButton.innerHTML = "Proceed &rarr;";
        tenthSectionNextButton.style.display = "block";
    }
});
// Clicking the "Skip" or "Proceed" button closes the second page and pulls the third page
tenthSectionNextButton.addEventListener("click", () => {
    document.getElementById("secondPage").style.display = "none";
    document.getElementById("thirdPage").style.display = "grid";
});
// The third page contains the input data of the user
// We create an "Array" of 9 elements that contains the user details from "Gender" till "Body Fat"
const userDetails = [];
// The 1st array value is user's gender which can be found using "chosenGender"
// This data will be added to the array later using "Event Listener" as direct addition leads to unwanted results
// We will use "unshift()" function to add the user's gender at the beginning of the array

// The 2nd array value is the user's age which is stored when the "Next" button of third section is clicked
thirdSectionNextButton.addEventListener("click", () => {
    userDetails.push(ageInputs[0].value);
    userDetails.unshift(chosenGender);
});

// The 3rd array value is the user's height which is stored when the "Next" button of the fourth section is clicked
// The height data is stored according to the measuring system
fourthSectionNextButton.addEventListener("click", () => {
    switch (chosenMeasuringSystem) {
        case "Metric":
            userDetails.push(heightInputs[0].value + "cm");
            break;
        case "Imperial":
            userDetails.push(heightInputs[2].value + "ft " + heightInputs[3].value + "in");
            break;
    }
});

// The 4th array value is the user's weight which is stored when the "Next" button of the fifth section is clicked
fifthSectionNextButton.addEventListener("click", () => {
    switch (chosenMeasuringSystem) {
        case "Metric":
            userDetails.push(weightInputs[0].value + "kg");
            break;
        case "Imperial":
            userDetails.push(weightInputs[2].value + "lbs");
    }
});

// The 5th array value is the user's neck which is stored when the "Next" button of the sixth section is clicked
sixthSectionNextButton.addEventListener("click", () => {
    switch (chosenMeasuringSystem) {
        case "Metric":
            userDetails.push(neckInputs[0].value + "cm");
            break;
        case "Imperial":
            userDetails.push(neckInputs[2].value + "in");
            break;
    }
});

// The 6th array value is the user's waist which is stored when the "Next" button of the seventh section is clicked
seventhSectionNextButton.addEventListener("click", () => {
    switch (chosenMeasuringSystem) {
        case "Metric":
            userDetails.push(waistInputs[0].value + "cm");
            break;
        case "Imperial":
            userDetails.push(waistInputs[2].value + "in");
            break;
    }
});

// The 7th array value is the user's activity which is stored when the "Next" button of the eighth section is clicked
// If the user's gender is "Male", then the 8th array value is "Not Applicable"
let radioCheckedIndex = -1;
eighthSectionNextButton.addEventListener("click", () => {
    for (let i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            userDetails.push(radioButtons[i].value);
            radioCheckedIndex = i; // This will store the index of the radio input that was chosen by the user
        }
    }
    if (chosenGender === "Male") {
        userDetails.push("Not Applicable");
    }
});

// The 8th array value is the user's hip which is stored when the "Next" button of the ninth section is clicked
ninthSectionNextButton.addEventListener("click", () => {
    switch (chosenMeasuringSystem) {
        case "Metric":
            userDetails.push(hipInputs[0].value + "cm");
            break;
        case "Imperial":
            userDetails.push(hipInputs[2].value + "in");
            break;
    }
});

// The 9th array value is the user's body fat which is stored when the "Next" button of tenth secttion is clicked
// The user can click on "Skip" button or "Proceed" button depending on whether "Go!" button is clicked or not
// We create a "Boolean" variable which will indicate whether "Go" button is clicked or not
let goButtonIsClicked = 0;
fatInputs[1].addEventListener("click", () => { goButtonIsClicked = 1 });
tenthSectionNextButton.addEventListener("click", () => {
    switch (goButtonIsClicked) {
        case 0:
            userDetails.push("Not Applicable");
            break;
        case 1:
            userDetails.push(fatInputs[0].value);
    }
});

// We will update the user information on third page using the "userDetails" array
// The updation will occur only when the "Next" button of the tenth section is clicked
let thirdPageUserData = document.getElementById("thirdPage").querySelectorAll("div");
tenthSectionNextButton.addEventListener("click", () => {
    for (let i = 0; i < userDetails.length; i++) {
        thirdPageUserData[2 * i + 1].textContent = userDetails[i];
    }
    if (chosenGender === "Male") {
        thirdPageUserData[14].style.display = "none";
        thirdPageUserData[15].style.display = "none";
    }
});

// Clicking on the "Refill" button will refresh the page and user have to refill their entire information again
// Clicking on the "Proceed to Calculate" button closes the third page and pulls the fourth page
let thirdPageButtons = document.getElementById("thirdPage").querySelectorAll("button");
thirdPageButtons[0].addEventListener("click", () => location.reload());
thirdPageButtons[1].addEventListener("click", () => {
    document.getElementById("thirdPage").style.display = "none";
    document.getElementById("fourthPage").style.display = "flex";
});

// We will now be dealing with the fourth page
// Clicking on the "Procced to Calculate" button of the third page, the calculating functions are called
thirdPageButtons[1].addEventListener("click", () => {
    function calculateBMI() {
        let UserBMI = 0, UserBMICategory = "";
        switch (chosenMeasuringSystem) {
            case "Metric":
                let requiredMetricHeight = Number(heightInputs[0].value) / 100;
                let requiredMetricWeight = Number(weightInputs[0].value);
                UserBMI = requiredMetricWeight / Math.pow(requiredMetricHeight, 2);
                UserBMI = Number(UserBMI.toFixed(3));
                break;
            case "Imperial":
                // Converting Height in Feet and Inches to Centimeters
                let requiredImperialHeight = (Number(heightInputs[2].value) * 12 + Number(heightInputs[3].value)) * 2.54;
                // Converting Weight in Pounds to Kilograms
                let requiredImperialWeight = Number(weightInputs[2].value) * 0.453592;
                UserBMI = requiredImperialWeight / Math.pow(requiredImperialHeight / 100, 2);
                UserBMI = Number(UserBMI.toFixed(3));
                break;
        }
        if (UserBMI < 18.5)
            UserBMICategory = "Underweight";
        else if (UserBMI >= 18.5 && UserBMI < 25)
            UserBMICategory = "Normal Weight";
        else if (UserBMI >= 25 && UserBMI < 30)
            UserBMICategory = "Overweight";
        else if (UserBMI >= 30)
            UserBMICategory = "Obese";
        let UpdateUserBMI = document.getElementById("BMI").querySelectorAll("span");
        UpdateUserBMI[0].innerHTML = `${UserBMI} kg/m <sup>2</sup>`;
        UpdateUserBMI[1].textContent = UserBMICategory;
        return UserBMI;
    }
    function calculateBodyFat() {
        let UserBFP1 = 0, UserBFP2 = 0, requiredAge = Number(ageInputs[0].value);
        switch (chosenMeasuringSystem) {
            case "Metric":
                let requiredMetricHeight = Number(heightInputs[0].value);
                let requiredMetricWaist = Number(waistInputs[0].value);
                let requiredMetricNeck = Number(neckInputs[0].value);
                let requiredMetricHip = Number(hipInputs[0].value);
                switch (chosenGender) {
                    case "Male":
                        let denominatorMale = 1.0324 - 0.19077 * Math.log10(requiredMetricWaist - requiredMetricNeck) + 0.15456 * Math.log10(requiredMetricHeight);
                        UserBFP1 = 495 / denominatorMale - 450;
                        UserBFP1 = Number(UserBFP1.toFixed(3));
                        let MaleBMI = calculateBMI();
                        UserBFP2 = 1.2 * MaleBMI + 0.23 * requiredAge - 16.2;
                        UserBFP2 = Number(UserBFP2.toFixed(3));
                        break;
                    case "Female":
                        let denominatorFemale = 1.29579 - 0.35004 * Math.log10(requiredMetricHip + requiredMetricWaist - requiredMetricNeck) + 0.221 * Math.log10(requiredMetricHeight);
                        UserBFP1 = 495 / denominatorFemale - 450;
                        UserBFP1 = Number(UserBFP1.toFixed(3));
                        let FemaleBMI = calculateBMI();
                        UserBFP2 = 1.2 * FemaleBMI + 0.23 * requiredAge - 5.4;
                        UserBFP2 = Number(UserBFP2.toFixed(3));
                        break;
                }
                break;
            case "Imperial":
                // Converting Height from Feet and Inches to Centimeters
                let requiredImperialHeight = (Number(heightInputs[2].value) * 12 + Number(heightInputs[3].value)) * 2.54;
                // Converting Wasit from Inches to Centimeters
                let requiredImperialWaist = Number(waistInputs[2].value) * 2.54;
                // Converting Neck from Inches to Centimeters
                let requiredImperialNeck = Number(neckInputs[2].value) * 2.54;
                // Converting Hip from Incches to Centimeters
                let requiredImperialHip = Number(hipInputs[2].value) * 2.54;
                switch (chosenGender) {
                    case "Male":
                        let denominatorMale = 1.0324 - 0.19077 * Math.log10(requiredImperialWaist - requiredImperialNeck) + 0.15456 * Math.log10(requiredImperialHeight);
                        UserBFP1 = 495 / denominatorMale - 450;
                        UserBFP1 = Number(UserBFP1.toFixed(3));
                        let MaleBMI = calculateBMI();
                        UserBFP2 = 1.2 * MaleBMI + 0.23 * requiredAge - 16.2;
                        UserBFP2 = Number(UserBFP2.toFixed(3));
                        break;
                    case "Female":
                        let denominatorFemale = 1.29579 - 0.35004 * Math.log10(requiredImperialWaist + requiredImperialHip - requiredImperialNeck) + 0.221 * Math.log10(requiredImperialHeight);
                        UserBFP1 = 495 / denominatorFemale - 450;
                        UserBFP1 = Number(UserBFP1.toFixed(3));
                        let FemaleBMI = calculateBMI();
                        UserBFP2 = 1.2 * FemaleBMI + 0.23 * requiredAge - 5.4;
                        UserBFP2 = Number(UserBFP2.toFixed(3));
                        break;
                }
                break;
        }
        let UpdateUserBFP = document.getElementById("BFP").querySelectorAll("span");
        UpdateUserBFP[0].textContent = `${UserBFP1}%`;
        UpdateUserBFP[1].textContent = `${UserBFP2}%`;
        return UserBFP1;
    }
    function calculateBMR() {
        let UserBMR1 = 0, UserBMR2 = 0, UserBMR3 = 0, requiredAge = Number(ageInputs[0].value);
        let requiredBodyFat = calculateBodyFat();
        switch (chosenMeasuringSystem) {
            case "Metric":
                let requiredMetricHeight = Number(heightInputs[0].value);
                let requiredMetricWeight = Number(weightInputs[0].value);
                switch (chosenGender) {
                    case "Male":
                        UserBMR1 = 10 * requiredMetricWeight + 6.25 * requiredMetricHeight - 5 * requiredAge + 5;
                        UserBMR1 = Number(UserBMR1.toFixed(3));
                        UserBMR2 = 13.397 * requiredMetricWeight + 4.799 * requiredMetricHeight - 5.677 * requiredAge + 88.362;
                        UserBMR2 = Number(UserBMR2.toFixed(3));
                        break;
                    case "Female":
                        UserBMR1 = 10 * requiredMetricWeight + 6.25 * requiredMetricHeight - 5 * requiredAge - 161;
                        UserBMR1 = Number(UserBMR1.toFixed(3));
                        UserBMR2 = 9.247 * requiredMetricWeight + 3.098 * requiredMetricHeight - 4.33 * requiredAge + 447.593;
                        UserBMR2 = Number(UserBMR2.toFixed(3));
                        break;
                }
                if (fatInputs[0].value !== "") {
                    requiredBodyFat = Number(fatInputs[0].value) / 100;
                    UserBMR3 = 370 + 21.6 * (1 - requiredBodyFat) * requiredMetricWeight;
                    UserBMR3 = Number(UserBMR3.toFixed(3));
                }
                else {
                    UserBMR3 = 370 + 21.6 * (1 - requiredBodyFat / 100) * requiredMetricWeight;
                    UserBMR3 = Number(UserBMR3.toFixed(3));
                }
                break;
            case "Imperial":
                // Converting Height from Feet and Inches to Centimeters
                let requiredImperialHeight = (Number(heightInputs[2].value) * 12 + Number(heightInputs[3].value)) * 2.54;
                // Converting Weight from Pounds to Kilograms
                let requiredImperialWeight = Number(weightInputs[2].value) * 0.453592;
                switch (chosenGender) {
                    case "Male":
                        UserBMR1 = 10 * requiredImperialWeight + 6.25 * requiredImperialHeight - 5 * requiredAge + 5
                        UserBMR1 = Number(UserBMR1.toFixed(3));
                        UserBMR2 = 13.397 * requiredImperialWeight + 4.799 * requiredImperialHeight - 5.677 * requiredAge + 88.362;
                        UserBMR2 = Number(UserBMR2.toFixed(3));
                        break;
                    case "Female":
                        UserBMR1 = 10 * requiredImperialWeight + 6.25 * requiredImperialHeight - 5 * requiredAge - 161;
                        UserBMR1 = Number(UserBMR1.toFixed(3));
                        UserBMR2 = 9.247 * requiredImperialWeight + 3.098 * requiredImperialHeight - 4.33 * requiredAge + 447.593;
                        UserBMR2 = Number(UserBMR2.toFixed(3));
                        break;
                }
                if (fatInputs[0].value !== "") {
                    requiredBodyFat = Number(fatInputs[0].value) / 100;
                    UserBMR3 = 370 + 21.6 * (1 - requiredBodyFat) * requiredImperialWeight;
                    UserBMR3 = Number(UserBMR3.toFixed(3));
                }
                else {
                    UserBMR3 = 370 + 21.6 * (1 - requiredBodyFat / 100) * requiredImperialWeight;
                    UserBMR3 = Number(UserBMR3.toFixed(3));
                }
                break;
        }
        let UpdateUserBMR = document.getElementById("BMR").querySelectorAll("span");
        UpdateUserBMR[0].textContent = `${UserBMR1} kcal/day`;
        UpdateUserBMR[1].textContent = `${UserBMR2} kcal/day`;
        UpdateUserBMR[2].textContent = `${UserBMR3} kcal/day`;
        return [UserBMR1, UserBMR2, UserBMR3];
    }
    function calculateMaintenanceCalories() {
        let [requiredBMR1, requiredBMR2, requiredBMR3] = calculateBMR();
        let MC1 = radioButtons[radioCheckedIndex].getAttribute("data-value") * requiredBMR1;
        MC1 = Number(MC1.toFixed(3));
        let MC2 = radioButtons[radioCheckedIndex].getAttribute("data-value") * requiredBMR2;
        MC2 = Number(MC2.toFixed(3));
        let MC3 = radioButtons[radioCheckedIndex].getAttribute("data-value") * requiredBMR3;
        MC3 = Number(MC3.toFixed(3));
        let UpdateUserMC = document.getElementById("maintenanceCalorie").querySelectorAll("span");
        UpdateUserMC[0].textContent = `${MC1} kcal/day`;
        UpdateUserMC[1].textContent = `${MC2} kcal/day`;
        UpdateUserMC[2].textContent = `${MC3} kcal/day`;
    }
    calculateBMI();
    calculateBodyFat();
    calculateBMR();
    calculateMaintenanceCalories();
});