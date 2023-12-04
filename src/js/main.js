/*
const settings = {
    typePassword: "password",
    typeText: "text"
};

const show = {
    buttonSelector: document.querySelector(".showPass"),
    passwordElement: document.getElementById(settings.typePassword),
    init(){
        this.buttonSelector.addEventListener("click", () => {
            this.passwordElement.type = this.passwordElement.type === settings.typePassword?settings.typeText:settings.typePassword;
        })
    }
}

show.init();

*/

document.documentElement.classList.add("js-enabled");

const password = document.querySelector(".showPass");

password.addEventListener("click", function (){
    if (document.getElementById("password").type === "password"){
        document.getElementById("password").type = "text";
    } else {
        document.getElementById("password").type = "password";
    }
});