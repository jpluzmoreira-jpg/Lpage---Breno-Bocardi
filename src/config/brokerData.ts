export const brokerData = {
  // ==========================================
  // 1. SEO & CONFIGURAÇÕES GERAIS
  // ==========================================
  seo: {
    title: "Breno Bocardi | Especialista em Investimentos no Litoral de SC",
    description: "Invista com segurança em Porto Belo e Itapema. Consultoria especializada em imóveis de alto padrão e rentabilidade.",
    keywords: "investimento imobiliário, porto belo, itapema, santa catarina, imóveis de luxo, breno bocardi, o novo imobiliário",
    ogImage: "https://lh3.googleusercontent.com/d/1O5r-zZq676_7wYjZ8IqD54134-2eXf-5=w1000", // Imagem que aparece ao compartilhar o link
    favicon: "/vite.svg" // Caminho para o favicon na pasta public
  },

  theme: {
    // Cores principais do corretor (Pode alterar para a identidade visual de cada um)
    primary: "#cda434", // Dourado
    primaryHover: "#b58e2a", // Dourado escuro
    background: "#050505", // Fundo principal
    cardBg: "#111111", // Fundo dos cards
    text: "#ffffff",
    fontPrimary: "'Inter', sans-serif",
    fontSecondary: "'Playfair Display', serif"
  },

  // ==========================================
  // 2. DADOS DO CORRETOR
  // ==========================================
  broker: {
    name: "Breno Bocardi",
    creci: "73645",
    phone: "5547992486758", // Apenas números, com código do país (55) e DDD
    email: "contato@brenobocardi.com.br",
    instagram: "https://instagram.com/brenobocardi",
    whatsappMessage: "Olá Breno! Gostaria de uma consultoria para investir no litoral de SC.",
    // A imagem principal do corretor (Hero e Sobre)
    profileImage: "https://lh3.googleusercontent.com/d/1O5r-zZq676_7wYjZ8IqD54134-2eXf-5=w1000",
    // Logos (se houver, usar links públicos ou caminhos da pasta /public)
    logoSymbol: "", // Ex: "/logo-simbolo.png"
    logoFull: "",   // Ex: "/logo-completa.png"
    
    bio: {
      title: "Especialista em Rentabilidade e Segurança",
      paragraphs: [
        "Com anos de experiência no mercado imobiliário de alto padrão do litoral catarinense, minha missão é conectar investidores às melhores oportunidades de Porto Belo e Itapema.",
        "Não vendo apenas imóveis; ofereço uma consultoria estratégica baseada em dados, tendências de mercado e análise de valorização. Meu foco é garantir que seu patrimônio cresça com segurança e liquidez.",
        "Faço parte d'O Novo Imobiliário, uma empresa que redefine os padrões de atendimento e inteligência de mercado na região."
      ]
    }
  },

  // ==========================================
  // 3. CONTEÚDO DAS SEÇÕES
  // ==========================================
  
  // Seção 1: Hero (Oportunidade)
  hero: {
    badge: "Oportunidade Exclusiva",
    headline: "Multiplique seu Patrimônio no Litoral que Mais Valoriza no Brasil",
    subheadline: "Descubra as oportunidades ocultas em Porto Belo e Itapema com uma consultoria especializada e focada em alto rendimento.",
    ctaText: "Quero uma Consultoria Gratuita",
    backgroundImage: "https://lh3.googleusercontent.com/d/1QktlNJvfwQvxKeqGAm8YKTh-yzOUoPJw"
  },

  // Seção 2: Por que investir agora? (Bento Grid)
  stats: [
    { highlight: "1.3 Bi", text: "VGV em 2025" },
    { highlight: "+3.000", text: "Investidores" },
    { highlight: "132%", text: "Valorização (2 anos)" },
    { highlight: "4 Países", text: "Sede em" }
  ],
  benefits: {
    title: "Por que investir no Litoral de SC agora?",
    cards: [
      {
        title: "Valorização Acima da Média",
        description: "Itapema e Porto Belo lideram os índices de valorização imobiliária no Brasil, superando a média nacional ano após ano.",
        icon: "TrendingUp" // Nome do ícone do Lucide React
      },
      {
        title: "Desenvolvimento Acelerado",
        description: "Novos acessos, infraestrutura de ponta e projetos urbanísticos estão transformando a região em um polo de luxo.",
        icon: "Building2"
      },
      {
        title: "Segurança Jurídica",
        description: "Trabalhamos apenas com construtoras consolidadas, garantindo entrega no prazo e documentação impecável.",
        icon: "ShieldCheck"
      },
      {
        title: "Alta Liquidez",
        description: "Demanda crescente por locação de temporada e revenda, garantindo que seu ativo seja facilmente convertido em capital.",
        icon: "BadgeDollarSign"
      }
    ]
  },

  // Seção 3: Empreendimento Destaque (Nova Seção)
  featuredProperty: {
    show: true, // Permite ocultar a seção se o corretor não tiver um destaque no momento
    badge: "Lançamento Exclusivo",
    title: "Residencial Magnifique",
    location: "Meia Praia, Itapema - SC",
    description: "Um projeto arquitetônico sem precedentes, a apenas 100 metros do mar. Plantas inteligentes, área de lazer resort e condições de pagamento direto com a construtora em até 100 meses.",
    price: "A partir de R$ 1.850.000",
    features: ["4 Suítes", "3 Vagas", "Vista Mar", "Lazer Completo"],
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    ctaText: "Receber Material Completo"
  },

  // Seção 4: Masterplan / Região
  region: {
    title: "Transformações Arquitetônicas e o",
    highlight: "Futuro",
    description: "A cidade está prestes a passar por uma das maiores transformações urbanísticas do Brasil. O Masterplan do Perequê trará um novo padrão de vida e infraestrutura, elevando o patamar da região e redefinindo o luxo no litoral catarinense.",
    features: [
      {
        title: "Novo Píer Turístico",
        description: "Estrutura de classe mundial para receber embarcações, integrando lazer e fomentando o turismo de alto padrão.",
        icon: "Anchor"
      },
      {
        title: "Revitalização da Orla",
        description: "Alargamento da faixa de areia e um novo calçadão moderno, valorizando exponencialmente os imóveis frente-mar.",
        icon: "Map"
      },
      {
        title: "Parques e Mobilidade",
        description: "Criação de novas áreas verdes, ciclovias e vias planejadas para garantir sustentabilidade e qualidade de vida.",
        icon: "TreePine"
      }
    ],
    opportunityBox: {
      title: "A Janela de Oportunidade",
      description: "Investir agora significa entrar antes da conclusão destas grandes obras. A valorização imobiliária projetada para os próximos anos criará um cenário de altíssima rentabilidade para os investidores pioneiros."
    },
    masterplanLink: "https://drive.google.com/file/d/1tOc8_vH3sS6NEFSdVCdTtiVsxmMCMsuG/view?usp=sharing",
    videoIds: [
      "1G7ish7AKz3Xl6A9KPYRHHuJZf9KTe3Sr",
      "1sCcHYPAJykTVFbNjAFJpoNzrMpRS4pb4",
      "1k3f7n6LaUNqM9hf9io--ZVQ6P-uI5XH3"
    ]
  },

  // Seção 5: Autoridade da Empresa (Nova Seção)
  company: {
    show: true,
    name: "O Novo Imobiliário",
    title: "A Força por Trás dos Seus Investimentos",
    description: "Como associado d'O Novo Imobiliário, levo até você a inteligência de mercado da imobiliária mais inovadora do sul do país. Temos acesso antecipado a lançamentos, negociações exclusivas e um corpo jurídico especializado.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    stats: [
      { value: "R$ 2B+", label: "Em VGV Gerenciado" },
      { value: "50+", label: "Construtoras Parceiras" },
      { value: "100%", label: "Foco no Investidor" }
    ]
  },

  // Seção 6: Depoimentos
  testimonials: {
    title: "O que dizem nossos investidores",
    items: [
      {
        name: "Carlos Eduardo",
        role: "Investidor de São Paulo",
        text: "A consultoria do Breno mudou minha visão sobre o mercado de SC. Ele me apresentou oportunidades que eu não encontraria sozinho. Já estou no meu terceiro imóvel com ele.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      },
      {
        name: "Mariana Silva",
        role: "Empresária",
        text: "Profissionalismo impecável. O Breno não empurra imóveis, ele entende o seu perfil e busca o ativo que faz sentido para a sua carteira. Recomendo de olhos fechados.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      },
      {
        name: "Roberto Almeida",
        role: "Médico",
        text: "Segurança foi o que me fez fechar negócio. Todo o processo foi transparente, desde a análise de viabilidade até a assinatura do contrato. Excelente trabalho.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      }
    ]
  },

  // Seção 7: CTA Final
  cta: {
    title: "Pronto para dar o próximo passo?",
    subtitle: "Agende uma reunião estratégica de 30 minutos. Sem compromisso, apenas dados e oportunidades reais.",
    buttonText: "Falar com Breno no WhatsApp"
  }
};
