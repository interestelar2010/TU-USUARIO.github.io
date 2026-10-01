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

    // Retirar la portada del flujo para que el mensaje no quede debajo.
    setTimeout(() => {
        inicio.hidden = true;
        mensaje.classList.remove("oculto");
        requestAnimationFrame(() => mensaje.classList.add("mostrar"));
        document.getElementById("tituloMensaje").focus({ preventScroll: true });
    }, 700);

});
