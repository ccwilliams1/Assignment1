//Declare variable that tells whether the form is valid or not
let validForm

//On Submit method that runs validations
let validateForm = () => {
    validForm = true
    theForm = document.theForm
    //Username check
    userName = theForm.username.value
    if(4 <= userName.length <= 12 && userName.match("^[a-z]+$")){}
    else if(userName.length == 0) {
        printLabel("User Name", "empty")
    }
    else{
        printLabel("User Name", "invalid")
    }
    //Email check
    email = theForm.email.value
    if(email.match("[a-zA-Z]+@[a-zA-Z]+\.(net|com|org|edu)+")){}
    else if(email.length == 0)
        printLabel("Email", "empty")
    else
    printLabel("Email", "invalid")

    //Phone number check
    number = theForm.phoneNumber.value
    if(number.match(/^\(\d{3}\)-\d{3}-\d{4}$/)){}
    else if(number.length == 0){
        printLabel("Phone Number", "empty")
    }
    else
        printLabel("Phone Number", "invalid")

    //Password check
    let password = document.getElementById("password")
    let passwordConf = document.getElementById("passwordConf")
    if(password.value != passwordConf.value) {
        alert("passwords do not match")
    }


    //Gender Check
    let gender = document.getElementsByName("gender")
    let checked = false;
    for(let i = 0; i < gender.length; i++) {
        if(gender[i].checked)
            checked = true
    }
    if(checked == false) {
        printLabel("Gender", "invalid")
    }

    //Age Group Check
    ageGroup = theForm.ageGroup
    if(ageGroup.value.length == 0) {
        printLabel("Age Group", "invalid")
    }

    if(validForm){
        location.href = "https://ccwilliams1.github.io/HWAssignments/"
    }
}




//Function that takes a field name and whether or not the field is empty or invalid
//The function then creates a new h4 and span element and populates them accordingly
//The function then appends the two to a div element and sets validForm to false
let printLabel = (fieldName, label_type) => {
    let validationDiv = document.getElementById("validationLabels")
    let h4 = document.createElement("h4")
    let span = document.createElement("span")
    span.innerHTML = fieldName
    if(label_type == "invalid" && (fieldName == "Age Group" || fieldName == "Gender")) {
        h4.innerHTML = "Please select "
        span.style.color = "orange"
    }
    else if(label_type == "invalid" && !(fieldName == "Age Group" || fieldName == "Gender")) {
        h4.innerHTML = "Please enter a valid "
        span.style.color = "orange"
    }
    else {
        h4.innerHTML = "Please enter "
        span.style.color = "red"
    }
    h4.innerHTML += span.outerHTML
    validationDiv.appendChild(h4)
    validForm = false

}
let clearForm = () => {
    //Destroys the div containing all the validation labels
    let validationDiv = document.getElementById("validationLabels")
    validationDiv.remove()

    //Creates a new div with the same id so more labels can be added
    newDiv = document.createElement("div")
    newDiv.setAttribute("id","validationLabels")
    document.body.append(newDiv)
}

