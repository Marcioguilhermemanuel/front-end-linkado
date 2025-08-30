 // ===== Dados do catálogo =====
 const PRODUTOS = {
    sushi: [
      { id: 'sake-sushi', nome: 'Sushi de Salmão', desc: 'Fatia fresca de salmão sobre arroz temperado', preco: 2800, imagem: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&w=600&auto=format&fit=crop' },
      { id: 'maguro-sushi', nome: 'Sushi de Atum', desc: 'Atum fresco sobre arroz temperado japonês', preco: 3200, imagem: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80&w=600&auto=format&fit=crop' },
      { id: 'ebi-sushi', nome: 'Sushi de Camarão', desc: 'Camarão cozido sobre arroz temperado', preco: 2500, imagem: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?q=80&w=600&auto=format&fit=crop' },
      { id: 'unagi-sushi', nome: 'Sushi de Enguia', desc: 'Enguia grelhada com molho teriyaki', preco: 4500, imagem: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80&w=600&auto=format&fit=crop' },
    ],
    sashimi: [
      { id: 'sake-sashimi', nome: 'Sashimi de Salmão', desc: '5 fatias de salmão fresco sem arroz', preco: 6800, imagem: 'https://images.unsplash.com/photo-1617093727343-374698b1b08d?q=80&w=600&auto=format&fit=crop' },
      { id: 'maguro-sashimi', nome: 'Sashimi de Atum', desc: '5 fatias de atum fresco cortado na hora', preco: 7500, imagem: 'https://images.unsplash.com/photo-1615361200098-bb237eb5b1a8?q=80&w=600&auto=format&fit=crop' },
      { id: 'mix-sashimi', nome: 'Mix Sashimi', desc: 'Variedade de peixes frescos (12 fatias)', preco: 12800, imagem: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80&w=600&auto=format&fit=crop' },
      { id: 'hamachi-sashimi', nome: 'Sashimi de Hamachi', desc: '5 fatias de peixe olho-de-boi fresco', preco: 8500, imagem: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&w=600&auto=format&fit=crop' },
    ],
    especiais: [
      { id: 'california-roll', nome: 'California Roll', desc: 'Kani, abacate, pepino e gergelim', preco: 8500, imagem: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?q=80&w=600&auto=format&fit=crop' },
      { id: 'philadelphia-roll', nome: 'Philadelphia Roll', desc: 'Salmão, cream cheese e cebolinha', preco: 9800, imagem: 'https://images.unsplash.com/photo-1606905254207-c80b61b2bb4b?q=80&w=600&auto=format&fit=crop' },
      { id: 'hot-roll', nome: 'Hot Roll', desc: 'Salmão empanado com molho especial', preco: 11500, imagem: 'https://images.unsplash.com/photo-1617093727343-374698b1b08d?q=80&w=600&auto=format&fit=crop' },
      { id: 'temaki-sake', nome: 'Temaki de Salmão', desc: 'Cone de alga com salmão e acompanhamentos', preco: 7200, imagem: 'https://images.unsplash.com/photo-1615361200098-bb237eb5b1a8?q=80&w=600&auto=format&fit=crop' },
    ],
    bebidas: [
      { id: 'sake-quente', nome: 'Saquê Quente', desc: 'Tradicional bebida japonesa aquecida', preco: 4500, imagem: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=600&auto=format&fit=crop' },
      { id: 'sake-gelado', nome: 'Saquê Gelado', desc: 'Saquê premium servido gelado', preco: 5200, imagem: 'https://images.unsplash.com/photo-1567696911980-2eed69a46042?q=80&w=600&auto=format&fit=crop' },
      { id: 'cha-verde', nome: 'Chá Verde', desc: 'Chá verde japonês tradicional', preco: 1800, imagem: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=600&auto=format&fit=crop' },
      { id: 'refrigerante', nome: 'Refrigerante 350ml', desc: 'Coca-Cola, Sprite ou Guaraná', preco: 1200, imagem: 'https://images.unsplash.com/photo-1624517452488-04869289c4ca?q=80&w=600&auto=format&fit=crop' },
    ],
    promo: { 
      id: 'promo-sashimi', 
      nome: 'Combo Sashimi Premium', 
      desc: 'Mix de sashimis variados + temaki + chá verde', 
      preco: 14990, 
      imagem: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80&w=600&auto=format&fit=crop' 
    }
  };

  const state = {
    categoria: 'sushi',
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
        b.classList.remove('bg-brand-accent', 'text-white', 'shadow-glow');
        b.classList.add('bg-white', 'text-gray-800');
      });
      btn.setAttribute('aria-selected', 'true');
      btn.classList.remove('bg-white', 'text-gray-800');
      btn.classList.add('bg-brand-accent', 'text-white', 'shadow-glow');
      state.categoria = btn.dataset.cat;
      renderProdutos();
    });
  });

  // Render de produtos
  function formatKz(v) { return 'Kz ' + v.toLocaleString('pt-PT'); }

  function productCard(p) {
    return `
      <div class="card rounded-3xl overflow-hidden transition-all hover-lift">
        <div class="flex">
          <div class="w-28 h-28 overflow-hidden flex-shrink-0 shimmer">
            <img src="${p.imagem}" alt="${p.nome}" class="w-full h-full object-cover" loading="lazy" onload="this.parentElement.classList.remove('shimmer')">
          </div>
          <div class="p-5 flex-1">
            <h3 class="font-display text-lg font-semibold leading-tight text-gray-900">${p.nome}</h3>
            <p class="text-sm text-gray-600 mt-2">${p.desc}</p>
            <div class="mt-4 flex items-center justify-between">
              <span class="font-display text-xl font-bold text-brand-accent">${formatKz(p.preco)}</span>
              <button data-add="${p.id}" class="add-btn px-4 py-2 rounded-xl bg-brand-accent text-white text-sm font-semibold hover:bg-red-600 active:scale-95 transition-all focus-ring" aria-label="Adicionar ${p.nome} ao carrinho">
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
    if (!p && id === 'promo-sashimi') p = PRODUTOS.promo;
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
      <div class="flex items-center justify-between gap-4 p-4 rounded-2xl bg-gray-50">
        <div class="min-w-0 flex-1">
          <p class="font-display font-semibold truncate">${produto.nome}</p>
          <p class="text-xs text-gray-500 mt-1">${qtd} × ${formatKz(produto.preco)}</p>
        </div>
        <div class="flex items-center gap-3 shrink-0">
          <button class="dec p-2 rounded-xl bg-gray-200 hover:bg-gray-300 transition-all" aria-label="Diminuir quantidade" data-id="${produto.id}">
            <i class="fa-solid fa-minus text-sm"></i>
          </button>
          <span class="w-8 text-center font-medium">${qtd}</span>
          <button class="inc p-2 rounded-xl bg-gray-200 hover:bg-gray-300 transition-all" aria-label="Aumentar quantidade" data-id="${produto.id}">
            <i class="fa-solid fa-plus text-sm"></i>
          </button>
          <span class="font-display font-bold text-brand-accent ml-3">${formatKz(total)}</span>
        </div>
      </div>`;
    }).join('') : '<p class="text-gray-500 text-center py-8">Seu carrinho está vazio. Adicione itens do cardápio.</p>';

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
  document.getElementById('add-promo').addEventListener('click', () => addToCart('promo-sashimi'));

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
        <div class="flex items-center justify-between gap-4 p-4 rounded-2xl bg-gray-50">
          <div class="min-w-0 flex-1">
            <p class="font-display font-semibold">${produto.nome}</p>
            <p class="text-xs text-gray-500 mt-1">${qtd} × ${formatKz(produto.preco)}</p>
          </div>
          <div class="flex items-center gap-3">
            <button class="dec p-2 rounded-xl bg-gray-200 hover:bg-gray-300" data-id="${produto.id}">
              <i class="fa-solid fa-minus text-sm"></i>
            </button>
            <span class="w-8 text-center">${qtd}</span>
            <button class="inc p-2 rounded-xl bg-gray-200 hover:bg-gray-300" data-id="${produto.id}">
              <i class="fa-solid fa-plus text-sm"></i>
            </button>
            <span class="font-display font-bold text-brand-accent ml-3">${formatKz(t)}</span>
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
      el.className = 'fixed bottom-6 right-6 max-sm:left-1/2 max-sm:-translate-x-1/2 bg-brand-accent text-white px-6 py-3 rounded-2xl shadow-glow z-50 transition-opacity font-medium';
      document.body.appendChild(el);
    }
    el.textContent = text;
    el.style.opacity = 1;
    toastTimer = setTimeout(() => el.style.opacity = 0, 2500);
  }

  // Inicialização
  document.addEventListener('DOMContentLoaded', function() {
    // Ativar primeira tab
    document.querySelector('.tab-btn').click();
    renderCarrinho();
    
    // Atualiza o ano automaticamente
    document.getElementById('current-year').textContent = new Date().getFullYear();
  });