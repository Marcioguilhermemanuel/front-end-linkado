// ===== Dados dos serviços =====
const SERVICOS = {
    construcao: [
      { 
        id: 'reformas', 
        nome: 'Reformas e Acabamentos', 
        desc: 'Reformas completas, pinturas, revestimentos e acabamentos de alta qualidade.',
        icon: 'fas fa-paint-roller',
        img: 'assets/image/construcao.png'
      },
      { 
        id: 'tetos-falsos', 
        nome: 'Tetos Falsos e Divisórias', 
        desc: 'Instalação de tetos falsos em gesso, PVC e divisórias para ambientes.',
        icon: 'fas fa-th-large',
        img: 'assets/image/tetofalso.png'
      },
      { 
        id: 'eletrica-hidraulica', 
        nome: 'Elétrica e Hidráulica', 
        desc: 'Instalações elétricas, canalização e reparos hidráulicos profissionais.',
        icon: 'fas fa-bolt',
        img: 'assets/image/ele.png'
      },
    ],
    climatizacao: [
      { 
        id: 'ar-condicionado', 
        nome: 'Ar Condicionado Residencial', 
        desc: 'Instalação, manutenção e reparo de sistemas de climatização.',
        icon: 'fas fa-snowflake',
        img: 'assets/image/manut-ac.png'
      },
      { 
        id: 'refrigeracao-auto', 
        nome: 'Refrigeração Automotiva', 
        desc: 'Serviços especializados em ar condicionado automotivo e carga de gás.',
        icon: 'fas fa-car',
        img: 'assets/image/Reparacao.png'
      },
      { 
        id: 'camaras-frias', 
        nome: 'Câmaras Frigoríficas', 
        desc: 'Instalação e manutenção de sistemas de refrigeração comercial.',
        icon: 'fas fa-thermometer-half',
        img: 'assets/image/limpesa-de-ac.png'
      },
    ],
    digital: [
      { 
        id: 'design-grafico', 
        nome: 'Design Gráfico', 
        desc: 'Criação de logotipos, materiais gráficos e identidade visual completa.',
        icon: 'fas fa-palette',
        img: 'assets/image/desigr.png'
      },
      { 
        id: 'desenvolvimento-web', 
        nome: 'Desenvolvimento Web', 
        desc: 'Criação de sites, sistemas web e aplicativos móveis personalizados.',
        icon: 'fas fa-code',
        img: 'assets/image/developer.png'
      },
      { 
        id: 'marketing-digital', 
        nome: 'Marketing Digital', 
        desc: 'Gestão de redes sociais, tráfego pago e estratégias digitais.',
        icon: 'fas fa-chart-line',
        img: 'assets/image/marketing.png'
      },
    ],
    educacao: [
      { 
        id: 'reforco-escolar', 
        nome: 'Reforço Escolar', 
        desc: 'Aulas de reforço para todas as disciplinas e níveis de ensino.',
        icon: 'fas fa-chalkboard-teacher',
        img: 'assets/image/aulas.png'
      },
      { 
        id: 'preparatorio-exames', 
        nome: 'Preparatório para Exames', 
        desc: 'Preparação intensiva para vestibulares e exames de admissão.',
        icon: 'fas fa-graduation-cap',
        img: 'assets/image/aulas-1.png'
      },
      { 
        id: 'aulas-domicilio', 
        nome: 'Aulas ao Domicílio', 
        desc: 'Ensino personalizado no conforto da sua casa.',
        icon: 'fas fa-home',
        img: 'assets/image/aulas-2.png'
      },
    ],
    manutencao: [
      { 
        id: 'maquinas-lavar', 
        nome: 'Máquinas de Lavar', 
        desc: 'Diagnóstico, reparo e manutenção de máquinas de lavar roupas.',
        icon: 'fas fa-cog',
        img: 'assets/image/maquina.png'
      },
      { 
        id: 'eletrodomesticos', 
        nome: 'Eletrodomésticos Gerais', 
        desc: 'Conserto e manutenção de diversos tipos de eletrodomésticos.',
        icon: 'fas fa-wrench',
        img: 'assets/image/reparacao-2.png'
      },
    ]
  };

  // ===== Estado global =====
  let categoriaAtiva = 'construcao';

  // ===== Funções auxiliares =====
  function renderizarServicos(categoria) {
    const container = document.getElementById('lista-servicos');
    const servicos = SERVICOS[categoria];

    if (!servicos || servicos.length === 0) {
      container.innerHTML = `
        <div class="text-center py-12">
          <i class="fas fa-tools text-6xl text-brand-light mb-6"></i>
          <p class="text-xl text-brand-light">Serviços em breve nesta categoria!</p>
        </div>
      `;
      return;
    }

    const html = servicos.map(servico => `
      <div class="service-card group rounded-[var(--radius)] bg-white hover:bg-gray-50 border border-gray-200 hover:border-brand-accent/30 transition-all duration-300 overflow-hidden shadow-card hover:shadow-glow">
        <div class="aspect-[16/10] overflow-hidden">
          <img src="${servico.img}" alt="${servico.nome}" 
               class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
               loading="lazy" />
        </div>
        <div class="p-6">
          <div class="flex items-center gap-4 mb-4">
            <div class="service-icon w-12 h-12 rounded-xl bg-gradient-to-br from-brand-accent to-brand-success grid place-content-center">
              <i class="${servico.icon} text-xl text-white"></i>
            </div>
            <h3 class="font-semibold text-xl text-brand-primary flex-1">${servico.nome}</h3>
          </div>
          <p class="text-brand-light mb-6 leading-relaxed">${servico.desc}</p>
          <div class="flex gap-3">
            <button onclick="solicitarOrcamento('${servico.nome}')" 
                    class="flex-1 px-4 py-3 rounded-xl bg-brand-accent hover:bg-brand-accent/90 text-white font-semibold transition-all duration-200 focus-visible:focus-ring">
              <i class="fas fa-calculator mr-2"></i>Orçar Serviço
            </button>
            <button onclick="saberMais('${servico.nome}')" 
                    class="px-4 py-3 rounded-xl bg-white hover:bg-gray-50 border border-brand-primary/20 hover:border-brand-primary text-brand-primary font-semibold transition-all duration-200 focus-visible:focus-ring">
              <i class="fas fa-info-circle"></i>
            </button>
          </div>
        </div>
      </div>
    `).join('');

    container.innerHTML = html;
  }

  function alterarCategoria(categoria) {
    if (categoriaAtiva === categoria) return;
    
    categoriaAtiva = categoria;
    
    // Atualizar botões
    document.querySelectorAll('.tab-btn').forEach(btn => {
      const cat = btn.dataset.cat;
      if (cat === categoria) {
        btn.classList.remove('bg-white', 'hover:bg-gray-50', 'border', 'border-brand-primary/20', 'text-brand-primary');
        btn.classList.add('bg-brand-primary', 'text-white');
        btn.setAttribute('aria-selected', 'true');
      } else {
        btn.classList.remove('bg-brand-primary', 'text-white');
        btn.classList.add('bg-white', 'hover:bg-gray-50', 'border', 'border-brand-primary/20', 'text-brand-primary');
        btn.setAttribute('aria-selected', 'false');
      }
    });
    
    renderizarServicos(categoria);
  }

  function solicitarOrcamento(servico) {
    const nome = document.getElementById('nome-cliente')?.value?.trim() || '';
    const telefone = document.getElementById('telefone-cliente')?.value?.trim() || '';
    
    let mensagem = `🔧 *VERSA SERVIÇOS* - Solicitação de Orçamento\n\n`;
    
    if (nome) mensagem += `👤 *Cliente:* ${nome}\n`;
    if (telefone) mensagem += `📞 *Telefone:* ${telefone}\n`;
    
    mensagem += `\n🛠️ *Serviço de Interesse:* ${servico}\n\n`;
    mensagem += `📝 *Mensagem:*\nOlá! Gostaria de solicitar um orçamento para o serviço "${servico}". \n\nPor favor, entrem em contato comigo para mais detalhes.\n\n`;
    mensagem += `Obrigado! 🙏`;

    const whatsappUrl = `https://wa.me/244946043956?text=${encodeURIComponent(mensagem)}`;
    window.open(whatsappUrl, '_blank');
  }

  function saberMais(servico) {
    let mensagem = `🔧 *VERSA SERVIÇOS* - Informações sobre Serviço\n\n`;
    mensagem += `🛠️ *Serviço:* ${servico}\n\n`;
    mensagem += `📝 Olá! Gostaria de saber mais detalhes sobre o serviço "${servico}".\n\n`;
    mensagem += `Podem me fornecer mais informações?\n\n`;
    mensagem += `Obrigado! 🙏`;

    const whatsappUrl = `https://wa.me/244946043956?text=${encodeURIComponent(mensagem)}`;
    window.open(whatsappUrl, '_blank');
  }

  function enviarOrcamentoRapido() {
    const nome = document.getElementById('nome-cliente').value.trim();
    const telefone = document.getElementById('telefone-cliente').value.trim();
    const servico = document.getElementById('servico-interesse').value;
    
    if (!nome) {
      alert('Por favor, informe seu nome.');
      document.getElementById('nome-cliente').focus();
      return;
    }
    
    if (!telefone) {
      alert('Por favor, informe seu telefone.');
      document.getElementById('telefone-cliente').focus();
      return;
    }
    
    if (!servico) {
      alert('Por favor, selecione um serviço.');
      document.getElementById('servico-interesse').focus();
      return;
    }

    let mensagem = `🔧 *VERSA SERVIÇOS* - Solicitação de Orçamento\n\n`;
    mensagem += `👤 *Cliente:* ${nome}\n`;
    mensagem += `📞 *Telefone:* ${telefone}\n`;
    mensagem += `🛠️ *Serviço:* ${document.getElementById('servico-interesse').selectedOptions[0].text}\n\n`;
    mensagem += `📝 *Mensagem:*\nOlá! Preenchi o formulário no site e gostaria de solicitar um orçamento.\n\n`;
    mensagem += `Por favor, entrem em contato comigo o mais breve possível.\n\n`;
    mensagem += `Obrigado! 🙏`;

    const whatsappUrl = `https://wa.me/244946043956?text=${encodeURIComponent(mensagem)}`;
    window.open(whatsappUrl, '_blank');
    
    // Limpar formulário
    document.getElementById('nome-cliente').value = '';
    document.getElementById('telefone-cliente').value = '';
    document.getElementById('servico-interesse').value = '';
    
    // Feedback
    const btn = document.getElementById('enviar-orcamento');
    btn.innerHTML = '<i class="fas fa-check mr-2"></i>Enviado com sucesso!';
    btn.classList.remove('bg-gradient-to-r', 'from-brand-accent', 'to-brand-success');
    btn.classList.add('bg-green-500');
    setTimeout(() => {
      btn.innerHTML = '<i class="fab fa-whatsapp text-xl"></i><span>Enviar para WhatsApp</span><i class="fas fa-arrow-right"></i>';
      btn.classList.remove('bg-green-500');
      btn.classList.add('bg-gradient-to-r', 'from-brand-accent', 'to-brand-success');
    }, 3000);
  }

  // ===== Event Listeners =====
  document.addEventListener('DOMContentLoaded', function() {
    // Renderizar serviços iniciais
    renderizarServicos(categoriaAtiva);

    // Tabs do catálogo
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => alterarCategoria(btn.dataset.cat));
    });

    // CTA principal
    document.getElementById('cta-orcamento').addEventListener('click', (e) => {
      e.preventDefault();
      document.getElementById('contato').scrollIntoView({ behavior: 'smooth' });
    });

    // Botão de enviar orçamento
    document.getElementById('enviar-orcamento').addEventListener('click', enviarOrcamentoRapido);

    // Links âncora suaves
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href.startsWith('#') && href.length > 1) {
          const target = document.querySelector(href);
          if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      });
    });

    // Melhorar acessibilidade dos inputs
    const inputs = document.querySelectorAll('input, select');
    inputs.forEach(input => {
      input.addEventListener('focus', function() {
        this.parentElement.classList.add('ring-2', 'ring-brand-accent/20');
      });
      
      input.addEventListener('blur', function() {
        this.parentElement.classList.remove('ring-2', 'ring-brand-accent/20');
      });
    });
  });

  // Tornar funções globais para onclick
  window.solicitarOrcamento = solicitarOrcamento;
  window.saberMais = saberMais;

  // Animações de scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Aplicar animação a elementos
  document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.service-card, .shadow-card');
    animatedElements.forEach((el, index) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = `all 0.6s ease ${index * 0.1}s`;
      observer.observe(el);
    });
  });