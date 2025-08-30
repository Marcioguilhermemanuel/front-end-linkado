// Dados dos produtos
        const produtos = {
            maquiagem: [
                {
                    id: 1,
                    nome: "Base Líquida Matte",
                    preco: 4500,
                    descricao: "Cobertura natural e duradoura",
                    imagem: "https://images.unsplash.com/photo-1631214540042-59c7c8eb01db?q=80&w=400&auto=format&fit=crop"
                },
                {
                    id: 2,
                    nome: "Paleta de Sombras Nude",
                    preco: 6800,
                    descricao: "12 tons neutros perfeitos",
                    imagem: "https://images.unsplash.com/photo-1583002662755-13976b1b7d84?q=80&w=400&auto=format&fit=crop"
                },
                {
                    id: 3,
                    nome: "Batom Líquido Matte",
                    preco: 2800,
                    descricao: "Longa duração, várias cores",
                    imagem: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=400&auto=format&fit=crop"
                },
                {
                    id: 4,
                    nome: "Máscara para Cílios",
                    preco: 3200,
                    descricao: "Volume e alongamento extremo",
                    imagem: "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?q=80&w=400&auto=format&fit=crop"
                }
            ],
            skincare: [
                {
                    id: 5,
                    nome: "Sérum Vitamina C",
                    preco: 8500,
                    descricao: "Antioxidante e iluminador",
                    imagem: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=400&auto=format&fit=crop"
                },
                {
                    id: 6,
                    nome: "Hidratante Facial",
                    preco: 5200,
                    descricao: "Hidratação profunda 24h",
                    imagem: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?q=80&w=400&auto=format&fit=crop"
                },
                {
                    id: 7,
                    nome: "Protetor Solar FPS 60",
                    preco: 7800,
                    descricao: "Proteção total e base natural",
                    imagem: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?q=80&w=400&auto=format&fit=crop"
                },
                {
                    id: 8,
                    nome: "Esfoliante Facial",
                    preco: 4200,
                    descricao: "Renovação celular suave",
                    imagem: "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?q=80&w=400&auto=format&fit=crop"
                }
            ],
            perfumes: [
                {
                    id: 9,
                    nome: "Perfume Floral Elegance",
                    preco: 12500,
                    descricao: "Fragrância sofisticada e duradoura",
                    imagem: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=400&auto=format&fit=crop"
                },
                {
                    id: 10,
                    nome: "Eau de Toilette Fresh",
                    preco: 8900,
                    descricao: "Frescor cítrico para o dia",
                    imagem: "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?q=80&w=400&auto=format&fit=crop"
                },
                {
                    id: 11,
                    nome: "Perfume Amadeirado",
                    preco: 15200,
                    descricao: "Notas quentes e envolventes",
                    imagem: "https://images.unsplash.com/photo-1588405748880-12d1d2a59db9?q=80&w=400&auto=format&fit=crop"
                }
            ],
            acessorios: [
                {
                    id: 12,
                    nome: "Kit Pincéis Profissional",
                    preco: 9800,
                    descricao: "10 pincéis de alta qualidade",
                    imagem: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=400&auto=format&fit=crop"
                },
                {
                    id: 13,
                    nome: "Espelho LED Portátil",
                    preco: 6500,
                    descricao: "Iluminação perfeita anywhere",
                    imagem: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=400&auto=format&fit=crop"
                },
                {
                    id: 14,
                    nome: "Organizador de Maquiagem",
                    preco: 4800,
                    descricao: "Acrílico transparente elegante",
                    imagem: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=400&auto=format&fit=crop"
                }
            ]
        };

        // Estado do carrinho
        let carrinho = [];
        let categoriaAtiva = 'maquiagem';

        // Função para formatar preços
        function formatarPreco(valor) {
            return `Kz ${valor.toLocaleString('pt-AO')}`;
        }

        // Função para renderizar produtos
        function renderizarProdutos(categoria) {
            const container = document.getElementById('lista-produtos');
            const produtosDaCategoria = produtos[categoria] || [];

            container.innerHTML = produtosDaCategoria.map(produto => `
                <div class="card rounded-2xl overflow-hidden shadow-soft hover:shadow-glow transition-all hover:scale-[1.02] group">
                    <div class="relative overflow-hidden">
                        <img src="${produto.imagem}" alt="${produto.nome}" 
                             class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div class="absolute top-3 right-3">
                            <div class="w-8 h-8 rounded-full bg-white/20 backdrop-blur grid place-content-center">
                                <i class="fa-solid fa-heart text-white/80 hover:text-brand-pink transition-colors cursor-pointer"></i>
                            </div>
                        </div>
                    </div>
                    <div class="p-5">
                        <h3 class="font-semibold text-lg mb-2">${produto.nome}</h3>
                        <p class="text-gray-600 text-sm mb-4">${produto.descricao}</p>
                        <div class="flex items-center justify-between">
                            <span class="font-display text-xl font-bold gradient-text">${formatarPreco(produto.preco)}</span>
                            <button class="add-to-cart px-4 py-2 rounded-xl bg-gradient-to-r from-brand-pink to-brand-purple text-white font-semibold hover:shadow-md transition-all"
                                    data-id="${produto.id}" data-nome="${produto.nome}" data-preco="${produto.preco}"
                                    aria-label="Adicionar ${produto.nome} ao carrinho">
                                <i class="fa-solid fa-plus mr-1"></i> Adicionar
                            </button>
                        </div>
                    </div>
                </div>
            `).join('');

            // Adicionar event listeners aos botões
            container.querySelectorAll('.add-to-cart').forEach(btn => {
                btn.addEventListener('click', function() {
                    const id = parseInt(this.dataset.id);
                    const nome = this.dataset.nome;
                    const preco = parseInt(this.dataset.preco);
                    
                    adicionarAoCarrinho({ id, nome, preco });
                    
                    // Feedback visual
                    this.innerHTML = '<i class="fa-solid fa-check mr-1"></i> Adicionado';
                    this.classList.add('bg-green-500');
                    setTimeout(() => {
                        this.innerHTML = '<i class="fa-solid fa-plus mr-1"></i> Adicionar';
                        this.classList.remove('bg-green-500');
                    }, 1500);
                });
            });
        }

        // Função para adicionar ao carrinho
        function adicionarAoCarrinho(produto) {
            const itemExistente = carrinho.find(item => item.id === produto.id);
            
            if (itemExistente) {
                itemExistente.quantidade += 1;
            } else {
                carrinho.push({ ...produto, quantidade: 1 });
            }
            
            atualizarCarrinho();
            mostrarFAB();
        }

        // Função para atualizar o carrinho
        function atualizarCarrinho() {
            const containerCarrinho = document.getElementById('itens-carrinho');
            const containerSheet = document.getElementById('sheet-itens');
            
            if (carrinho.length === 0) {
                const mensagemVazio = `
                    <div class="text-center py-8 text-gray-500">
                        <i class="fa-solid fa-shopping-bag text-4xl mb-3 opacity-50"></i>
                        <p>Sua sacola está vazia</p>
                        <p class="text-sm">Adicione produtos do catálogo</p>
                    </div>
                `;
                containerCarrinho.innerHTML = mensagemVazio;
                containerSheet.innerHTML = mensagemVazio;
            } else {
                const itensHTML = carrinho.map(item => `
                    <div class="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-brand-pink/5 to-brand-purple/5 border border-brand-pink/20">
                        <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-pink/20 to-brand-purple/20 grid place-content-center text-brand-pink">
                            <i class="fa-solid fa-sparkles"></i>
                        </div>
                        <div class="flex-1">
                            <h4 class="font-semibold">${item.nome}</h4>
                            <p class="text-sm text-gray-600">${formatarPreco(item.preco)} cada</p>
                        </div>
                        <div class="flex items-center gap-3">
                            <button class="qty-btn w-8 h-8 rounded-lg bg-gray-200 hover:bg-gray-300 transition-all" 
                                    data-id="${item.id}" data-action="decrease" aria-label="Diminuir quantidade">
                                <i class="fa-solid fa-minus text-xs"></i>
                            </button>
                            <span class="font-semibold w-6 text-center">${item.quantidade}</span>
                            <button class="qty-btn w-8 h-8 rounded-lg bg-brand-pink hover:bg-brand-rose text-white transition-all" 
                                    data-id="${item.id}" data-action="increase" aria-label="Aumentar quantidade">
                                <i class="fa-solid fa-plus text-xs"></i>
                            </button>
                        </div>
                    </div>
                `).join('');
                
                containerCarrinho.innerHTML = itensHTML;
                containerSheet.innerHTML = itensHTML;
            }

            // Calcular total
            const total = carrinho.reduce((acc, item) => acc + (item.preco * item.quantidade), 0);
            const totalFormatado = formatarPreco(total);
            
            document.getElementById('subtotal').textContent = totalFormatado;
            document.getElementById('sheet-total').textContent = totalFormatado;
            document.getElementById('fab-total').textContent = totalFormatado;
            document.getElementById('fab-count').textContent = carrinho.reduce((acc, item) => acc + item.quantidade, 0);

            // Event listeners para botões de quantidade
            document.querySelectorAll('.qty-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const id = parseInt(this.dataset.id);
                    const action = this.dataset.action;
                    
                    if (action === 'increase') {
                        const item = carrinho.find(item => item.id === id);
                        if (item) item.quantidade += 1;
                    } else {
                        const item = carrinho.find(item => item.id === id);
                        if (item) {
                            item.quantidade -= 1;
                            if (item.quantidade <= 0) {
                                carrinho = carrinho.filter(item => item.id !== id);
                            }
                        }
                    }
                    
                    atualizarCarrinho();
                    if (carrinho.length === 0) esconderFAB();
                });
            });
        }

        // Função para mostrar/esconder FAB
        function mostrarFAB() {
            document.getElementById('cart-fab').classList.remove('hidden');
        }

        function esconderFAB() {
            document.getElementById('cart-fab').classList.add('hidden');
        }

        // Função para finalizar pedido
        function finalizarPedido() {
            const nome = document.getElementById('nome').value.trim();
            
            if (!nome) {
                alert('Por favor, informe seu nome para continuar.');
                document.getElementById('nome').focus();
                return;
            }
            
            if (carrinho.length === 0) {
                alert('Adicione pelo menos um produto ao carrinho.');
                return;
            }

            let mensagem = `Olá! Gostaria de fazer um pedido:\n\n`;
            mensagem += `👤 *Nome:* ${nome}\n\n`;
            mensagem += `🛍️ *Itens:*\n`;
            
            carrinho.forEach(item => {
                mensagem += `• ${item.quantidade}x ${item.nome} - ${formatarPreco(item.preco * item.quantidade)}\n`;
            });
            
            const total = carrinho.reduce((acc, item) => acc + (item.preco * item.quantidade), 0);
            mensagem += `\n💰 *Total: ${formatarPreco(total)}*\n\n`;
            mensagem += `Aguardo confirmação! 💕`;

            const whatsappURL = `https://wa.me/244946043956?text=${encodeURIComponent(mensagem)}`;
            window.open(whatsappURL, '_blank');
        }

        // Event listeners
        document.addEventListener('DOMContentLoaded', function() {
            // Ano atual no footer
            document.getElementById('current-year').textContent = new Date().getFullYear();
            
            // Renderizar produtos inicial
            renderizarProdutos(categoriaAtiva);
            
            // Tabs
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    // Remover classe ativa de todos
                    document.querySelectorAll('.tab-btn').forEach(b => {
                        b.classList.remove('active-tab', 'bg-gradient-to-r', 'from-brand-pink', 'to-brand-purple', 'text-white');
                        b.classList.add('glass-effect', 'text-gray-800');
                        b.setAttribute('aria-selected', 'false');
                    });
                    
                    // Adicionar classe ativa ao clicado
                    this.classList.add('active-tab', 'bg-gradient-to-r', 'from-brand-pink', 'to-brand-purple', 'text-white');
                    this.classList.remove('glass-effect', 'text-gray-800');
                    this.setAttribute('aria-selected', 'true');
                    
                    categoriaAtiva = this.dataset.cat;
                    renderizarProdutos(categoriaAtiva);
                });
            });

            // Promoção
            document.getElementById('add-promo').addEventListener('click', function() {
                adicionarAoCarrinho({
                    id: 999,
                    nome: "Kit Maquiagem Completo (Promoção)",
                    preco: 24990
                });
                
                // Feedback
                this.innerHTML = '<i class="fa-solid fa-check mr-2"></i>Adicionado!';
                this.classList.add('bg-green-100', 'text-green-700');
                setTimeout(() => {
                    this.innerHTML = 'Adicionar ao carrinho';
                    this.classList.remove('bg-green-100', 'text-green-700');
                }, 2000);
            });

            // Finalizar pedido
            document.getElementById('finalizar').addEventListener('click', finalizarPedido);
            document.getElementById('sheet-finalizar').addEventListener('click', finalizarPedido);

            // Sheet do carrinho
            document.getElementById('cart-open').addEventListener('click', function() {
                document.getElementById('sheet').classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            });

            document.getElementById('sheet-close').addEventListener('click', function() {
                document.getElementById('sheet').classList.add('hidden');
                document.body.style.overflow = 'auto';
            });

            document.getElementById('sheet-backdrop').addEventListener('click', function() {
                document.getElementById('sheet').classList.add('hidden');
                document.body.style.overflow = 'auto';
            });

            // Scroll suave
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

            // Acessibilidade: Enter em elementos com role="button"
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' && e.target.getAttribute('role') === 'button') {
                    e.preventDefault();
                    e.target.click();
                }
            });
        });

        // Aplicar classe ativa inicial
        document.addEventListener('DOMContentLoaded', function() {
            const firstTab = document.querySelector('.tab-btn[data-cat="maquiagem"]');
            if (firstTab) {
                firstTab.classList.add('active-tab', 'bg-gradient-to-r', 'from-brand-pink', 'to-brand-purple', 'text-white');
                firstTab.classList.remove('glass-effect', 'text-gray-800');
            }
        });