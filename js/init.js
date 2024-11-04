const phrases = [
    "El ombú es un árbol nativo del Uruguay, conocido por su gran tamaño...",
    "El ceibo es el árbol nacional de Uruguay y su flor es de un rojo vibrante...",
    "El hibisco es una planta con flores de colores variados...",
    "El cedrón de monte es un arbusto que puede crecer hasta 3 metros de altura...",
    "La guayaba es un árbol frutal que produce frutos comestibles de sabor dulce...",
    "El sauce criollo es un árbol que crece cerca de cuerpos de agua..."
];



const carouselQuotes = document.getElementById('carouselQuotes');

// Crear las slides del carrusel
phrases.forEach((phrase, index) => {
    const activeClass = index === 0 ? 'active' : '';
    const carouselItem = `
        <div class="carousel-item ${activeClass}">
            <p>${phrase}</p>
        </div>
    `;
    carouselQuotes.innerHTML += carouselItem;
});

