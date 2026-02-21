function generatePassword() {
    let length = document.getElementById("length").value;
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";

    let password = "";

    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }

    document.getElementById("password").value = password;
}

function copyPassword() {
    let passField = document.getElementById("password");
    passField.select();
    document.execCommand("copy");
    alert("Password copied!");
}
