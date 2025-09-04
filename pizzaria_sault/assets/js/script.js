// ===== DADOS DOS PRODUTOS =====
        const PRODUTOS = {
            hamburgueres: [
                {
                    id: 'sault-classic',
                    nome: 'Sault Classic',
                    desc: 'Carne Angus 180g, queijo cheddar, alface, tomate, cebola caramelizada e molho especial.',
                    preco: 8500,
                    imagem: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=500&auto=format&fit=crop',
                    popular: true
                },
                {
                    id: 'bacon-smash',
                    nome: 'Bacon Smash',
                    desc: 'Dupla carne Angus 150g, bacon crocante, queijo suíço, cebola roxa e maionese trufa.',
                    preco: 12000,
                    imagem: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=500&auto=format&fit=crop',
                    popular: true
                },
                {
                    id: 'chicken-supreme',
                    nome: 'Chicken Supreme',
                    desc: 'Peito de frango grelhado, queijo provolone, abacaxi, rúcula e molho honey mustard.',
                    preco: 9500,
                    imagem: 'https://images.unsplash.com/photo-1606755962773-d324e2ebe2d8?q=80&w=500&auto=format&fit=crop',
                    popular: false
                },
                {
                    id: 'veggie-delight',
                    nome: 'Veggie Delight',
                    desc: 'Hambúrguer de grão-de-bico e quinoa, queijo vegano, abacate, tomate e molho tahine.',
                    preco: 8000,
                    imagem: 'https://images.unsplash.com/photo-1525059696034-4967a729002e?q=80&w=500&auto=format&fit=crop',
                    popular: true
                },
                {
                    id: 'bbq-monster',
                    nome: 'BBQ Monster',
                    desc: 'Tripla carne Angus 120g, queijo cheddar, onion rings, bacon e molho BBQ defumado.',
                    preco: 15000,
                    imagem: 'https://images.unsplash.com/photo-1553979459-d2229ba7433a?q=80&w=500&auto=format&fit=crop',
                    popular: false
                }
            ],
            acompanhamentos: [
                {
                    id: 'batata-rustica',
                    nome: 'Batata Rústica Premium',
                    desc: 'Batatas artesanais com casca, temperadas com alecrim, alho e parmesão.',
                    preco: 3500,
                    imagem: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=500&auto=format&fit=crop',
                    popular: true
                },
                {
                    id: 'onion-rings',
                    nome: 'Onion Rings Crocantes',
                    desc: 'Anéis de cebola empanados artesanalmente, servidos com molho ranch.',
                    preco: 4000,
                    imagem: 'https://images.unsplash.com/photo-1639024471283-03518883512d?q=80&w=500&auto=format&fit=crop',
                    popular: true
                },
                {
                    id: 'nachos-supreme',
                    nome: 'Nachos Supreme',
                    desc: 'Nachos com queijo derretido, jalapeños, guacamole e sour cream.',
                    preco: 4500,
                    imagem: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?q=80&w=500&auto=format&fit=crop',
                    popular: false
                }
            ],
            bebidas: [
                {
                    id: 'milkshake-chocolate',
                    nome: 'Milkshake de Chocolate',
                    desc: 'Cremoso milkshake artesanal com chocolate belga e chantilly.',
                    preco: 2800,
                    imagem: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?q=80&w=500&auto=format&fit=crop',
                    popular: true
                },
                {
                    id: 'suco-natural',
                    nome: 'Suco Natural do Dia',
                    desc: 'Laranja, maracujá ou limão. Feito na hora com frutas selecionadas.',
                    preco: 2000,
                    imagem: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?q=80&w=500&auto=format&fit=crop',
                    popular: true
                },
                {
                    id: 'refrigerante',
                    nome: 'Refrigerante Gelado',
                    desc: 'Coca-Cola, Pepsi, Sprite ou Fanta. Lata 350ml bem gelada.',
                    preco: 1200,
                    imagem: 'https://images.unsplash.com/photo-1622483767072-8c6b2ce7e14c?q=80&w=500&auto=format&fit=crop',
                    popular: false
                },
                {
                    id: 'agua-saborizada',
                    nome: 'Água Saborizada',
                    desc: 'Água com gás saborizada: limão, morango ou menta.',
                    preco: 1500,
                    imagem: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=500&auto=format&fit=crop',
                    popular: false
                }
            ],
            sobremesas: [
                {
                    id: 'brownie-gelado',
                    nome: 'Brownie com Sorvete',
                    desc: 'Brownie de chocolate quente com sorvete de baunilha e calda de chocolate.',
                    preco: 3800,
                    imagem: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=500&auto=format&fit=crop',
                    popular: true
                },
                {
                    id: 'cheesecake-frutas',
                    nome: 'Cheesecake de Frutas Vermelhas',
                    desc: 'Fatia generosa de cheesecake cremoso com calda de frutas vermelhas.',
                    preco: 4200,
                    imagem: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=500&auto=format&fit=crop',
                    popular: true
                },
                {
                    id: 'cookies-cream',
                    nome: 'Cookies & Cream',
                    desc: 'Cookies artesanais quentinhos com sorvete de cream e pedaços de Oreo.',
                    preco: 3500,
                    imagem: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=500&auto=format&fit=crop',
                    popular: false
                }
            ],
            combos: [
                {
                    id: 'combo-duplo',
                    nome: 'Combo Duplo',
                    desc: '2 Hambúrgueres + Batata G + 2 Refrigerantes',
                    preco: 18000,
                    imagem: 'https://images.unsplash.com/photo-1594002636253-1563f46f48a1?q=80&w=500&auto=format&fit=crop',
                    popular: false
                }
            ]
        };

        // ===== ESTADO DA APLICAÇÃO =====
        const state = {
            categoriaAtiva: 'hamburgueres',
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
            toast.classList.remove('translate-y-24');
            toast.classList.add('translate-y-0');
            
            setTimeout(() => {
                toast.classList.remove('translate-y-0');
                toast.classList.add('translate-y-24');
            }, 3500);
        }

        // ===== RENDERIZAÇÃO DE PRODUTOS =====
        function renderProdutos() {
            let produtos = PRODUTOS[state.categoriaAtiva];
            
            // Aplicar filtro se necessário
            if (state.filtroAtivo === 'popular') {
                produtos = produtos.filter(produto => produto.popular);
            }
            
            produtosContainer.innerHTML = produtos.map(produto => `
                <div class="card-hover rounded-3xl overflow-hidden glass border border-white/10 shadow-lg">
                    <div class="aspect-square bg-neutral-800 relative overflow-hidden">
                        <img src="${produto.imagem}" alt="${produto.nome}" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110" loading="lazy">
                        ${produto.popular ? `
                            <div class="absolute top-4 left-4 bg-gradient-to-r from-secondary-500 to-secondary-600 text-neutral-900 text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                                <i class="fa-solid fa-crown mr-1"></i> TOP
                            </div>
                        ` : ''}
                        <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div class="p-5">
                        <h3 class="font-bold text-lg mb-2 text-white">${produto.nome}</h3>
                        <p class="text-white/80 text-sm mb-4 leading-relaxed">${produto.desc}</p>
                        <div class="flex items-center justify-between">
                            <span class="font-display font-bold text-xl text-primary-400">${formatKz(produto.preco)}</span>
                            <button class="add-to-cart-btn btn-accessible px-5 py-3 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-600 hover:from-primary-600 hover:to-secondary-700 font-semibold text-sm transition-all focus-ring shadow-lg" data-id="${produto.id}">
                                <i class="fa-solid fa-plus mr-2"></i> Adicionar
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
                showToast('Item removido do carrinho');
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
                    <div class="flex items-center justify-between py-3 border-b border-white/10 last:border-b-0">
                        <div class="flex-1">
                            <p class="font-semibold text-white">${item.quantidade}x ${item.produto.nome}</p>
                            <p class="text-white/70 text-sm">${formatKz(item.produto.preco)} cada</p>
                        </div>
                        <div class="flex items-center gap-3">
                            <button class="remove-item-btn btn-accessible w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all" data-id="${item.produto.id}">
                                <i class="fa-solid fa-minus text-sm"></i>
                            </button>
                            <span class="font-semibold mx-2 min-w-[20px] text-center">${item.quantidade}</span>
                            <button class="add-item-btn btn-accessible w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all" data-id="${item.produto.id}">
                                <i class="fa-solid fa-plus text-sm"></i>
                            </button>
                            <span class="font-semibold ml-3 min-w-[80px] text-right text-primary-300">${formatKz(item.produto.preco * item.quantidade)}</span>
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
                    <div class="flex items-center gap-4 p-4 rounded-2xl glass">
                        <div class="w-16 h-16 rounded-xl overflow-hidden">
                            <img src="${item.produto.imagem}" alt="${item.produto.nome}" class="w-full h-full object-cover" loading="lazy">
                        </div>
                        <div class="flex-1">
                            <h4 class="font-semibold text-white">${item.produto.nome}</h4>
                            <p class="text-white/70 text-sm">${formatKz(item.produto.preco)}</p>
                        </div>
                        <div class="flex items-center gap-3">
                            <button class="remove-item-btn btn-accessible w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all" data-id="${item.produto.id}">
                                <i class="fa-solid fa-minus text-sm"></i>
                            </button>
                            <span class="font-semibold mx-2 min-w-[20px] text-center">${item.quantidade}</span>
                            <button class="add-item-btn btn-accessible w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all" data-id="${item.produto.id}">
                                <i class="fa-solid fa-plus text-sm"></i>
                            </button>
                            <span class="font-semibold ml-3 min-w-[80px] text-right text-primary-300">${formatKz(item.produto.preco * item.quantidade)}</span>
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
            
            document.body.style.overflow = 'hidden';
        }

        function fecharModalCarrinho() {
            modalCarrinho.classList.add('pointer-events-none');
            modalCarrinho.classList.remove('opacity-100');
            
            const modalContent = modalCarrinho.querySelector('div > div');
            modalContent.classList.add('translate-y-full');
            
            document.body.style.overflow = 'auto';
        }

        function finalizarPedido() {
            const itens = Object.values(state.carrinho);
            if (itens.length === 0) {
                showToast('Adicione itens ao carrinho primeiro!');
                return;
            }
            
            const nome = document.getElementById('nome').value.trim();
            const endereco = document.getElementById('endereco').value.trim();
            const observacoes = document.getElementById('observacoes').value.trim();
            
            if (!nome || !endereco) {
                showToast('Por favor, preencha seu nome e endereço');
                return;
            }
            
            const total = itens.reduce((soma, item) => soma + (item.produto.preco * item.quantidade), 0);
            
            let mensagem = `🍔 *PEDIDO SAULT HAMBURGUERIA* 🍔\n\n`;
            mensagem += `👤 *Cliente:* ${nome}\n`;
            mensagem += `📍 *Endereço:* ${endereco}\n\n`;
            mensagem += `📋 *ITENS DO PEDIDO:*\n`;
            mensagem += `${'='.repeat(30)}\n`;
            
            itens.forEach((item, index) => {
                mensagem += `${index + 1}. *${item.produto.nome}*\n`;
                mensagem += `   Qtd: ${item.quantidade}x | Valor: ${formatKz(item.produto.preco)}\n`;
                mensagem += `   Subtotal: ${formatKz(item.produto.preco * item.quantidade)}\n\n`;
            });
            
            mensagem += `${'='.repeat(30)}\n`;
            mensagem += `💰 *TOTAL: ${formatKz(total)}*\n\n`;
            
            if (observacoes) {
                mensagem += `📝 *Observações:* ${observacoes}\n\n`;
            }
            
            mensagem += `🚚 Aguardando confirmação do pedido!\n`;
            mensagem += `⏰ Tempo estimado: 30-45 minutos`;
            
            const url = `https://wa.me/244946043956?text=${encodeURIComponent(mensagem)}`;
            window.open(url, '_blank');
            
            // Fechar modal se estiver aberto
            if (!modalCarrinho.classList.contains('pointer-events-none')) {
                fecharModalCarrinho();
            }
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
                            t.classList.add('bg-gradient-to-r', 'from-primary-500', 'to-secondary-600', 'text-white', 'shadow-lg');
                            t.classList.remove('glass');
                        } else {
                            t.classList.remove('bg-gradient-to-r', 'from-primary-500', 'to-secondary-600', 'text-white', 'shadow-lg');
                            t.classList.add('glass');
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
                            b.classList.add('active', 'bg-primary-500', 'text-white');
                        } else {
                            b.classList.remove('active', 'bg-primary-500', 'text-white');
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
            
            // Event listener para tecla Escape fechar modal
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && !modalCarrinho.classList.contains('pointer-events-none')) {
                    fecharModalCarrinho();
                }
            });
            
            // Adicionar promoção ao clicar no botão
            document.querySelector('.add-promo-btn').addEventListener('click', function() {
                addToCart(this.dataset.id);
            });
            
            // Validação de formulário em tempo real
            const nomeInput = document.getElementById('nome');
            const enderecoInput = document.getElementById('endereco');
            
            [nomeInput, enderecoInput].forEach(input => {
                input.addEventListener('input', () => {
                    if (input.value.trim()) {
                        input.classList.remove('border-red-400');
                        input.classList.add('border-white/30');
                    }
                });
            });
            
            // Animação de entrada para produtos
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, observerOptions);
            
            // Aplicar animação inicial aos produtos
            const applyProductAnimations = () => {
                const produtos = document.querySelectorAll('#produtos-container > div');
                produtos.forEach((produto, index) => {
                    produto.style.opacity = '0';
                    produto.style.transform = 'translateY(30px)';
                    produto.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
                    observer.observe(produto);
                });
            };
            
            // Aplicar animações após renderização inicial
            setTimeout(applyProductAnimations, 100);
            
            // Reaplica animações quando categoria muda
            const originalRenderProdutos = renderProdutos;
            renderProdutos = function() {
                originalRenderProdutos();
                setTimeout(applyProductAnimations, 50);
            };
            
            // Atualizar ano no footer
            document.getElementById('current-year').textContent = new Date().getFullYear();
            
            // Smooth scroll para links de âncora
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
            
            // Adicionar efeito de parallax suave no hero
            window.addEventListener('scroll', () => {
                const scrolled = window.pageYOffset;
                const hero = document.querySelector('section');
                if (hero && scrolled < window.innerHeight) {
                    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
                }
            });
            
            // Preload de imagens importantes
            const preloadImages = [
                'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=500&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=500&auto=format&fit=crop'
            ];
            
            preloadImages.forEach(src => {
                const img = new Image();
                img.src = src;
            });
        }

        // Service Worker para cache (PWA básico)
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('data:text/javascript;base64,CiAgICBjb25zdCBDQUNIRV9OQU1FID0gJ3NhdWx0LWhhbWJ1cmdlcmlhLXYxJzsKICAgIGNvbnN0IHVybHNUb0NhY2hlID0gWwogICAgICAgICcvJywKICAgICAgICAnaHR0cHM6Ly9jZG4udGFpbHdpbmRjc3MuY29tJywKICAgICAgICAnaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzYuNC4wL2Nzcy9hbGwubWluLmNzcycKICAgIF07CgogICAgc2VsZi5hZGRFdmVudExpc3RlbmVyKCdpbnN0YWxsJywgZXZlbnQgPT4gewogICAgICAgIGV2ZW50LndhaXRVbnRpbCgKICAgICAgICAgICAgY2FjaGVzLm9wZW4oQ0FDSEVfTkFNRSkKICAgICAgICAgICAgLnRoZW4oY2FjaGUgPT4gY2FjaGUuYWRkQWxsKHVybHNUb0NhY2hlKSkKICAgICAgICApOwogICAgfSk7CgogICAgc2VsZi5hZGRFdmVudExpc3RlbmVyKCdmZXRjaCcsIGV2ZW50ID0+IHsKICAgICAgICBldmVudC5yZXNwb25kV2l0aCgKICAgICAgICAgICAgY2FjaGVzLm1hdGNoKGV2ZW50LnJlcXVlc3QpCiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHsKICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZSB8fCBmZXRjaChldmVudC5yZXF1ZXN0KTsKICAgICAgICAgICAgfSkKICAgICAgICApOwogICAgfSk7')
            .catch(() => {
                // Silently fail if service worker registration fails
            });
        }

        // Iniciar a aplicação quando o DOM estiver carregado
        document.addEventListener('DOMContentLoaded', init);
        
        // Adicionar meta viewport dinâmico para melhor responsividade
        const viewport = document.querySelector('meta[name="viewport"]');
        if (viewport) {
            viewport.content = 'width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes';
        }
        
        // Detectar modo escuro do sistema
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.classList.add('dark-mode');
        }
        
        // Adicionar suporte a gestos touch para o carrinho
        let touchStartY = 0;
        let touchEndY = 0;
        
        modalCarrinho.addEventListener('touchstart', e => {
            touchStartY = e.changedTouches[0].screenY;
        }, { passive: true });
        
        modalCarrinho.addEventListener('touchend', e => {
            touchEndY = e.changedTouches[0].screenY;
            if (touchEndY > touchStartY + 50) {
                fecharModalCarrinho();
            }
        }, { passive: true });