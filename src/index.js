import "./style.scss";

// https://swiperjs.com/get-started
var swiper = new Swiper(".mySwiper", { loop: true, });

let dialog = document.querySelector('#dialog');
let btn_dialog_hide = document.querySelector('#btn_dialog_hide');
let signIn = document.querySelector('#signIn');

signIn.onclick = function () {
    dialog.style.display = 'block';
}

btn_dialog_hide.onclick = function () {
    dialog.style.display = 'none';
}