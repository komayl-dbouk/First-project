const navbar = document.querySelector(".header");
window.onscroll = toggleNavBg;

function toggleNavBg(){
    if(window.scrollY > 600){
        navbar.classList.add("header1");
    }
        else navbar.classList.remove("header1");
    }


