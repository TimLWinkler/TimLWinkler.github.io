/*
    This is the place where you can do all crazy sort of things with JavaScript
    Like defining functions jada jada jada...
 */

/* global Variable to set the scroll thing for Standort */
let Standort

/* function to return to HOME-page when clicked on the logo */
function clickLogo() {
    window.location.href = "./werkVital.html";
}
function clickLogoOther() {
    window.location.href = "./../werkVital.html";
}

/* function to set height of separator up and change color */
function clickCheckbox() {
    let sepa = document.getElementById("separator");
    let menu = document.getElementById("menu").children;
    sepa.style.transition = "cubic-bezier(0.77,0.2,0.05,1.0) .65s"
    if (sepa.style.height === "36vw") {
        sepa.style.height = "0px"
        sepa.style.backgroundColor = "#97d700"
        listElemColorChange(menu, "#97d700")
    }else {
        sepa.style.height = "36vw"
        sepa.style.backgroundColor = "#6E7857"
        listElemColorChange(menu, "#000010")
    }
}

/* function to change the given element/children List to a given color */
function listElemColorChange(elem, color) {
    let mLength = elem.length
    for (let i = 0; i < mLength; i++) {
        let e = elem.item(i).children.item(0)
        e.style.transition = "cubic-bezier(0.77,0.2,0.05,1.0) .55s"
        e.style.color = color
    }
}

/* function to change page to "Standort" */
function changeToStandort(path) {
    localStorage.setItem(Standort, "true");
    document.location.href = path;
}

/* function sto scroll down to see "Standort" */
function scrollToStandort() {
    let item = localStorage.getItem(Standort)
    //console.log(item)
    if (item === "true") {
        let el = document.getElementById("header_Standort");
        el.scrollIntoView(true);
        window.scrollBy(0, -150);
        localStorage.setItem(Standort, "false")
    }
}

/* function to look if scrolled to Standort yet and set active accordingly */
function scrollEvent() {
    let temp = window.scrollY
    //console.log(temp)
    let k1 = document.getElementById("Kontakt1")
    let k2 = document.getElementById("Kontakt2")
    let s1 = document.getElementById("Standort1")
    let s2 = document.getElementById("Standort2")
    if (temp >= 650) {
        k1.classList.remove("active")
        k2.classList.remove("active")
        s1.classList.add("active")
        s2.classList.add("active")
    } else {
        s1.classList.remove("active")
        s2.classList.remove("active")
        k1.classList.add("active")
        k2.classList.add("active")
    }
}