var colorChange = document.getElementById("click");
var element = document.getElementsByClassName("background");
var clicknum = 0;

colorChange.addEventListener("click", (event) => {
    if (clicknum == 0) {
        element[0].style.background = "linear-gradient(0deg, rgba(58, 39, 99,1) 0%, rgba(140, 70, 138,1) 100%)";
        clicknum = 1;
    } else {
        element[0].style.background = "linear-gradient(0deg, rgba(114, 164, 214,1) 0%, rgba(156, 231, 240,1) 100%)";
        clicknum = 0;
    }
});

var loadvar;

function loadFunc() {
    loadvar = setTimeout(showPage, 3000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("background").style.display = "block";
}