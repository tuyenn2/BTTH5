var Delete = document.querySelector(".delete");
var confirm = document.querySelector(".confirm");
var modal = document.getElementById("modal");
var Cancel = document.querySelector(".cancel");
var Confirm = document.querySelector(".btn__confirm");
var main = document.querySelector(".box");
var mainText = document.querySelector(".header-box");

Delete.addEventListener("click",function () {
    modal.classList.add("display");
    confirm.classList.add("display");
});

var hidden = function () {
    modal.classList.remove("display");
    confirm.classList.remove("display");
};

modal.addEventListener("click", hidden);
Cancel.addEventListener("click", hidden);
Confirm.addEventListener("click",function () {
    modal.classList.remove("display");
    confirm.classList.remove("display");
    main.removeChild(mainText);
    Delete.classList.add("hidden");
});
