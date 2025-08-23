// ===== Dados do catálogo =====
    const PRODUTOS = {
      bolos: [
        { id: 'bolo-chocolate', nome: 'Bolo de Chocolate', desc: 'Camadas de bolo de chocolate com recheio de ganache.', preco: 8500, img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80' },
        { id: 'bolo-morango', nome: 'Bolo de Morango', desc: 'Bolo branco com recheio de morango fresco e chantilly.', preco: 9000, img: 'https://images.unsplash.com/photo-1586788680434-30d8b2a0635d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80' },
        { id: 'bolo-cenoura', nome: 'Bolo de Cenoura', desc: 'Bolo de cenoura com cobertura de chocolate.', preco: 7500, img: 'https://images.unsplash.com/photo-1596223575327-99a5cd681dbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80' },
        { id: 'bolo-red-velvet', nome: 'Red Velvet', desc: 'Bolo aveludado vermelho com cream cheese frosting.', preco: 12000, img: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80' },
      ],
      doces: [
        { id: 'brigadeiro', nome: 'Brigadeiro', desc: 'Brigadeiro tradicional em porção individual.', preco: 300, img: 'https://images.unsplash.com/photo-1636407553325-39c2d4dee4e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80' },
        { id: 'beijinho', nome: 'Beijinho', desc: 'Beijinho de coco com cravo em porção individual.', preco: 300, img: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80' },
        { id: 'cupcake', nome: 'Cupcake', desc: 'Cupcake decorado com buttercream e confeitos.', preco: 800, img: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80' },
        { id: 'brownie', nome: 'Brownie', desc: 'Brownie de chocolate com nozes.', preco: 700, img: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80' },
      ],
      salgados: [
        { id: 'coxinha', nome: 'Coxinha', desc: 'Coxinha de frango com catupiry.', preco: 500, img: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80' },
        { id: 'empada', nome: 'Empada', desc: 'Empada de frango ou palmito.', preco: 600, img: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80' },
        { id: 'quiche', nome: 'Quiche', desc: 'Quiche Lorraine ou de espinafre.', preco: 900, img: 'https://images.unsplash.com/photo-1586810722682-3cf5f4777640?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80' },
      ],
      bebidas: [
        { id: 'suco-natural', nome: 'Suco Natural', desc: 'Suco de laranja, maracujá ou limão 500ml.', preco: 1200, img: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80' },
        { id: 'refrigerante', nome: 'Refrigerante', desc: 'Lata 350ml - Coca, Fanta ou Sprite.', preco: 600, img: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80' },
        { id: 'cafe', nome: 'Café Expresso', desc: 'Café expresso ou cappuccino.', preco: 500, img: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80' },
      ],
      promo: { id: 'promo-caixa', nome: 'Caixa Surpresa de Doces', desc: 'Oferta da semana', preco: 6990, img: 'https://images.unsplash.com/photo-1555507036-ab794f24d8c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80' }
    };

    const state = {
      categoria: 'bolos',
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
          b.classList.remove('bg-doce-primary', 'text-white');
          b.classList.add('bg-white', 'border', 'border-doce-primary/30', 'text-doce-primary');
        });
        btn.setAttribute('aria-selected', 'true');
        btn.classList.remove('bg-white', 'border', 'border-doce-primary/30', 'text-doce-primary');
        btn.classList.add('bg-doce-primary', 'text-white');
        state.categoria = btn.dataset.cat;
        renderProdutos();
      });
    });

    // Render de produtos
    function formatKz(v) { return 'Kz ' + v.toLocaleString('pt-PT'); }

    function productCard(p) {
      return `
        <div class="group card-hover relative overflow-hidden rounded-[var(--radius)] border border-doce-primary/20 bg-white">
          <div class="p-4 flex gap-4">
            <div class="w-20 h-20 rounded-xl bg-gray-200 shrink-0 overflow-hidden">
              <img src="${p.img}" alt="${p.nome}" class="w-full h-full object-cover">
            </div>
            <div class="flex-1">
              <h3 class="font-semibold leading-tight text-doce-primary">${p.nome}</h3>
              <p class="text-sm text-doce-primary/70">${p.desc}</p>
              <div class="mt-2 flex items-center justify-between">
                <span class="font-display font-semibold text-doce-primary">${formatKz(p.preco)}</span>
                <button data-add="${p.id}" class="add-btn px-3 py-1.5 rounded-xl bg-doce-primary text-white text-sm font-semibold hover:bg-doce-light">Adicionar</button>
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
      if (!p && id === 'promo-caixa') p = PRODUTOS.promo;
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
        <div class="flex items-center justify-between gap-3 p-3 rounded-xl bg-doce-bg border border-doce-primary/10">
          <div class="min-w-0">
            <p class="font-medium text-doce-primary truncate">${produto.nome}</p>
            <p class="text-xs text-doce-primary/60">${qtd} × ${formatKz(produto.preco)}</p>
          </div>
          <div class="flex items-center gap-2 shrink-0">
            <button class="dec px-2 py-1 rounded-lg bg-doce-primary/10 text-doce-primary" aria-label="Diminuir quantidade" data-id="${produto.id}">-</button>
            <span class="w-8 text-center text-doce-primary">${qtd}</span>
            <button class="inc px-2 py-1 rounded-lg bg-doce-primary/10 text-doce-primary" aria-label="Aumentar quantidade" data-id="${produto.id}">+</button>
            <span class="font-semibold ml-2 text-doce-primary">${formatKz(total)}</span>
          </div>
        </div>`;
      }).join('') : '<p class="text-doce-primary/70 text-center">Seu carrinho está vazio. Adicione itens do cardápio.</p>';

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
    document.getElementById('add-promo').addEventListener('click', () => addToCart('promo-caixa'));

    // Finalizar
    function gerarMensagemWhatsApp() {
      const nome = nomeInput.value?.trim() || 'Cliente';
      const linhas = [`Olá, sou *${nome}* e gostaria de fazer uma encomenda:`, ''];
      let total = 0; let i = 1;
      for (const { produto, qtd } of Object.values(state.carrinho)) {
        const t = produto.preco * qtd; total += t;
        linhas.push(`${i++}. ${produto.nome} — ${qtd} × ${formatKz(produto.preco)} = *${formatKz(t)}*`);
      }
      linhas.push('', `*Total:* ${formatKz(total)}`, '', 'Data para retirada/entrega:', 'Observações:');
      return linhas.join('\n');
    }

    function finalizarWhatsApp() {
      if (carrinhoVazio()) { feedbackToast('Adicione itens ao carrinho'); return; }
      const msg = encodeURIComponent(gerarMensagemWhatsApp());
      const url = `https://wa.me/244999999999?text=${msg}`;
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
          <div class="flex items-center justify-between gap-3 p-3 rounded-xl bg-doce-bg border border-doce-primary/10">
            <div>
              <p class="font-medium text-doce-primary">${produto.nome}</p>
              <p class="text-xs text-doce-primary/60">${qtd} × ${formatKz(produto.preco)}</p>
            </div>
            <div class="flex items-center gap-2">
              <button class="dec px-2 py-1 rounded-lg bg-doce-primary/10 text-doce-primary" data-id="${produto.id}">-</button>
              <span class="w-8 text-center text-doce-primary">${qtd}</span>
              <button class="inc px-2 py-1 rounded-lg bg-doce-primary/10 text-doce-primary" data-id="${produto.id}">+</button>
              <span class="font-semibold ml-2 text-doce-primary">${formatKz(t)}</span>
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
        el.className = 'fixed bottom-6 right-6 max-sm:left-1/2 max-sm:-translate-x-1/2 bg-doce-primary text-white px-4 py-2 rounded-xl shadow-soft z-50';
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