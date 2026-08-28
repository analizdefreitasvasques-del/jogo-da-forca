const readline = require ('readline/promises');
const {stdin: input, stdout: output} = require ('process');

const rl = readline.createInterface ({input, output});

async function iniciarjogo () {
const palavras =[
  { palavra: "BACKEND", dica: "a logica que roda nos bastidores do servidor"}, 
  { palavra: "NODEJS", dica: "ambiente de execussão do javascript" }, 
  { palavra: "JAVASCRIPT" dica: "linguagem de progamação da web" },
  { palavra: "EXPRESS" dica: "framework minimaslista de criar APIs"}
    { palavra: "SERVIDOR" dica: "computador qur fornece serviço para outros comptadores"},
    { palavra:"TEMINAL" dica: "interface de linha de comando"}
];

 const indiceAleatorio = Math.floor (Math.random()* palavras.length);
 const palavraSecreta = palavras[indiceAleatorio].palavra;
 const dica = palavras [indiceAleatorio].dica;

 let letrasDesobertas = Array(palavraSecreta.length).fill ("_");
 let jogoRodando = true;

 let vidas = 6;

 console.log ("=== Bem-Vindo ao Jogo da Forca===");

 while (jogoRodando){n
     console.log (`\nPalavra atual ${letrasDesobertas.join (" ")}`);
     console.log (`\n vidas restantes: <3 ${vidas}`);
     console.log (`\n[DICA] Dica: ${dica}`);
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
    vidas--;
  }
if (!letrasDesobertas.includes ("_")){
    console.log(`\n[VITORIA] Parabens! Você descobriu  palavra: ${palavraSecreta}`);
    jogoRodando = false
}

if (vidas === 0){
  console.log (`\n [FIM DE JOGO] a palavra correta era: ${palavraSecreta}`);
  jogoRogando = false
}

 } rl.close();
}
iniciarjogo();
    
