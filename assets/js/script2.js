document.getElementById("userForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let dob = document.getElementById("dob").value;
    let gender = document.querySelector('input[name="gender"]:checked');

    if (!gender) {
        alert("Please select gender");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters");
        return;
    }

    alert("Form submitted successfully ✅");
});