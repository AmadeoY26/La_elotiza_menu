document.addEventListener('DOMContentLoaded', () => {
    const imagenesMenu = document.querySelectorAll('.tarjeta-producto img');

    imagenesMenu.forEach(img => {
        img.style.transition = "all 0.4s ease";
        
        img.addEventListener('mouseenter', () => {
            img.style.transform = "scale(1.05)"; // Crece un poco
            img.style.filter = "brightness(1.1)"; // Brilla ligeramente
        });

        img.addEventListener('mouseleave', () => {
            img.style.transform = "scale(1)";
            img.style.filter = "brightness(1)";
        });
    });

    console.log("Menú interactivo del Señor de los Elotes cargado.");
});