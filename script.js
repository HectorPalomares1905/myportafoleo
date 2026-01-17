const images = [
    {
        src: 'img/A_P1_1.jpg',
        description: 'Chatbot inteligente para atención al cliente que utiliza Python, LangChain, LangGraph y OpenAI API. El sistema extrae automáticamente el contenido de una página web y responde preguntas basándose únicamente en esa información, sin inventar datos. Permite atender múltiples consultas simultáneamente, liberando al personal de tareas repetitivas y ofreciendo respuestas rápidas y precisas basadas en el contenido oficial del negocio.',
        datePosition: 'right'
    },
    {
        src: 'img/A_P2_1.jpg',
        description: 'Chatbot inteligente para lectura y análisis de múltiples archivos PDF desarrollado con Python, LangChain, OpenAI Agents SDK y FAISS. Utiliza bases de conocimiento vectoriales para realizar búsquedas semánticas de alta precisión entre diferentes documentos. La interfaz desarrollada con Dash, HTML y CSS ofrece una experiencia de chat dinámica que identifica información específica manteniendo el contexto de cada documento sin mezclar fuentes.',
        datePosition: 'right'
    }
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