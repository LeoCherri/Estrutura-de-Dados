// arrays

//arrays sao estruturas de armazenamento que possibilitam guardam varios
//conteudos dentro de uma unica variavel

// no js o array aceita armazenar diversos tipos de variaveis dentro de uma unica variavel

//para declarar o array usamos []

var arrayVazio = [];
var arrayVarioClasse = new Array (); //Neste exemplo usamos orientação de objetos

//os arrays já podem ser iniciador com valor

var nomes = ["Maria", "José", "João", "Fatima"];

var numeros = [25, 56, 89, 76, 0, 34, -98];

// posição         0     1     2     3 
var misturado = ["Gol", 2002, 1.6, true];
// tamanho         1     2     3     4

// para alterar ou inserir um dado em um array, usamos sua posição

console.log("Array vazio", arrayVazio);
arrayVazio[0] = "Primeiro Valor";
console.log("Array vazio com valor inserido", arrayVazio);

console.log("Exibindo apenas a posição 3 do array 'nomes' ", nomes[3]);

//Para trabalhar com cada elemento do Array, Usamos laço de repetição.
//A propiedade length retorna o tamanho do array
for(var i; i < numeros.length; i++){
    console.log(`Posição [${i}]: ` , numeros[i]);
}

diasSemana=[
    'Domingo', ///0
    'Segunda',///1
    'Terça',///2
    'Quarta',///3
    'Quinta',///4
    'Sexta',///5
    'Sábado'///6 safado
];

var dia = parseInt(prompt("Digite um número 1 a 7 para o dia da semana"));
//Usamos 0 -1 para convertes dias de 7 para posições array

console.log(`Dias da semana para ${dia}`, diasSemana[dia - 1]);