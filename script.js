const images = [
    {
        src: 'img/A_P1_1.png',
        description: 'Una empresa registraba manualmente la recepción de productos de cada cliente, lo que limitaba la cantidad de registros que podían atender al mismo tiempo y generaba errores en el proceso. Desarrollé un chatbot que guía al usuario con preguntas simples para capturar los datos necesarios y los envía automáticamente a través de APIs a los sistemas de la empresa, generando la documentación correspondiente sin intervención manual. La solución funciona en celulares, tablets y computadoras, lo que permite usarla desde cualquier dispositivo sin instalar nada adicional.',
        datePosition: 'right'
    },
    {
        src: 'img/A_P1_3.png', // cambia el nombre de imagen según el tuyo
        description: 'Responder las mismas preguntas una y otra vez consume tiempo valioso del equipo. Desarrollé un chatbot con IA para negocios y empresas que atiende a múltiples clientes al mismo tiempo, respondiendo dudas de forma instantánea y precisa basándose únicamente en el contenido oficial de su página web, sin inventar información. La herramienta se conecta directamente al sitio del negocio, lee su contenido y lo usa como fuente de respuestas. Está construida con inteligencia artificial conversacional y tecnología de procesamiento de lenguaje, todo dentro de una interfaz de chat sencilla. El resultado es una atención más rápida, disponible en todo momento y sin saturar al equipo humano con preguntas repetitivas.',       
        datePosition: 'right'
    },
    {
        src: 'img/A_P2_1.png',
        description: 'Revisar decenas de PDFs para encontrar una sola respuesta puede tomar horas, incluso días. Pensando en profesionales que trabajan con grandes volúmenes de documentos, desarrollé un chatbot que permite hacerle preguntas directamente a tus archivos y obtener respuestas precisas en segundos. La herramienta usa inteligencia artificial para "leer" y comprender el contenido de cada documento, no solo buscar palabras. Esto le permite identificar información específica sin confundir ni mezclar datos entre archivos. Se construyó sobre modelos de IA conversacional y un motor de búsqueda semántica, todo envuelto en una interfaz de chat simple e intuitiva. Como resultado, lo que antes tomaba horas de revisión manual, ahora se resuelve con una sola pregunta.',
        datePosition: 'right'
    }
    // 👇 Proyecto nuevo
    
];
let currentIndex = 0;
const imgElement = document.getElementById('carouselImage');
const descriptionElement = document.getElementById('description');
const dateElement = document.getElementById('dateDisplay');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
function updateCarousel() {
    const current = images[currentIndex];
    imgElement.src = current.src;
    descriptionElement.textContent = current.description;
    dateElement.textContent = current.date;   
    dateElement.className = 'date date-' + current.datePosition;
}
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
});
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
});