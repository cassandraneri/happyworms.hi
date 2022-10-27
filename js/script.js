// OVERLAY NAV MENU SHOW HIDE

const mymenubutton = document.querySelector('.menu-button');
const mysitenav = document.querySelector('.site-header .site-nav');

mymenubutton.onclick = function() {
    if (mysitenav.getAttribute('data-navstate') === 'closed') {
        mysitenav.setAttribute('data-navstate', 'open')
    } else {
        mysitenav.setAttribute('data-navstate', 'closed')
    }
};

//  REVEAL ON SCROLL ANIMATION
// CHANGE ACTIVE STATE FOR ALL SECTIONS WITH INTERSECTION OBSERVER
const myobserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.setAttribute("data-sectionstate", "active");
      } else {
        entry.target.setAttribute("data-sectionstate", "inactive");
      }
    });
  });
  
  
  document.querySelectorAll(".scroll-triggered").forEach((section) => {
    myobserver.observe(section);
  }); 
  