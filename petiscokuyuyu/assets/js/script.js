// ===== DADOS DOS PRODUTOS =====
    const PRODUTOS = {
      burgers: [
        { 
          id: 'hamburguer-kuyuyu', 
          nome: 'Hambúrguer Kuyuyu', 
          desc: 'Pão, carne, queijo, ovo, fiambre, bacon, maionese especial.', 
          preco: 4000,
          imagem: 'assets/image/Hamburguer-kuyuyu.jpeg',
          popular: true
        },
        { 
          id: 'benga-burger', 
          nome: 'Benga Burger', 
          desc: 'Pão, carne, queijo cheddar, ovo cozido, fiambre, bacon, cebola caramelizada, molho cheddar, maionese especial.', 
          preco: 4500,
          imagem: 'assets/image/Hamburguer-benga.jpeg',
          popular: true
        },
        { 
          id: 'hamburguer-kifica', 
          nome: 'Hambúrguer Kifica', 
          desc: 'Pão, carne, queijo flamengo, ovo, fiambre, batata palha, maionese especial.', 
          preco: 3000,
          imagem: 'assets/image/Kifica.jpeg',
          popular: false
        }
      ],
      cachorros: [
        { 
          id: 'cachorro-especial', 
          nome: 'Cachorro Especial', 
          desc: 'Pão, maionese especial, salsicha, batata palha, molho cheddar, carne moída.', 
          preco: 3500,
          imagem: 'assets/image/Cachorro-quente-especial.jpeg',
          popular: true
        },
        { 
          id: 'cachorro-classico', 
          nome: 'Cachorro Quente Clássico', 
          desc: 'Pão, salsicha, molhos e batata palha.', 
          preco: 2500,
          imagem: 'https://images.unsplash.com/photo-1617196035154-1e7b6c0c7c9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
          popular: false
        }
      ],
      fahitas: [
        { 
          id: 'muenga-kuyuyu', 
          nome: 'Muenga Kuyuyu', 
          desc: 'Pão caseiro, carne moída, maionese especial, fiambre, queijo, batata frita.', 
          preco: 3500,
          imagem: 'assets/image/Muenga-kuyuyu.jpeg',
          popular: true
        },
        { 
          id: 'fahita-carne', 
          nome: 'Fahita de Carne', 
          desc: 'Pão, maionese especial, carne, milho, cebola caramelizada.', 
          preco: 3500,
          imagem: 'assets/image/Fahita-de-carne.jpeg',
          popular: true
        },
        { 
          id: 'fahita-frango', 
          nome: 'Fahita de Frango', 
          desc: 'Pão, maionese especial, frango, milho, cebola caramelizada.', 
          preco: 3500,
          imagem: 'assets/image/Faita-de-frango.jpeg',
          popular: false
        }
      ],
      combos: [
        { 
          id: 'combo-kuyuyu', 
          nome: 'Combo Kuyuyu', 
          desc: 'Hambúrguer Kuyuyu + batata + gasosa', 
          preco: 6000,
          imagem: 'assets/image/Combo-Kuyuyu.jpeg',
          popular: true
        },
        { 
          id: 'combo-benga', 
          nome: 'Combo Benga', 
          desc: 'Hambúrguer Benga + batata + gasosa', 
          preco: 6500,
          imagem: 'assets/image/Combo-Benga.jpeg',
          popular: true
        },
        { 
          id: 'combo-muenga', 
          nome: 'Combo Muenga', 
          desc: 'Muenga Kuyuyu + batata + gasosa', 
          preco: 5500,
          imagem: 'assets/image/Combo-Muenga.jpeg',
          popular: false
        },
        { 
          id: 'combo-kifica', 
          nome: 'Combo Kifica', 
          desc: 'Hambúrguer Kifica + batata + gasosa', 
          preco: 5000,
          imagem: 'assets/image/Combo-kifica.jpeg',
          popular: false
        },
        { 
          id: 'combo-fahita', 
          nome: 'Combo Fahita', 
          desc: 'Fahita + batata + gasosa', 
          preco: 5500,
          imagem: 'https://images.unsplash.com/photo-1617364066123-6b2017bcc303?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
          popular: false
        }
      ],
      acomp: [
        { 
          id: 'batata-frita', 
          nome: 'Batata Frita (dose)', 
          desc: 'Porção de batata frita crocante.', 
          preco: 1500,
          imagem: 'https://images.unsplash.com/photo-1634034379073-f689b460a3fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
          popular: true
        }
      ],
      bebidas: [
        { 
          id: 'gasosa', 
          nome: 'Gasosa', 
          desc: 'Coca-Cola, Sprite, Fanta e Sumol.', 
          preco: 850,
          imagem: 'https://images.unsplash.com/photo-1622483767072-8c6b2ce7e14c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
          popular: true
        },
        { 
          id: 'agua', 
          nome: 'Água', 
          desc: 'Água mineral.', 
          preco: 200,
          imagem: 'https://images.unsplash.com/photo-1548839143-1ac8d1c73c0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
          popular: false
        }
      ]
    };

    // ===== ESTADO DA APLICAÇÃO =====
    const state = {
      categoriaAtiva: 'burgers',
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
              <div class="absolute top-3 left-3 bg-secondary-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                <i class="fa-solid fa-star mr-1"></i> Popular
              </div>
            ` : ''}
          </div>
          <div class="p-4">
            <h3 class="font-semibold mb-1">${produto.nome}</h3>
            <p class="text-white/70 text-sm mb-3">${produto.desc}</p>
            <div class="flex items-center justify-between">
              <span class="font-display font-bold">${formatKz(produto.preco)}</span>
              <button class="add-to-cart-btn btn-accessible px-4 py-2 rounded-xl gradient-bg hover:opacity-90 font-medium transition-all focus-ring glow" data-id="${produto.id}">
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
      
      let mensagem = `Olá, gostaria de fazer um pedido dos Petiscos Kuyuyu:\n\n`;
      mensagem += `*Nome:* ${nome}\n`;
      mensagem += `*Endereço:* ${endereco}\n`;
      mensagem += `*Observações:* ${observacoes}\n\n`;
      mensagem += `*Pedido:*\n`;
      
      itens.forEach((item, index) => {
        mensagem += `${index + 1}. ${item.quantidade}x ${item.produto.nome} - ${formatKz(item.produto.preco * item.quantidade)}\n`;
      });
      
      mensagem += `\n*Total: ${formatKz(total)}*\n\n`;
      mensagem += `Obrigado!`;
      
      const url = `https://wa.me/244923857360?text=${encodeURIComponent(mensagem)}`;
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
              t.classList.add('gradient-bg', 'text-white', 'glow');
              t.classList.remove('glass', 'border');
            } else {
              t.classList.remove('gradient-bg', 'text-white', 'glow');
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
              b.classList.add('active', 'gradient-bg', 'text-white', 'glow');
            } else {
              b.classList.remove('active', 'gradient-bg', 'text-white', 'glow');
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