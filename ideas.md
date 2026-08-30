# Direção de design — Zurc Agency

## Abordagens consideradas

### Abordagem 1 — Arquivo de precisão
Uma direção editorial suíça, preto e branco, com vermelho-sinal, tipografia de alto contraste e composição assimétrica. A interface se comporta como um arquivo de sistemas: clara, silenciosa e precisa.

**Probability:** 0.07

### Abordagem 2 — Oficina de matéria
Uma leitura mais tátil e brutalista, com texturas de papel, blocos de informação e ritmo de catálogo impresso. A tecnologia aparece como objeto construído, não como promessa abstrata.

**Probability:** 0.04

### Abordagem 3 — Sinal noturno
Uma direção escura e mais atmosférica, usando grandes campos pretos, acentos vermelhos e animações de sinal. O foco seria criar uma presença digital mais intensa e cinematográfica.

**Probability:** 0.02

## Abordagem escolhida — Arquivo de precisão

**Design Movement:** Swiss International Typographic Style reinterpretado para uma agência digital contemporânea brasileira.

**Core Principles:** Hierarquia editorial sem ruído; assimetria controlada; contraste radical entre preto, branco e vermelho; componentes que parecem peças de um sistema, não cartões genéricos.

**Color Philosophy:** O preto #050505 cria silêncio e concentração. O branco é usado para tornar decisões e conteúdo imediatamente legíveis. O vermelho #DB0008 funciona como sinal de ação, nunca como decoração contínua.

**Layout Paradigm:** Páginas organizadas por eixos, regras finas e deslocamentos laterais. O conteúdo começa em alinhamentos diferentes conforme a seção, evitando uma coluna central repetitiva e criando uma leitura de arquivo.

**Signature Elements:** Pontos vermelhos como marcadores de navegação; linhas de registro e molduras quadradas; números grandes como índices editoriais.

**Interaction Philosophy:** Toda interação deve comunicar estado e direção. Links revelam uma regra vermelha; botões respondem com deslocamento mínimo; menus aparecem como uma folha de sistema e fecham ao navegar.

**Animation:** Entradas por opacidade e deslocamento de até 18px; stagger curto em listas; transformações de geometria apenas no hover; duração entre 180ms e 300ms. Respeitar `prefers-reduced-motion`.

**Typography System:** `Libre Franklin` para títulos, índices e wordmark; `DM Sans` para corpo, navegação e formulários. Títulos em caixa alta e tracking negativo; texto corrido com largura controlada e line-height generoso.

**Brand Essence:** A Zurc transforma problemas reais em sistemas digitais claros para negócios que precisam avançar sem ruído. Personalidade: precisa, curiosa, direta.

**Brand Voice:** Headlines são curtas e assertivas; CTAs são convites específicos; microcopy explica o próximo passo sem prometer resultados fabricados. Exemplos: “Tecnologia sem ruído.” e “Descreva o problema. A gente organiza o próximo passo.”

**Wordmark & Logo:** Manter o wordmark textual existente “ZURC AGENCY” e reforçá-lo com um símbolo geométrico independente: dois colchetes deslocados envolvendo um corte vermelho central. O símbolo funciona no header e como favicon sem depender de tipografia gerada.

**Signature Brand Color:** Vermelho-sinal Zurc `#DB0008`.

## Decisões de arquitetura

A aplicação usa React 19, Vite e Wouter, mantendo a dependência de roteamento já presente no template. O conteúdo editorial vive em `client/src/data`, enquanto componentes de layout e primitives ficam separados de páginas e seções. A home consome os mesmos dados que as páginas de serviços e projetos, evitando duplicação e permitindo adicionar itens sem reconstruir a interface.

A primeira versão é frontend-only. O formulário possui validação local e estados idle, loading, erro e sucesso simulado, sem envio externo. A estrutura de contato deixa uma função de submissão isolada para futura integração com API, CRM ou automação.

## Preservações visuais

Serão preservados o fundo preto predominante, o vermelho #DB0008, a tipografia forte, os marcadores geométricos, o uso amplo de espaço negativo, as linhas finas e o tom editorial do protótipo. Serão refinados o sistema de navegação, a profundidade das páginas internas, a acessibilidade, o SEO, o comportamento mobile e a reutilização dos projetos.
