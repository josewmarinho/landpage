// ─── Conteúdo da landing page (todas as copies em um só lugar) ─────────

export interface StatItem {
  value: number;
  suffix?: string;
  label: string;
}

export interface ResultItem {
  tag: string;
  title: string;
  highlight: string;
  body: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  body: string;
}

export interface ProposalItem {
  icon: string;
  title: string;
  points: string[];
}

export const HERO = {
  name: 'Edinho Araújo',
  role: 'Deputado Federal',
  number: '2525',
  slogan: 'A força do Interior em Brasília.',
  subSlogan: 'Quem já fez, sabe como fazer mais.',
  bio: [
    '54 anos de vida pública.',
    '16 anos prefeito de Rio Preto.',
    '4 mandatos de deputado federal.',
    '3 mandatos de deputado estadual.',
    'Ex-ministro de Portos.',
  ],
  paragraph:
    'Edinho conhece o Interior. Conhece Brasília. E sabe transformar experiência, diálogo e trabalho em resultado.',
  closing: 'Para Deputado Federal, vote Edinho 2525.',
};

export const STATS: StatItem[] = [
  { value: 54, label: 'anos de vida pública' },
  { value: 16, label: 'anos prefeito de Rio Preto' },
  { value: 4, suffix: 'x', label: 'deputado federal' },
  { value: 3, suffix: 'x', label: 'deputado estadual' },
  { value: 12, label: 'vitórias eleitorais consecutivas' },
];

export const RESULTS: ResultItem[] = [
  {
    tag: 'Infraestrutura',
    title: 'Ponte Rodoferroviária',
    highlight: '28 anos de luta até virar realidade.',
    body: 'A ponte sobre o Rio Paraná ligou São Paulo ao Mato Grosso do Sul, aproximou o Centro-Oeste do Porto de Santos e substituiu a antiga travessia por balsas. Edinho acreditou. Persistiu. A obra saiu do papel.',
  },
  {
    tag: 'Rodovias',
    title: 'Euclides da Cunha',
    highlight: 'Mais de 180 km duplicados. E sem pedágio.',
    body: 'Uma ligação mais segura entre Mirassol, Votuporanga, Fernandópolis, Jales, Santa Fé do Sul, Rubineia e toda a região.',
  },
  {
    tag: 'Mobilidade',
    title: 'BR-153',
    highlight: 'Uma conquista histórica para Rio Preto.',
    body: 'Duplicação do trecho urbano, novos viadutos, acessos, passarelas e vias marginais. Mais mobilidade, mais segurança e menos congestionamento.',
  },
  {
    tag: 'Mobilidade',
    title: 'Anel Viário',
    highlight: '35 km. Cerca de 100 bairros interligados.',
    body: 'Uma obra que ajudou a tirar o trânsito da região central, encurtou caminhos e abriu novas frentes de desenvolvimento para Rio Preto.',
  },
  {
    tag: 'Saúde',
    title: 'Hospital Municipal',
    highlight: 'Saúde mais perto de quem precisa.',
    body: 'Edinho entregou uma nova estrutura hospitalar na Região Norte, ampliando a capacidade de atendimento de Rio Preto.',
  },
  {
    tag: 'Educação',
    title: 'Instituto Federal + UFSCar',
    highlight: 'Mais educação. Mais futuro.',
    body: 'Edinho trabalhou pela implantação do Instituto Federal em Rio Preto e abriu caminhos para ampliar a presença do ensino superior público e gratuito na cidade.',
  },
];

