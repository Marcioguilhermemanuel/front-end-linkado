// ===== DADOS DOS PRODUTOS =====
    const PRODUTOS = {
      feminino: [
        { 
          id: 'vestido-floral', 
          nome: 'Vestido Floral Midi', 
          desc: 'Tecido leve e fluido, estampa floral delicada, comprimento midi. Tamanhos P ao GG.', 
          preco: 12500,
          imagem: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
          popular: true,
          desconto: 20
        },
        { 
          id: 'blazer-alfaiataria', 
          nome: 'Blazer Alfaiataria Premium', 
          desc: 'Corte moderno, tecido de alta qualidade, forro interno. Cores: Preto, Bege, Rosa.', 
          preco: 18900,
          imagem: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
          popular: true
        },
        { 
          id: 'calca-skinny', 
          nome: 'Calça Skinny Premium', 
          desc: 'Jeans com elastano, cintura alta, modelagem perfeita. Disponível em 3 lavagens.', 
          preco: 8900,
          imagem: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
          popular: false
        },
        { 
          id: 'blusa-seda', 
          nome: 'Blusa Seda Italiana', 
          desc: 'Seda pura importada, caimento impecável, várias cores. Elegância atemporal.', 
          preco: 15500,
          imagem: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
          popular: true
        },
        { 
          id: 'saia-plissada', 
          nome: 'Saia Plissada Midi', 
          desc: 'Tecido fluido, pregas permanentes, cintura elástica. Perfeita para ocasiões especiais.', 
          preco: 9800,
          imagem: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
          popular: false,
          desconto: 15
        }
      ],
      masculino: [
        { 
          id: 'camisa-social', 
          nome: 'Camisa Social Slim', 
          desc: '100% algodão egípcio, corte slim, punho duplo. Cores: Branco, Azul, Preto.', 
          preco: 7500,
          imagem: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
          popular: true
        },
        { 
          id: 'polo-premium', 
          nome: 'Polo Premium Bordada', 
          desc: 'Piquet de algodão, bordado discreto, ajuste perfeito. 5 cores disponíveis.', 
          preco: 5900,
          imagem: 'https://images.unsplash.com/photo-1625910513390-a0baeadeac9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
          popular: true
        },
        { 
          id: 'calca-chino', 
          nome: 'Calça Chino Comfort', 
          desc: 'Sarja com elastano, caimento perfeito, versátil. Cores: Bege, Azul Marinho, Cinza.', 
          preco: 8200,
          imagem: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
          popular: false
        },
        { 
          id: 'jaqueta-couro', 
          nome: 'Jaqueta Couro Legítimo', 
          desc: 'Couro bovino premium, forro interno, bolsos funcionais. Estilo atemporal.', 
          preco: 35000,
          imagem: 'https://images.unsplash.com/photo-1520975954732-35dd22299614?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
          popular: true,
          desconto: 25
        },
        { 
          id: 'tshirt-basica', 
          nome: 'Kit 3 T-shirts Premium', 
          desc: '100% algodão Pima, gola reforçada, caimento perfeito. Preto, Branco e Cinza.', 
          preco: 9900,
          imagem: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
          popular: false
        }
      ],
      acessorios: [
        { 
          id: 'bolsa-couro', 
          nome: 'Bolsa Couro Italiana', 
          desc: 'Couro legítimo, compartimentos internos, alça ajustável. Design exclusivo.', 
          preco: 22000,
          imagem: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
          popular: true
        },
        { 
          id: 'oculos-sol', 
          nome: 'Óculos Sol UV400', 
          desc: 'Proteção total UV, armação premium, estojo incluído. Unissex.', 
          preco: 6500,
          imagem: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
          popular: true
        },
        { 
          id: 'cinto-couro', 
          nome: 'Cinto Couro Reversível', 
          desc: 'Couro genuíno, fivela ajustável, dois lados: preto e marrom.', 
          preco: 4500,
          imagem: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
          popular: false
        },
        { 
          id: 'relogio-classico', 
          nome: 'Relógio Clássico Dourado', 
          desc: 'Movimento quartzo, resistente à água, pulseira ajustável. Garantia 2 anos.', 
          preco: 18500,
          imagem: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
          popular: true
        },
        { 
          id: 'lenco-seda', 
          nome: 'Lenço Seda Estampado', 
          desc: 'Seda pura, estampas exclusivas, 90x90cm. Várias opções de cores.', 
          preco: 3200,
          imagem: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
          popular: false
        }
      ],
      calcados: [
        { 
          id: 'tenis-casual', 
          nome: 'Tênis Casual Premium', 
          desc: 'Couro ecológico, solado antiderrapante, palmilha ortopédica. Numeração 34-44.', 
          preco: 12000,
          imagem: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
          popular: true
        },
        { 
          id: 'salto-alto', 
          nome: 'Scarpin Salto Alto', 
          desc: 'Couro verniz, salto 10cm, bico fino. Elegância e conforto. Cores variadas.', 
          preco: 9800,
          imagem: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
          popular: true
        },
        { 
          id: 'bota-chelsea', 
          nome: 'Bota Chelsea Masculina', 
          desc: 'Couro nobuck, elástico lateral, solado de borracha. Estilo britânico.', 
          preco: 15500,
          imagem: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
          popular: false
        }
      ],
      promocoes: [
        { 
          id: 'conjunto-fitness', 
          nome: 'Conjunto Fitness Feminino', 
          desc: 'Top e legging, tecido tecnológico, alta compressão. Cores neon disponíveis.', 
          preco: 7900,
          precoOriginal: 13900,
          imagem: 'https://images.unsplash.com/photo-1550468829-144b3bfeeca0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
          popular: true,
          desconto: 40
        },
        { 
          id: 'kit-meias', 
          nome: 'Kit 10 Pares de Meias', 
          desc: 'Algodão premium, cano médio, cores variadas. Conforto garantido.', 
          preco: 3500,
          precoOriginal: 6000,
          imagem: 'https://images.unsplash.com/photo-1586351934194-362c82e9b5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
          popular: true,
          desconto: 40
        }
      ]
    };

    // ===== FUNCIONALIDADES DO CARRINHO =====
    let carrinho = JSON.parse(localStorage.getItem('carrinho-no-canal')) || [];
    
    // Elementos DOM
    const carrinhoBtn = document.getElementById('carrinho-btn');
    const carrinhoContador = document.getElementById('carrinho-contador');
    const modalCarrinho = document.getElementById('modal-carrinho');
    const fecharModal = document.getElementById('fechar-modal');
    const modalBackdrop = document.getElementById('modal-backdrop');
    const modalCarrinhoItens = document.getElementById('modal-carrinho-itens');
    const modalCarrinhoVazio = document.getElementById('modal-carrinho-vazio');
    const modalCarrinhoTotal = document.getElementById('modal-carrinho-total');
    const subtotalValor = document.getElementById('subtotal-valor');
    const totalValor = document.getElementById('total-valor');
    const finalizarModal = document.getElementById('finalizar-modal');
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');
    const produtosContainer = document.getElementById('produtos-container');

    // ===== FUNÇÃO DO TOAST =====
    function mostrarToast(mensagem) {
      // Cancela qualquer timeout anterior
      if (window.toastTimeout) {
        clearTimeout(window.toastTimeout);
      }
      
      // Atualiza a mensagem
      toastMessage.textContent = mensagem;
      
      // Mostra o toast com animação
      toast.classList.remove('hide');
      toast.classList.add('show');
      
      // Esconde o toast após 3 segundos
      window.toastTimeout = setTimeout(() => {
        toast.classList.remove('show');
        toast.classList.add('hide');
        
        // Remove a classe hide após a animação terminar
        setTimeout(() => {
          toast.classList.remove('hide');
        }, 300);
      }, 3000);
    }

    // ===== FUNÇÕES PRINCIPAIS =====
    function scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }

    function abrirWhatsApp() {
      const mensagem = encodeURIComponent("Olá! Gostaria de saber mais sobre os produtos da NO CANAL.");
      window.open(`https://wa.me/244900000000?text=${mensagem}`, '_blank');
    }

    // ===== RENDERIZAR PRODUTOS =====
    function renderizarProdutos() {
      const categorias = [
        { id: 'feminino', titulo: '👗 Moda Feminina', icon: 'fa-person-dress' },
        { id: 'masculino', titulo: '👔 Moda Masculina', icon: 'fa-person' },
        { id: 'acessorios', titulo: '💎 Acessórios', icon: 'fa-gem' },
        { id: 'calcados', titulo: '👟 Calçados', icon: 'fa-shoe-prints' },
        { id: 'promocoes', titulo: '🔥 Promoções', icon: 'fa-fire' }
      ];

      categorias.forEach(categoria => {
        const produtos = PRODUTOS[categoria.id];
        if (produtos && produtos.length > 0) {
          const section = document.createElement('section');
          section.id = categoria.id;
          section.className = 'animate-slide-up';
          
          section.innerHTML = `
            <div class="flex items-center gap-3 mb-6">
              <i class="fa-solid ${categoria.icon} text-2xl text-primary-400"></i>
              <h2 class="font-display text-2xl font-bold">${categoria.titulo}</h2>
            </div>
            <div class="grid grid-cols-2 gap-4">
              ${produtos.map(produto => criarCardProduto(produto, categoria.id)).join('')}
            </div>
          `;
          
          produtosContainer.appendChild(section);
        }
      });
    }

    function criarCardProduto(produto, categoria) {
      const precoOriginal = produto.precoOriginal ? produto.precoOriginal : produto.preco;
      const temDesconto = produto.desconto || produto.precoOriginal;
      const porcentagemDesconto = produto.desconto ? produto.desconto : Math.round((1 - produto.preco/precoOriginal) * 100);
      
      return `
        <div class="fashion-card rounded-2xl overflow-hidden group">
          <div class="relative">
            <img src="${produto.imagem}" alt="${produto.nome}" class="w-full h-40 object-cover">
            ${temDesconto ? `
              <div class="absolute top-3 right-3 bg-accent-500 text-white text-xs font-bold py-1 px-2 rounded-full">
                -${porcentagemDesconto}%
              </div>
            ` : ''}
            <button onclick="adicionarAoCarrinho('${produto.id}', '${categoria}')" 
                    class="absolute bottom-3 right-3 btn-accessible w-9 h-9 rounded-full bg-primary-500 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary-600">
              <i class="fa-solid fa-plus text-white text-sm"></i>
            </button>
          </div>
          <div class="p-3">
            <h3 class="font-semibold text-sm mb-1">${produto.nome}</h3>
            <p class="text-white/60 text-xs mb-2 line-clamp-2">${produto.desc}</p>
            <div class="flex items-center justify-between">
              <div>
                <span class="font-bold text-primary-400">Kz ${produto.preco.toLocaleString('pt-BR')}</span>
                ${temDesconto ? `
                  <span class="text-white/40 text-xs line-through ml-2">Kz ${precoOriginal.toLocaleString('pt-BR')}</span>
                ` : ''}
              </div>
              <button onclick="adicionarAoCarrinho('${produto.id}', '${categoria}')" 
                      class="btn-accessible w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center hover:bg-primary-600 transition-colors">
                <i class="fa-solid fa-plus text-white text-xs"></i>
              </button>
            </div>
          </div>
        </div>
      `;
    }

    // ===== FUNCIONALIDADES DO CARRINHO =====
    function atualizarContadorCarrinho() {
      const totalItens = carrinho.reduce((total, item) => total + item.quantidade, 0);
      carrinhoContador.textContent = totalItens;
      carrinhoContador.style.display = totalItens > 0 ? 'flex' : 'none';
    }

    function adicionarAoCarrinho(id, categoria) {
      const produto = PRODUTOS[categoria].find(p => p.id === id);
      
      if (produto) {
        const itemExistente = carrinho.find(item => item.id === id);
        
        if (itemExistente) {
          itemExistente.quantidade++;
        } else {
          carrinho.push({
            ...produto,
            quantidade: 1
          });
        }
        
        salvarCarrinho();
        atualizarContadorCarrinho();
        
        // Mostrar toast de confirmação
        mostrarToast(`${produto.nome} adicionado ao carrinho!`);
      }
    }

    function salvarCarrinho() {
      localStorage.setItem('carrinho-no-canal', JSON.stringify(carrinho));
    }

    function abrirModalCarrinho() {
      modalCarrinho.classList.remove('pointer-events-none');
      modalCarrinho.classList.add('opacity-100');
      modalCarrinho.querySelector('.relative').classList.remove('translate-y-full');
      atualizarModalCarrinho();
    }

    function fecharModalCarrinho() {
      modalCarrinho.classList.add('pointer-events-none');
      modalCarrinho.classList.remove('opacity-100');
      modalCarrinho.querySelector('.relative').classList.add('translate-y-full');
    }

    function atualizarModalCarrinho() {
      modalCarrinhoItens.innerHTML = '';
      
      if (carrinho.length === 0) {
        modalCarrinhoVazio.classList.remove('hidden');
        modalCarrinhoTotal.classList.add('hidden');
      } else {
        modalCarrinhoVazio.classList.add('hidden');
        modalCarrinhoTotal.classList.remove('hidden');
        
        let total = 0;
        
        carrinho.forEach((item, index) => {
          const itemTotal = item.preco * item.quantidade;
          total += itemTotal;
          
          const itemElement = document.createElement('div');
          itemElement.className = 'flex items-center justify-between bg-fashion-800 rounded-xl p-3';
          itemElement.innerHTML = `
            <div class="flex items-center">
              <div class="w-16 h-16 rounded-lg overflow-hidden mr-3">
                <img src="${item.imagem}" alt="${item.nome}" class="w-full h-full object-cover">
              </div>
              <div>
                <h4 class="font-medium text-sm">${item.nome}</h4>
                <p class="text-primary-400 font-bold">Kz ${item.preco.toLocaleString('pt-BR')}</p>
              </div>
            </div>
            <div class="flex items-center">
              <button onclick="alterarQuantidade(${index}, -1)" class="btn-accessible w-8 h-8 rounded-full bg-fashion-700 flex items-center justify-center hover:bg-fashion-600">
                <i class="fa-solid fa-minus text-xs"></i>
              </button>
              <span class="mx-2 font-medium min-w-[20px] text-center">${item.quantidade}</span>
              <button onclick="alterarQuantidade(${index}, 1)" class="btn-accessible w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center hover:bg-primary-600">
                <i class="fa-solid fa-plus text-xs"></i>
              </button>
              <button onclick="removerItem(${index})" class="btn-accessible w-8 h-8 rounded-full bg-fashion-700 flex items-center justify-center hover:bg-red-500/20 ml-2">
                <i class="fa-solid fa-trash text-xs"></i>
              </button>
            </div>
          `;
          
          modalCarrinhoItens.appendChild(itemElement);
        });
        
        // Atualizar totais
        subtotalValor.textContent = `Kz ${total.toLocaleString('pt-BR')}`;
        totalValor.textContent = `Kz ${total.toLocaleString('pt-BR')}`;
      }
    }

    function alterarQuantidade(index, mudanca) {
      if (carrinho[index].quantidade + mudanca > 0) {
        carrinho[index].quantidade += mudanca;
      } else {
        carrinho.splice(index, 1);
      }
      salvarCarrinho();
      atualizarModalCarrinho();
      atualizarContadorCarrinho();
    }

    function removerItem(index) {
      carrinho.splice(index, 1);
      salvarCarrinho();
      atualizarModalCarrinho();
      atualizarContadorCarrinho();
      mostrarToast('Produto removido do carrinho!');
    }

    // ===== FUNÇÃO FINALIZAR PEDIDO WHATSAPP =====
    function finalizarPedidoWhatsApp() {
      if (carrinho.length === 0) {
        mostrarToast('Adicione produtos ao carrinho primeiro!');
        return;
      }
      
      let mensagem = "🛍️ *PEDIDO - NO CANAL MODA* 🛍️\n\n";
      mensagem += "Olá! Gostaria de fazer o seguinte pedido:\n\n";
      
      let total = 0;
      carrinho.forEach((item, index) => {
        const itemTotal = item.preco * item.quantidade;
        total += itemTotal;
        
        mensagem += `*${index + 1}. ${item.nome}*\n`;
        mensagem += `   📦 Quantidade: ${item.quantidade}x\n`;
        mensagem += `   💰 Preço unitário: Kz ${item.preco.toLocaleString('pt-BR')}\n`;
        mensagem += `   🧮 Subtotal: Kz ${itemTotal.toLocaleString('pt-BR')}\n\n`;
      });
      
      mensagem += "━━━━━━━━━━━━━━━━━━━━\n";
      mensagem += `*💰 TOTAL: Kz ${total.toLocaleString('pt-BR')}*\n\n`;
      mensagem += "📋 *Informações do Pedido:*\n";
      mensagem += "• Entregar em: [Seu endereço]\n";
      mensagem += "• Forma de pagamento: [Transferência/Dinheiro]\n";
      mensagem += "• Contacto: [Seu número]\n\n";
      mensagem += "Por favor, confirmem a disponibilidade dos produtos e enviem-me os dados para pagamento. Obrigado! 🙏\n\n";
      mensagem += "_Pedido gerado automaticamente via Catálogo Digital NO CANAL_";
      
      const numeroWhatsApp = "244900000000"; // Substitua pelo número real
      const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
      
      // Abrir WhatsApp
      window.open(urlWhatsApp, '_blank');
      
      // Opcional: Limpar carrinho após pedido
      // carrinho = [];
      // salvarCarrinho();
      // atualizarContadorCarrinho();
      // atualizarModalCarrinho();
      // fecharModalCarrinho();
    }

    // ===== INICIALIZAÇÃO =====
    document.addEventListener('DOMContentLoaded', () => {
      renderizarProdutos();
      atualizarContadorCarrinho();
      
      // Event Listeners
      carrinhoBtn.addEventListener('click', abrirModalCarrinho);
      fecharModal.addEventListener('click', fecharModalCarrinho);
      modalBackdrop.addEventListener('click', fecharModalCarrinho);
      finalizarModal.addEventListener('click', finalizarPedidoWhatsApp);
    });

    // Tornar funções globais para uso nos onclick
    window.scrollToSection = scrollToSection;
    window.abrirWhatsApp = abrirWhatsApp;
    window.adicionarAoCarrinho = adicionarAoCarrinho;
    window.alterarQuantidade = alterarQuantidade;
    window.removerItem = removerItem;
    window.mostrarToast = mostrarToast;
    window.finalizarPedidoWhatsApp = finalizarPedidoWhatsApp;