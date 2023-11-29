const emailInput = document.getElementById("email");
const errorMessage = document.getElementById("error");


emailInput.addEventListener('input', function() {
  const email = emailInput.value;
  const isValidEmail = validateEmail(email);

  if (isValidEmail) {
    errorMessage.style.display = "none";
    emailInput.style.borderColor = "initial";

   } else {
    errorMessage.style.display = "block";
    emailInput.style.borderColor = "hsl(354, 100%, 66%)";
  }
});

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}