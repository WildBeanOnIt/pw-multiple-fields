let passwords = document.querySelectorAll('[type="password"]');
let toggle = document.querySelector("#show-passwords");

toggle.addEventListener('click', function() {
    for (let password of passwords) {
        if (toggle.checked) {
            password.type = "text";
        } else {
            password.type = "password";
        }
    }
})