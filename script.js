console.log("Hello this is muzamil")
document.getElementById("icon1").addEventListener("click", function () {
  window.open("https://www.facebook.com/muzammil.854/", "_blank");
});
document.getElementById("icon2").addEventListener("click", function () {
  window.open("https://github.com/muzammil-gitdev", "_blank");
});
document.getElementById("icon3").addEventListener("click", function () {
  window.open("https://www.instagram.com/muzammil.shah_/", "_blank");
});
document.getElementById("icon4").addEventListener("click", function () {
  window.open("https://www.linkedin.com/in/syed-muzammil-ali-shah-b08a39325/", "_blank");
});

  document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission

    // Grab input values
    const firstName = document.getElementById("first-name").value.trim();
    const lastName = document.getElementById("last-name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const topic = document.getElementById("topic").value;
    const message = document.getElementById("message").value.trim();
    const termsChecked = document.getElementById("terms").checked;

    // Validate inputs
    if (!firstName || !lastName || !email || !phone || !message) {
      alert("Please fill in all required fields.");
      return;
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (topic === "Select one...") {
      alert("Please choose a topic.");
      return;
    }

    if (!termsChecked) {
      alert("Please accept the terms.");
      return;
    }

    // If everything is valid
    alert("Form submitted successfully!");
    // You can also submit the form here if using a backend
    // e.target.submit();
    this.reset(); // Reset the form
  });

  function validateEmail(email) {
    // Simple email regex
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