export const TIMELINE: TimelineItem[] = [
  {
    year: '22 anos',
    title: 'A primeira eleição',
    body: 'Edinho disputou sua primeira eleição em Santa Fé do Sul.',
  },
  {
    year: '27 anos',
    title: 'Eleito prefeito',
    body: 'Começava ali uma trajetória que atravessaria mais de cinco décadas.',
  },
  {
    year: '1983',
    title: 'Deputado Estadual',
    body: 'Primeiro de três mandatos na Assembleia Legislativa.',
  },
  {
    year: '1995',
    title: 'Deputado Federal',
    body: 'Edinho chega a Brasília. Ao longo de sua trajetória, seria eleito deputado federal quatro vezes.',
  },
  {
    year: '2001',
    title: 'Prefeito de Rio Preto',
    body: 'Começa o primeiro de quatro mandatos à frente da cidade.',
  },
  {
    year: '2005',
    title: 'Primeiro prefeito reeleito da história de Rio Preto',
    body: 'Ao final dos dois primeiros mandatos consecutivos, eram centenas de obras entregues e uma cidade em transformação.',
  },
  {
    year: '2015',
    title: 'Ministro de Portos',
    body: 'Depois de administrar municípios, atuar no Estado e representar São Paulo no Congresso, Edinho chega ao Governo Federal.',
  },
  {
    year: '2017',
    title: 'Rio Preto chama Edinho de volta',
    body: 'Eleito novamente prefeito, já no primeiro turno.',
  },
  {
    year: '2020',
    title: 'Reeleito no primeiro turno',
    body: 'Começa seu quarto mandato em Rio Preto.',
  },
  {
    year: '2026',
    title: 'Uma nova missão',
    body: 'Levar novamente a força do Interior para Brasília. Edinho Araújo. Deputado Federal 2525.',
  },
];

export const VALUES = ['Ouvir', 'Dialogar', 'Articular', 'Entregar'];

export const PROPOSALS: ProposalItem[] = [
  {
    icon: 'health',
    title: 'Saúde mais forte',
    points: [
      'Buscar mais recursos para Rio Preto e para os municípios do Interior.',
      'Fortalecer o Hospital de Base, a Famerp, Santas Casas e hospitais municipais.',
      'Reduzir filas de exames e cirurgias e ampliar o atendimento regional.',
    ],
  },
  {
    icon: 'education',
    title: 'Educação e oportunidades',
    points: [
      'Consolidar a UFSCar em Rio Preto.',
      'Ampliar o Instituto Federal e defender a Famerp.',
      'Fortalecer o ensino técnico, a pesquisa, a inovação e a formação para as novas profissões.',
    ],
  },
  {
    icon: 'agro',
    title: 'Força para o agro',
    points: [
      'Crédito, seguro rural, tecnologia, melhores estradas e conectividade.',
      'Menos burocracia e mais segurança para quem trabalha e produz.',
      'Edinho conhece o campo porque suas próprias raízes estão nele.',
    ],
  },
  {
    icon: 'city',
    title: 'Municípios mais fortes',
    points: [
      'Mais recursos chegando às cidades e menos burocracia para as prefeituras.',
      'Mais força para os pequenos municípios.',
      'Diálogo com prefeitos e vereadores independentemente de partido.',
    ],
  },
  {
    icon: 'work',
    title: 'Emprego e desenvolvimento',
    points: [
      'Atrair investimentos e fortalecer pequenas empresas.',
      'Apoiar comércio, indústria e serviços; investir em infraestrutura e logística.',
      'Gerar oportunidades para que nossos jovens estudem, trabalhem e construam seu futuro no Interior.',
    ],
  },
];

export const WHY_EDINHO = {
  title: 'Brasília não é lugar para aprender o caminho.',
  subtitle: 'É lugar para chegar preparado.',
  points: [
    'Já conhece o Congresso.',
    'Conhece os ministérios.',
    'Conhece os programas federais.',
    'Conhece prefeitos e lideranças do Interior.',
    'E, principalmente, conhece as necessidades de quem vive aqui.',
  ],
  closing: 'Não precisa começar do zero. Está preparado desde o primeiro dia.',
};

export const PARTICIPATE_OPTIONS = [
  { emoji: '📲', title: 'Quero acompanhar', desc: 'Receber agenda, notícias, vídeos e conteúdos de Edinho.' },
  { emoji: '🤝', title: 'Quero participar', desc: 'Ser avisado sobre encontros e atividades na minha região.' },
  { emoji: '💪', title: 'Quero ajudar', desc: 'Participar voluntariamente das ações da campanha.' },
  {
    emoji: '📍',
    title: 'Quero Edinho na minha cidade',
    desc: 'Ajudar a aproximar Edinho das pessoas e das demandas do meu município.',
  },
];
