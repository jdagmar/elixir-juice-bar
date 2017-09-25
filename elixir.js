
function toggleHamburgerMenu (event) {

    var hamburger = document.getElementById("hamburger-nav");
    var rotate = document.getElementById("hamburger-icon");

    if (event && event.which != 32){
        return;
    }

    if (event) {
        event.preventDefault();
    }
    else {
        rotate.blur();
    }

    if (hamburger.classList.contains("show-hamburger")){
        hamburger.classList.remove("show-hamburger");
        rotate.classList.remove("hamburger-icon-rotate")
    }
    else {
        hamburger.classList.add("show-hamburger");
        rotate.classList.add("hamburger-icon-rotate")
    }

}


