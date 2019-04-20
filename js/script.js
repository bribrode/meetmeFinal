// Sticky Navigation ----------------------------------------------------------

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.querySelector('header');
// getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// Accordian ----------------------------------------------------------
var acc = document.getElementsByClassName("facility");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}



// Form Validation ------------------------------------------------------------
function validateForm() {
  var x = document.forms["contactform"]["name"].value;
  var y = document.forms["contactform"]["email"].value;
  if (x == "") {
    alert("Please enter your name before submitting");
    return false;
  }
  if (y == ""){
    alert("Please enter your email before submitting");
    return false;
  }
}
