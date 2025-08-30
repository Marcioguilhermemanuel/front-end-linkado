// Dados dos produtos
        const produtos = {
            skincare: [
                { id: 1, nome: "Hidratante Facial", preco: 8500, img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=300&auto=format&fit=crop", descricao: "Hidratante com ácido hialurónico para pele seca" },
                { id: 2, nome: "Sérum Antioxidante", preco: 12000, img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=300&auto=format&fit=crop", descricao: "Sérum com vitamina C para uniformizar o tom da pele" },
                { id: 3, nome: "Protetor Solar FPS 50", preco: 9500, img: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=300&auto=format&fit=crop", descricao: "Protetor solar facial com textura leve" },
                { id: 4, nome: "Esfoliante Facial", preco: 6500, img: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=300&auto=format&fit=crop", descricao: "Esfoliante suave com partículas de bambu" }
            ],
            maquiagem: [
                { id: 5, nome: "Base Líquida", preco: 12500, img: "https://images.unsplash.com/photo-1595877244574-e90ce41ce089?q=80&w=300&auto=format&fit=crop", descricao: "Base de longa duração e cobertura buildable" },
                { id: 6, nome: "Paleta de Sombras", preco: 15000, img: "https://images.unsplash.com/photo-1533044309903-4e203fbf6e8c?q=80&w=300&auto=format&fit=crop", descricao: "Paleta com 12 tons neutros e pigmentados" },
                { id: 7, nome: "Batom Líquido", preco: 7500, img: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=300&auto=format&fit=crop", descricao: "Batom líquido mate de longa duração" },
                { id: 8, nome: "Iluminador Facial", preco: 8900, img: "https://images.unsplash.com/photo-1623536646375-2c0ffa7b4cb6?q=80&w=300&auto=format&fit=crop", descricao: "Iluminador em pó com acabamento natural" }
            ],
            cabelos: [
                { id: 9, nome: "Shampoo Repair", preco: 7500, img: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=300&auto=format&fit=crop", descricao: "Shampoo para cabelos danificados" },
                { id: 10, nome: "Máscara de Hidratação", preco: 9800, img: "https://images.unsplash.com/photo-1590152880012-9cb09c4f0c4f?q=80&w=300&auto=format&fit=crop", descricao: "Máscara reconstrutora com queratina" },
                { id: 11, nome: "Óleo Capilar", preco: 6500, img: "https://images.unsplash.com/photo-1591369822096-ffd140ec948a?q=80&w=300&auto=format&fit=crop", descricao: "Óleo para pontas duplas e frizz" },
                { id: 12, nome: "Finalizador de Cachos", preco: 8200, img: "https://images.unsplash.com/photo-1590152881286-18e4f56eb037?q=80&w=300&auto=format&fit=crop", descricao: "Creme para definição de cachos" }
            ],
            perfumes: [
                { id: 13, nome: "Perfume Florais", preco: 24000, img: "https://images.unsplash.com/photo-1595425970377-2f8ded7c7b19?q=80&w=300&auto=format&fit=crop", descricao: "Fragrância floral com notas de jasmim" },
                { id: 14, nome: "Colônia Fresh", preco: 15000, img: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=300&auto=format&fit=crop", descricao: "Colônia com notas cítricas e frescas" },
                { id: 15, nome: "Perfume Amadeirado", preco: 26000, img: "https://images.unsplash.com/photo-1595425972660-65d2167be211?q=80&w=300&auto=format&fit=crop", descricao: "Fragrância amadeirada e sofisticada" },
                { id: 16, nome: "Body Mist", preco: 8500, img: "https://images.unsplash.com/photo-1608571423902-eed4a5ad810c?q=80&w=300&auto=format&fit=crop", descricao: "Mist suave para uso diário" }
            ]
        };

        // Variáveis globais
        let carrinho = [];
        let categoriaAtual = 'skincare';

        // Inicialização
        document.addEventListener('DOMContentLoaded', function() {
            // Definir ano atual no footer
            document.getElementById('current-year').textContent = new Date().getFullYear();
            
            // Carregar produtos da categoria padrão
            carregarProdutos(categoriaAtual);
            
            // Configurar tabs
            configurarTabs();
            
            // Configurar carrinho
            configurarCarrinho();
            
            // Configurar promoção especial
            document.getElementById('add-promo').addEventListener('click', function() {
                adicionarAoCarrinho({
                    id: 100,
                    nome: "Kit Beleza Completa (Promoção)",
                    preco: 19990,
                    img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=300&auto=format&fit=crop"
                });
            });
            
            // Configurar botão finalizar
            document.getElementById('finalizar').addEventListener('click', finalizarPedido);
            document.getElementById('sheet-finalizar').addEventListener('click', finalizarPedido);
        });

        // Função para carregar produtos
        function carregarProdutos(categoria) {
            const container = document.getElementById('lista-produtos');
            container.innerHTML = '';
            
            produtos[categoria].forEach(produto => {
                const produtoEl = document.createElement('div');
                produtoEl.className = 'card rounded-2xl p-4 flex flex-col sm:flex-row gap-4 transition-all hover:shadow-md';
                produtoEl.innerHTML = `
                    <div class="flex-shrink-0">
                        <img src="${produto.img}" alt="${produto.nome}" class="w-20 h-20 sm:w-24 sm:h-24 rounded-xl object-cover">
                    </div>
                    <div class="flex-1">
                        <h3 class="font-semibold">${produto.nome}</h3>
                        <p class="text-sm text-gray-600 mt-1">${produto.descricao}</p>
                        <p class="font-display text-lg font-semibold text-brand-lavender mt-2">Kz ${produto.preco.toLocaleString('pt-BR')}</p>
                    </div>
                    <button class="add-to-cart self-start sm:self-center px-4 py-2 rounded-lg bg-brand-lavender text-white font-medium hover:bg-brand-dark transition-all focus-ring" data-id="${produto.id}">
                        <i class="fa-solid fa-plus"></i>
                    </button>
                `;
                container.appendChild(produtoEl);
            });
            
            // Adicionar event listeners aos botões
            document.querySelectorAll('.add-to-cart').forEach(btn => {
                btn.addEventListener('click', function() {
                    const id = parseInt(this.getAttribute('data-id'));
                    const produto = Object.values(produtos).flat().find(p => p.id === id);
                    if (produto) adicionarAoCarrinho(produto);
                });
            });
        }

        // Função para configurar tabs
        function configurarTabs() {
            document.querySelectorAll('.tab-btn').forEach(tab => {
                tab.addEventListener('click', function() {
                    // Atualizar estado das tabs
                    document.querySelectorAll('.tab-btn').forEach(t => {
                        t.setAttribute('aria-selected', 'false');
                        t.classList.remove('bg-brand-lavender', 'text-white');
                        t.classList.add('bg-white', 'text-gray-800');
                    });
                    
                    this.setAttribute('aria-selected', 'true');
                    this.classList.remove('bg-white', 'text-gray-800');
                    this.classList.add('bg-brand-lavender', 'text-white');
                    
                    // Carregar produtos da categoria selecionada
                    categoriaAtual = this.getAttribute('data-cat');
                    carregarProdutos(categoriaAtual);
                });
            });
        }

        // Função para configurar carrinho
        function configurarCarrinho() {
            // Botão para abrir o carrinho
            document.getElementById('cart-open').addEventListener('click', abrirCarrinho);
            
            // Botão para fechar o carrinho
            document.getElementById('sheet-close').addEventListener('click', fecharCarrinho);
            document.getElementById('sheet-backdrop').addEventListener('click', fecharCarrinho);
        }

        // Função para adicionar item ao carrinho
        function adicionarAoCarrinho(produto) {
            const itemExistente = carrinho.find(item => item.id === produto.id);
            
            if (itemExistente) {
                itemExistente.quantidade++;
            } else {
                carrinho.push({
                    ...produto,
                    quantidade: 1
                });
            }
            
            atualizarCarrinho();
            mostrarNotificacao(`${produto.nome} adicionado ao carrinho!`);
        }

        // Função para remover item do carrinho
        function removerDoCarrinho(id) {
            const index = carrinho.findIndex(item => item.id === id);
            
            if (index !== -1) {
                if (carrinho[index].quantidade > 1) {
                    carrinho[index].quantidade--;
                } else {
                    carrinho.splice(index, 1);
                }
                
                atualizarCarrinho();
            }
        }

        // Função para atualizar a exibição do carrinho
        function atualizarCarrinho() {
            const itensCarrinho = document.getElementById('itens-carrinho');
            const sheetItens = document.getElementById('sheet-itens');
            const subtotalEl = document.getElementById('subtotal');
            const sheetTotalEl = document.getElementById('sheet-total');
            const fabCount = document.getElementById('fab-count');
            const fabTotal = document.getElementById('fab-total');
            const cartFab = document.getElementById('cart-fab');
            
            // Calcular total
            const total = carrinho.reduce((acc, item) => acc + (item.preco * item.quantidade), 0);
            
            // Atualizar contadores
            subtotalEl.textContent = `Kz ${total.toLocaleString('pt-BR')}`;
            sheetTotalEl.textContent = `Kz ${total.toLocaleString('pt-BR')}`;
            fabCount.textContent = carrinho.reduce((acc, item) => acc + item.quantidade, 0);
            fabTotal.textContent = `Kz ${total.toLocaleString('pt-BR')}`;
            
            // Mostrar/ocultar FAB do carrinho
            if (carrinho.length > 0) {
                cartFab.classList.remove('hidden');
            } else {
                cartFab.classList.add('hidden');
            }
            
            // Atualizar itens do carrinho na página principal
            itensCarrinho.innerHTML = '';
            if (carrinho.length === 0) {
                itensCarrinho.innerHTML = '<p class="text-gray-500 text-center py-4">Seu carrinho está vazio</p>';
            } else {
                carrinho.forEach(item => {
                    const itemEl = document.createElement('div');
                    itemEl.className = 'flex items-center justify-between';
                    itemEl.innerHTML = `
                        <div class="flex items-center gap-3">
                            <img src="${item.img}" alt="${item.nome}" class="w-12 h-12 rounded-lg object-cover">
                            <div>
                                <p class="font-medium">${item.nome}</p>
                                <p class="text-sm text-gray-600">Kz ${item.preco.toLocaleString('pt-BR')} × ${item.quantidade}</p>
                            </div>
                        </div>
                        <button class="remove-item text-brand-lavender hover:text-brand-dark" data-id="${item.id}">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    `;
                    itensCarrinho.appendChild(itemEl);
                });
            }
            
            // Atualizar itens do carrinho no sheet
            sheetItens.innerHTML = '';
            if (carrinho.length === 0) {
                sheetItens.innerHTML = '<p class="text-gray-500 text-center py-4">Seu carrinho está vazio</p>';
            } else {
                carrinho.forEach(item => {
                    const itemEl = document.createElement('div');
                    itemEl.className = 'flex items-center justify-between';
                    itemEl.innerHTML = `
                        <div class="flex items-center gap-3">
                            <img src="${item.img}" alt="${item.nome}" class="w-12 h-12 rounded-lg object-cover">
                            <div>
                                <p class="font-medium">${item.nome}</p>
                                <p class="text-sm text-gray-600">Kz ${item.preco.toLocaleString('pt-BR')}</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-2">
                            <button class="decrease-item w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200" data-id="${item.id}">
                                <i class="fa-solid fa-minus text-xs"></i>
                            </button>
                            <span class="font-medium">${item.quantidade}</span>
                            <button class="increase-item w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200" data-id="${item.id}">
                                <i class="fa-solid fa-plus text-xs"></i>
                            </button>
                        </div>
                    `;
                    sheetItens.appendChild(itemEl);
                });
            }
            
            // Adicionar event listeners aos botões de remover/diminuir/aumentar
            document.querySelectorAll('.remove-item').forEach(btn => {
                btn.addEventListener('click', function() {
                    const id = parseInt(this.getAttribute('data-id'));
                    removerDoCarrinho(id);
                });
            });
            
            document.querySelectorAll('.decrease-item').forEach(btn => {
                btn.addEventListener('click', function() {
                    const id = parseInt(this.getAttribute('data-id'));
                    removerDoCarrinho(id);
                });
            });
            
            document.querySelectorAll('.increase-item').forEach(btn => {
                btn.addEventListener('click', function() {
                    const id = parseInt(this.getAttribute('data-id'));
                    const produto = Object.values(produtos).flat().find(p => p.id === id);
                    if (produto) adicionarAoCarrinho(produto);
                });
            });
        }

        // Função para abrir o carrinho
        function abrirCarrinho() {
            document.getElementById('sheet').classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }

        // Função para fechar o carrinho
        function fecharCarrinho() {
            document.getElementById('sheet').classList.add('hidden');
            document.body.style.overflow = 'auto';
        }

        // Função para mostrar notificação
        function mostrarNotificacao(mensagem) {
            // Criar elemento de notificação
            const notificacao = document.createElement('div');
            notificacao.className = 'fixed bottom-24 left-1/2 -translate-x-1/2 bg-brand-lavender text-white px-4 py-2 rounded-lg shadow-lg z-50 transition-opacity opacity-0';
            notificacao.textContent = mensagem;
            document.body.appendChild(notificacao);
            
            // Animar entrada
            setTimeout(() => {
                notificacao.classList.remove('opacity-0');
                notificacao.classList.add('opacity-100');
            }, 10);
            
            // Animar saída e remover após 3 segundos
            setTimeout(() => {
                notificacao.classList.remove('opacity-100');
                notificacao.classList.add('opacity-0');
                setTimeout(() => {
                    document.body.removeChild(notificacao);
                }, 300);
            }, 3000);
        }

        // Função para finalizar pedido
        function finalizarPedido() {
            if (carrinho.length === 0) {
                mostrarNotificacao('Adicione itens ao carrinho primeiro!');
                return;
            }
            
            const nome = document.getElementById('nome').value.trim() || 'Cliente';
            let mensagem = `Olá, gostaria de fazer um pedido:\n\n*Itens:*\n`;
            
            carrinho.forEach(item => {
                mensagem += `- ${item.nome} (Qtd: ${item.quantidade}) - Kz ${(item.preco * item.quantidade).toLocaleString('pt-BR')}\n`;
            });
            
            const total = carrinho.reduce((acc, item) => acc + (item.preco * item.quantidade), 0);
            mensagem += `\n*Total: Kz ${total.toLocaleString('pt-AO')}*\n\n`;
            mensagem += `*Nome:* ${nome}\n`;
            mensagem += `*Forma de pagamento:* A combinar`;
            
            // Abrir WhatsApp
            const url = `https://wa.me/244946043956?text=${encodeURIComponent(mensagem)}`;
            window.open(url, '_blank');
        }