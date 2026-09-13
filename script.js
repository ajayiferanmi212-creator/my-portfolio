const form = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    formMessage.textContent = "Message sent successfully!";

    form.reset();

});