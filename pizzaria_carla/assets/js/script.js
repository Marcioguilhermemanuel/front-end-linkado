// ===== Dados do catálogo =====
const PRODUTOS = {
    pizzas: [
      { id: 'margherita', nome: 'Pizza Margherita', desc: 'Molho de tomate, mussarela, manjericão fresco, azeite.', preco: 4500, imagem: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=600&auto=format&fit=crop' },
      { id: 'pepperoni', nome: 'Pizza Pepperoni', desc: 'Molho de tomate, mussarela, pepperoni, orégano.', preco: 6500, imagem: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=600&auto=format&fit=crop' },
      { id: 'portuguesa', nome: 'Pizza Portuguesa', desc: 'Presunto, ovos, cebola, azeitona, mussarela.', preco: 7200, imagem: 'assets/image/pizza-portuguesa.png' },
      { id: 'quatro-queijos', nome: '4 Queijos', desc: 'Mussarela, gorgonzola, parmesão, provolone.', preco: 8000, imagem: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600&auto=format&fit=crop' },
      { id: 'frango-catupiry', nome: 'Frango com Catupiry', desc: 'Frango desfiado, catupiry, milho, azeitona.', preco: 7800, imagem: 'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?q=80&w=600&auto=format&fit=crop' },
      { id: 'vegetariana', nome: 'Pizza Vegetariana', desc: 'Abobrinha, berinjela, pimentão, tomate seco, rúcula.', preco: 6800, imagem: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?q=80&w=600&auto=format&fit=crop' },
    ],
    calzones: [
      { id: 'calzone-presunto', nome: 'Calzone de Presunto', desc: 'Presunto, mussarela, tomate, orégano.', preco: 5500, imagem: 'https://images.unsplash.com/photo-1619581938962-c7e1b4e7a2af?q=80&w=600&auto=format&fit=crop' },
      { id: 'calzone-frango', nome: 'Calzone de Frango', desc: 'Frango desfiado, catupiry, milho, azeitona.', preco: 6200, imagem: 'https://images.unsplash.com/photo-1627662168223-7df99068099a?q=80&w=600&auto=format&fit=crop' },
      { id: 'calzone-veggie', nome: 'Calzone Veggie', desc: 'Ricota, espinafre, tomate seco, azeitona.', preco: 5800, imagem: 'https://images.unsplash.com/photo-1619581938962-c7e1b4e7a2af?q=80&w=600&auto=format&fit=crop' },
    ],
    acomp: [
      { id: 'salada-verde', nome: 'Salada Verde', desc: 'Mix de folhas, tomate cereja, pepino.', preco: 1800, imagem: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=600&auto=format&fit=crop' },
      { id: 'pao-alho', nome: 'Pão de Alho', desc: '6 fatias com manteiga de alho e ervas.', preco: 2200, imagem: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=600&auto=format&fit=crop' },
      { id: 'azeitonas', nome: 'Azeitonas Marinadas', desc: 'Azeitonas verdes e pretas temperadas.', preco: 1500, imagem: 'https://images.unsplash.com/photo-1452022449339-a5f7976c0d15?q=80&w=600&auto=format&fit=crop' },
      { id: 'bruschetta', nome: 'Bruschetta', desc: '4 fatias com tomate, manjericão e azeite.', preco: 2800, imagem: 'https://images.unsplash.com/photo-1572441713132-51c75654db73?q=80&w=600&auto=format&fit=crop' },
    ],
    drinks: [
      { id: 'refri-lata', nome: 'Refrigerante 350ml', desc: 'Coca-Cola, Sprite, Fanta ou Pepsi.', preco: 800, imagem: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?q=80&w=600&auto=format&fit=crop' },
      { id: 'refri-2l', nome: 'Refrigerante 2L', desc: 'Coca-Cola, Sprite, Fanta ou Pepsi.', preco: 2500, imagem: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?q=80&w=600&auto=format&fit=crop' },
      { id: 'agua', nome: 'Água 500ml', desc: 'Água natural sem gás.', preco: 500, imagem: 'https://images.unsplash.com/photo-1548839149-851a4a7d8296?q=80&w=600&auto=format&fit=crop' },
      { id: 'suco-natural', nome: 'Suco Natural 400ml', desc: 'Laranja, limão ou maracujá.', preco: 1800, imagem: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?q=80&w=600&auto=format&fit=crop' },
      { id: 'cerveja', nome: 'Cerveja 600ml', desc: 'Cuca, Nocal ou EKU.', preco: 1200, imagem: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?q=80&w=600&auto=format&fit=crop' },
    ],
    promo: { 
      id: 'promo-combo', 
      nome: '2 Pizzas Grandes + Refri 2L', 
      desc: 'Escolha 2 pizzas grandes do cardápio + refrigerante 2L', 
      preco: 14990, 
      imagem: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?q=80&w=600&auto=format&fit=crop' 
    }
  };

  const state = {
    categoria: 'pizzas',
    carrinho: {},
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
        b.classList.remove('bg-brand-amber', 'text-gray-900', 'ring-brand-amber');
        b.classList.add('bg-white', 'text-gray-800', 'ring-gray-200');
      });
      btn.setAttribute('aria-selected', 'true');
      btn.classList.remove('bg-white', 'text-gray-800', 'ring-gray-200');
      btn.classList.add('bg-brand-amber', 'text-gray-900', 'ring-brand-amber');
      state.categoria = btn.dataset.cat;
      renderProdutos();
    });
  });

  // Render de produtos
  function formatKz(v) { return 'Kz ' + v.toLocaleString('pt-PT'); }

  function productCard(p) {
    return `
      <div class="card rounded-3xl overflow-hidden transition-all hover-lift">
        <div class="flex flex-col">
          <div class="w-full h-48 overflow-hidden">
            <img src="${p.imagem}" alt="${p.nome}" class="w-full h-full object-cover">
          </div>
          <div class="p-6">
            <h3 class="font-heading font-bold text-xl leading-tight mb-2">${p.nome}</h3>
            <p class="text-gray-600 mb-4">${p.desc}</p>
            <div class="flex items-center justify-between">
              <span class="font-heading font-bold text-2xl text-brand-orange">${formatKz(p.preco)}</span>
              <button data-add="${p.id}" class="add-btn px-5 py-3 rounded-xl bg-brand-orange text-white font-bold hover:bg-orange-600 transition-all focus-ring shadow-lg" aria-label="Adicionar ${p.nome} ao carrinho">
                <i class="fa-solid fa-plus mr-2"></i> Adicionar
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
    let p = null;
    for (const k of Object.keys(PRODUTOS)) {
      if (k === 'promo') continue;
      p = (PRODUTOS[k] || []).find(x => x.id === id) || p;
    }
    if (!p && id === 'promo-combo') p = PRODUTOS.promo;
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
      <div class="flex items-center justify-between gap-4 p-4 rounded-2xl bg-orange-50">
        <div class="min-w-0 flex-1">
          <p class="font-semibold truncate">${produto.nome}</p>
          <p class="text-sm text-gray-600">${qtd} × ${formatKz(produto.preco)}</p>
        </div>
        <div class="flex items-center gap-3 shrink-0">
          <button class="dec px-3 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition-all" aria-label="Diminuir quantidade" data-id="${produto.id}">
            <i class="fa-solid fa-minus"></i>
          </button>
          <span class="w-8 text-center font-bold">${qtd}</span>
          <button class="inc px-3 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition-all" aria-label="Aumentar quantidade" data-id="${produto.id}">
            <i class="fa-solid fa-plus"></i>
          </button>
          <span class="font-bold text-brand-orange ml-3">${formatKz(total)}</span>
        </div>
      </div>`;
    }).join('') : '<p class="text-gray-500 text-center py-8 text-lg">🍕 Seu carrinho está vazio. Adicione deliciosas pizzas!</p>';

    subtotalSpan.textContent = formatKz(subtotal);
    document.getElementById('fab-total').textContent = formatKz(subtotal);
    const count = entries.reduce((n, e) => n + e.qtd, 0);
    document.getElementById('fab-count').textContent = count;
    document.getElementById('cart-fab').classList.toggle('hidden', carrinhoVazio());

    itensCarrinho.querySelectorAll('.inc').forEach(b => b.onclick = () => addToCart(b.dataset.id));
    itensCarrinho.querySelectorAll('.dec').forEach(b => b.onclick = () => removeFromCart(b.dataset.id));

    sheetRender();
  }

  // Promo add
  document.getElementById('add-promo').addEventListener('click', () => addToCart('promo-combo'));

  // Finalizar
  function gerarMensagemWhatsApp() {
    const nome = nomeInput.value?.trim() || 'Cliente';
    const linhas = [`🍕 Olá, sou *${nome}* e gostaria de fazer um pedido na Pizza da Carla:`, ''];
    let total = 0; let i = 1;
    for (const { produto, qtd } of Object.values(state.carrinho)) {
      const t = produto.preco * qtd; total += t;
      linhas.push(`${i++}. ${produto.nome} — ${qtd} × ${formatKz(produto.preco)} = *${formatKz(t)}*`);
    }
    linhas.push('', `🔥 *Total:* ${formatKz(total)}`, '', '📍 Endereço/Bairro:', '🚗 Forma de entrega: (Retirada/Entrega)', '', 'Obrigado! 😊');
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
        <div class="flex items-center justify-between gap-4 p-4 rounded-2xl bg-orange-50">
          <div class="min-w-0 flex-1">
            <p class="font-semibold">${produto.nome}</p>
            <p class="text-sm text-gray-600">${qtd} × ${formatKz(produto.preco)}</p>
          </div>
          <div class="flex items-center gap-3">
            <button class="dec px-3 py-2 rounded-lg bg-gray-200 hover:bg-gray-300" data-id="${produto.id}">
              <i class="fa-solid fa-minus"></i>
            </button>
            <span class="w-8 text-center font-bold">${qtd}</span>
            <button class="inc px-3 py-2 rounded-lg bg-gray-200 hover:bg-gray-300" data-id="${produto.id}">
              <i class="fa-solid fa-plus"></i>
            </button>
            <span class="font-bold text-brand-orange ml-3">${formatKz(t)}</span>
          </div>
        </div>`;
    }).join('');
    document.getElementById('sheet-total').textContent = formatKz(total);
    wrap.querySelectorAll('.inc').forEach(b => b.onclick = () => { addToCart(b.dataset.id); sheetRender(); });
    wrap.querySelectorAll('.dec').forEach(b => b.onclick = () => { removeFromCart(b.dataset.id); sheetRender(); });
  }

  // Toast de feedback
  let toastTimer;
  function feedbackToast(text) {
    clearTimeout(toastTimer);
    let el = document.getElementById('toast');
    if (!el) {
      el = document.createElement('div');
      el.id = 'toast';
      el.className = 'fixed top-20 right-6 max-sm:left-1/2 max-sm:-translate-x-1/2 bg-brand-green text-white px-6 py-3 rounded-2xl shadow-warm z-50 transition-opacity font-semibold';
      document.body.appendChild(el);
    }
    el.innerHTML = `<i class="fa-solid fa-check mr-2"></i>${text}`;
    el.style.opacity = 1;
    toastTimer = setTimeout(() => el.style.opacity = 0, 3000);
  }

  // Inicialização
  document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.tab-btn').click();
    renderCarrinho();
    document.getElementById('current-year').textContent = new Date().getFullYear();
  });