// Zurc — projetos conceituais. Não representam clientes, métricas ou resultados reais.
export const projects = [
  {
    id: "interface-01",
    slug: "interface-01",
    index: "01",
    label: "ESTUDO / 01",
    title: "Interface 01",
    category: "Produto digital",
    description: "Exploração de uma interface modular para tornar uma operação complexa mais legível.",
    technologies: ["React", "Design system", "Acessibilidade"],
    result: "Estudo conceitual — sem resultado comercial atribuído.",
    image: "/manus-storage/zurc-project-interface_0c008069.png",
  },
  {
    id: "automation-02",
    slug: "automacao-02",
    index: "02",
    label: "CONCEITO / 02",
    title: "Automação 02",
    category: "Operações",
    description: "Conceito de fluxo para reduzir transições manuais entre etapas de uma rotina.",
    technologies: ["Mapeamento", "Integrações", "Documentação"],
    result: "Estudo conceitual — sem resultado comercial atribuído.",
    image: "/manus-storage/zurc-project-automation_910b2b21.png",
  },
  {
    id: "system-03",
    slug: "sistema-03",
    index: "03",
    label: "EXPLORAÇÃO / 03",
    title: "Sistema 03",
    category: "Sistemas digitais",
    description: "Investigação visual de um sistema de informação com hierarquia e sinais de decisão.",
    technologies: ["Arquitetura", "Prototipação", "Conteúdo"],
    result: "Exploração conceitual — sem resultado comercial atribuído.",
    image: "/manus-storage/zurc-project-system_abe06d2a.png",
  },
];

export const getProjectBySlug = (slug: string) => projects.find((project) => project.slug === slug);
