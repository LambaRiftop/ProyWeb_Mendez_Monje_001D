var username = document.getElementById('mail');
var password = document.getElementById('pass');
const button = document.querySelector("#button");

const pass = document.getElementById('pass'),
      icon = document.querySelector(".bi");

icon.addEventListener("click", e => {
    if(pass.type === "password") {
        pass.type = "text";
        icon.classList.remove('bi-eye')
        icon.classList.add('bi-eye-slash')
    } else {
        pass.type = "password";
        icon.classList.add('bi-eye')
        icon.classList.remove('bi-eye-slash')
    }
})

button.addEventListener("click", function(evento){
    evento.preventDefault()
    let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    if (username.value.match(pattern)) {
        username.value = ""
    } else {
        username.value = ""
        username.classList.add("errorField")
        username.placeholder = "Correo Invalido"
    }

    if (password.value.length < 8 || password.value.length > 12) {
        password.value = ""
        password.classList.add("errorField")
        password.placeholder = "Contraseña Invalida"
    } else {
        password.value = ""
    }
})

username.addEventListener("keyup", function(){
    username.classList.remove("errorField")
    username.placeholder = "Correo Electronico"
})

password.addEventListener("keyup", function(){
    password.classList.remove("errorField")
    password.placeholder = "Contraseña"
})