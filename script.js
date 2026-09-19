// ==========================================
// PÁGINA PARA MI MEJOR AMIGA
// JavaScript
// ==========================================


// Obtener los elementos del HTML
const botonAbrir = document.getElementById("botonAbrir");
const inicio = document.getElementById("inicio");
const mensaje = document.getElementById("mensaje");


// ==========================================
// ABRIR EL MENSAJE
// ==========================================

botonAbrir.addEventListener("click", () => {

    // Ocultar la pantalla inicial
    inicio.classList.add("ocultar");

    // Esperar un momento antes de mostrar el mensaje
    setTimeout(() => {

        mensaje.classList.remove("oculto");
        mensaje.classList.add("mostrar");

    }, 500);

});