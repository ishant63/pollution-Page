document.addEventListener("click", function (event) {
  const navbar = document.querySelector(".navbar-collapse");
  const isClickInside =
    navbar.contains(event.target) ||
    event.target.classList.contains("navbar-toggler");

  // Close the navbar if clicked outside or on a link
  if (!isClickInside && navbar.classList.contains("show")) {
    const bootstrapNavbar = new bootstrap.Collapse(navbar);
    bootstrapNavbar.hide();
  }

  // Close the navbar if a nav-link is clicked
  if (
    event.target.classList.contains("nav-link") &&
    navbar.classList.contains("show")
  ) {
    const bootstrapNavbar = new bootstrap.Collapse(navbar);
    bootstrapNavbar.hide();
  }
});

// Use Google Maps API to display an interactive map
function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 2,
    center: { lat: 20.5937, lng: 78.9629 }, // Coordinates for the center of India (can be changed)
  });
}
