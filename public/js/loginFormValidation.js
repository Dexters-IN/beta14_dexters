function removeInvalidSuggestion() {
    const feedbackDivForSuggestion =
        document.getElementById("msg-suggestion");
    const uusername = document.querySelector("#suggestionText");
    if (uusername.classList.contains("invalid-red")) {
        uusername.classList.remove("invalid-red");
    }
    feedbackDivForSuggestion.style.display = "none";
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
    removeInvalidSuggestion();
    removeInvalidPassword();
}

const form = document.querySelector("#form");
const upassword = document.querySelector("#password");
const uusername = document.querySelector("#suggestionText");
const feedbackDivForPassword = document.getElementById("msg-p");
const feedbackDivForSuggestion =
    document.getElementById("msg-suggestion");

function testsuggestion(suggestiontext) {
    var suggestiontext = document.forms.f.username.value;
    if (suggestiontext.trim().length == 0) {
        uusername.classList.add("invalid-red");
        feedbackDivForSuggestion.style.display = "block";
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
    if (!testsuggestion(uusername)) {
        event.preventDefault();
        event.stopPropagation();
    }
    if (!testpassword(upassword)) {
        event.preventDefault();
        event.stopPropagation();
    }
});