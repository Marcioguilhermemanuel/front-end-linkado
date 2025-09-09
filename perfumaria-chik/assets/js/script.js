// ===== DADOS DOS PRODUTOS =====
    const PRODUTOS = {
      femininos: [
        { 
          id: 'chanel-no5', 
          nome: 'Chanel Nº 5', 
          desc: 'Fragrância icônica com notas de ylang-ylang, rosa e sândalo. 100ml.', 
          preco: 45000,
          imagem: 'https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
          popular: true
        },
        { 
          id: 'dior-jadore', 
          nome: 'Dior J\'adore', 
          desc: 'Bouquet floral feminino com jasmin, ylang-ylang e rosa. 100ml.', 
          preco: 42000,
          imagem: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
          popular: true
        },
        { 
          id: 'lancome-tresor', 
          nome: 'Lancôme Trésor', 
          desc: 'Fragrância romântica com pêssego, damasco e rosa. 75ml.', 
          preco: 38000,
          imagem: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
          popular: false
        },
        { 
          id: 'versace-bright', 
          nome: 'Versace Bright Crystal', 
          desc: 'Frescor cítrico com yuzu, peônia e musk almiscarado. 90ml.', 
          preco: 35000,
          imagem: 'https://images.unsplash.com/photo-1563170351-be82bc888aa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
          popular: true
        }
      ],
      masculinos: [
        { 
          id: 'dior-sauvage', 
          nome: 'Dior Sauvage', 
          desc: 'Fragrância intensa com pimenta-de-sichuan, bergamota e âmbar. 100ml.', 
          preco: 48000,
          imagem: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59c75?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
          popular: true
        },
        { 
          id: 'armani-code', 
          nome: 'Armani Code', 
          desc: 'Elegância masculina com bergamota, limão e madeira de cedro. 125ml.', 
          preco: 44000,
          imagem: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
          popular: true
        },
        { 
          id: 'hugo-boss', 
          nome: 'Hugo Boss Bottled', 
          desc: 'Sofisticação com maçã, canela e sândalo. 100ml.', 
          preco: 40000,
          imagem: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
          popular: false
        }
      ],
      unissex: [
        { 
          id: 'tom-ford', 
          nome: 'Tom Ford Black Orchid', 
          desc: 'Fragrância luxuosa unissex com orquídea negra e trufa. 100ml.', 
          preco: 65000,
          imagem: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
          popular: true
        },
        { 
          id: 'byredo-gypsy', 
          nome: 'Byredo Gypsy Water', 
          desc: 'Aventura olfativa com bergamota, gengibre e sândalo. 100ml.', 
          preco: 52000,
          imagem: 'https://images.unsplash.com/photo-1563170351-be82bc888aa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
          popular: true
        }
      ],
      importados: [
        { 
          id: 'creed-aventus', 
          nome: 'Creed Aventus', 
          desc: 'Fragrância premium com abacaxi, groselha preta e almíscar. 120ml.', 
          preco: 85000,
          imagem: 'https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
          popular: true
        },
        { 
          id: 'maison-margiela', 
          nome: 'Maison Margiela Replica', 
          desc: 'Beach Walk - Verão eterno com coco, ylang-ylang e almíscar. 100ml.', 
          preco: 58000,
          imagem: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
          popular: false
        }
      ],
      kits: [
        { 
          id: 'kit-romantic', 
          nome: 'Kit Romântico', 
          desc: '2 perfumes femininos + body splash + nécessaire exclusiva.', 
          preco: 75000,
          imagem: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
          popular: true
        },
        { 
          id: 'kit-gentleman', 
          nome: 'Kit Gentleman', 
          desc: '2 perfumes masculinos + pós-barba + estojo premium.', 
          preco: 80000,
          imagem: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
          popular: true
        },
        { 
          id: 'kit-encantador', 
          nome: 'Kit Encantador', 
          desc: '3 fragrâncias variadas + amostras + brinde surpresa.', 
          preco: 25000,
          imagem: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
          popular: false
        }
      ]
    };

    // ===== ESTADO DA APLICAÇÃO =====
    const state = {
      categoriaAtiva: 'femininos',
      filtroAtivo: 'all',
      carrinho: {}
    };

    // ===== ELEMENTOS DO DOM =====
    const produtosContainer = document.getElementById('produtos-container');
    const categoryTabs = document.querySelectorAll('.category-tab');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const cartBtn = document.getElementById('cart-btn');
    const cartBadge = document.getElementById('cart-badge');
    const modalCarrinho = document.getElementById('modal-carrinho');
    const fecharModalBtn = document.getElementById('fechar-modal');
    const modalBackdrop = document.getElementById('modal-backdrop');
    const finalizarModalBtn = document.getElementById('finalizar-modal');
    const carrinhoItens = document.getElementById('carrinho-itens');
    const carrinhoVazio = document.getElementById('carrinho-vazio');
    const carrinhoTotal = document.getElementById('carrinho-total');
    const modalCarrinhoItens = document.getElementById('modal-carrinho-itens');
    const modalCarrinhoVazio = document.getElementById('modal-carrinho-vazio');
    const modalCarrinhoTotal = document.getElementById('modal-carrinho-total');
    const finalizarPedidoBtn = document.getElementById('finalizar-pedido');
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');

    // ===== FUNÇÕES DE FORMATAÇÃO =====
    function formatKz(valor) {
      return `Kz ${valor.toLocaleString('pt-PT')}`;
    }

    function showToast(mensagem) {
      toastMessage.textContent = mensagem;
      toast.classList.remove('translate-y-20');
      toast.classList.add('translate-y-0');
      
      setTimeout(() => {
        toast.classList.remove('translate-y-0');
        toast.classList.add('translate-y-20');
      }, 3000);
    }

    // ===== RENDERIZAÇÃO DE PRODUTOS =====
    function renderProdutos() {
      let produtos = PRODUTOS[state.categoriaAtiva];
      
      if (state.filtroAtivo === 'popular') {
        produtos = produtos.filter(produto => produto.popular);
      }
      
      produtosContainer.innerHTML = produtos.map(produto => `
        <div class="card-hover rounded-3xl overflow-hidden glass border border-white/10">
          <div class="aspect-square bg-gradient-to-br from-neutral-800 to-neutral-900 relative">
            <img src="${produto.imagem}" alt="${produto.nome}" class="w-full h-full object-cover">
            ${produto.popular ? `
              <div class="absolute top-4 left-4 bg-gradient-to-r from-accent-500 to-secondary-500 text-white text-xs font-bold px-3 py-2 rounded-full shadow-lg">
                <i class="fa-solid fa-crown mr-1"></i> Premium
              </div>
            ` : ''}
            <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
          <div class="p-5">
            <h3 class="font-display font-semibold text-xl mb-2">${produto.nome}</h3>
            <p class="text-white/70 text-sm leading-relaxed mb-4">${produto.desc}</p>
            <div class="flex items-center justify-between">
              <span class="font-display font-bold text-2xl text-gradient">${formatKz(produto.preco)}</span>
              <button class="add-to-cart-btn btn-accessible px-5 py-3 rounded-2xl bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 font-medium transition-all focus-ring shadow-lg" data-id="${produto.id}">
                <i class="fa-solid fa-plus mr-2"></i> Adicionar
              </button>
            </div>
          </div>
        </div>
      `).join('');
      
      document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', () => addToCart(btn.dataset.id));
      });
    }

    // ===== FUNÇÕES DO CARRINHO =====
    function addToCart(id, quantidade = 1) {
      let produto;
      for (const categoria of Object.values(PRODUTOS)) {
        produto = categoria.find(p => p.id === id);
        if (produto) break;
      }
      
      if (!produto) return;
      
      if (!state.carrinho[id]) {
        state.carrinho[id] = {
          produto: produto,
          quantidade: 0
        };
      }
      
      state.carrinho[id].quantidade += quantidade;
      updateCarrinho();
      showToast(`${produto.nome} adicionado à seleção!`);
    }

    function removeFromCart(id, quantidade = 1) {
      if (!state.carrinho[id]) return;
      
      state.carrinho[id].quantidade -= quantidade;
      
      if (state.carrinho[id].quantidade <= 0) {
        delete state.carrinho[id];
      }
      
      updateCarrinho();
    }

    function updateCarrinho() {
      const itens = Object.values(state.carrinho);
      const totalItens = itens.reduce((total, item) => total + item.quantidade, 0);
      const totalPreco = itens.reduce((total, item) => total + (item.produto.preco * item.quantidade), 0);
      
      if (totalItens > 0) {
        cartBadge.textContent = totalItens;
        cartBadge.classList.remove('hidden');
      } else {
        cartBadge.classList.add('hidden');
      }
      
      if (itens.length > 0) {
        carrinhoVazio.classList.add('hidden');
        carrinhoItens.classList.remove('hidden');
        carrinhoTotal.classList.remove('hidden');
        
        carrinhoItens.innerHTML = itens.map(item => `
          <div class="flex items-center justify-between py-3 px-2">
            <div class="flex-1">
              <p class="font-medium">${item.quantidade}x ${item.produto.nome}</p>
              <p class="text-white/70 text-sm">${formatKz(item.produto.preco)} cada</p>
            </div>
            <div class="flex items-center gap-3">
              <button class="remove-item-btn btn-accessible w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all" data-id="${item.produto.id}">
                <i class="fa-solid fa-minus text-sm"></i>
              </button>
              <span class="font-medium mx-2 min-w-[20px] text-center">${item.quantidade}</span>
              <button class="add-item-btn btn-accessible w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all" data-id="${item.produto.id}">
                <i class="fa-solid fa-plus text-sm"></i>
              </button>
              <span class="font-medium ml-3 min-w-[80px] text-right">${formatKz(item.produto.preco * item.quantidade)}</span>
            </div>
          </div>
        `).join('');
        
        document.querySelector('#carrinho-total span:last-child').textContent = formatKz(totalPreco);
        
        document.querySelectorAll('.remove-item-btn').forEach(btn => {
          btn.addEventListener('click', () => removeFromCart(btn.dataset.id));
        });
        
        document.querySelectorAll('.add-item-btn').forEach(btn => {
          btn.addEventListener('click', () => addToCart(btn.dataset.id));
        });
      } else {
        carrinhoVazio.classList.remove('hidden');
        carrinhoItens.classList.add('hidden');
        carrinhoTotal.classList.add('hidden');
      }
      
      updateModalCarrinho();
    }

    function updateModalCarrinho() {
      const itens = Object.values(state.carrinho);
      const totalPreco = itens.reduce((total, item) => total + (item.produto.preco * item.quantidade), 0);
      
      if (itens.length > 0) {
        modalCarrinhoVazio.classList.add('hidden');
        modalCarrinhoItens.classList.remove('hidden');
        modalCarrinhoTotal.classList.remove('hidden');
        
        modalCarrinhoItens.innerHTML = itens.map(item => `
          <div class="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
            <div class="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0">
              <img src="${item.produto.imagem}" alt="${item.produto.nome}" class="w-full h-full object-cover">
            </div>
            <div class="flex-1 min-w-0">
              <h4 class="font-display font-medium text-lg truncate">${item.produto.nome}</h4>
              <p class="text-white/70 text-sm">${formatKz(item.produto.preco)} cada</p>
            </div>
            <div class="flex items-center gap-2 flex-shrink-0">
              <button class="remove-item-btn btn-accessible w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all" data-id="${item.produto.id}">
                <i class="fa-solid fa-minus"></i>
              </button>
              <span class="font-medium mx-2 min-w-[30px] text-center">${item.quantidade}</span>
              <button class="add-item-btn btn-accessible w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all" data-id="${item.produto.id}">
                <i class="fa-solid fa-plus"></i>
              </button>
            </div>
            <div class="text-right flex-shrink-0">
              <span class="font-medium">${formatKz(item.produto.preco * item.quantidade)}</span>
            </div>
          </div>
        `).join('');
        
        document.querySelector('#modal-carrinho-total span:last-child').textContent = formatKz(totalPreco);
        
        document.querySelectorAll('.remove-item-btn').forEach(btn => {
          btn.addEventListener('click', () => removeFromCart(btn.dataset.id));
        });
        
        document.querySelectorAll('.add-item-btn').forEach(btn => {
          btn.addEventListener('click', () => addToCart(btn.dataset.id));
        });
      } else {
        modalCarrinhoVazio.classList.remove('hidden');
        modalCarrinhoItens.classList.add('hidden');
        modalCarrinhoTotal.classList.add('hidden');
      }
    }

    function abrirModalCarrinho() {
      modalCarrinho.classList.remove('pointer-events-none');
      modalCarrinho.classList.add('opacity-100');
      
      const modalContent = modalCarrinho.querySelector('div > div');
      modalContent.classList.remove('translate-y-full');
    }

    function fecharModalCarrinho() {
      modalCarrinho.classList.add('pointer-events-none');
      modalCarrinho.classList.remove('opacity-100');
      
      const modalContent = modalCarrinho.querySelector('div > div');
      modalContent.classList.add('translate-y-full');
    }

    function finalizarPedido() {
      const itens = Object.values(state.carrinho);
      if (itens.length === 0) {
        showToast('Adicione produtos à sua seleção primeiro!');
        return;
      }
      
      const nome = document.getElementById('nome').value.trim() || 'Cliente';
      const endereco = document.getElementById('endereco').value.trim() || 'A combinar';
      const observacoes = document.getElementById('observacoes').value.trim();
      
      const total = itens.reduce((soma, item) => soma + (item.produto.preco * item.quantidade), 0);
      
      let mensagem = `✨ *PERFUMARIA CHIK* ✨\n\n`;
      mensagem += `Olá! Gostaria de fazer um pedido:\n\n`;
      mensagem += `👤 *Nome:* ${nome}\n`;
      mensagem += `📍 *Endereço:* ${endereco}\n\n`;
      mensagem += `🛍️ *Seleção de Fragrâncias:*\n`;
      
      itens.forEach((item, index) => {
        mensagem += `${index + 1}. ${item.quantidade}x ${item.produto.nome}\n`;
        mensagem += `   💰 ${formatKz(item.produto.preco)} cada = ${formatKz(item.produto.preco * item.quantidade)}\n\n`;
      });
      
      mensagem += `💎 *TOTAL: ${formatKz(total)}*\n\n`;
      
      if (observacoes) {
        mensagem += `📝 *Observações:* ${observacoes}\n\n`;
      }
      
      mensagem += `Aguardo confirmação! 🌟`;
      
      const url = `https://wa.me/244946043956?text=${encodeURIComponent(mensagem)}`;
      window.open(url, '_blank');
    }

    // ===== INICIALIZAÇÃO =====
    function init() {
      renderProdutos();
      
      categoryTabs.forEach(tab => {
        tab.addEventListener('click', () => {
          const categoria = tab.dataset.category;
          
          state.categoriaAtiva = categoria;
          
          categoryTabs.forEach(t => {
            if (t === tab) {
              t.classList.add('active');
            } else {
              t.classList.remove('active');
            }
          });
          
          renderProdutos();
        });
      });
      
      filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const filtro = btn.dataset.filter;
          
          state.filtroAtivo = filtro;
          
          filterBtns.forEach(b => {
            if (b === btn) {
              b.classList.add('active', 'bg-primary-600', 'text-white');
              b.classList.remove('glass');
            } else {
              b.classList.remove('active', 'bg-primary-600', 'text-white');
              b.classList.add('glass');
            }
          });
          
          renderProdutos();
        });
      });
      
      cartBtn.addEventListener('click', abrirModalCarrinho);
      fecharModalBtn.addEventListener('click', fecharModalCarrinho);
      modalBackdrop.addEventListener('click', fecharModalCarrinho);
      finalizarModalBtn.addEventListener('click', finalizarPedido);
      finalizarPedidoBtn.addEventListener('click', finalizarPedido);
      
      // Adicionar promoção ao clicar no botão
      document.querySelector('.add-promo-btn').addEventListener('click', function() {
        addToCart(this.dataset.id);
      });
      
      // Atualizar ano no footer
      document.getElementById('current-year').textContent = new Date().getFullYear();
      
      // Smooth scroll para links internos
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        });
      });
      
      // Fechar modal com tecla ESC
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
          fecharModalCarrinho();
        }
      });
    }

    // Iniciar a aplicação quando o DOM estiver carregado
    document.addEventListener('DOMContentLoaded', init);