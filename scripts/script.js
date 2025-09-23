// function myFunction() {
//   document.getElementById("myDropdown").classList.toggle("show");
// }

// Close the dropdown if the user clicks outside of it
// window.onclick = function (e) {
//   if (!e.target.matches(".dropbtn")) {
//     var myDropdown = document.getElementById("myDropdown");
//     if (myDropdown.classList.contains("show")) {
//       myDropdown.classList.remove("show");
//     }
//   }
// };

// LOGIN-POPUP
const loginBtn = document.querySelector(".show-login");
const loginForm = document.querySelector(".centre");
const closeBtn = document.querySelector(".close");
loginBtn.addEventListener("click", function () {
  loginForm.style.display = "block";
});
closeBtn.addEventListener("click", function () {
  loginForm.style.display = "none";
});
