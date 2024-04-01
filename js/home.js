// Header
const header = document.querySelector("header");

function toggleStickyHeader() {
    //Add the "sticky-header" class to the header when you scroll down and remove it when you're at the top of the page
    if (window.scrollY > 100) { 
        header.classList.add("sticky-header");
    } else {
        header.classList.remove("sticky-header");
    }
}

window.addEventListener("scroll", toggleStickyHeader);


//Hamburger Menu

   const hamburgerOpenIcon = document.querySelector("#hamburger-open"),
   hamburgerCloseIcon = document.querySelector("#hamburger-close"),
   hamburgerMenu = document.querySelector("#hamburger-menu");

function openHamburgerMenu() {
//Show the hamburger menu

hamburgerMenu.style.visibility = "visible";
}

function closeHamburgerMenu() {
//Hide the hamburger menu 

hamburgerMenu.style.visibility = "hidden";

}
hamburgerOpenIcon.addEventListener("click", openHamburgerMenu);
hamburgerCloseIcon.addEventListener("click", closeHamburgerMenu);
 

//SCROLL TO
 const makeUp = document.querySelector("#app");
 const scrollToMakeup = document.querySelector(".check");

scrollToMakeup.addEventListener('click', ()=> {
    gsap.to(window, {
        duration:0.5,
        scrollTo: {
            y:makeUp.offsetTop,
            autokill:false
        },
        ease: "power2.out"
    });
});

const abt = document.querySelector("#abt");
const scrollToAbt = document.querySelector("#scroll");

scrollToAbt.addEventListener('click', ()=> {
   gsap.to(window, {
       duration:0.5,
       scrollTo: {
           y:abt.offsetTop,
           autokill:false
       },
       ease: "power2.out"
   });
});

const shop = document.querySelector(".card-container");
const scrollToShop = document.querySelector("#shop");

scrollToShop.addEventListener('click', ()=> {
   gsap.to(window, {
       duration:0.5,
       scrollTo: {
           y:shop.offsetTop,
           autokill:false
       },
       ease: "power2.out"
   });
});

const brand = document.querySelector(".spacers");
const scrollToBrand = document.querySelector("#brand");

scrollToBrand.addEventListener('click', ()=> {
   gsap.to(window, {
       duration:0.5,
       scrollTo: {
           y:brand.offsetTop,
           autokill:false
       },
       ease: "power2.out"
   });
});
