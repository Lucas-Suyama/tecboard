# TecBoard — Organizador de Eventos de Tecnologia

Aplicativo desenvolvido durante um curso da Alura para praticar os fundamentos do React com Vite. O TecBoard organiza eventos de tecnologia em um layout moderno, com temas personalizados, formulários interativos e renderização condicional de conteúdo.

## Demonstração Online
- Acesse a versão publicada: https://tecboard.vercel.app/

## 1. Conceitos Fundamentais do React e Paradigmas
- Bibliotecas declarativas descrevem “o que” deve ser exibido; o React transforma a descrição em UI real.
- Imperativo foca em “como” fazer passo a passo (manipulação direta do DOM). Declarativo foca no estado e na saída esperada.
- No TecBoard, os componentes reagem às mudanças de estado, evitando manipulação manual do DOM e reduzindo complexidade.

## 2. Estrutura com Vite e Configuração do Ambiente
- Projeto criado com Vite: start rápido, HMR e build otimizado.
- Estrutura básica:
  - `index.html` carrega a aplicação, com ponto de montagem da UI.
  - `src/` concentra componentes, estilos e utilitários.
  - `main` inicializa React e aplica o tema.
- Ambiente de desenvolvimento:
  - Instale dependências com `npm install`.
  - Rode `npm run dev` para desenvolvimento com HMR.
  - Gere build com `npm run build` e sirva com `npm run preview`.

## 3. Componentes, Props e Estado
- Componentes reutilizáveis representam partes da interface (cartões de evento, listas, cabeçalho).
- Props comunicam dados entre componentes (ex.: detalhes do evento e ações).
- Estado gerencia dados dinâmicos (ex.: lista de eventos, tema atual, filtros).
- Hooks como `useState` e `useEffect` coordenam mudanças e efeitos derivados.

## 4. Formulários com FormData e Seletores Personalizados
- Formulários de criação/edição de eventos utilizam `FormData` para capturar valores de forma simples e robusta.
- Seletores personalizados (como categorias, palestrantes e formatos) melhoram a UX e a consistência dos dados.
- Validações amigáveis e feedback visual garantem dados completos e corretos.

## 5. Renderização Condicional
- A interface adapta a exibição conforme o estado:
  - Mensagens de vazio quando não há eventos.
  - Indicadores de carregamento quando dados ainda chegam.
  - Badges e ícones mudam conforme status do evento (inscrições abertas, esgotado, encerrado).
- Essa abordagem melhora a clareza e a experiência do usuário.

## 6. Aplicativo Completo com React 19, Layout e Temas
- Construído com React 19, aproveitando a experiência de desenvolvimento moderna.
- Layout responsivo com CSS moderno (Flex/Grid) e design centrado em conteúdo.
- Temas personalizados (claro/escuro) com variáveis CSS e estado global de tema.
- Organização dos eventos:
  - Cadastro e listagem com filtros básicos.
  - Destaque para próximos eventos e sessões populares.
  - Componentes acessíveis com navegação por teclado e leitura por tecnologias assistivas.

---

Este README resume os pilares abordados no TecBoard: fundamentos do React, estrutura com Vite, componentes e estado, formulários com `FormData`, renderização condicional e um app completo com layout e temas personalizados. Use os scripts padrão do Vite para desenvolver, construir e pré-visualizar a aplicação.
