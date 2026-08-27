const readline = require ('readline/promises');
const {stdin: input, stdout: output} = require ('process');


const rl = readline.createInterface ({input, output});

async function iniciarjogo () {
const palavras =["BACKEND", "NODEJS", "JAVASCRIPT","EXPRESS", "SERVIDOR", "TERMINAL"];

 const indiceAleatorio = Math.floor (Math.random()* palavras.length);
 const palavraSecreta = palavras[indiceAleatorio];

 let letrasDesobertas = Array(palavraSecreta.length).fill ("_");
 let jogoRodando = true;

 console.log ("=== Bem-Vindo ao Jogo da Forca===");

 while (jogoRodando){
     console.log (`\nPalavra atual ${letrasDesobertas.join (" ")}`);

   const chute = (await rl.question ("Digite uma letra: ")).toUpperCase();
   let acertou = false;
   
  for (let i = 0; i< palavraSecreta.length; i++){
    if(palavraSecreta [i] === chute){
    letrasDesobertas[i] = chute;
    acertou = true;
   }
  }

  if (!acertou) {
    console.log ("[X] Letra incorreta");
  }
if (!letrasDesobertas.includes ("_")){
    console.log(`\n[VITORIA] Parabens! Você descobriu  palavra: ${palavraSecreta}`);
    jogoRodando = false
}

 } rl.close();
}
iniciarjogo();
    
