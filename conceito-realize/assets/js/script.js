
// Função para atualizar o destaque sazonal conforme o mês atual
function updateSeasonalHighlight() {
    const now = new Date();
    const month = now.getMonth() + 1; // Janeiro = 1, Dezembro = 12
    let highlight, description, icon, period;

    // Determinar o período sazonal
    if (month >= 1 && month <= 2) {
        highlight = "Preparação de Solo";
        description = "Equipamentos e insumos para preparar sua terra para o plantio";
        icon = "tractor";
        period = "Janeiro-Fevereiro";
    } else if (month >= 3 && month <= 4) {
        highlight = "Sementes e Plantio";
        description = "Sementes certificadas e equipamentos de plantio de alta qualidade";
        icon = "seedling";
        period = "Março-Abril";
    } else if (month >= 5 && month <= 7) {
        highlight = "Fertilizantes e Bioestimulantes";
        description = "Produtos para fortalecimento das culturas e maximização da produtividade";
        icon = "tint";
        period = "Maio-Julho";
    } else if (month >= 8 && month <= 10) {
        highlight = "Defensivos e Proteção";
        description = "Soluções para proteção de cultivos contra pragas e doenças";
        icon = "shield-alt";
        period = "Agosto-Outubro";
    } else {
        highlight = "Equipamentos de Colheita";
        description = "Máquinas e ferramentas para colheita eficiente e de qualidade";
        icon = "truck-loading";
        period = "Novembro-Dezembro";
    }

    // Atualizar o conteúdo na página
    document.querySelector('.seasonal-highlight h3').textContent = highlight;
    document.querySelector('.seasonal-highlight p').textContent = `${period} - ${description}`;
    document.querySelector('.seasonal-highlight .fa-tint').className = `fas fa-${icon} text-4xl text-green-600`;
}

// Atualizar o destaque sazonal quando a página carregar
document.addEventListener('DOMContentLoaded', updateSeasonalHighlight);
