//Menu lateral
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){//si esta oculto
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}

// Animación de texto letra por letra
function animateText() {
    const nameElement = document.getElementById('animated-name');
    if (!nameElement) {
        console.log('Elemento no encontrado');
        return;
    }
    
    const text = nameElement.textContent;
    console.log('Texto a animar:', text);
    nameElement.innerHTML = '';
    
    // Crear spans para cada carácter
    for (let i = 0; i < text.length; i++) {
        const span = document.createElement('span');
        span.classList.add('letter');
        
        // Mantener espacios
        if (text[i] === ' ') {
            span.innerHTML = '&nbsp;';
        } else {
            span.textContent = text[i];
        }
        
        nameElement.appendChild(span);
    }
    console.log('Animación aplicada');
}

// Ejecutar animación cuando carga la página
window.addEventListener('load', function() {
    console.log('Página cargada');
    animateText();
});

// También intentar cuando DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM cargado');
    setTimeout(animateText, 100); // Pequeño delay para asegurar que todo esté listo
    checkInicioSection();
});

// Agregar funcionalidad de descarga en JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.getElementById("downloadBtn");
    if (downloadBtn) {
        downloadBtn.addEventListener("click", function() {
            window.location.href = this.href;
        });
    }
});

// Selecciona el elemento de navegación y la sección "inicio"
const nav = document.getElementById("nav");
const inicioSection = document.getElementById("inicio");

// Función para verificar si la sección inicio está mayormente visible
function checkInicioSection() {
    if (!nav || !inicioSection) return;
    
    const inicioPosition = inicioSection.getBoundingClientRect();
    
    // Verifica si más del 50% de la sección "inicio" está visible
    const inicioVisible = inicioPosition.top < window.innerHeight * 0.06 && inicioPosition.bottom > window.innerHeight * 0.06;

    if (inicioVisible) {
        nav.classList.add("inicio-active");
    } else {
        nav.classList.remove("inicio-active");
    }
}

// Ejecuta la función al hacer scroll
window.addEventListener("scroll", checkInicioSection);