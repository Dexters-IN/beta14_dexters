function removeInvalidSuggestion() {
    const feedbackDivForSuggestion =
        document.getElementById("msg-suggestion");
    const usuggestion = document.querySelector("#suggestionText");
    if (usuggestion.classList.contains("invalid-red")) {
        usuggestion.classList.remove("invalid-red");
    }
    feedbackDivForSuggestion.style.display = "none";
}

function RemoveInvalidName() {
    const feedbackDiv = document.getElementById("msg");
    const uname = document.querySelector("#name");
    if (uname.classList.contains("invalid-red")) {
        uname.classList.remove("invalid-red");
    }
    feedbackDiv.style.display = "none";
}
function removeInvalidEmail() {
    const uemail = document.querySelector("#email");
    const feedbackDivForEmail = document.getElementById("msg-e");
    if (uemail.classList.contains("invalid-red")) {
        uemail.classList.remove("invalid-red");
    }
    feedbackDivForEmail.style.display = "none";
}
function removeInvalidNumber() {
    const unumber = document.querySelector("#number");
    const feedbackDivForNumber = document.getElementById("msg-n");
    if (unumber.classList.contains("invalid-red")) {
        unumber.classList.remove("invalid-red");
    }
    feedbackDivForNumber.style.display = "none";
}
function removeInvalidPassword() {
    const upassword = document.querySelector("#password");
    const feedbackDivForPassword = document.getElementById("msg-p");
    if (upassword.classList.contains("invalid-red")) {
        upassword.classList.remove("invalid-red");
    }
    feedbackDivForPassword.style.display = "none";
}


function resetAll() {
    var suggestionimage = document.querySelector("#formFile");
    RemoveInvalidName();
    removeInvalidNumber();
    removeInvalidEmail();
    removeInvalidSuggestion();
    removeInvalidPassword();
}

const form = document.querySelector("#form");
const uname = document.querySelector("#name");
const uemail = document.querySelector("#email");
const unumber = document.querySelector("#number");
const upassword = document.querySelector("#password");
const usuggestion = document.querySelector("#suggestionText");
const feedbackDiv = document.getElementById("msg");
const feedbackDivForImg = document.getElementById("msg-img");
const feedbackDivForEmail = document.getElementById("msg-e");
const feedbackDivForNumber = document.getElementById("msg-n");
const feedbackDivForPassword = document.getElementById("msg-p");
const feedbackDivForSuggestion = document.getElementById("msg-suggestion");

function testemail(useremail) {
    var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var useremail = document.forms.f.email.value;
    if (!emailPattern.test(useremail)) {
        uemail.classList.add("invalid-red");
        feedbackDivForEmail.style.display = "block";
        return false;
    }
    return true;
}

function testsuggestion(suggestiontext) {
    var suggestiontext = document.forms.f.username.value;
    if (suggestiontext.trim().length == 0) {
        usuggestion.classList.add("invalid-red");
        feedbackDivForSuggestion.style.display = "block";
        return false;
    }
    return true;
}

function testnumber(usernumber) {
    var numberPattern =
        /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    var usernumber = document.forms.f.phone.value;
    if (usernumber.trim().length == 0 || !numberPattern.test(usernumber)) {
        unumber.classList.add("invalid-red");
        feedbackDivForNumber.style.display = "block";
        return false;
    }
    return true;
}

function testname(username) {
    var pattern = /[^A-Z a-z]/;
    var username = document.forms.f.name.value;
    if (username.trim().length == 0 || pattern.test(username)) {
        uname.classList.add("invalid-red");
        feedbackDiv.style.display = "block";
        return false;
    }
    return true;
}

function testpassword(userpassword) {
    var userpassword = document.forms.f.password.value;
    if (userpassword.length === 0) {
        upassword.classList.add("invalid-red");
        feedbackDivForPassword.style.display = "block";
        return false;
    }
    return true;
}

form.addEventListener("submit", (event) => {
    if (!testname(uname)) {
        event.preventDefault();
        event.stopPropagation();
    }
    if (!testemail(uemail)) {
        event.preventDefault();
        event.stopPropagation();
    }
    if (!testnumber(unumber)) {
        event.preventDefault();
        event.stopPropagation();
    }
    if (!testsuggestion(usuggestion)) {
        event.preventDefault();
        event.stopPropagation();
    }
    if (!testpassword(upassword)) {
        event.preventDefault();
        event.stopPropagation();
    }
});