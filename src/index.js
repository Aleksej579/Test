import "./style.scss";

// add slider library 'Swiper' https://swiperjs.com/get-started
var swiper = new Swiper(".mySwiper", { loop: true, });

// pop-up display or hide
let dialog = document.querySelector('#dialog');
let btn_dialog_hide = document.querySelector('#btn_dialog_hide');
let signIn = document.querySelector('#signIn');

signIn.onclick = function () {
    dialog.style.display = 'block'
    dialog.classList.add("show");
}
btn_dialog_hide.onclick = function () {
    dialog.classList.remove("show")
    setTimeout(() => { dialog.style.display = 'none' }, 2000);
}

// This code displays and hides the text tooltip when validating on html markup
const inputEmail = document.getElementById("email");
const inputPass = document.getElementById("pass");
const errorEmail = document.getElementById("errorEmail");
const errorPass = document.getElementById("errorPass");

inputEmail.addEventListener("change", () => {
    if (!inputEmail.checkValidity()) {
        errorEmail.style.display = 'block'
    } else {
        errorEmail.style.display = 'none'
    }
});
inputPass.addEventListener("change", () => {
    if (!inputPass.checkValidity()) {
        errorPass.style.display = 'block'
    } else {
        errorPass.style.display = 'none'
    }
});