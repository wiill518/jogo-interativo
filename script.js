function navigate(sectionId) {
    // Esconde todas as seções
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });

    // Mostra a seção específica
    document.getElementById(sectionId).style.display = 'block';
}

function showEvent(eventId) {
    // Esconde todas as seções
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });

    // Mostra o evento específico
    document.getElementById(eventId).style.display = 'block';
}

// Inicializa exibindo a introdução
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('intro').style.display = 'block';
});
