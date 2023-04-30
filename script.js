"use strict";

const shareBtn = document.querySelector(".card__share");
const popupShare = document.querySelector(".card__popup-wrapper");
const authorImg = document.querySelector(".card__author-img-wrapper");
const nameDate = document.querySelector(".card__name-date-wrapper");

shareBtn.onclick = activatePopup;
popupShare.onclick = (e) => {e.stopPropagation()}
document.body.onclick = diactivatePopup;

function activatePopup(e) {
    e.stopPropagation();

    if (window.innerWidth <= 900) {
        authorImg.classList.toggle("visually-hidden");
        nameDate.classList.toggle("visually-hidden");
    }

    shareBtn.classList.toggle("card__share--active");
    popupShare.classList.toggle("card__popup-wrapper--active");
}

function diactivatePopup() {
    shareBtn.classList.remove("card__share--active");
    popupShare.classList.remove("card__popup-wrapper--active");
}