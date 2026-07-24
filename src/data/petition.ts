// ─── Conteúdo do abaixo-assinado (Saúde do Noroeste Paulista) ─────────

export interface DefendItem {
  icon: string;
  title: string;
  body: string;
}

export const PETITION_HERO = {
  eyebrow: 'Abaixo-assinado',
  title: 'Mais recursos para a saúde do Noroeste Paulista',
  lead: 'Nossa região atende milhares de pessoas todos os dias. Brasília precisa fazer mais.',
  body: 'São José do Rio Preto é referência em saúde para todo o Noroeste Paulista. Hospital de Base, Famerp, Santas Casas, hospitais municipais e outras instituições recebem diariamente pacientes de dezenas de cidades. Essa estrutura precisa de mais recursos federais para ampliar atendimentos, reduzir filas e continuar salvando vidas.',
  cta: 'Por mais investimentos federais na saúde de Rio Preto e do Noroeste Paulista.',
};

export const DEFEND_ITEMS: DefendItem[] = [
  {
    icon: 'hospital',
    title: 'Fortalecer nossos hospitais',
    body: 'Hospital de Base, Famerp, Santas Casas, hospitais municipais e filantrópicos.',
  },
  {
    icon: 'queue',
    title: 'Reduzir filas',
    body: 'Mais consultas, exames, cirurgias e atendimento especializado.',
  },
  {
    icon: 'structure',
    title: 'Ampliar a estrutura',
    body: 'Mais leitos, equipamentos, tecnologia e profissionais.',
  },
  {
    icon: 'city',
    title: 'Fortalecer os municípios',
    body: 'Mais recursos para atenção básica, prevenção e atendimento regional.',
  },
];

export const EDINHO_HEALTH = {
  title: 'Edinho já mostrou que saúde é prioridade',
  paragraphs: [
    'Edinho Araújo foi prefeito de São José do Rio Preto por 16 anos e tem uma trajetória marcada pelo fortalecimento da saúde pública.',
    'Durante sua gestão, foi entregue o Hospital Municipal Dr. Domingo Marcolino Braile, ampliando o atendimento, especialmente na Região Norte da cidade.',
    'Como deputado federal, Edinho também trabalhou pela busca de recursos e pelo fortalecimento das principais instituições de saúde da região.',
  ],
  commitments: [
    'Fortalecer o Hospital de Base e a Famerp.',
    'Apoiar Santas Casas e hospitais filantrópicos.',
    'Buscar mais recursos para os municípios.',
    'Reduzir filas de exames e cirurgias.',
  ],
  note: 'Rio Preto também conquistou reconhecimento pela qualidade de suas políticas públicas e chegou a figurar entre os destaques estaduais na área de Saúde e Bem-Estar.',
  closing: 'Quem já fez, sabe como fazer mais.',
};

// Meta simbólica de assinaturas (sem backend — barra de progresso motivacional).
export const PETITION_GOAL = {
  current: 8420,
  target: 15000,
};
