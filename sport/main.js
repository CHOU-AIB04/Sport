let navLinks = document.querySelectorAll("#nav a");
//events that if click of each element I will move to some part in the page
navLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent the default behavior of the link
    let targetId = link.getAttribute("href").substring(1); // Get the target section's ID
    let targetSection = document.getElementById(targetId); // Get the target section
    targetSection.scrollIntoView({ behavior: "smooth"}); // Scroll to the target section with smooth scrolling
  });
});

// add some effect in scrolling
