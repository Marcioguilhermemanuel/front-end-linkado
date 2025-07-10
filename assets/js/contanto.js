// --- CÓDIGO DE ENVIO DO FORMULÁRIO ---
document.getElementById('formulario-vip').addEventListener('submit', async function (e) {
    e.preventDefault();

    const botao = this.querySelector('button[type="submit"]');
    botao.disabled = true;
    botao.innerHTML = '<i class="fas fa-spinner fa-spin"></i> PROCESSANDO...';

    const formData = new FormData(this);

    try {
        // URL da API corrigida
        const API_URL = 'https://api-linkado-api.onrender.com/api/form';
        
        const res = await fetch(API_URL, {
            method: 'POST',
            body: formData,
        });

        // Verificar se a resposta é JSON válido
        const contentType = res.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
            const text = await res.text();
            throw new Error(text || 'Resposta inválida da API');
        }

        const data = await res.json();

        if (res.ok) {
            // Sucesso - exibir feedback visual
            botao.innerHTML = '<i class="fas fa-check"></i> SOLICITAÇÃO ENVIADA!';
            
            // Feedback adicional para o usuário
            exibirToast('✅ Formulário enviado com sucesso!', 'sucesso');
        } else {
            // Erro da API - mostrar mensagem específica
            botao.innerHTML = 'TENTAR NOVAMENTE';
            exibirToast(`❌ Erro: ${data.message || 'Falha no envio'}`, 'erro');
        }
    } catch (err) {
        // Erro de rede ou processamento
        botao.innerHTML = 'TENTAR NOVAMENTE';
        console.error('Erro completo:', err);
        exibirToast('⚠️ Servidor indisponível. Tente novamente mais tarde.', 'erro');
    }

    // Reset do formulário após 3 segundos (apenas em caso de sucesso)
    setTimeout(() => {
        if (botao.innerHTML.includes('SOLICITAÇÃO ENVIADA')) {
            resetarFormulario(this, botao);
        } else {
            botao.disabled = false;
        }
    }, 3000);
});

// Função para resetar completamente o formulário
function resetarFormulario(formulario, botao) {
    formulario.reset();
    
    // RESET CORRIGIDO DA SELEÇÃO DE PLANOS
    // 1. Remove a classe 'ativo' de todos os planos
    document.querySelectorAll('.plano-option').forEach(opt => {
        opt.classList.remove('ativo');
    });
    
    // 2. Adiciona a classe 'ativo' ao plano profissional (padrão)
    const planoProfissional = document.querySelector('.plano-option[data-plano="profissional"]');
    if (planoProfissional) {
        planoProfissional.classList.add('ativo');
    }
    
    // 3. Atualiza o input hidden com o valor do plano padrão
    const planoSelecionadoInput = document.getElementById('plano-selecionado');
    if (planoSelecionadoInput) {
        planoSelecionadoInput.value = 'profissional';
    }
    
    // Reseta o botão de envio
    botao.innerHTML = '<span class="texto-botao">SOLICITAR PROPOSTA EXCLUSIVA</span><div class="efeito-luz"></div><i class="fas fa-arrow-right icone-botao"></i>';
    botao.disabled = false;

    // Limpa a pré-visualização do logo
    const preview = document.getElementById('preview-assinatura');
    if (preview) {
        preview.innerHTML = '';
        preview.style.display = 'none';
    }
    
    // Reseta a área de upload
    const areaUploadText = document.querySelector('.area-upload .conteudo-upload p');
    if (areaUploadText) {
        areaUploadText.innerHTML = 'Arraste arquivos aqui ou <span>clique para buscar</span>';
    }
    
    // Zera contadores de caracteres
    document.querySelectorAll('.contador-caracteres span').forEach(span => span.textContent = '0');
}

// --- CÓDIGO DE INICIALIZAÇÃO (QUANDO A PÁGINA CARREGA) ---
document.addEventListener('DOMContentLoaded', function () {
    // 1. Configura a seleção de planos (CORRIGIDO)
    const planoOptions = document.querySelectorAll('.plano-option');
    const planoSelecionadoInput = document.getElementById('plano-selecionado');
    
    // Seleciona o plano profissional por padrão
    const planoPadrao = document.querySelector('.plano-option[data-plano="profissional"]');
    if (planoPadrao && !planoPadrao.classList.contains('ativo')) {
        planoPadrao.classList.add('ativo');
    }
    if (planoSelecionadoInput && !planoSelecionadoInput.value) {
        planoSelecionadoInput.value = 'profissional';
    }

    planoOptions.forEach(option => {
        option.addEventListener('click', () => {
            // Remove a classe 'ativo' de todos os planos
            planoOptions.forEach(opt => opt.classList.remove('ativo'));
            
            // Adiciona a classe 'ativo' ao plano clicado
            option.classList.add('ativo');
            
            // Atualiza o valor do input hidden
            const planoEscolhido = option.getAttribute('data-plano');
            if (planoSelecionadoInput) {
                planoSelecionadoInput.value = planoEscolhido;
            }
        });
    });

    // 2. Chama a função para configurar a pré-visualização do logo
    configurarUploadLogo(); 
});

// Função para exibir notificações toast (manter igual)
function exibirToast(mensagem, tipo = 'sucesso') {
    // ... (código anterior) ...
}

// Função para pré-visualizar o logo (manter igual)
function configurarUploadLogo() {
    // ... (código anterior) ...
}