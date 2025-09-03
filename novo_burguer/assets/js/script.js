 // Dados dos produtos
        const produtos = {
            burgers: [
                { id: 1, nome: "Burger Mami Clássico", desc: "Pão, carne, queijo, alface, tomate e molho especial", preco: 5500, img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" },
                { id: 2, nome: "Burger Bacon Supremo", desc: "Pão, carne, queijo, bacon crocante e molho barbecue", preco: 6500, img: "https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJ1cmdlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" },
                { id: 3, nome: "Burger Duplo Queijo", desc: "Dois hambúrgueres, dupla porção de queijo e molho especial", preco: 7500, img: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJ1cmdlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" },
                { id: 4, nome: "Burger Vegetariano", desc: "Hambúrguer de grão-de-bico, alface, tomate e molho especial", preco: 6000, img: "https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJ1cmdlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" }
            ],
            combos: [
                { id: 5, nome: "Combo Mami Individual", desc: "1 burger + batata frita + refrigerante", preco: 8500, img: "https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJ1cmdlciUyMGNvbWJvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" },
                { id: 6, nome: "Combo Casal", desc: "2 burgers + 2 porções batata + 2 refrigerantes", preco: 14900, img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YnVyZ2VyJTIwY29tYm98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" },
                { id: 7, nome: "Combo Família", desc: "4 burgers + 2 porções grandes batata + 4 refrigerantes", preco: 24900, img: "https://images.unsplash.com/photo-1615296566682-7c1751c8df24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1cmdlciUyMGNvbWJvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" }
            ],
            acomp: [
                { id: 8, nome: "Batata Frita", desc: "Porção individual com molho especial", preco: 1500, img: "https://images.unsplash.com/photo-1634034379073-f689b460a3fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlbmNoJTIwZnJpZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" },
                { id: 9, nome: "Onion Rings", desc: "Anéis de cebola empanados e crocantes", preco: 1800, img: "https://images.unsplash.com/photo-1632773681760-efae6c0b8a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b25pb24lMjByaW5nc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" },
                { id: 10, nome: "Nuggets", desc: "8 unidades de nuggets crocantes", preco: 2000, img: "https://images.unsplash.com/photo-1597484661643-6ed5e0ad9c7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bnVnZ2V0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" }
            ],
            drinks: [
                { id: 11, nome: "Refrigerante", desc: "Lata 350ml - Coca-Cola, Fanta ou Sprite", preco: 700, img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c29kYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" },
                { id: 12, nome: "Suco Natural", desc: "Copo 500ml - Laranja, Maracujá ou Limão", preco: 1200, img: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGp1aWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" },
                { id: 13, nome: "Água Mineral", desc: "Garrafa 500ml - Com ou sem gás", preco: 500, img: "https://images.unsplash.com/photo-1548839143-3ac82963b6e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHdhdGVyJTIwYm90dGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" }
            ]
        };

        // Variáveis globais
        let carrinho = [];
        let categoriaAtual = 'burgers';

        // Inicialização
        document.addEventListener('DOMContentLoaded', function() {
            // Definir ano atual no footer
            document.getElementById('current-year').textContent = new Date().getFullYear();
            
            // Carregar produtos iniciais
            renderizarProdutos(categoriaAtual);
            
            // Configurar tabs
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    // Atualizar estado visual das tabs
                    document.querySelectorAll('.tab-btn').forEach(b => {
                        b.setAttribute('aria-selected', 'false');
                        b.classList.remove('bg-primary-600', 'text-white');
                        b.classList.add('bg-white', 'text-gray-800', 'ring-1', 'ring-gray-200');
                    });
                    
                    this.setAttribute('aria-selected', 'true');
                    this.classList.remove('bg-white', 'text-gray-800', 'ring-1', 'ring-gray-200');
                    this.classList.add('bg-primary-600', 'text-white');
                    
                    // Carregar produtos da categoria selecionada
                    categoriaAtual = this.getAttribute('data-cat');
                    renderizarProdutos(categoriaAtual);
                });
            });
            
            // Configurar botão de promoção
            document.getElementById('add-promo').addEventListener('click', function() {
                adicionarAoCarrinho({
                    id: 100,
                    nome: "Combo Mami Família",
                    desc: "4 burgers + 4 refrigerantes",
                    preco: 14990
                });
            });
            
            // Configurar botões de finalizar pedido
            document.getElementById('finalizar').addEventListener('click', finalizarPedido);
            document.getElementById('sheet-finalizar').addEventListener('click', finalizarPedido);
            
            // Configurar carrinho flutuante
            document.getElementById('cart-open').addEventListener('click', abrirCarrinho);
            document.getElementById('sheet-close').addEventListener('click', fecharCarrinho);
            document.getElementById('sheet-backdrop').addEventListener('click', fecharCarrinho);
            
            // Configurar acessibilidade
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' && e.target.getAttribute('role') === 'button') {
                    e.preventDefault();
                    e.target.click();
                }
            });
        });

        // Renderizar produtos na tela
        function renderizarProdutos(categoria) {
            const container = document.getElementById('lista-produtos');
            container.innerHTML = '';
            
            produtos[categoria].forEach(produto => {
                const div = document.createElement('div');
                div.className = 'menu-item card rounded-xl bg-white p-4 flex gap-4';
                div.innerHTML = `
                    <div class="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden">
                        <img src="${produto.img}" alt="${produto.nome}" class="w-full h-full object-cover">
                    </div>
                    <div class="flex-1">
                        <h3 class="font-semibold">${produto.nome}</h3>
                        <p class="text-sm text-gray-600 mt-1">${produto.desc}</p>
                        <div class="flex items-center justify-between mt-2">
                            <span class="font-bold text-primary-600">Kz ${produto.preco.toLocaleString('pt-BR')}</span>
                            <button class="add-to-cart bg-primary-600 text-white rounded-lg px-3 py-1 text-sm hover:bg-primary-700 transition-colors focus-ring" data-id="${produto.id}" aria-label="Adicionar ${produto.nome} ao carrinho">
                                <i class="fa-solid fa-plus"></i> Add
                            </button>
                        </div>
                    </div>
                `;
                container.appendChild(div);
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

        // Funções do carrinho
        function adicionarAoCarrinho(produto) {
            const existente = carrinho.findIndex(item => item.id === produto.id);
            
            if (existente >= 0) {
                carrinho[existente].quantidade++;
            } else {
                carrinho.push({
                    ...produto,
                    quantidade: 1
                });
            }
            
            atualizarCarrinho();
            mostrarNotificacao(`${produto.nome} adicionado ao carrinho!`);
        }

        function removerDoCarrinho(id) {
            carrinho = carrinho.filter(item => item.id !== id);
            atualizarCarrinho();
        }

        function alterarQuantidade(id, novaQuantidade) {
            const index = carrinho.findIndex(item => item.id === id);
            
            if (index >= 0) {
                if (novaQuantidade <= 0) {
                    removerDoCarrinho(id);
                } else {
                    carrinho[index].quantidade = novaQuantidade;
                }
                
                atualizarCarrinho();
            }
        }

        function atualizarCarrinho() {
            const totalItens = carrinho.reduce((total, item) => total + item.quantidade, 0);
            const subtotal = carrinho.reduce((total, item) => total + (item.preco * item.quantidade), 0);
            
            // Atualizar contador flutuante
            document.getElementById('fab-count').textContent = totalItens;
            document.getElementById('fab-total').textContent = `Kz ${subtotal.toLocaleString('pt-BR')}`;
            
            // Mostrar/ocultar FAB
            document.getElementById('cart-fab').style.display = totalItens > 0 ? 'block' : 'none';
            
            // Atualizar subtotal principal
            document.getElementById('subtotal').textContent = `Kz ${subtotal.toLocaleString('pt-BR')}`;
            document.getElementById('sheet-total').textContent = `Kz ${subtotal.toLocaleString('pt-BR')}`;
            
            // Atualizar itens no carrinho (área principal)
            const containerPrincipal = document.getElementById('itens-carrinho');
            containerPrincipal.innerHTML = '';
            
            if (carrinho.length === 0) {
                containerPrincipal.innerHTML = '<p class="text-gray-500 text-center py-4">Seu carrinho está vazio</p>';
            } else {
                carrinho.forEach(item => {
                    const div = document.createElement('div');
                    div.className = 'flex items-center justify-between';
                    div.innerHTML = `
                        <div>
                            <p class="font-medium">${item.nome}</p>
                            <p class="text-sm text-gray-600">Kz ${item.preco.toLocaleString('pt-BR')} × ${item.quantidade}</p>
                        </div>
                        <div class="flex items-center gap-2">
                            <button class="qty-btn w-6 h-6 rounded-full bg-gray-200 text-sm hover:bg-gray-300 transition-colors" data-id="${item.id}" data-action="decrease" aria-label="Diminuir quantidade">
                                <i class="fa-solid fa-minus"></i>
                            </button>
                            <span>${item.quantidade}</span>
                            <button class="qty-btn w-6 h-6 rounded-full bg-gray-200 text-sm hover:bg-gray-300 transition-colors" data-id="${item.id}" data-action="increase" aria-label="Aumentar quantidade">
                                <i class="fa-solid fa-plus"></i>
                            </button>
                        </div>
                    `;
                    containerPrincipal.appendChild(div);
                });
            }
            
            // Atualizar itens no sheet
            const containerSheet = document.getElementById('sheet-itens');
            containerSheet.innerHTML = '';
            
            if (carrinho.length === 0) {
                containerSheet.innerHTML = '<p class="text-gray-500 text-center py-4">Seu carrinho está vazio</p>';
            } else {
                carrinho.forEach(item => {
                    const div = document.createElement('div');
                    div.className = 'flex items-center justify-between py-2 border-b border-gray-100';
                    div.innerHTML = `
                        <div class="flex-1">
                            <p class="font-medium">${item.nome}</p>
                            <p class="text-sm text-gray-600">Kz ${item.preco.toLocaleString('pt-BR')}</p>
                        </div>
                        <div class="flex items-center gap-2">
                            <button class="qty-btn w-6 h-6 rounded-full bg-gray-200 text-sm hover:bg-gray-300 transition-colors" data-id="${item.id}" data-action="decrease" aria-label="Diminuir quantidade">
                                <i class="fa-solid fa-minus"></i>
                            </button>
                            <span class="w-8 text-center">${item.quantidade}</span>
                            <button class="qty-btn w-6 h-6 rounded-full bg-gray-200 text-sm hover:bg-gray-300 transition-colors" data-id="${item.id}" data-action="increase" aria-label="Aumentar quantidade">
                                <i class="fa-solid fa-plus"></i>
                            </button>
                            <button class="remove-btn ml-2 text-red-500 hover:text-red-700" data-id="${item.id}" aria-label="Remover item">
                                <i class="fa-solid fa-trash"></i>
                            </button>
                        </div>
                    `;
                    containerSheet.appendChild(div);
                });
            }
            
            // Adicionar event listeners aos botões de quantidade
            document.querySelectorAll('.qty-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const id = parseInt(this.getAttribute('data-id'));
                    const action = this.getAttribute('data-action');
                    const item = carrinho.find(item => item.id === id);
                    
                    if (item) {
                        if (action === 'increase') {
                            alterarQuantidade(id, item.quantidade + 1);
                        } else if (action === 'decrease') {
                            alterarQuantidade(id, item.quantidade - 1);
                        }
                    }
                });
            });
            
            // Adicionar event listeners aos botões de remover
            document.querySelectorAll('.remove-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const id = parseInt(this.getAttribute('data-id'));
                    removerDoCarrinho(id);
                });
            });
        }

        function abrirCarrinho() {
            document.getElementById('sheet').classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }

        function fecharCarrinho() {
            document.getElementById('sheet').classList.add('hidden');
            document.body.style.overflow = 'auto';
        }

        function finalizarPedido() {
            const nome = document.getElementById('nome').value.trim() || 'Cliente';
            
            if (carrinho.length === 0) {
                mostrarNotificacao('Adicione itens ao carrinho primeiro!', 'error');
                return;
            }
            
            let mensagem = `Olá! Gostaria de fazer um pedido:\n\n*${nome}*\n\n`;
            
            carrinho.forEach(item => {
                mensagem += `• ${item.quantidade}x ${item.nome} - Kz ${(item.preco * item.quantidade).toLocaleString('pt-BR')}\n`;
            });
            
            const total = carrinho.reduce((soma, item) => soma + (item.preco * item.quantidade), 0);
            mensagem += `\n*Total: Kz ${total.toLocaleString('pt-BR')}*`;
            
            mensagem += `\n\n*Endereço de entrega:*\n[Por favor, informe seu endereço completo]`;
            
            const url = `https://wa.me/244946043956?text=${encodeURIComponent(mensagem)}`;
            window.open(url, '_blank');
        }

        function mostrarNotificacao(mensagem, tipo = 'sucesso') {
            // Criar elemento de notificação
            const notificacao = document.createElement('div');
            notificacao.className = `fixed bottom-24 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-full shadow-soft text-white font-medium z-50 transition-all opacity-0 ${
                tipo === 'sucesso' ? 'bg-green-500' : 'bg-red-500'
            }`;
            notificacao.textContent = mensagem;
            document.body.appendChild(notificacao);
            
            // Animar entrada
            setTimeout(() => {
                notificacao.classList.remove('opacity-0');
                notificacao.classList.add('opacity-100');
            }, 10);
            
            // Animar saída após 3 segundos
            setTimeout(() => {
                notificacao.classList.remove('opacity-100');
                notificacao.classList.add('opacity-0');
                
                // Remover elemento após animação
                setTimeout(() => {
                    document.body.removeChild(notificacao);
                }, 300);
            }, 3000);
        }