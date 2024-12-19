const navbar= document.querySelector('.navbar');
const sticky = navbar.offsetTop;
function stickyNavbar() {
if (window.pageYOffset >= sticky) {
  navbar.classList.add('fixed');
} else {
  navbar.classList.remove('fixed');
}
}

window.onscroll = function() {
stickyNavbar();
};


  const navheight = document.querySelector('.navbar').offsetHeight;
  document.documentElement.style.setProperty('--scroll-top', navheight+"px");

  