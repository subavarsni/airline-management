function toggleForm(formId) {
    const loginForm = document.getElementById("loginOptions");
    const signupForm = document.getElementById("signupOptions");

    if (formId === "signupOptions") {
        signupForm.style.display = "block";
        loginForm.style.display = "none";
    } else if (formId === "loginOptions") {
        loginForm.style.display = "block";
        signupForm.style.display = "none";
    }
}

function closeForms() {
    document.getElementById("loginOptions").style.display = "none";
    document.getElementById("signupOptions").style.display = "none";
}
