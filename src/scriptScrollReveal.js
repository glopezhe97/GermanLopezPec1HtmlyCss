document.addEventListener('DOMContentLoaded', () => {
    ScrollReveal().reveal('.headerscroll', {
        beforeReveal: (el) => el.classList.remove('load-hidden'),
    });
    ScrollReveal().reveal('.h1_notlema', {
        beforeReveal: (el) => el.classList.remove('load-hidden'),
    });
    ScrollReveal().reveal('.articlescroll', {
        interval: 750,
        beforeReveal: (el) => el.classList.remove('load-hidden'),
    });
});
