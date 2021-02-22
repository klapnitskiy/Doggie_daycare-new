const menuBtn = document.querySelector(".page__button--menu");
const menu = document.querySelector(".header-nav");

menuBtn.addEventListener("click", showMenu);

document.addEventListener("DOMContentLoaded", function () {
    if (!menu.classList.contains("header-nav--mobile-active")) {
        menu.classList.add("header-nav--mobile-closed");
    } else {
        menu.classList.remove("header-nav--mobile-closed");
    }
});

function classListener() {
    // menu.classList.remove("header-nav--mobile-active");
    // console.log("entered transition in else");

    if (
        menu.classList.contains("header-nav--mobile-active") &&
        menu.classList.contains("header-nav--mobile-closed")
    ) {
        menu.classList.remove("header-nav--mobile-active");
        console.log("entered transition in else");
    }
}

function showMenu() {
    if (!menu.classList.contains("header-nav--mobile-active")) {
        menu.classList.add("header-nav--mobile-active");
        menu.classList.remove("header-nav--mobile-closed");
        console.log("entered if");
    } else {
        menu.classList.add("header-nav--mobile-closed");
        menu.addEventListener("animationend", classListener);
        console.log("entered else");
    }
    console.log("function ended");
}
