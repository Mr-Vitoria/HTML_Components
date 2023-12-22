const btnSignIn = document.getElementById("btnSignIn");
const btnSignUp = document.getElementById("btnSignUp");
const mobileSignIn = document.getElementById("mobileSignIn");
const mobileSignUp = document.getElementById("mobileSignUp");

const mainSection = document.getElementById("mainSection");

btnSignIn.addEventListener("click", (ev) =>{
    ev.preventDefault();
    mainSection.classList.add("active");
});
btnSignUp.addEventListener("click", (ev) =>{
    ev.preventDefault();
    mainSection.classList.remove("active");
});
mobileSignIn.addEventListener("click", (ev) =>{
    ev.preventDefault();
    mainSection.classList.add("active");
});
mobileSignUp.addEventListener("click", (ev) =>{
    ev.preventDefault();
    mainSection.classList.remove("active");
});