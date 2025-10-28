document.addEventListener('DOMContentLoaded', () => {

    // Selector para todas las secciones que queremos animar
    const sections = document.querySelectorAll('.hidden');

    // Configuración del IntersectionObserver
    const observerOptions = {
        root: null, // Observa en relación al viewport
        rootMargin: '0px',
        threshold: 0.1 // Se activa cuando el 10% del elemento es visible
    };

    // Callback que se ejecuta cuando un elemento observado entra o sale
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            // Si el elemento está entrando en la vista
            if (entry.isIntersecting) {
                entry.target.classList.remove('hidden');
                // Dejamos de observar el elemento una vez que es visible
                observer.unobserve(entry.target);
            }
        });
    };

    // Creamos el observador
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Aplicamos el observador a cada sección
    sections.forEach(section => {
        observer.observe(section);
    });

});