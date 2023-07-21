let searchIcon = document.getElementById("searchIcon");
let searchField = document.getElementById("searchField")
searchIcon.addEventListener("click", diplaySearchField);
function diplaySearchField() {
    searchField.style.display = "inline"
}

let closeBtn = document.getElementById("closeBtn")
closeBtn.addEventListener("click", closestickySideBar)
function closestickySideBar() {
    stickySideBar.style.right = "-300px"
    stickyBtn.style.display = "block"
}
let stickySideBar = document.getElementById("stickySideBar")
let stickyBtn = document.getElementById("stickyBtn")
stickyBtn.addEventListener("click", ShowStickyBtn);
function ShowStickyBtn() {
    stickySideBar.style.right = "0px"
    stickyBtn.style.display = "none"
}


let sec1 = document.getElementById("sec1")
let sec8 = document.getElementById("sec8")
let footer = document.getElementById("footer")
let defaultColors = document.getElementById("defaultColors")
defaultColors.addEventListener("click", show1);
function show1() {
    sec1.style.backgroundColor = "rgba(255, 192, 203, 0.386)"
    sec8.style.backgroundColor = "rgba(239, 157, 184, 0.249)"
    footer.style.backgroundColor = "black"
    upBtn.style.backgroundColor = "rgb(255, 192, 203)"
}
let colors1 = document.getElementById("colors1")
colors1.addEventListener("click", show2);
function show2() {
    sec1.style.backgroundColor = "rgb(170, 0, 255)"
    sec8.style.backgroundColor = "rgb(170, 0, 255)"
    footer.style.backgroundColor = "rgb(185, 138, 209)"
    upBtn.style.backgroundColor = "rgb(170, 0, 255)"
}
let colors2 = document.getElementById("colors2")
colors2.addEventListener("click", show3);
function show3() {
    sec1.style.backgroundColor = "rgb(254, 129, 83)"
    sec8.style.backgroundColor = "rgb(254, 129, 83)"
    footer.style.backgroundColor = "red"
    upBtn.style.backgroundColor = "rgb(254, 129, 83)"
}
let colors3 = document.getElementById("colors3")
colors3.addEventListener("click", show4);
function show4() {
    sec1.style.backgroundColor = "rgb(239, 141, 157)"
    sec8.style.backgroundColor = "rgb(239, 141, 157)"
    footer.style.backgroundColor = "rgb(238, 71, 99)"
    upBtn.style.backgroundColor = "rgb(239, 141, 157)"
}
let colors4 = document.getElementById("colors4")
colors4.addEventListener("click", show5);
function show5() {
    sec1.style.backgroundColor = "rgb(228, 172, 181)"
    sec8.style.backgroundColor = "rgb(228, 172, 181)"
    footer.style.backgroundColor = "rgb(193, 62, 84)"
    upBtn.style.backgroundColor = "rgb(228, 172, 181)"
}
let colors5 = document.getElementById("colors5")
colors5.addEventListener("click", show6);
function show6() {
    sec1.style.backgroundColor = "rgb(236, 165, 35)"
    sec8.style.backgroundColor = "rgb(236, 165, 35)"
    footer.style.backgroundColor = "rgb(255, 166, 0)"
    upBtn.style.backgroundColor = "rgb(236, 165, 35)"
}
let colors6 = document.getElementById("colors6")
colors6.addEventListener("click", show7);
function show7() {
    sec1.style.backgroundColor = "rgb(224, 224, 62)"
    sec8.style.backgroundColor = "rgb(224, 224, 62)"
    footer.style.backgroundColor = "yellow"
    upBtn.style.backgroundColor = "rgb(224, 224, 62)"
}
let colors7 = document.getElementById("colors7")
colors7.addEventListener("click", show8);
function show8() {
    sec1.style.backgroundColor = "lightseagreen"
    sec8.style.backgroundColor = "lightseagreen"
    footer.style.backgroundColor = "rgb(39, 145, 140)"
    upBtn.style.backgroundColor = "lightseagreen"
}
let colors8 = document.getElementById("colors8")
colors8.addEventListener("click", show9);
function show9() {
    sec1.style.backgroundColor = "rgb(101, 190, 101)"
    sec8.style.backgroundColor = "rgb(101, 190, 101)"
    footer.style.backgroundColor = "green"
    upBtn.style.backgroundColor = "rgb(101, 190, 101)"
}
let colors9 = document.getElementById("colors9")
colors9.addEventListener("click", show10);
function show10() {
    sec1.style.backgroundColor = "rgb(126, 126, 219)"
    sec8.style.backgroundColor = "rgb(126, 126, 219)"
    footer.style.backgroundColor = "rgb(50, 164, 235)"
    upBtn.style.backgroundColor = "rgb(126, 126, 219)"
}
let colors10 = document.getElementById("colors10")
colors10.addEventListener("click", show11);
function show11() {
    sec1.style.backgroundColor = "rgb(101, 101, 171)"
    sec8.style.backgroundColor = "rgb(101, 101, 171)"
    footer.style.backgroundColor = "blue"
    upBtn.style.backgroundColor = "rgb(101, 101, 171)"
}



let textttt = document.querySelectorAll(".textttt")
let type1 = document.getElementById("type1");
type1.addEventListener("click", changetext1);

function changetext1() {
    textttt.forEach((element) => {
        element.style.fontFamily = "Verdana, Geneva, Tahoma, sans-serif";
    })
}
let type2 = document.getElementById("type2");
type2.addEventListener("click", changetext2);

function changetext2() {
    textttt.forEach((element) => {
        element.style.fontFamily = "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif";
    })
}
let type3 = document.getElementById("type3");
type3.addEventListener("click", changetext3);

function changetext3() {
    textttt.forEach((element) => {
        element.style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif";
    })
}
let type4 = document.getElementById("type4");
type4.addEventListener("click", changetext4);

function changetext4() {
    textttt.forEach((element) => {
        element.style.fontFamily = "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif";
    })
}
let type5 = document.getElementById("type5");
type5.addEventListener("click", changetext5);

function changetext5() {
    textttt.forEach((element) => {
        element.style.fontFamily = "'Times New Roman', Times, serif";
    })
}
let type6 = document.getElementById("type6");
type6.addEventListener("click", changetext6);

function changetext6() {
    textttt.forEach((element) => {
        element.style.fontFamily = "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif";
    })
}
let type7 = document.getElementById("type7");
type7.addEventListener("click", changetext7);

function changetext7() {
    textttt.forEach((element) => {
        element.style.fontFamily = "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif";
    })
}
let type8 = document.getElementById("type8");
type8.addEventListener("click", changetext8);

function changetext8() {
    textttt.forEach((element) => {
        element.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
    })
}

let Poppins = document.getElementById("Poppins")
Poppins.addEventListener("click", changetext9)
function changetext9() {
    textttt.forEach((element) => {
        element.style.fontFamily = "'roboto', sans-serif";

    })
}

var upBtn = document.getElementById("upBtn")
upBtn.addEventListener("click", up)
function up() {
    scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}

window.onscroll = function () {
    if (window.scrollY >= 500) {
        upBtn.style.display = "block"
    } else {
        upBtn.style.display = "none"
    }
}