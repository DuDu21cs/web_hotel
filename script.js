// ── NAVIGATION ──
// Redirects to the booking form page
function goToForm() {
  window.location.href = "form.html";
}

// Redirects to the reservation page
function goToresev() {
  window.location.href = "reservation.html";
}

// ── HAMBURGER MENU TOGGLE ──
// Toggles the mobile nav menu open/closed when the hamburger icon is clicked
document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".fa.fa-bars");
  const menuList = document.getElementById("menulist");

  if (menuIcon && menuList) {
    menuIcon.addEventListener("click", function () {
      menuList.classList.toggle("open");
    });

    // Close the menu if user clicks anywhere outside of it
    document.addEventListener("click", function (e) {
      if (!menuIcon.contains(e.target) && !menuList.contains(e.target)) {
        menuList.classList.remove("open");
      }
    });
  }
});