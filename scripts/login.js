// Get elements
const loginBtn = document.getElementById("loginBtn");
const closeLoginBtn = document.getElementById("closeLoginBtn");
const loginPopup = document.getElementById("loginPopup");
// Function to open popup
function openPopup() {
  loginPopup.classList.add("active");
  loginPopup.setAttribute("aria-hidden", "false");
  loginBtn.setAttribute("aria-expanded", "true");
  // Trap focus in popup (simple version)
  document.body.style.overflow = "hidden"; // prevent scroll behind popup
}
// Function to close popup
function closePopup() {
  loginPopup.classList.remove("active");
  loginPopup.setAttribute("aria-hidden", "true");
  loginBtn.setAttribute("aria-expanded", "false");
  document.body.style.overflow = ""; // restore scroll
}
// Open popup on click or keyboard enter/space on LOGIN
loginBtn.addEventListener("click", openPopup);
loginBtn.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    openPopup();
  }
});

// Close popup on close button click
closeLoginBtn.addEventListener("click", closePopup);
// Close popup when clicking outside popup box (on overlay)
loginPopup.addEventListener("click", function (e) {
  if (e.target === loginPopup) {
    closePopup();
  }
});
// Close popup on ESC key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && loginPopup.classList.contains("active")) {
    closePopup();
  }
});
