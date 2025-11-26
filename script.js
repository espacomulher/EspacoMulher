// Função para abrir a janelinha (chamada pelo botão flutuante)
function abrirModal() {
    const modal = document.getElementById('modalPedido');
    modal.style.display = 'flex'; // Mostra o modal na tela
}

// Função para fechar a janelinha (chamada pelo "X" ou após enviar)
function fecharModal() {
    const modal = document.getElementById('modalPedido');
    modal.style.display = 'none'; // Esconde o modal
}

// Fecha o modal se a pessoa clicar na parte escura (fora da caixinha branca)
window.onclick = function(event) {
    const modal = document.getElementById('modalPedido');
    if (event.target == modal) {
        fecharModal();
    }
}

// Função principal: Pega os dados e manda pro WhatsApp
function enviarParaWhatsapp(event) {
    // 1. Evita que a página recarregue (comportamento padrão de formulários)
    event.preventDefault();

    // 2. Pega o que a cliente digitou nos campos
    const nome = document.getElementById('nomeCliente').value;
    const pedido = document.getElementById('pedidoCliente').value;

    // 3. Número do WhatsApp do Salão (DDI + DDD + Número)
    const numeroSalao = "5517981006453"; 

    // 4. Monta a mensagem. "%0A" significa pular linha no link do WhatsApp.
    const mensagem = `Oii, me chamo *${nome}* e gostaria de agendar:%0A%0A${pedido}`;

    // 5. Cria o link oficial do WhatsApp API
    const linkWhatsapp = `https://wa.me/${numeroSalao}?text=${mensagem}`;

    // 6. Abre o WhatsApp em uma nova aba do navegador
    window.open(linkWhatsapp, '_blank');

    // 7. Limpa o formulário e fecha a janela para ficar organizado
    document.getElementById('formWhatsapp').reset();
    fecharModal();
}


// --- 2. LÓGICA DA ANIMAÇÃO DE SCROLL (REVEAL) ---

/* 
   Este código espera o site carregar e então fica vigiando
   quando os cartões de preço aparecem na tela para animá-los.
*/
document.addEventListener('DOMContentLoaded', () => {
    
    // Procura todos os elementos que têm a classe "reveal" (definida no HTML)
    const cards = document.querySelectorAll('.reveal');

    // Configuração: A animação dispara quando 10% do cartão estiver visível
    const options = {
        threshold: 0.1
    };

    // Cria o "Observador"
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Se o elemento entrou na tela...
            if(entry.isIntersecting) {
                // Adiciona a classe 'active' (que faz ele subir e aparecer no CSS)
                entry.target.classList.add('active');
                
                // Para de observar este elemento (para não animar de novo sem querer)
                observer.unobserve(entry.target);
            }
        });
    }, options);

    // Manda o observador vigiar cada um dos cartões encontrados
    cards.forEach(card => {
        observer.observe(card);
    });

    console.log("Script carregado: Animações e WhatsApp prontos!");
});
