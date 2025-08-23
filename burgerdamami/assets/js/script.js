// ===== Dados do catálogo =====
    const PRODUTOS = {
      burgers: [
        { id: 'bm-classic', nome: 'Mami Classic', desc: '160g de blend, queijo, alface, tomate, molho especial.', preco: 4500, imagem: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=600&auto=format&fit=crop' },
        { id: 'bm-bacon', nome: 'Bacon Crazy', desc: '2x100g smash, cheddar, bacon crocante, molho barbecue.', preco: 6500, imagem: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=80&w=600&auto=format&fit=crop' },
        { id: 'bm-veg', nome: 'Veggie Mami', desc: 'Hambúrguer de grão-de-bico, queijo coalho, pesto de manjericão.', preco: 5200, imagem: 'https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6?q=80&w=600&auto=format&fit=crop' },
        { id: 'bm-fire', nome: 'Fire Mami', desc: 'Blend 180g, queijo pepper jack, jalapeño, onion rings.', preco: 7000, imagem: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop' },
      ],
      combos: [
        { id: 'combo-solo', nome: 'Combo Solo', desc: 'Qualquer burger + batata P + refri 300ml', preco: 9500, imagem: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=600&auto=format&fit=crop' },
        { id: 'combo-duo', nome: 'Combo Duo', desc: '2 burgers + batata G + 2 refri 300ml', preco: 16990, imagem: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=600&auto=format&fit=crop' },
        { id: 'combo-familia', nome: 'Combo Família', desc: '3 burgers + 2 batatas G + 1L refrigerante', preco: 23990, imagem: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?q=80&w=600&auto=format&fit=crop' },
      ],
      acomp: [
        { id: 'batata-p', nome: 'Batata Frita P', desc: 'Porção pequena crocante.', preco: 1800, imagem: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=600&auto=format&fit=crop' },
        { id: 'batata-g', nome: 'Batata Frita G', desc: 'Porção grande crocante.', preco: 3000, imagem: 'https://images.unsplash.com/photo-1634034379073-f689b460a3fc?q=80&w=600&auto=format&fit=crop' },
        { id: 'onion', nome: 'Onion Rings', desc: 'Anéis de cebola empanados.', preco: 2800, imagem: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e6?q=80&w=600&auto=format&fit=crop' },
        { id: 'nuggets', nome: 'Chicken Nuggets (8u)', desc: 'Peito de frango empanado.', preco: 3500, imagem: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=600&auto=format&fit=crop' },
      ],
      drinks: [
        { id: 'refri-300', nome: 'Refrigerante 300ml', desc: 'Coca, Sprite ou Fanta.', preco: 800, imagem: 'https://images.unsplash.com/photo-1634942536746-46b9ba6d5860?q=80&w=600&auto=format&fit=crop' },
        { id: 'agua', nome: 'Água 500ml', desc: 'Sem gás.', preco: 500, imagem: 'https://images.unsplash.com/photo-1548839149-851a4a7d8296?q=80&w=600&auto=format&fit=crop' },
        { id: 'sumo', nome: 'Sumo Natural 300ml', desc: 'Laranja ou Maracujá.', preco: 1500, imagem: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?q=80&w=600&auto=format&fit=crop' },
      ],
      promo: { 
        id: 'promo-duo', 
        nome: 'Combo Mami + 2 Refri', 
        desc: 'Oferta da semana: hambúrguer artesanal, batata frita e 2 refrigerantes', 
        preco: 9990, 
        imagem: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=600&auto=format&fit=crop' 
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
          b.classList.remove('bg-brand-yellow', 'text-gray-900');
          b.classList.add('bg-white', 'text-gray-800');
        });
        btn.setAttribute('aria-selected', 'true');
        btn.classList.remove('bg-white', 'text-gray-800');
        btn.classList.add('bg-brand-yellow', 'text-gray-900');
        state.categoria = btn.dataset.cat;
        renderProdutos();
      });
    });

    // Render de produtos
    function formatKz(v) { return 'Kz ' + v.toLocaleString('pt-PT'); }

    function productCard(p) {
      return `
        <div class="card rounded-2xl overflow-hidden transition-all hover:shadow-md">
          <div class="flex">
            <div class="w-24 h-24 overflow-hidden flex-shrink-0">
              <img src="${p.imagem}" alt="${p.nome}" class="w-full h-full object-cover">
            </div>
            <div class="p-4 flex-1">
              <h3 class="font-semibold leading-tight">${p.nome}</h3>
              <p class="text-sm text-gray-600 mt-1">${p.desc}</p>
              <div class="mt-3 flex items-center justify-between">
                <span class="font-display font-semibold text-brand-red">${formatKz(p.preco)}</span>
                <button data-add="${p.id}" class="add-btn px-3 py-1.5 rounded-lg bg-brand-red text-white text-sm font-semibold hover:bg-red-600 transition-all focus-ring" aria-label="Adicionar ${p.nome} ao carrinho">
                  <i class="fa-solid fa-plus mr-1"></i> Adicionar
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
      if (!p && id === 'promo-duo') p = PRODUTOS.promo;
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
        <div class="flex items-center justify-between gap-3 p-3 rounded-xl bg-gray-50">
          <div class="min-w-0 flex-1">
            <p class="font-medium truncate">${produto.nome}</p>
            <p class="text-xs text-gray-500">${qtd} × ${formatKz(produto.preco)}</p>
          </div>
          <div class="flex items-center gap-2 shrink-0">
            <button class="dec px-2 py-1 rounded-lg bg-gray-200 hover:bg-gray-300 transition-all" aria-label="Diminuir quantidade" data-id="${produto.id}">
              <i class="fa-solid fa-minus"></i>
            </button>
            <span class="w-8 text-center font-medium">${qtd}</span>
            <button class="inc px-2 py-1 rounded-lg bg-gray-200 hover:bg-gray-300 transition-all" aria-label="Aumentar quantidade" data-id="${produto.id}">
              <i class="fa-solid fa-plus"></i>
            </button>
            <span class="font-semibold text-brand-red ml-2">${formatKz(total)}</span>
          </div>
        </div>`;
      }).join('') : '<p class="text-gray-500 text-center py-4">Seu carrinho está vazio. Adicione itens do cardápio.</p>';

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
    document.getElementById('add-promo').addEventListener('click', () => addToCart('promo-duo'));

    // Finalizar
    function gerarMensagemWhatsApp() {
      const nome = nomeInput.value?.trim() || 'Cliente';
      const linhas = [`Olá, sou *${nome}* e gostaria de fazer um pedido:`, ''];
      let total = 0; let i = 1;
      for (const { produto, qtd } of Object.values(state.carrinho)) {
        const t = produto.preco * qtd; total += t;
        linhas.push(`${i++}. ${produto.nome} — ${qtd} × ${formatKz(produto.preco)} = *${formatKz(t)}*`);
      }
      linhas.push('', `*Total:* ${formatKz(total)}`, '', 'Endereço/Bairro:', 'Forma de entrega: (Retirada/Entrega)');
      return linhas.join('\n');
    }

    function finalizarWhatsApp() {
      if (carrinhoVazio()) { feedbackToast('Adicione itens ao carrinho'); return; }
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

    function sheetToggle(show) { document.getElementById('sheet').classList.toggle('hidden', !show); }

    function sheetRender() {
      const wrap = document.getElementById('sheet-itens');
      const entries = Object.values(state.carrinho);
      let total = 0;
      wrap.innerHTML = entries.map(({ produto, qtd }) => {
        const t = produto.preco * qtd; total += t;
        return `
          <div class="flex items-center justify-between gap-3 p-3 rounded-xl bg-gray-50">
            <div class="min-w-0 flex-1">
              <p class="font-medium">${produto.nome}</p>
              <p class="text-xs text-gray-500">${qtd} × ${formatKz(produto.preco)}</p>
            </div>
            <div class="flex items-center gap-2">
              <button class="dec px-2 py-1 rounded-lg bg-gray-200 hover:bg-gray-300" data-id="${produto.id}">
                <i class="fa-solid fa-minus"></i>
              </button>
              <span class="w-8 text-center">${qtd}</span>
              <button class="inc px-2 py-1 rounded-lg bg-gray-200 hover:bg-gray-300" data-id="${produto.id}">
                <i class="fa-solid fa-plus"></i>
              </button>
              <span class="font-semibold text-brand-red ml-2">${formatKz(t)}</span>
            </div>
          </div>`;
      }).join('');
      document.getElementById('sheet-total').textContent = formatKz(total);
      wrap.querySelectorAll('.inc').forEach(b => b.onclick = () => { addToCart(b.dataset.id); sheetRender(); });
      wrap.querySelectorAll('.dec').forEach(b => b.onclick = () => { removeFromCart(b.dataset.id); sheetRender(); });
    }

    // Toast de feedback simples
    let toastTimer;
    function feedbackToast(text) {
      clearTimeout(toastTimer);
      let el = document.getElementById('toast');
      if (!el) {
        el = document.createElement('div');
        el.id = 'toast';
        el.className = 'fixed bottom-6 right-6 max-sm:left-1/2 max-sm:-translate-x-1/2 bg-brand-red text-white px-4 py-2 rounded-xl shadow-soft z-50 transition-opacity';
        document.body.appendChild(el);
      }
      el.textContent = text;
      el.style.opacity = 1;
      toastTimer = setTimeout(() => el.style.opacity = 0, 2000);
    }

    // Inicialização
    document.addEventListener('DOMContentLoaded', function() {
      // Ativar primeira tab
      document.querySelector('.tab-btn').click();
      renderCarrinho();
      
      // Atualiza o ano automaticamente
      document.getElementById('current-year').textContent = new Date().getFullYear();
    });