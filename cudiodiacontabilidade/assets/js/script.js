// Calculadora de Custos
        document.getElementById('calculateBtn').addEventListener('click', function() {
            const companyType = document.getElementById('companyType').value;
            const partners = parseInt(document.getElementById('partners').value);
            const capital = parseInt(document.getElementById('capital').value);
            
            // Cálculos fictícios baseados nos inputs
            let baseCost = 0;
            
            switch(companyType) {
                case 'unipessoal':
                    baseCost = 45000;
                    break;
                case 'lda':
                    baseCost = 45000;
                    break;
                case 'sa':
                    baseCost = 45000;
                    break;
                case 'eirl':
                    baseCost = 45000;
                    break;
                default:
                    baseCost = 45000;
            }
            
            // Adicionar custo por sócio
            const partnerCost = partners * 25000;
            
            // Adicionar percentual sobre o capital
            const capitalCost = capital * 0.02;
            
            // Custo total
            const totalCost = baseCost + partnerCost + capitalCost;
            
            // Formatar para moeda kz
            const formattedCost = new Intl.NumberFormat('pt-AO', {
                style: 'currency',
                currency: 'AOA',
                minimumFractionDigits: 0
            }).format(totalCost);
            
            // Mostrar resultado
            document.getElementById('totalCost').textContent = formattedCost;
            document.getElementById('result').classList.remove('hidden');
            
            // Animação
            document.getElementById('result').classList.add('fade-in');
        });

        // Animação para os documentos ao passar o mouse
        const documentItems = document.querySelectorAll('.document-item');
        documentItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                const number = this.querySelector('span:first-child');
                number.classList.add('animate-bounce');
            });
            
            item.addEventListener('mouseleave', function() {
                const number = this.querySelector('span:first-child');
                number.classList.remove('animate-bounce');
            });
        });
  