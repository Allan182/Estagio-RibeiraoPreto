/*

Autor : Allan Furlani
Data : 07/03/2024
Descrição: Resoluções de questões para a vaga de estágio em Ribeirão Preto - 2024




Questão 1 - Valor soma

1) Observe o trecho de código abaixo:

int INDICE = 13, SOMA = 0, K = 0;

enquanto K < INDICE faça

{
K = K + 1;

SOMA = SOMA + K;
}
imprimir(SOMA);
Ao final do processamento, qual será o valor da variável SOMA?

*/

const calculoSoma = () => {
   const indice = 13;
   let soma = 0;
   let k = 0;

   while (k < indice) {
      k = k + 1;
      soma = soma + k;
   }
   console.log(`A Variavel Soma terá o valor de ${soma}`);
}
calculoSoma();

//  Questão 2 - Verifica Fibonacci

function verificaPertenceFibonacci(numero) {
   let a = 0;
   let b = 1;

   while (a <= numero) {
      if (a === numero) {
         return true;
      }
      const temp = a; // Var temporária para armazenar o valor de A 
      a = b; // A recebe o valor de B para continuar a interação
      b = temp + b; // Realiza a conta fibonacci
   }
   return false;
}

const numeroInformado = 43; // Qualquer entrada.

if (verificaPertenceFibonacci(numeroInformado)) {
   console.log(`O número ${numeroInformado} pertence à sequência de Fibonacci.`);
} else {
   console.log(`O número ${numeroInformado} NÃO pertence à sequência de Fibonacci.`);
} 


/* Questão 3 
 

a) 1, 3, 5, 7

Cada número é igual ao anterior + 2, formando os números ímpares. Assim, o próximo número é igual a 7 + 2 = 9. */

const somaAnterior = (ind) => {
   let firstNumber = 1
   for (let i = 0; i < ind; i++) {
      console.log(firstNumber);
      firstNumber += 2;
   }
}
somaAnterior(5); // Resultado == 9

// <=================================================================================>


/* 

b) 2, 4, 8, 16, 32, 64

Cada número é igual ao anterior multiplicado por 2. Assim, o próximo número é igual a 64 x 2 = 128. */

const multiplicaAnterior = (ind) => {
   let firstNumber = 2;
   for (let i = 0; i < ind; i++) {
      console.log(firstNumber);
      firstNumber *= 2;
   }
}
multiplicaAnterior(7);


// <=================================================================================>


/*
c) 0, 1, 4, 9, 16, 25, 36

Cada número é igual ao anterior acrescido de um número ímpar que segue a sequência 1, 3, 5, 7, 9. Realizando a subtração dos dois últimos números, temos que 36 - 25 = 11. Assim, devemos acrescentar 11 + 2 = 13 ao último número, obtendo 36 + 13 = 49. */

const quadradoAnterior = (ind) => {
   let numbers = [];
   for (let i = 0; i < ind; i++) {
      numbers[i] = Math.pow(i, 2);
      console.log(numbers[i]);
   }
}
quadradoAnterior(8);



// <=================================================================================>


/* d) 4, 16, 36, 64

Cada número é igual ao quadrado dos números pares. Com isso, temos que 64 = 8². Então, o próximo número par é 10, e o seu quadrado é 10² = 100. */

const quadradoDobrado = (ind) => {
   let numbers = [];
   for (let i = 1; i < ind; i++) {
      numbers[i] = Math.pow(2 * i, 2);
      console.log(numbers[i]);
   }
}
quadradoDobrado(6);


// <=================================================================================>


/* 

e) 1, 1, 2, 3, 5, 8

Cada número é igual à soma do número atual com o número anterior. Assim, o próximo número é igual a 8 + 5 = 13. */

const somaFibbonaci = (ind) => {
   let numbers = [1, 1];
   for (let i = 2; i < ind; i++) {
      numbers[i] = numbers[i - 1] + numbers[i - 2];
      console.log(numbers[i]);
   }
}

somaFibbonaci(7)

/*

f) 2, 10, 12, 16, 17, 18, 19

Sequência formada através de todos os números que iniciam com a letra d. Assim, o próximo número em ordem crescente que inicia com a letra d é 200. 

Foi deixado a resposta por extensa e resolvida utilizando a lógica pois é uma analise de combinações envolvendo letras do alfabeto e não números e funções.

*/

/*


4) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em uma sala diferente. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada.


*/

const descobrirInterruptores = (lampadas) => {

   let estadoInicial = [false, false, false];


   let resultadoPrimeiraVisita = primeiraVisita(estadoInicial);


   let resultadoSegundaVisita = segundaVisita(estadoInicial, resultadoPrimeiraVisita);

   console.log("Resultado final: ");
   for (let i = 0; i < 3; i++) {
      console.log(`Interruptor ${i + 1} controla a Lâmpada ${resultadoSegundaVisita[i] ? "Acesa" : "Apagada"}`);
   }
}

const primeiraVisita = (estadoInicial) => {
   let resultado = [...estadoInicial];
   resultado[0] = true;

   console.log("Primeira visita - Estado inicial:");
   console.log(resultado);

   resultado[0] = false;
   resultado[1] = true;

   console.log("Primeira visita - Estado final:");
   console.log(resultado);

   return resultado;
}

const segundaVisita = (estadoInicial, resultadoPrimeiraVisita) => {
   let resultadoFinal = [...estadoInicial];

   if (resultadoPrimeiraVisita[2]) {
      resultadoFinal[2] = true;
   } else {
      resultadoFinal[0] = true;
   }

   console.log("Segunda visita - Resultado final:");
   console.log(resultadoFinal);

   return resultadoFinal;
}

descobrirInterruptores();


// 5 - Escreva um programa que inverta os caracteres de um string.


const inverterString = (originalString) => {
   let invertedString = "";

   for (let i = originalString.length - 1; i >= 0; i--) {
      invertedString += originalString[i];
   }

   return invertedString;
}

const inputString = "Obrigado pela oportunidade";
const resultado = inverterString(inputString);

console.log(`String original: ${inputString}`);
console.log(`String invertida: ${resultado}`);
