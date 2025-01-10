window.onload = function () {
    // Añadir la clase 'loaded' cuando toda la página haya cargado completamente
    document.body.classList.add('loaded');

    // Inicialización de ScrollReveal
    ScrollReveal({
        duration: 2000, 
        reset: false,
        once: true
    });

    // Configuración de ScrollReveal para revelar los elementos
    ScrollReveal().reveal('.headerscroll', {
        beforeReveal: (el) => el.classList.remove('load-hidden')
    });

    ScrollReveal().reveal('.h1_notlema', {
        beforeReveal: (el) => el.classList.remove('load-hidden')
    });

    ScrollReveal().reveal('.articlescroll', {
        interval: 750,
        beforeReveal: (el) => el.classList.remove('load-hidden')
    });
};
