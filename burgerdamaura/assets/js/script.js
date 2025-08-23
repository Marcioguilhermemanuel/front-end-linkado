 // ===== Dados do catálogo =====
 const PRODUTOS = {
    burgers: [
      { 
        id: 'maura-classic', 
        nome: 'Burger Maura Classic', 
        desc: '180g de blend suculento, queijo derretido, alface, tomate, molho especial da Maura.', 
        preco: 4800,
        imagem: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop'
      },
      { 
        id: 'maura-bacon', 
        nome: 'Bacon Explosion', 
        desc: 'Duplo smash 120g cada, cheddar cremoso, bacon crocante, cebola caramelizada.', 
        preco: 7200,
        imagem: 'https://images.unsplash.com/photo-1551782450-17144efb9c50?w=300&h=200&fit=crop'
      },
      { 
        id: 'maura-veg', 
        nome: 'Veggie Delight', 
        desc: 'Hambúrguer artesanal de quinoa e feijão preto, abacate, rúcula, tomate seco.', 
        preco: 5500,
        imagem: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?w=300&h=200&fit=crop'
      },
      { 
        id: 'maura-premium', 
        nome: 'Premium Gourmet', 
        desc: 'Blend 200g, queijo brie, cogumelos grelhados, rúcula, molho trufado.', 
        preco: 8500,
        imagem: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=300&h=200&fit=crop'
      },
    ],
    combos: [
      { 
        id: 'combo-individual', 
        nome: 'Combo Individual', 
        desc: 'Qualquer burger + batata média + refrigerante 350ml', 
        preco: 9800,
        imagem: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=300&h=200&fit=crop'
      },
      { 
        id: 'combo-casal', 
        nome: 'Combo Casal', 
        desc: '2 burgers + batata grande + 2 refrigerantes 350ml', 
        preco: 17500,
        imagem: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=300&h=200&fit=crop'
      },
      { 
        id: 'combo-familia', 
        nome: 'Combo Família Maura', 
        desc: '3 burgers + 2 batatas grandes + refrigerante 1.5L', 
        preco: 24990,
        imagem: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop'
      },
    ],
    acomp: [
      { 
        id: 'batata-pequena', 
        nome: 'Batata Frita Pequena', 
        desc: 'Porção pequena sequinha e temperada.', 
        preco: 1900,
        imagem: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=300&h=200&fit=crop'
      },
      { 
        id: 'batata-grande', 
        nome: 'Batata Frita Grande', 
        desc: 'Porção generosa para compartilhar.', 
        preco: 3200,
        imagem: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=300&h=200&fit=crop'
      },
      { 
        id: 'onion-rings', 
        nome: 'Anéis de Cebola', 
        desc: 'Cebola empanada crocante por fora, macia por dentro.', 
        preco: 3000,
        imagem: 'https://images.unsplash.com/photo-1639024471283-03518883512d?w=300&h=200&fit=crop'
      },
      { 
        id: 'chicken-wings', 
        nome: 'Asas de Frango (6un)', 
        desc: 'Asas temperadas e grelhadas na brasa.', 
        preco: 4200,
        imagem: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=300&h=200&fit=crop'
      },
    ],
    drinks: [
      { 
        id: 'refri-350', 
        nome: 'Refrigerante 350ml', 
        desc: 'Coca-Cola, Sprite ou Fanta Laranja.', 
        preco: 900,
        imagem: 'https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=300&h=200&fit=crop'
      },
      { 
        id: 'agua-mineral', 
        nome: 'Água Mineral 500ml', 
        desc: 'Água natural gelada.', 
        preco: 600,
        imagem: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=200&fit=crop'
      },
      { 
        id: 'sumo-natural', 
        nome: 'Sumo Natural 400ml', 
        desc: 'Laranja, maracujá ou manga fresquinhos.', 
        preco: 1800,
        imagem: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=300&h=200&fit=crop'
      },
      { 
        id: 'milkshake', 
        nome: 'Milkshake 500ml', 
        desc: 'Chocolate, baunilha ou morango cremoso.', 
        preco: 2800,
        imagem: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=300&h=200&fit=crop'
      },
    ],
    doces: [
      { 
        id: 'brownie-maura', 
        nome: 'Brownie da Maura', 
        desc: 'Brownie de chocolate com sorvete de baunilha.', 
        preco: 2500,
        imagem: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=300&h=200&fit=crop'
      },
      { 
        id: 'cheesecake', 
        nome: 'Cheesecake Morango', 
        desc: 'Fatia generosa com calda de morango.', 
        preco: 2900,
        imagem: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=300&h=200&fit=crop'
      },
      { 
        id: 'sorvete', 
        nome: 'Sorvete 2 Bolas', 
        desc: 'Chocolate, baunilha ou morango.', 
        preco: 1800,
        imagem: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=300&h=200&fit=crop'
      },
    ],
    promo: { 
      id: 'promo-familia', 
      nome: 'Combo Família Maura', 
      desc: 'Oferta especial da semana', 
      preco: 11990,
      imagem: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop'
    }
  };

  const state = {
    categoria: 'burgers',
    carrinho: {}, // { id: {produto, qtd} }
  };

  const lista = document.getElementById('lista-produtos');
  const itensCarrinho = document.getElementById('itens-carrinho');
  const subtotalSpan = document.getElementById('subtotal');
  const nomeInput = document.getElementById('nome');

  // Render de tabs
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => {
        b.setAttribute('aria-selected', 'false');
        b.className = 'tab-btn px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-all';
      });
      btn.setAttribute('aria-selected', 'true');
      btn.className = 'tab-btn px-5 py-3 rounded-full bg-brand-accent text-black font-semibold hover:bg-yellow-400 transition-all';
      state.categoria = btn.dataset.cat;
      renderProdutos();
    });
  });

  // Render de produtos
  function formatKz(v) { return 'Kz ' + v.toLocaleString('pt-PT'); }

  function productCard(p) {
    return `
      <div class="group relative overflow-hidden rounded-[var(--radius)] bg-white/5 border border-white/10 hover:border-brand-accent/50 transition-all duration-300 glass">
        <div class="p-5 flex gap-4">
          <div class="w-24 h-24 rounded-xl overflow-hidden shrink-0 border border-white/20">
            <img src="${p.imagem}" alt="${p.nome}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" loading="lazy">
          </div>
          <div class="flex-1 min-w-0">
            <h3 class="font-bold text-lg leading-tight mb-1">${p.nome}</h3>
            <p class="text-sm text-white/70 mb-3 line-clamp-2">${p.desc}</p>
            <div class="flex items-center justify-between">
              <span class="font-display font-bold text-lg text-brand-accent">${formatKz(p.preco)}</span>
              <button data-add="${p.id}" class="add-btn group/btn relative overflow-hidden px-4 py-2 rounded-xl bg-gradient-to-r from-brand-accent to-yellow-500 hover:from-yellow-500 hover:to-brand-accent text-black font-bold transition-all duration-300 active:scale-95 shadow-lg hover:shadow-glow">
                <i class="fas fa-plus mr-1 group-hover/btn:rotate-90 transition-transform"></i>
                Adicionar
              </button>
            </div>
          </div>
        </div>
      </div>`;
  }

  function renderProdutos() {
    const cat = state.categoria;
    const arr = PRODUTOS[cat];
    lista.innerHTML = arr.map(productCard).join('');
    lista.querySelectorAll('.add-btn').forEach(btn => {
      btn.addEventListener('click', () => addToCart(btn.dataset.add));
    });
  }

  // Carrinho
  function addToCart(id, qtd = 1) {
    // procura em todas categorias
    let p = null;
    for (const k of Object.keys(PRODUTOS)) {
      if (k === 'promo') continue;
      p = (PRODUTOS[k] || []).find(x => x.id === id) || p;
    }
    if (!p && id === 'promo-familia') p = PRODUTOS.promo;
    if (!p) return;

    if (!state.carrinho[id]) state.carrinho[id] = { produto: p, qtd: 0 };
    state.carrinho[id].qtd += qtd;
    feedbackToast(`${p.nome} adicionado ao carrinho`);
    renderCarrinho();
  }

  function removeFromCart(id) {
    if (!state.carrinho[id]) return;
    state.carrinho[id].qtd -= 1;
    if (state.carrinho[id].qtd <= 0) delete state.carrinho[id];
    renderCarrinho();
  }

  function carrinhoVazio() { return Object.keys(state.carrinho).length === 0; }

  function renderCarrinho() {
    const entries = Object.values(state.carrinho);
    let subtotal = 0;
    itensCarrinho.innerHTML = entries.length ? entries.map(({ produto, qtd }) => {
      const total = produto.preco * qtd; subtotal += total;
      return `
      <div class="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
        <div class="w-16 h-16 rounded-lg overflow-hidden shrink-0">
          <img src="${produto.imagem}" alt="${produto.nome}" class="w-full h-full object-cover" loading="lazy">
        </div>
        <div class="flex-1 min-w-0">
          <p class="font-semibold truncate">${produto.nome}</p>
          <p class="text-xs text-white/60">${qtd} × ${formatKz(produto.preco)}</p>
        </div>
        <div class="flex items-center gap-2 shrink-0">
          <button class="dec w-8 h-8 rounded-lg bg-white/10 border border-white/20 hover:bg-white/20 flex items-center justify-center transition-all" aria-label="Diminuir quantidade" data-id="${produto.id}">
            <i class="fas fa-minus text-xs"></i>
          </button>
          <span class="w-8 text-center font-semibold">${qtd}</span>
          <button class="inc w-8 h-8 rounded-lg bg-brand-accent/20 border border-brand-accent/30 hover:bg-brand-accent/30 flex items-center justify-center transition-all" aria-label="Aumentar quantidade" data-id="${produto.id}">
            <i class="fas fa-plus text-xs text-brand-accent"></i>
          </button>
          <span class="font-bold ml-3 text-brand-accent">${formatKz(total)}</span>
        </div>
      </div>`;
    }).join('') : `
      <div class="text-center py-8">
        <i class="fas fa-shopping-cart text-4xl text-white/20 mb-4"></i>
        <p class="text-white/70">Seu carrinho está vazio.</p>
        <p class="text-sm text-white/50">Adicione itens deliciosos do nosso cardápio!</p>
      </div>`;

    subtotalSpan.textContent = formatKz(subtotal);
    document.getElementById('fab-total').textContent = formatKz(subtotal);
    const count = entries.reduce((n, e) => n + e.qtd, 0);
    document.getElementById('fab-count').textContent = count;
    document.getElementById('cart-fab').classList.toggle('hidden', carrinhoVazio());

    // bind + / -
    itensCarrinho.querySelectorAll('.inc').forEach(b => b.onclick = () => addToCart(b.dataset.id));
    itensCarrinho.querySelectorAll('.dec').forEach(b => b.onclick = () => removeFromCart(b.dataset.id));

    // atualizar sheet
    sheetRender();
  }

  // Promo add
  document.getElementById('add-promo').addEventListener('click', () => addToCart('promo-familia'));

  // Finalizar
  function gerarMensagemWhatsApp() {
    const nome = nomeInput.value?.trim() || 'Cliente';
    const linhas = [`🍔 *Pedido - Burger da Maura*`, '', `👤 Cliente: *${nome}*`, ''];
    let total = 0; let i = 1;
    for (const { produto, qtd } of Object.values(state.carrinho)) {
      const t = produto.preco * qtd; total += t;
      linhas.push(`${i++}. *${produto.nome}*`);
      linhas.push(`   Qtd: ${qtd} × ${formatKz(produto.preco)} = *${formatKz(t)}*`);
      linhas.push('');
    }
    linhas.push(`💰 *Total: ${formatKz(total)}*`);
    linhas.push('', '📍 *Endereço de entrega:*', '(Informar endereço completo)');
    linhas.push('', '🚚 *Forma de entrega:*', '( ) Retirada no local', '( ) Entrega');
    linhas.push('', '💳 *Forma de pagamento:*', '( ) Dinheiro', '( ) Cartão', '( ) Transferência');
    linhas.push('', 'Obrigado por escolher a Burger da Maura! 🔥');
    return linhas.join('\n');
  }

  function finalizarWhatsApp() {
    if (carrinhoVazio()) { 
      feedbackToast('Adicione itens ao carrinho primeiro!'); 
      return; 
    }
    const msg = encodeURIComponent(gerarMensagemWhatsApp());
    const url = `https://wa.me/244946043956?text=${msg}`;
    window.open(url, '_blank');
  }

  document.getElementById('finalizar').addEventListener('click', finalizarWhatsApp);

  // FAB -> abrir sheet
  document.getElementById('cart-open').addEventListener('click', () => sheetToggle(true));
  document.getElementById('sheet-backdrop').addEventListener('click', () => sheetToggle(false));
  document.getElementById('sheet-close').addEventListener('click', () => sheetToggle(false));
  document.getElementById('sheet-finalizar').addEventListener('click', finalizarWhatsApp);

  function sheetToggle(show) { 
    document.getElementById('sheet').classList.toggle('hidden', !show); 
    if (show) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
  }

  function sheetRender() {
    const wrap = document.getElementById('sheet-itens');
    const entries = Object.values(state.carrinho);
    let total = 0;
    wrap.innerHTML = entries.length ? entries.map(({ produto, qtd }) => {
      const t = produto.preco * qtd; total += t;
      return `
        <div class="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
          <div class="w-14 h-14 rounded-lg overflow-hidden shrink-0">
            <img src="${produto.imagem}" alt="${produto.nome}" class="w-full h-full object-cover" loading="lazy">
          </div>
          <div class="flex-1">
            <p class="font-semibold text-sm">${produto.nome}</p>
            <p class="text-xs text-white/60">${qtd} × ${formatKz(produto.preco)}</p>
          </div>
          <div class="flex items-center gap-2">
            <button class="dec w-7 h-7 rounded-lg bg-white/10 border border-white/20 hover:bg-white/20 flex items-center justify-center transition-all" data-id="${produto.id}">
              <i class="fas fa-minus text-xs"></i>
            </button>
            <span class="w-6 text-center text-sm font-semibold">${qtd}</span>
            <button class="inc w-7 h-7 rounded-lg bg-brand-accent/20 border border-brand-accent/30 hover:bg-brand-accent/30 flex items-center justify-center transition-all" data-id="${produto.id}">
              <i class="fas fa-plus text-xs text-brand-accent"></i>
            </button>
            <span class="font-bold ml-2 text-sm text-brand-accent">${formatKz(t)}</span>
          </div>
        </div>`;
    }).join('') : `
      <div class="text-center py-6">
        <i class="fas fa-shopping-cart text-3xl text-white/20 mb-3"></i>
        <p class="text-white/70 text-sm">Carrinho vazio</p>
      </div>`;
    
    document.getElementById('sheet-total').textContent = formatKz(total);
    wrap.querySelectorAll('.inc').forEach(b => b.onclick = () => { addToCart(b.dataset.id); });
    wrap.querySelectorAll('.dec').forEach(b => b.onclick = () => { removeFromCart(b.dataset.id); });
  }

  // Toast de feedback
  let toastTimer;
  function feedbackToast(text) {
    clearTimeout(toastTimer);
    let el = document.getElementById('toast');
    if (!el) {
      el = document.createElement('div');
      el.id = 'toast';
      el.className = 'fixed top-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-accent to-yellow-500 text-black px-6 py-3 rounded-xl font-semibold shadow-glow z-50 transform transition-all duration-300';
      document.body.appendChild(el);
    }
    el.innerHTML = `<i class="fas fa-check-circle mr-2"></i>${text}`;
    el.style.transform = 'translateX(-50%) translateY(0)';
    el.style.opacity = '1';
    
    toastTimer = setTimeout(() => {
      el.style.transform = 'translateX(-50%) translateY(-100px)';
      el.style.opacity = '0';
    }, 2000);
  }

  // Smooth scroll para seções
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

  // Inicialização
  renderProdutos();
  renderCarrinho();

  // Atualiza o ano automaticamente
  document.getElementById('current-year').textContent = new Date().getFullYear();

  // Adicionar CSS para scrollbar customizada
  const style = document.createElement('style');
  style.textContent = `
    .custom-scrollbar::-webkit-scrollbar {
      width: 6px;
    }
    .custom-scrollbar::-webkit-scrollbar-track {
      background: rgba(255,255,255,0.1);
      border-radius: 10px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: rgba(252, 211, 77, 0.5);
      border-radius: 10px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background: rgba(252, 211, 77, 0.7);
    }
    .line-clamp-2 {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  `;
  document.head.appendChild(style);