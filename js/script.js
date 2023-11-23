/* Scripts JavaScript para interactividad */

// Función de validación para el formulario de inicio de sesión
function validarInicioSesion() {
    var usuario = document.getElementById('usuario').value;  // Obtiene el valor del campo de usuario
    var contrasena = document.getElementById('contrasena').value;  // Obtiene el valor del campo de contraseña

    // Verifica si los campos están vacíos
    if (usuario === '' || contrasena === '') {
        alert('Por favor, completa todos los campos.');  // Muestra una alerta si algún campo está vacío
        return false;  // Devuelve false para evitar el envío del formulario
    }

    // Puedes agregar más validaciones según tus necesidades

    return true;  // Devuelve true si la validación es exitosa
}

// Función de validación para el formulario de registro
function validarRegistro() {
    var nombre = document.getElementById('nombre').value;  // Obtiene el valor del campo de nombre
    var email = document.getElementById('email').value;  // Obtiene el valor del campo de correo electrónico
    var contrasena = document.getElementById('contrasena').value;  // Obtiene el valor del campo de contraseña

    // Verifica si los campos están vacíos
    if (nombre === '' || email === '' || contrasena === '') {
        alert('Por favor, completa todos los campos.');  // Muestra una alerta si algún campo está vacío
        return false;  // Devuelve false para evitar el envío del formulario
    }

    // Puedes agregar más validaciones según tus necesidades

    return true;  // Devuelve true si la validación es exitosa
}

// Puedes agregar más funciones según tus necesidades

