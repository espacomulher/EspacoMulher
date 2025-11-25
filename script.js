/*
    script.js - Performance e Animações
    Este script usa "IntersectionObserver", uma tecnologia moderna dos navegadores
    para detectar quando um elemento aparece na tela sem pesar o processamento.
*/

document.addEventListener('DOMContentLoaded', () => {
    
    // Seleciona todos os cards que tem a classe 'reveal'
    const cards = document.querySelectorAll('.reveal');

    // Configurações do Observador
    const options = {
        root: null, // Observa em relação à janela do navegador
        threshold: 0.1, // Dispara quando 10% do elemento estiver visível
        rootMargin: "0px"
    };

    // A função que acontece quando o elemento aparece
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Se o elemento entrou na tela (isIntersecting)
            if(entry.isIntersecting) {
                // Adiciona a classe 'active' que faz ele aparecer no CSS
                entry.target.classList.add('active');
                
                // Para de observar este elemento (performance: não precisa animar de novo)
                observer.unobserve(entry.target);
            }
        });
    }, options);

    // Manda o observador vigiar cada card
    cards.forEach(card => {
        observer.observe(card);
    });

    console.log("Sistema de animação Espaço Mulher carregado.");
});