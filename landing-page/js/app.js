/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/** To Do List
 * build dynamic menu
 *  *looping through sections and menus 
 *  *add them to UL
 *  *add active class to the list items
 * Scroll to the wanted section
 *  *by using get bounding element react function
 *  *add smooth scroll
 * remove and add elements from sections

*/

/**
 * Define Global Variables
 *
 */
const sections = document.querySelectorAll("section");
//const fragment = document.createDocumentFragment();
const list = document.getElementById("navbar__list");
let navList = "";
/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

//* building the navigation menu
function navigationMenu() {
    sections.forEach((section) => {
      
      // loop through sections and buid Navigation
      navList += `<li> <a class="menu__link" data-nav ="${section.id}"  href="${section.id}" id ='navbar'>
      ${section.id} </a></li>`
      
      
    });
      //adding it to the html
      
     
    list.innerHTML = navList;
    
  
  }
navigationMenu();

let navMenu = document.querySelectorAll("li");

// itrate in li items list
navMenu.forEach((item) => {
  item.addEventListener("click", function (e) {
    navMenu.forEach((item) => {
      //remove classes from every list item
      item.classList.remove("navbarclick");
    });
    // add the class active
    item.classList.add("navbarclick");
  });
});



// *Add class 'active' to section when near top of viewport
window.onscroll = () => {
  document.querySelectorAll("section").forEach(function (active) {
    //using getBoundingClientRect()
    
    if (
      active.getBoundingClientRect().top >= -400 &&
      active.getBoundingClientRect().top <= 150
    ) {
      //activating class
      //console.log(active.id);
      active.classList.add("your-active-class");
    } else {
      //else removing it
      
      active.classList.remove("your-active-class");
    }
  });
};

// *Scroll to anchor ID using scrollTO event
list.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target.dataset.nav ) {
      
    document.getElementById(`${e.target.dataset.nav}`).scrollIntoView({
      behavior: "smooth",
    });
  }
});
/**
 * End Main Functions
 *
 *
 */

