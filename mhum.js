function showmenu() {
    var navLink = document.getElementById("navLink");
    navLink.classList.toggle("active");
}

function hidemenu() {
    var navLink = document.getElementById("navLink");
    navLink.classList.remove("active");
}


function showbar() {
    var searchForm = document.querySelector(".search-form");
    searchForm.classList.toggle("active");
}

function showform() {
    var loginForm = document.querySelector(".login-form");
    loginForm.classList.toggle("active");
}

function hidform() {
    var loginForm = document.querySelector(".login-form");
    loginForm.classList.remove("active");
}

document.addEventListener("click", function (event) {
    var loginForm = document.querySelector(".login-form");
    if (!event.target.matches('.fa-user') && !loginForm.contains(event.target)) {
        loginForm.classList.remove("active");
    }
});

document.querySelector(".fa-xmark").addEventListener("click", function () {
    hidform();
});












































