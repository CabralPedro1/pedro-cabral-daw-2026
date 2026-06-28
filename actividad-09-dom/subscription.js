// CAMPOS DEL FORMULARIO

const formulario = document.getElementById("subscriptionForm");

const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const password = document.getElementById("password");
const repetirPassword = document.getElementById("repetirPassword");
const edad = document.getElementById("edad");
const telefono = document.getElementById("telefono");
const direccion = document.getElementById("direccion");
const ciudad = document.getElementById("ciudad");
const codigoPostal = document.getElementById("codigoPostal");
const dni = document.getElementById("dni");

// MENSAJES DE ERROR

const errorNombre = document.getElementById("errorNombre");
const errorEmail = document.getElementById("errorEmail");
const errorPassword = document.getElementById("errorPassword");
const errorRepetirPassword = document.getElementById("errorRepetirPassword");
const errorEdad = document.getElementById("errorEdad");
const errorTelefono = document.getElementById("errorTelefono");
const errorDireccion = document.getElementById("errorDireccion");
const errorCiudad = document.getElementById("errorCiudad");
const errorCodigoPostal = document.getElementById("errorCodigoPostal");
const errorDni = document.getElementById("errorDni");

const tituloFormulario = document.getElementById("tituloFormulario");

// FUNCIONES DE VALIDACIÓN

function validarNombre() {

    const valor = nombre.value.trim();

    if (valor.length <= 6 || !valor.includes(" ")) {
        errorNombre.textContent = "Debe tener más de 6 letras y un espacio.";
        return false;
    }

    errorNombre.textContent = "";
    return true;
}

function validarEmail() {

    const expresion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!expresion.test(email.value.trim())) {
        errorEmail.textContent = "Ingrese un email válido.";
        return false;
    }

    errorEmail.textContent = "";
    return true;
}

function validarPassword() {

    const expresion = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

    if (!expresion.test(password.value)) {
        errorPassword.textContent = "Debe tener al menos 8 caracteres con letras y números.";
        return false;
    }

    errorPassword.textContent = "";
    return true;
}

function validarRepetirPassword() {

    if (password.value !== repetirPassword.value || repetirPassword.value === "") {
        errorRepetirPassword.textContent = "Las contraseñas no coinciden.";
        return false;
    }

    errorRepetirPassword.textContent = "";
    return true;
}

function validarEdad() {

    const valor = parseInt(edad.value);

    if (isNaN(valor) || valor < 18) {
        errorEdad.textContent = "Debe ser mayor o igual a 18 años.";
        return false;
    }

    errorEdad.textContent = "";
    return true;
}

function validarTelefono() {

    const expresion = /^\d{7,}$/;

    if (!expresion.test(telefono.value)) {
        errorTelefono.textContent = "Debe contener al menos 7 dígitos.";
        return false;
    }

    errorTelefono.textContent = "";
    return true;
}

function validarDireccion() {

    const expresion = /^(?=.*[A-Za-z])(?=.*\d).{5,}$/;

    if (!expresion.test(direccion.value) || !direccion.value.includes(" ")) {
        errorDireccion.textContent = "Ingrese una dirección válida.";
        return false;
    }

    errorDireccion.textContent = "";
    return true;
}

function validarCiudad() {

    if (ciudad.value.trim().length < 3) {
        errorCiudad.textContent = "Debe tener al menos 3 caracteres.";
        return false;
    }

    errorCiudad.textContent = "";
    return true;
}

function validarCodigoPostal() {

    if (codigoPostal.value.trim().length < 3) {
        errorCodigoPostal.textContent = "Debe tener al menos 3 caracteres.";
        return false;
    }

    errorCodigoPostal.textContent = "";
    return true;
}

function validarDni() {

    const expresion = /^\d{7,8}$/;

    if (!expresion.test(dni.value)) {
        errorDni.textContent = "Debe tener 7 u 8 dígitos.";
        return false;
    }

    errorDni.textContent = "";
    return true;
}

// EVENTOS BLUR

nombre.addEventListener("blur", validarNombre);
email.addEventListener("blur", validarEmail);
password.addEventListener("blur", validarPassword);
repetirPassword.addEventListener("blur", validarRepetirPassword);
edad.addEventListener("blur", validarEdad);
telefono.addEventListener("blur", validarTelefono);
direccion.addEventListener("blur", validarDireccion);
ciudad.addEventListener("blur", validarCiudad);
codigoPostal.addEventListener("blur", validarCodigoPostal);
dni.addEventListener("blur", validarDni);

// EVENTOS FOCUS

nombre.addEventListener("focus", () => errorNombre.textContent = "");
email.addEventListener("focus", () => errorEmail.textContent = "");
password.addEventListener("focus", () => errorPassword.textContent = "");
repetirPassword.addEventListener("focus", () => errorRepetirPassword.textContent = "");
edad.addEventListener("focus", () => errorEdad.textContent = "");
telefono.addEventListener("focus", () => errorTelefono.textContent = "");
direccion.addEventListener("focus", () => errorDireccion.textContent = "");
ciudad.addEventListener("focus", () => errorCiudad.textContent = "");
codigoPostal.addEventListener("focus", () => errorCodigoPostal.textContent = "");
dni.addEventListener("focus", () => errorDni.textContent = "");

nombre.addEventListener("input", function () {

    if (nombre.value.trim() === "") {
        tituloFormulario.textContent = "HOLA";
    } else {
        tituloFormulario.textContent = "HOLA " + nombre.value.toUpperCase();
    }

});

// SUBMIT

formulario.addEventListener("submit", function (e) {

    e.preventDefault();

    const validaciones = [

        validarNombre(),
        validarEmail(),
        validarPassword(),
        validarRepetirPassword(),
        validarEdad(),
        validarTelefono(),
        validarDireccion(),
        validarCiudad(),
        validarCodigoPostal(),
        validarDni()

    ];

    if (validaciones.every(Boolean)) {

        alert(

            "DATOS INGRESADOS\n\n" +

            "Nombre: " + nombre.value + "\n" +
            "Email: " + email.value + "\n" +
            "Edad: " + edad.value + "\n" +
            "Teléfono: " + telefono.value + "\n" +
            "Dirección: " + direccion.value + "\n" +
            "Ciudad: " + ciudad.value + "\n" +
            "Código Postal: " + codigoPostal.value + "\n" +
            "DNI: " + dni.value

        );

        formulario.reset();
        errorNombre.textContent = "";
        errorEmail.textContent = "";
        errorPassword.textContent = "";
        errorRepetirPassword.textContent = "";
        errorEdad.textContent = "";
        errorTelefono.textContent = "";
        errorDireccion.textContent = "";
        errorCiudad.textContent = "";
        errorCodigoPostal.textContent = "";
        errorDni.textContent = "";
        tituloFormulario.textContent = "HOLA";

    }

    else {

        let errores = "";

        if (!validarNombre()) errores += "• Nombre inválido\n";
        if (!validarEmail()) errores += "• Email inválido\n";
        if (!validarPassword()) errores += "• Contraseña inválida\n";
        if (!validarRepetirPassword()) errores += "• Las contraseñas no coinciden\n";
        if (!validarEdad()) errores += "• Edad inválida\n";
        if (!validarTelefono()) errores += "• Teléfono inválido\n";
        if (!validarDireccion()) errores += "• Dirección inválida\n";
        if (!validarCiudad()) errores += "• Ciudad inválida\n";
        if (!validarCodigoPostal()) errores += "• Código Postal inválido\n";
        if (!validarDni()) errores += "• DNI inválido\n";

        alert(

            "Se encontraron los siguientes errores:\n\n" +

            errores

        );

    }

});