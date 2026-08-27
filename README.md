# 🔤 Jogo da Forca no Terminal (Node.js)

Um jogo da forca simples, interativo e executado diretamente no terminal, desenvolvido em JavaScript utilizando **Node.js** e o módulo nativo `readline/promises`.

---

## 📌 Sobre o Projeto

Este projeto é uma implementação do clássico **Jogo da Forca** voltado para o terminal. O sistema seleciona aleatoriamente uma palavra secreta relacionada ao universo do desenvolvimento web e backend, e o jogador deve adivinhar letra por letra antes que suas vidas acabem.

### 🎯 Principais Características:
- **Seleção Aleatória:** Lista de palavras secretas focadas em tecnologia (`NODEJS`, `JAVASCRIPT`, `BACKEND`, etc.).
- **Interface Assíncrona:** Utiliza `readline/promises` para gerenciar a entrada e saída do usuário via terminal com suporte a `async/await`.
- **Sistema de Vidas:** O jogador possui 6 tentativas para acertar a palavra.
- **Tratamento de Entrada:** Converte automaticamente as letras digitadas para maiúsculas.

---

## 🛠️ Tecnologias Utilizadas

- **[Node.js](https://nodejs.org/)** — Ambiente de execução JavaScript server-side.
- **`readline/promises`** — Módulo nativo do Node.js para leitura de dados assíncrona no terminal.
- **`process`** — Módulo nativo para manipulação de entradas (`stdin`) e saídas (`stdout`).

---

## 📂 Estrutura do Código

O fluxo principal da aplicação segue a lógica abaixo:

1. **Inicialização do Terminal:** Configuração do `readline.createInterface` conectado a `stdin` e `stdout`.
2. **Sorteio da Palavra:** Seleção aleatória de um termo presente no vetor `palavras`.
3. **Loop Principal (`while`):**
   - Exibe o estado atual da palavra com traços (`_`).
   - Solicita o palpite (chute) do usuário via `rl.question`.
   - Valida se a letra informada pertence à palavra secreta.
   - Atualiza o progresso das letras descobertas ou reduz a quantidade de vidas (`vidas--`).
4. **Condições de Término:**
   - **Vitória:** Todas as letras da palavra secreta foram descobertas.
   - **Derrota:** A quantidade de vidas chega a `0`.

---


