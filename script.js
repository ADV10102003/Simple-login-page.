function loginUser() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user.trim() === "" || pass.trim() === "") {
        alert("Please fill all fields");
        return false;
    }

    localStorage.setItem("username", user);

    window.location.href = "display.html";
    return false;
}