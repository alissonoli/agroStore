function filtrarRacoes() {
    // 1. Pega o valor selecionado no <select>
    const filtroSelecionado = document.getElementById('filtro-pet').value;
    
    // 2. Pega todos os cards de ração da tela
    const cards = document.querySelectorAll('.card-racao');

    // 3. Passa de card em card decidindo se mostra ou esconde
    cards.forEach(card => {
        const categoriaDoCard = card.getAttribute('data-categoria');

        if (filtroSelecionado === 'todos' || filtroSelecionado === categoriaDoCard) {
            card.style.display = 'block'; // Mostra o produto
        } else {
            card.style.display = 'none';  // Esconde o produto
        }
    });
}