document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const container = document.querySelector(".container");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevenir el envío del formulario por defecto

        // Limpiar el contenido del contenedor y mostrar el mensaje
        container.innerHTML = `
            <h1>¡Gracias por realizar la encuesta!</h1>
            <p>Tu opinión es muy importante para nosotros.</p>
        `;
    });
});
