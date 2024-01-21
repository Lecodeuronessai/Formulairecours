const eye = document.querySelector('.feather-eye');
const eyeOff = document.querySelector('.feather-eye-off');
const passwordField = document.querySelector('input[name=password]');

const confirmEye = document.querySelector('.confirmpassword .feather-eye');
const confirmEyeOff = document.querySelector('.confirmpassword .feather-eye-off');
const confirmPasswordField = document.querySelector('input[name="confirmpassword"]');



eye.addEventListener("click", () => {
    eye.style.display = "none";
    eyeOff.style.display = "block";
    passwordField.type = "text";
})

eyeOff.addEventListener("click", () => {
    eyeOff.style.display = "none";
    eye.style.display = "block";
    passwordField.type = "password";
})


confirmEye.addEventListener("click", () => {
    confirmEye.style.display = "none";
    confirmEyeOff.style.display = "block";
    confirmPasswordField.type = "text";
});

confirmEyeOff.addEventListener("click", () => {
    confirmEyeOff.style.display = "none";
    confirmEye.style.display = "block";
    confirmPasswordField.type = "password";
});


const pseudo = document.querySelector

if(email.value == ''){
    errorContainer.classList.add('visible')
    email.classList.remove('success')

const err = document.createElement('li')
err.innerText = "Le champ email ne peut pas être vide"
};

const form = document.querySelector('form')
form.addEventListener('submit', function(event){
    event.preventDefault();

    const email = document.querySelector('#email')

    if(email.value == '') {
        console.log("invalide")
    } else {
        email.classList.add('success')
    }
})


document.addEventListener("DOMContentLoaded", function () {
    const formulaire = document.querySelector("form");

    formulaire.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmpassword").value;

        if (username !== '' && email !== '' && password !== '' && confirmPassword !== '') {
            window.location.href = 'envoi.html';
        } else {
            alert("Veuillez remplir tous les champs.");
        }
    });
});