const readline = require ('readline/promises');
const {stdin: input, stdout: output} = require ('process');


const rl = readline.createInterface ({input, output});

async function iniciarjogo () {
const palavras =["BACKEND", "NODEJS", "JAVASCRIPT","EXPRESS", "SERVIDOR", "TERMINAL"];

 const indiceAleatorio = Math.floor (Math.random()* palavras.length);
 const palavraSecreta = palavras[indiceAleatorio];

 let letrasDescobertas = Array(palavraSecreta.length).fill ("_");
 let jogoRodando = true;

 let vidas = 6;
const arteForca = [
    " +---+\n | |\n O |\n /|\\ |\n / \\ |\n ", // 0 vidas
    " +---+\n | |\n O |\n /|\\ |\n /  |\n ", // 1 vida
    " +---+\n | |\n O |\n /|\\ |\n   |\n ", // 2 vidas
    " +---+\n | |\n O |\n /| |\n  |\n ", // 3 vidas
    " +---+\n | |\n O |\n | |\n  |\n ", // 4 vidas
    " +---+\n | |\n O |\n   |\n  |\n ", // 5 vidas
    " +---+\n | |\n   |\n  |\n  |\n " // 6 vidas
];

 console.log ("=== Bem-Vindo ao Jogo da Forca===");

 while (jogoRodando) {
    console.log(`\nVidas restantes: <3 ${vidas}`);
    console.log(arteForca[vidas]);

    console.log (`\nPalavra atual ${letrasDescobertas.join (" ")}`);

   const chute = (await rl.question ("Digite uma letra: ")).toUpperCase();
   let acertou = false;
   
  for (let i = 0; i< palavraSecreta.length; i++){
    if(palavraSecreta [i] === chute){
    letrasDescobertas[i] = chute;
    acertou = true;
   }
  }

  if (!acertou) {
    console.log ("[X] Letra incorreta");
    vidas--;
  }
if (!letrasDescobertas.includes ("_")){
    let pontuacaoFinal = (vidas * 10) + 50;
    console.log(`\n[VITORIA] Parabéns! Você descobriu  palavra: ${palavraSecreta}`);
    console.log(`\n[PONTUAÇÃO] Sua pontuação final foi: ${pontuacaoFinal} pontos`);
    jogoRodando = false
}

if (vidas === 0){
  console.log (`\n [FIM DE JOGO] a palavra correta era: ${palavraSecreta}`);
  jogoRogando = false
}

 } rl.close();
}
iniciarjogo();
    
