// Dados dos produtos
    const produtos = [
      // Hamburguers
      {
        id: "hamburguer-kuyuyu",
        nome: "Hambúrguer Kuyuyu",
        preco: 4000,
        categoria: "burgers",
        popular: true,
        descricao: "Pão, carne, queijo, ovo, fiambre, bacon, maionese especial",
        imagem: "https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      {
        id: "benga-burger",
        nome: "Benga Burger",
        preco: 4500,
        categoria: "burgers",
        popular: true,
        descricao: "Pão, carne, queijo cheddar, ovo cozido, fiambre, bacon, cebola caramelizada, molho cheddar, maionese especial",
        imagem: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      {
        id: "hamburguer-kifica",
        nome: "Hambúrguer Kifica",
        preco: 3000,
        categoria: "burgers",
        popular: false,
        descricao: "Pão, carne, queijo flamengo, ovo, fiambre, batata palha, maionese especial",
        imagem: "https://images.unsplash.com/photo-1553979459-d2229ba7433w?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      
      // Cachorros
      {
        id: "cachorro-especial",
        nome: "Cachorro Especial",
        preco: 3500,
        categoria: "cachorros",
        popular: true,
        descricao: "Pão, maionese especial, salsicha, batata palha, molho cheddar, carne moída",
        imagem: "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      {
        id: "cachorro-classico",
        nome: "Cachorro Quente Clássico",
        preco: 2500,
        categoria: "cachorros",
        popular: false,
        descricao: "Pão, salsicha, molhos e batata palha",
        imagem: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      {
        id: "muenga-kuyuyu",
        nome: "Muenga Kuyuyu",
        preco: 3500,
        categoria: "cachorros",
        popular: true,
        descricao: "Pão caseiro, carne moída, maionese especial, fiambre, queijo, batata frita",
        imagem: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      
      // Fahitas
      {
        id: "fahita-carne",
        nome: "Fahita de Carne",
        preco: 3500,
        categoria: "fahitas",
        popular: false,
        descricao: "Pão, maionese especial, carne, milho, cebola caramelizada",
        imagem: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      {
        id: "fahita-frango",
        nome: "Fahita de Frango",
        preco: 3500,
        categoria: "fahitas",
        popular: false,
        descricao: "Pão, maionese especial, frango, milho, cebola caramelizada",
        imagem: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      
      // Combos
      {
        id: "combo-kuyuyu",
        nome: "Combo Kuyuyu",
        preco: 6000,
        categoria: "combos",
        popular: true,
        descricao: "Hambúrguer Kuyuyu, batata, gasosa",
        imagem: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      {
        id: "combo-benga",
        nome: "Combo Benga",
        preco: 6500,
        categoria: "combos",
        popular: true,
        descricao: "Hambúrguer Benga, batata, gasosa",
        imagem: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      {
        id: "combo-muenga",
        nome: "Combo Muenga",
        preco: 5500,
        categoria: "combos",
        popular: false,
        descricao: "Muenga Kuyuyu, batata, gasosa",
        imagem: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      {
        id: "combo-kifica",
        nome: "Combo Kifica",
        preco: 5000,
        categoria: "combos",
        popular: false,
        descricao: "Hambúrguer Kifica, batata, gasosa",
        imagem: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      {
        id: "combo-fahita",
        nome: "Combo Fahita",
        preco: 5500,
        categoria: "combos",
        popular: false,
        descricao: "Fahita, batata, gasosa",
        imagem: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      
      // Acompanhamentos
      {
        id: "batata-frita",
        nome: "Batata Frita (Dose)",
        preco: 1500,
        categoria: "acomp",
        popular: true,
        descricao: "Porção de batata frita crocante",
        imagem: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      
      // Bebidas
      {
        id: "gasosa",
        nome: "Gasosa",
        preco: 850,
        categoria: "bebidas",
        popular: true,
        descricao: "Coca cola, Sprite, Fanta ou Sumol",
        imagem: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      {
        id: "agua",
        nome: "Água Mineral",
        preco: 200,
        categoria: "bebidas",
        popular: false,
        descricao: "Água mineral 500ml",
        imagem: "https://images.unsplash.com/photo-1548839143-2c3d2c56c4e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      }
    ];

    // Estado do carrinho
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    let categoriaAtiva = 'burgers';
    let filtroAtivo = 'all';

    // Inicialização
    document.addEventListener('DOMContentLoaded', function() {
      // Atualizar ano no footer
      document.getElementById('current-year').textContent = new Date().getFullYear();
      
      // Carregar produtos
      carregarProdutos();
      
      // Configurar eventos
      configurarEventos();
      
      // Atualizar carrinho
      atualizarCarrinho();
    });

    // Carregar produtos na interface
    function carregarProdutos() {
      const container = document.getElementById('produtos-container');
      container.innerHTML = '';
      
      // Filtrar produtos por categoria e filtro
      const produtosFiltrados = produtos.filter(produto => {
        const categoriaMatch = categoriaAtiva === 'all' || produto.categoria === categoriaAtiva;
        const filtroMatch = filtroAtivo === 'all' || (filtroAtivo === 'popular' && produto.popular);
        return categoriaMatch && filtroMatch;
      });
      
      // Exibir produtos
      if (produtosFiltrados.length === 0) {
        container.innerHTML = `
          <div class="text-center py-10">
            <i class="fa-solid fa-utensils text-4xl text-white/30 mb-3"></i>
            <p class="text-white/50">Nenhum produto encontrado nesta categoria</p>
          </div>
        `;
        return;
      }
      
      produtosFiltrados.forEach(produto => {
        const produtoElement = criarElementoProduto(produto);
        container.appendChild(produtoElement);
      });
    }

    // Criar elemento de produto
    function criarElementoProduto(produto) {
      const div = document.createElement('div');
      div.className = 'glass rounded-2xl overflow-hidden border border-white/10';
      div.innerHTML = `
        <div class="flex">
          <div class="w-24 h-24 flex-shrink-0">
            <img src="${produto.imagem}" alt="${produto.nome}" class="w-full h-full object-cover">
          </div>
          <div class="p-4 flex-1">
            <div class="flex justify-between items-start mb-2">
              <h3 class="font-semibold">${produto.nome}</h3>
              ${produto.popular ? '<span class="inline-flex items-center gap-1 bg-primary-600/20 text-primary-400 text-xs px-2 py-1 rounded-full"><i class="fa-solid fa-star text-xs"></i> Popular</span>' : ''}
            </div>
            <p class="text-white/70 text-sm mb-3">${produto.descricao}</p>
            <div class="flex items-center justify-between">
              <span class="font-display font-bold text-lg">Kz ${produto.preco.toLocaleString('pt-BR')}</span>
              <button class="add-to-cart-btn btn-accessible px-4 py-2 rounded-xl bg-primary-600 hover:bg-primary-700 font-medium text-sm transition-all focus-ring" data-id="${produto.id}">
                Adicionar
              </button>
            </div>
          </div>
        </div>
      `;
      
      return div;
    }

    // Configurar eventos
    function configurarEventos() {
      // Abas de categoria
      document.querySelectorAll('.category-tab').forEach(tab => {
        tab.addEventListener('click', function() {
          // Remover classe ativa de todas as abas
          document.querySelectorAll('.category-tab').forEach(t => {
            t.classList.remove('bg-primary-600', 'text-white');
            t.classList.add('glass', 'border', 'border-white/10');
          });
          
          // Adicionar classe ativa à aba clicada
          this.classList.add('bg-primary-600', 'text-white');
          this.classList.remove('glass', 'border', 'border-white/10');
          
          // Atualizar categoria ativa
          categoriaAtiva = this.dataset.category;
          
          // Recarregar produtos
          carregarProdutos();
        });
      });
      
      // Botões de filtro
      document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
          // Remover classe ativa de todos os botões
          document.querySelectorAll('.filter-btn').forEach(b => {
            b.classList.remove('active', 'bg-primary-600', 'text-white');
          });
          
          // Adicionar classe ativa ao botão clicado
          this.classList.add('active', 'bg-primary-600', 'text-white');
          
          // Atualizar filtro ativo
          filtroAtivo = this.dataset.filter;
          
          // Recarregar produtos
          carregarProdutos();
        });
      });
      
      // Botão do carrinho
      document.getElementById('cart-btn').addEventListener('click', abrirModalCarrinho);
      
      // Botão fechar modal
      document.getElementById('fechar-modal').addEventListener('click', fecharModalCarrinho);
      
      // Backdrop do modal
      document.getElementById('modal-backdrop').addEventListener('click', fecharModalCarrinho);
      
      // Botão finalizar pedido no modal
      document.getElementById('finalizar-modal').addEventListener('click', finalizarPedido);
      
      // Botão finalizar pedido na seção
      document.getElementById('finalizar-pedido').addEventListener('click', finalizarPedido);
      
      // Botão de promoção
      document.querySelector('.add-promo-btn').addEventListener('click', function() {
        adicionarAoCarrinho('combo-kuyuyu');
      });
    }

    // Adicionar produto ao carrinho
    function adicionarAoCarrinho(idProduto) {
      const produto = produtos.find(p => p.id === idProduto);
      
      if (!produto) return;
      
      // Verificar se o produto já está no carrinho
      const itemExistente = carrinho.find(item => item.id === idProduto);
      
      if (itemExistente) {
        itemExistente.quantidade += 1;
      } else {
        carrinho.push({
          id: produto.id,
          nome: produto.nome,
          preco: produto.preco,
          quantidade: 1
        });
      }
      
      // Atualizar localStorage
      localStorage.setItem('carrinho', JSON.stringify(carrinho));
      
      // Atualizar interface
      atualizarCarrinho();
      
      // Mostrar toast de confirmação
      mostrarToast(`${produto.nome} adicionado ao carrinho!`);
    }

    // Remover produto do carrinho
    function removerDoCarrinho(idProduto) {
      carrinho = carrinho.filter(item => item.id !== idProduto);
      
      // Atualizar localStorage
      localStorage.setItem('carrinho', JSON.stringify(carrinho));
      
      // Atualizar interface
      atualizarCarrinho();
    }

    // Atualizar quantidade no carrinho
    function atualizarQuantidade(idProduto, novaQuantidade) {
      if (novaQuantidade < 1) {
        removerDoCarrinho(idProduto);
        return;
      }
      
      const item = carrinho.find(item => item.id === idProduto);
      
      if (item) {
        item.quantidade = novaQuantidade;
        
        // Atualizar localStorage
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
        
        // Atualizar interface
        atualizarCarrinho();
      }
    }

    // Atualizar interface do carrinho
    function atualizarCarrinho() {
      const totalItens = carrinho.reduce((total, item) => total + item.quantidade, 0);
      const totalPreco = carrinho.reduce((total, item) => total + (item.preco * item.quantidade), 0);
      
      // Atualizar badge do carrinho
      const badge = document.getElementById('cart-badge');
      if (totalItens > 0) {
        badge.textContent = totalItens;
        badge.classList.remove('hidden');
      } else {
        badge.classList.add('hidden');
      }
      
      // Atualizar seção do carrinho
      const carrinhoVazio = document.getElementById('carrinho-vazio');
      const carrinhoItens = document.getElementById('carrinho-itens');
      const carrinhoTotal = document.getElementById('carrinho-total');
      
      if (carrinho.length === 0) {
        carrinhoVazio.classList.remove('hidden');
        carrinhoItens.classList.add('hidden');
        carrinhoTotal.classList.add('hidden');
      } else {
        carrinhoVazio.classList.add('hidden');
        carrinhoItens.classList.remove('hidden');
        carrinhoTotal.classList.remove('hidden');
        
        // Atualizar itens do carrinho
        carrinhoItens.innerHTML = '';
        carrinho.forEach(item => {
          const itemElement = document.createElement('div');
          itemElement.className = 'flex items-center justify-between';
          itemElement.innerHTML = `
            <div>
              <p class="font-medium">${item.nome}</p>
              <p class="text-white/70 text-sm">Kz ${item.preco.toLocaleString('pt-BR')} x ${item.quantidade}</p>
            </div>
            <div class="flex items-center gap-2">
              <button class="btn-accessible w-6 h-6 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20" data-id="${item.id}" data-action="decrease">
                <i class="fa-solid fa-minus text-xs"></i>
              </button>
              <span class="w-6 text-center">${item.quantidade}</span>
              <button class="btn-accessible w-6 h-6 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20" data-id="${item.id}" data-action="increase">
                <i class="fa-solid fa-plus text-xs"></i>
              </button>
              <button class="btn-accessible w-6 h-6 rounded-full bg-red-600/20 text-red-400 flex items-center justify-center hover:bg-red-600/30 ml-2" data-id="${item.id}" data-action="remove">
                <i class="fa-solid fa-trash text-xs"></i>
              </button>
            </div>
          `;
          carrinhoItens.appendChild(itemElement);
        });
        
        // Atualizar total
        document.querySelector('#carrinho-total span:last-child').textContent = `Kz ${totalPreco.toLocaleString('pt-BR')}`;
      }
      
      // Atualizar modal do carrinho
      atualizarModalCarrinho();
      
      // Configurar eventos dos botões do carrinho
      configurarEventosCarrinho();
    }

    // Atualizar modal do carrinho
    function atualizarModalCarrinho() {
      const modalVazio = document.getElementById('modal-carrinho-vazio');
      const modalItens = document.getElementById('modal-carrinho-itens');
      const modalTotal = document.getElementById('modal-carrinho-total');
      
      const totalPreco = carrinho.reduce((total, item) => total + (item.preco * item.quantidade), 0);
      
      if (carrinho.length === 0) {
        modalVazio.classList.remove('hidden');
        modalItens.classList.add('hidden');
        modalTotal.classList.add('hidden');
      } else {
        modalVazio.classList.add('hidden');
        modalItens.classList.remove('hidden');
        modalTotal.classList.remove('hidden');
        
        // Atualizar itens do modal
        modalItens.innerHTML = '';
        carrinho.forEach(item => {
          const itemElement = document.createElement('div');
          itemElement.className = 'flex items-center justify-between glass p-3 rounded-xl';
          itemElement.innerHTML = `
            <div class="flex-1">
              <p class="font-medium">${item.nome}</p>
              <p class="text-white/70 text-sm">Kz ${item.preco.toLocaleString('pt-BR')}</p>
            </div>
            <div class="flex items-center gap-2">
              <button class="btn-accessible w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20" data-id="${item.id}" data-action="decrease">
                <i class="fa-solid fa-minus text-xs"></i>
              </button>
              <span class="w-8 text-center font-medium">${item.quantidade}</span>
              <button class="btn-accessible w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20" data-id="${item.id}" data-action="increase">
                <i class="fa-solid fa-plus text-xs"></i>
              </button>
              <button class="btn-accessible w-8 h-8 rounded-full bg-red-600/20 text-red-400 flex items-center justify-center hover:bg-red-600/30 ml-2" data-id="${item.id}" data-action="remove">
                <i class="fa-solid fa-trash text-xs"></i>
              </button>
            </div>
          `;
          modalItens.appendChild(itemElement);
        });
        
        // Atualizar total do modal
        document.querySelector('#modal-carrinho-total span:last-child').textContent = `Kz ${totalPreco.toLocaleString('pt-BR')}`;
      }
    }

    // Configurar eventos dos botões do carrinho
    function configurarEventosCarrinho() {
      // Botões de adicionar ao carrinho
      document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', function() {
          adicionarAoCarrinho(this.dataset.id);
        });
      });
      
      // Botões de controle de quantidade no carrinho
      document.querySelectorAll('[data-action="increase"]').forEach(btn => {
        btn.addEventListener('click', function() {
          const id = this.dataset.id;
          const item = carrinho.find(item => item.id === id);
          if (item) {
            atualizarQuantidade(id, item.quantidade + 1);
          }
        });
      });
      
      document.querySelectorAll('[data-action="decrease"]').forEach(btn => {
        btn.addEventListener('click', function() {
          const id = this.dataset.id;
          const item = carrinho.find(item => item.id === id);
          if (item) {
            atualizarQuantidade(id, item.quantidade - 1);
          }
        });
      });
      
      document.querySelectorAll('[data-action="remove"]').forEach(btn => {
        btn.addEventListener('click', function() {
          removerDoCarrinho(this.dataset.id);
        });
      });
    }

    // Abrir modal do carrinho
    function abrirModalCarrinho() {
      const modal = document.getElementById('modal-carrinho');
      modal.classList.remove('opacity-0', 'pointer-events-none');
      modal.classList.add('opacity-100');
      
      setTimeout(() => {
        modal.querySelector('.translate-y-full').classList.remove('translate-y-full');
      }, 10);
    }

    // Fechar modal do carrinho
    function fecharModalCarrinho() {
      const modal = document.getElementById('modal-carrinho');
      modal.querySelector('.translate-y-full').classList.add('translate-y-full');
      
      setTimeout(() => {
        modal.classList.remove('opacity-100');
        modal.classList.add('opacity-0', 'pointer-events-none');
      }, 300);
    }

    // Mostrar toast de notificação
    function mostrarToast(mensagem) {
      const toast = document.getElementById('toast');
      const toastMessage = document.getElementById('toast-message');
      
      toastMessage.textContent = mensagem;
      toast.classList.remove('translate-y-20');
      toast.classList.add('-translate-y-0');
      
      setTimeout(() => {
        toast.classList.remove('-translate-y-0');
        toast.classList.add('translate-y-20');
      }, 3000);
    }

    // Finalizar pedido
    function finalizarPedido() {
      if (carrinho.length === 0) {
        mostrarToast('Adicione itens ao carrinho antes de finalizar o pedido!');
        return;
      }
      
      const nome = document.getElementById('nome').value.trim();
      const endereco = document.getElementById('endereco').value.trim();
      const bairro = document.getElementById('bairro').value;
      
      if (!nome || !endereco || !bairro) {
        mostrarToast('Preencha todos os dados antes de finalizar o pedido!');
        return;
      }
      
      // Calcular totais
      const totalItens = carrinho.reduce((total, item) => total + item.quantidade, 0);
      const totalPreco = carrinho.reduce((total, item) => total + (item.preco * item.quantidade), 0);
      
      // Calcular taxa de entrega baseada no bairro
      let taxaEntrega = 0;
      if (bairro.includes('Benfica') || bairro.includes('Patriota')) {
        taxaEntrega = 1250; // Valor médio entre 1000-1500
      } else if (bairro.includes('Talatona') || bairro.includes('Futungo')) {
        taxaEntrega = 1500;
      } else {
        taxaEntrega = 2000; // Para as demais áreas
      }
      
      const totalFinal = totalPreco + taxaEntrega;
      
      // Montar mensagem para WhatsApp
      let mensagem = `Olá, gostaria de fazer um pedido:\n\n`;
      mensagem += `*Nome:* ${nome}\n`;
      mensagem += `*Endereço:* ${endereco}\n`;
      mensagem += `*Bairro:* ${bairro}\n\n`;
      mensagem += `*Pedido:*\n`;
      
      carrinho.forEach(item => {
        mensagem += `- ${item.nome} x${item.quantidade} - Kz ${(item.preco * item.quantidade).toLocaleString('pt-BR')}\n`;
      });
      
      mensagem += `\n*Subtotal:* Kz ${totalPreco.toLocaleString('pt-BR')}\n`;
      mensagem += `*Taxa de entrega:* Kz ${taxaEntrega.toLocaleString('pt-BR')}\n`;
      mensagem += `*Total:* Kz ${totalFinal.toLocaleString('pt-BR')}\n\n`;
      mensagem += `Aguardando confirmação. Obrigado!`;
      
      // Codificar mensagem para URL
      const mensagemCodificada = encodeURIComponent(mensagem);
      
      // Abrir WhatsApp
      window.open(`https://wa.me/244928216200?text=${mensagemCodificada}`, '_blank');
      
      // Fechar modal
      fecharModalCarrinho();
    }

    // Event delegation para produtos carregados dinamicamente
    document.addEventListener('click', function(e) {
      if (e.target.classList.contains('add-to-cart-btn') || e.target.closest('.add-to-cart-btn')) {
        const btn = e.target.classList.contains('add-to-cart-btn') ? e.target : e.target.closest('.add-to-cart-btn');
        adicionarAoCarrinho(btn.dataset.id);
      }
    });