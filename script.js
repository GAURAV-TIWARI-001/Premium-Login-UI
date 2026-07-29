const toast = document.getElementById("toast");
const toastIcon = document.getElementById("toastIcon");
const toastTitle = document.getElementById("toastTitle");
const toastMessage = document.getElementById("toastMessage");

function showToast(type, title, message) {

    toastTitle.textContent = title;
    toastMessage.textContent = message;

    if (type === "success") {
        toastIcon.className = "ri-checkbox-circle-fill";
        toastIcon.style.color = "#22c55e";
    } else {
        toastIcon.className = "ri-error-warning-fill";
        toastIcon.style.color = "#ef4444";
    }

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);

}
const loginForm = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const togglePassword = document.getElementById("togglePassword");


// 👁️ Show / Hide Password
togglePassword.addEventListener("click", () => {

    if (password.type === "password") {
        password.type = "text";
        togglePassword.innerHTML = '<i class="ri-eye-off-line"></i>';
    } else {
        password.type = "password";
        togglePassword.innerHTML = '<i class="ri-eye-line"></i>';
    }

});


// 🚀 Login
loginForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    // Empty Validation
    if (emailValue === "" || passwordValue === "") {
        showToast(
    "error",
    "Missing Fields",
    "Please fill all fields."
);
        return;
    }

    // Email Validation
    const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailValue)) {
        showToast(
    "error",
    "Invalid Email",
    "Please enter a valid email address."
);
        return;
    }

    // Password Length
    if (passwordValue.length < 6) {
        showToast(
    "error",
    "Weak Password",
    "Password must be at least 6 characters."
);
        return;
    }

    // Loading State
    loginBtn.disabled = true;

    loginBtn.innerHTML =
    '<i class="ri-loader-4-line ri-spin"></i> Logging In...';

    setTimeout(() => {

        loginBtn.innerHTML =
        '<i class="ri-check-line"></i> Login Successful';
        showToast(
    "success",
    "Login Successful",
    "Welcome back!"
);

        loginBtn.style.background =
        "linear-gradient(135deg,#16a34a,#22c55e)";

        setTimeout(() => {

            loginBtn.disabled = false;

            loginBtn.innerHTML = "Login";

            loginBtn.style.background =
            "linear-gradient(135deg,#2563eb,#7c3aed)";

            loginForm.reset();

            password.type = "password";

            togglePassword.innerHTML =
            '<i class="ri-eye-line"></i>';

        },2000);

    },1800);

});