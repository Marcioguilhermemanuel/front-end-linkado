// ===== Dados do catálogo =====
    const PRODUTOS = {
      burgers: [
        { id: 'bm-classic', nome: 'Burger Master Classic', desc: '160g de blend, queijo, alface, tomate, molho da casa.', preco: 4500 },
        { id: 'bm-bacon', nome: 'Smash Bacon', desc: '2x100g smash, cheddar duplo, bacon crocante.', preco: 6500 },
        { id: 'bm-veg', nome: 'Green Garden', desc: 'Hambúrguer veggie de grão-de-bico, coalhada seca, pesto.', preco: 5200 },
        { id: 'bm-fire', nome: 'Fire Jalapeño', desc: 'Blend 180g, pepper jack, jalapeño, crispy onion.', preco: 7000 },
      ],
      combos: [
        { id: 'combo-solo', nome: 'Combo Solo', desc: 'Qualquer burger + batata P + refri 300ml', preco: 9500 },
        { id: 'combo-duo', nome: 'Combo Duo', desc: '2 burgers + batata G + 2 refri 300ml', preco: 16990 },
        { id: 'combo-familia', nome: 'Combo Família', desc: '3 burgers + 2 batatas G + 1L refrigerante', preco: 23990 },
      ],
      acomp: [
        { id: 'batata-p', nome: 'Batata Frita P', desc: 'Porção pequena crocante.', preco: 1800 },
        { id: 'batata-g', nome: 'Batata Frita G', desc: 'Porção grande crocante.', preco: 3000 },
        { id: 'onion', nome: 'Onion Rings', desc: 'Anéis de cebola empanados.', preco: 2800 },
        { id: 'nuggets', nome: 'Chicken Nuggets (8u)', desc: 'Peito de frango empanado.', preco: 3500 },
      ],
      drinks: [
        { id: 'refri-300', nome: 'Refrigerante 300ml', desc: 'Coca, Sprite ou Fanta.', preco: 800 },
        { id: 'agua', nome: 'Água 500ml', desc: 'Sem gás.', preco: 500 },
        { id: 'sumo', nome: 'Sumo Natural 300ml', desc: 'Laranja ou Maracujá.', preco: 1500 },
      ],
      doces: [
        { id: 'brownie', nome: 'Brownie Master', desc: 'Cacau intenso com nozes.', preco: 2200 },
        { id: 'milkshake', nome: 'Milkshake 400ml', desc: 'Baunilha, Chocolate ou Morango.', preco: 2500 },
      ],
      promo: { id: 'promo-duo', nome: 'Master Duo + 2 Refri', desc: 'Oferta da semana', preco: 9990 }
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
        document.querySelectorAll('.tab-btn').forEach(b => b.setAttribute('aria-selected', 'false'));
        btn.setAttribute('aria-selected', 'true');
        state.categoria = btn.dataset.cat;
        renderProdutos();
      });
    });

    // Render de produtos
    function formatKz(v) { return 'Kz ' + v.toLocaleString('pt-PT'); }

    function productCard(p) {
      return `
        <div class="group relative overflow-hidden rounded-[var(--radius)] ring-1 ring-white/10 bg-white/5">
          <div class="p-4 flex gap-3">
            <div class="w-20 h-20 rounded-xl bg-white/10 ring-1 ring-white/10 shrink-0 grid place-content-center">
              <span class="text-2xl">🍔</span>
            </div>
            <div class="flex-1">
              <h3 class="font-semibold leading-tight">${p.nome}</h3>
              <p class="text-sm text-white/70">${p.desc}</p>
              <div class="mt-2 flex items-center justify-between">
                <span class="font-display font-semibold">${formatKz(p.preco)}</span>
                <button data-add="${p.id}" class="add-btn px-3 py-1.5 rounded-xl bg-brand-accent text-black text-sm font-semibold hover:brightness-110">Adicionar</button>
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
      feedbackToast(`${p.nome} adicionado`);
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
        <div class="flex items-center justify-between gap-3 p-3 rounded-xl bg-white/5 ring-1 ring-white/10">
          <div class="min-w-0">
            <p class="font-medium truncate">${produto.nome}</p>
            <p class="text-xs text-white/60">${qtd} × ${formatKz(produto.preco)}</p>
          </div>
          <div class="flex items-center gap-2 shrink-0">
            <button class="dec px-2 py-1 rounded-lg bg-white/10" aria-label="Diminuir quantidade" data-id="${produto.id}">-</button>
            <span class="w-8 text-center">${qtd}</span>
            <button class="inc px-2 py-1 rounded-lg bg-white/10" aria-label="Aumentar quantidade" data-id="${produto.id}">+</button>
            <span class="font-semibold ml-2">${formatKz(total)}</span>
          </div>
        </div>`;
      }).join('') : '<p class="text-white/70">Seu carrinho está vazio. Adicione itens do cardápio.</p>';

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
          <div class="flex items-center justify-between gap-3 p-3 rounded-xl bg-white/5 ring-1 ring-white/10">
            <div>
              <p class="font-medium">${produto.nome}</p>
              <p class="text-xs text-white/60">${qtd} × ${formatKz(produto.preco)}</p>
            </div>
            <div class="flex items-center gap-2">
              <button class="dec px-2 py-1 rounded-lg bg-white/10" data-id="${produto.id}">-</button>
              <span class="w-8 text-center">${qtd}</span>
              <button class="inc px-2 py-1 rounded-lg bg-white/10" data-id="${produto.id}">+</button>
              <span class="font-semibold ml-2">${formatKz(t)}</span>
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
        el.className = 'fixed bottom-6 right-6 max-sm:left-1/2 max-sm:-translate-x-1/2 bg-white text-black px-4 py-2 rounded-xl shadow-soft z-50';
        document.body.appendChild(el);
      }
      el.textContent = text;
      el.style.opacity = 1;
      toastTimer = setTimeout(() => el.style.opacity = 0, 1400);
    }

    // Inicialização
    renderProdutos();
    renderCarrinho();

    // Atualiza o ano automaticamente
    document.getElementById('current-year').textContent = new Date().getFullYear();