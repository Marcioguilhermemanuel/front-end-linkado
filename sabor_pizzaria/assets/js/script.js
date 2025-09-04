 // ===== DADOS DOS PRODUTOS =====
    const PRODUTOS = {
      pizzas: [
        { 
          id: 'margherita', 
          nome: 'Margherita', 
          desc: 'Molho de tomate, muçarela, tomate fresco, manjericão e azeite.', 
          preco: 6500,
          imagem: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
          popular: true
        },
        { 
          id: 'calabresa', 
          nome: 'Calabresa', 
          desc: 'Molho de tomate, muçarela, calabresa fatiada, cebola e azeitonas.', 
          preco: 6800,
          imagem: 'https://images.unsplash.com/photo-1595708684082-a173bb3a06c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
          popular: true
        },
        { 
          id: 'quatro-queijos', 
          nome: 'Quatro Queijos', 
          desc: 'Molho de tomate, muçarela, provolone, parmesão, gorgonzola e orégano.', 
          preco: 7200,
          imagem: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
          popular: true
        },
        { 
          id: 'portuguesa', 
          nome: 'Portuguesa', 
          desc: 'Molho de tomate, muçarela, presunto, ovos, cebola, azeitonas e pimentão.', 
          preco: 7000,
          imagem: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
          popular: false
        }
      ],
      massas: [
        { 
          id: 'espaguete-carbonara', 
          nome: 'Espaguete à Carbonara', 
          desc: 'Espaguete com molho carbonara (bacon, ovos, queijo parmesão e pimenta preta).', 
          preco: 7500,
          imagem: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
          popular: true
        },
        { 
          id: 'lasanha-bolonhesa', 
          nome: 'Lasanha à Bolonhesa', 
          desc: 'Camadas de massa, carne moída, molho de tomate, queijo muçarela e parmesão.', 
          preco: 8500,
          imagem: 'https://images.unsplash.com/photo-1619895091208-81d8edca08e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
          popular: true
        },
        { 
          id: 'ravioli-queijo', 
          nome: 'Ravioli de Queijo', 
          desc: 'Ravioli recheado com queijo, servido com molho pomodoro e manjericão.', 
          preco: 7800,
          imagem: 'https://images.unsplash.com/photo-1598866592150-19a9eabf8ff3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
          popular: false
        }
      ],
      combos: [
        { 
          id: 'combo-familia', 
          nome: 'Combo Família', 
          desc: '2 pizzas grandes + refrigerante 2L + borda recheada', 
          preco: 15000,
          imagem: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
          popular: true
        },
        { 
          id: 'combo-casal', 
          nome: 'Combo Casal', 
          desc: '1 pizza média + 1 massa + refrigerante 1,5L', 
          preco: 12000,
          imagem: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
          popular: true
        }
      ],
      bebidas: [
        { 
          id: 'refri-2l', 
          nome: 'Refrigerante 2L', 
          desc: 'Coca-Cola, Guaraná ou Fanta Laranja.', 
          preco: 1500,
          imagem: 'https://images.unsplash.com/photo-1622483767072-8c6b2ce7e14c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
          popular: true
        },
        { 
          id: 'suco-natural', 
          nome: 'Suco Natural 500ml', 
          desc: 'Laranja, Maracujá ou Limão.', 
          preco: 1800,
          imagem: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
          popular: false
        },
        { 
          id: 'agua-mineral', 
          nome: 'Água Mineral 500ml', 
          desc: 'Água mineral sem gás.', 
          preco: 800,
          imagem: 'https://images.unsplash.com/photo-1548839143-3f4d2d574a3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
          popular: true
        }
      ],
      sobremesas: [
        { 
          id: 'tiramisu', 
          nome: 'Tiramisù', 
          desc: 'Sobremesa italiana clássica com café e mascarpone.', 
          preco: 3200,
          imagem: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
          popular: true
        },
        { 
          id: 'pudim', 
          nome: 'Pudim de Leite', 
          desc: 'Pudim de leite condensado com calda de caramelo.', 
          preco: 2800,
          imagem: 'https://images.unsplash.com/photo-1586788680434-30d8b2f0466e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
          popular: true
        }
      ]
    };

    // ===== ESTADO DA APLICAÇÃO =====
    const state = {
      categoriaAtiva: 'pizzas',
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
      
      // Aplicar filtro se necessário
      if (state.filtroAtivo === 'popular') {
        produtos = produtos.filter(produto => produto.popular);
      }
      
      produtosContainer.innerHTML = produtos.map(produto => `
        <div class="card-hover rounded-2xl overflow-hidden glass border border-white/10">
          <div class="aspect-square bg-neutral-800 relative">
            <img src="${produto.imagem}" alt="${produto.nome}" class="w-full h-full object-cover">
            ${produto.popular ? `
              <div class="absolute top-3 left-3 bg-basil-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                <i class="fa-solid fa-star mr-1"></i> Popular
              </div>
            ` : ''}
          </div>
          <div class="p-4">
            <h3 class="font-semibold mb-1">${produto.nome}</h3>
            <p class="text-white/70 text-sm mb-3">${produto.desc}</p>
            <div class="flex items-center justify-between">
              <span class="font-display font-bold">${formatKz(produto.preco)}</span>
              <button class="add-to-cart-btn btn-accessible px-4 py-2 rounded-xl bg-pizza-600 hover:bg-pizza-700 font-medium transition-all focus-ring" data-id="${produto.id}">
                <i class="fa-solid fa-plus mr-1"></i> Adicionar
              </button>
            </div>
          </div>
        </div>
      `).join('');
      
      // Adicionar event listeners aos botões
      document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', () => addToCart(btn.dataset.id));
      });
    }

    // ===== FUNÇÕES DO CARRINHO =====
    function addToCart(id, quantidade = 1) {
      // Encontrar o produto em todas as categorias
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
      showToast(`${produto.nome} adicionado ao carrinho!`);
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
      
      // Atualizar badge do carrinho
      if (totalItens > 0) {
        cartBadge.textContent = totalItens;
        cartBadge.classList.remove('hidden');
      } else {
        cartBadge.classList.add('hidden');
      }
      
      // Atualizar carrinho na seção de pedido
      if (itens.length > 0) {
        carrinhoVazio.classList.add('hidden');
        carrinhoItens.classList.remove('hidden');
        carrinhoTotal.classList.remove('hidden');
        
        carrinhoItens.innerHTML = itens.map(item => `
          <div class="flex items-center justify-between py-2">
            <div class="flex-1">
              <p class="font-medium">${item.quantidade}x ${item.produto.nome}</p>
              <p class="text-white/70 text-sm">${formatKz(item.produto.preco)} cada</p>
            </div>
            <div class="flex items-center gap-2">
              <button class="remove-item-btn btn-accessible w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20" data-id="${item.produto.id}">
                <i class="fa-solid fa-minus text-xs"></i>
              </button>
              <span class="font-medium mx-1">${item.quantidade}</span>
              <button class="add-item-btn btn-accessible w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20" data-id="${item.produto.id}">
                <i class="fa-solid fa-plus text-xs"></i>
              </button>
              <span class="font-medium ml-2">${formatKz(item.produto.preco * item.quantidade)}</span>
            </div>
          </div>
        `).join('');
        
        document.querySelector('#carrinho-total span:last-child').textContent = formatKz(totalPreco);
        
        // Adicionar event listeners
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
      
      // Atualizar modal do carrinho
      updateModalCarrinho();
    }

    function updateModalCarrinho() {
      const itens = Object.values(state.carrinho);
      const totalItens = itens.reduce((total, item) => total + item.quantidade, 0);
      const totalPreco = itens.reduce((total, item) => total + (item.produto.preco * item.quantidade), 0);
      
      if (itens.length > 0) {
        modalCarrinhoVazio.classList.add('hidden');
        modalCarrinhoItens.classList.remove('hidden');
        modalCarrinhoTotal.classList.remove('hidden');
        
        modalCarrinhoItens.innerHTML = itens.map(item => `
          <div class="flex items-center gap-3 p-3 rounded-xl bg-white/5">
            <div class="w-16 h-16 rounded-lg overflow-hidden">
              <img src="${item.produto.imagem}" alt="${item.produto.nome}" class="w-full h-full object-cover">
            </div>
            <div class="flex-1">
              <h4 class="font-medium">${item.produto.nome}</h4>
              <p class="text-white/70 text-sm">${formatKz(item.produto.preco)}</p>
            </div>
            <div class="flex items-center gap-2">
              <button class="remove-item-btn btn-accessible w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20" data-id="${item.produto.id}">
                <i class="fa-solid fa-minus text-xs"></i>
              </button>
              <span class="font-medium mx-1">${item.quantidade}</span>
              <button class="add-item-btn btn-accessible w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20" data-id="${item.produto.id}">
                <i class="fa-solid fa-plus text-xs"></i>
              </button>
              <span class="font-medium ml-2">${formatKz(item.produto.preco * item.quantidade)}</span>
            </div>
          </div>
        `).join('');
        
        document.querySelector('#modal-carrinho-total span:last-child').textContent = formatKz(totalPreco);
        
        // Adicionar event listeners
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
        showToast('Adicione itens ao carrinho primeiro!');
        return;
      }
      
      const nome = document.getElementById('nome').value.trim() || 'Cliente';
      const endereco = document.getElementById('endereco').value.trim() || 'A combinar';
      const observacoes = document.getElementById('observacoes').value.trim() || 'Nenhuma';
      
      const total = itens.reduce((soma, item) => soma + (item.produto.preco * item.quantidade), 0);
      
      let mensagem = `Olá, gostaria de fazer um pedido:\n\n`;
      mensagem += `*Nome:* ${nome}\n`;
      mensagem += `*Endereço:* ${endereco}\n`;
      mensagem += `*Observações:* ${observacoes}\n\n`;
      mensagem += `*Pedido:*\n`;
      
      itens.forEach((item, index) => {
        mensagem += `${index + 1}. ${item.quantidade}x ${item.produto.nome} - ${formatKz(item.produto.preco * item.quantidade)}\n`;
      });
      
      mensagem += `\n*Total: ${formatKz(total)}*\n\n`;
      mensagem += `Obrigado!`;
      
      const url = `https://wa.me/244946043956?text=${encodeURIComponent(mensagem)}`;
      window.open(url, '_blank');
    }

    // ===== INICIALIZAÇÃO =====
    function init() {
      // Renderizar produtos iniciais
      renderProdutos();
      
      // Event listeners para abas de categoria
      categoryTabs.forEach(tab => {
        tab.addEventListener('click', () => {
          const categoria = tab.dataset.category;
          
          // Atualizar estado
          state.categoriaAtiva = categoria;
          
          // Atualizar UI
          categoryTabs.forEach(t => {
            if (t === tab) {
              t.classList.add('bg-pizza-600', 'text-white');
              t.classList.remove('glass', 'border');
            } else {
              t.classList.remove('bg-pizza-600', 'text-white');
              t.classList.add('glass', 'border');
            }
          });
          
          // Renderizar produtos
          renderProdutos();
        });
      });
      
      // Event listeners para filtros
      filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const filtro = btn.dataset.filter;
          
          // Atualizar estado
          state.filtroAtivo = filtro;
          
          // Atualizar UI
          filterBtns.forEach(b => {
            if (b === btn) {
              b.classList.add('active', 'bg-pizza-600', 'text-white');
            } else {
              b.classList.remove('active', 'bg-pizza-600', 'text-white');
            }
          });
          
          // Renderizar produtos
          renderProdutos();
        });
      });
      
      // Event listeners para o carrinho
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
    }

    // Iniciar a aplicação quando o DOM estiver carregado
    document.addEventListener('DOMContentLoaded', init);