document.addEventListener("DOMContentLoaded", function() {
    const stations = [
        { name: "Puerto del Callao", info: "Estación Puerto del Callao, ubicada en el puerto más importante del país." },
        { name: "Buenos Aires", info: "Estación Buenos Aires, conocida por su cercanía a la playa." },
        { name: "Juan Pablo II", info: "Estación Juan Pablo II, cercana al parque del mismo nombre." },
        { name: "Insurgentes", info: "Estación Insurgentes, ubicada en una zona residencial." },
        { name: "Carmen de la Legua", info: "Estación Carmen de la Legua, con acceso a servicios municipales." },
        { name: "Óscar R. Benavides", info: "Estación Óscar R. Benavides, cercana a colegios importantes." },
        { name: "San Marcos", info: "Estación San Marcos, ubicada cerca de la universidad del mismo nombre." },
        { name: "Elio", info: "Estación Elio, conocida por su entorno residencial." },
        { name: "La Alborada", info: "Estación La Alborada, con acceso a centros comerciales." },
        { name: "Tingo María", info: "Estación Tingo María, en una zona tranquila de la ciudad." },
        { name: "Parque Murillo", info: "Estación Parque Murillo, cercana a un parque popular." },
        { name: "Plaza Bolognesi", info: "Estación Plaza Bolognesi, ubicada en un importante cruce vial." },
        { name: "Estación Central", info: "Estación Central, principal punto de conexión del sistema." },
        { name: "Manco Cápac", info: "Estación Manco Cápac, ubicada cerca de un monumento histórico." },
        { name: "Cangallo", info: "Estación Cangallo, en una zona comercial." },
        { name: "28 de Julio", info: "Estación 28 de Julio, con acceso a eventos y festividades." },
        { name: "Nicolás Ayllón", info: "Estación Nicolás Ayllón, cercana a zonas industriales." },
        { name: "Circunvalación", info: "Estación Circunvalación, ubicada en la vía de circunvalación." },
        { name: "San Juan de Dios", info: "Estación San Juan de Dios, cercana a un hospital importante." },
        { name: "Evitamiento", info: "Estación Evitamiento, en la vía rápida de la ciudad." },
        { name: "Óvalo Santa Anita", info: "Estación Óvalo Santa Anita, con acceso a centros comerciales." },
        { name: "Colectora Industrial", info: "Estación Colectora Industrial, cercana a la zona industrial." },
        { name: "Hermilio Valdizán", info: "Estación Hermilio Valdizán, con acceso a servicios de salud." },
        { name: "Mercado Santa Anita", info: "Estación Mercado Santa Anita, cercana al mercado principal." },
        { name: "Vista Alegre", info: "Estación Vista Alegre, en una zona residencial." },
        { name: "Prolongación Javier Prado", info: "Estación Prolongación Javier Prado, en la avenida principal." },
        { name: "Municipalidad de ATE", info: "Estación Municipalidad de ATE, cercana a la sede municipal." }
    ];

    const infoBox = document.getElementById('info-box');
    document.querySelectorAll('.station-name').forEach((element, index) => {
        element.addEventListener('click', function() {
            infoBox.innerText = stations[index].info;
        });
    });
});