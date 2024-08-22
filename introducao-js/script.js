/*comentário de várias linhas 
No JS temos os tipos básicos
String -> Serve para armazenar texto
Number -> Serve para armazenar números inteiros ou flutuantes
Boolean -> Armazena TRUE/FALSE

Para declarar uma variável usamos a palavra "var" antes do nome
*/

var texto = "Hello World";
var idade = 18;
var altura = 1.72;
var professor = false;

/**
 Nome de variavel deve SEMPRE começar com minuscula.
 Se o nome for composto, cada nova palavra começa com letra
 MAIUSCULA
 */

 var nomeCompleto = "Leonardo Cherri Rodrigues";
 var alunoFatecJahu = true;

 //Exibir o conteúdo da variavel

 //Alert -> Exibe um pop-up na tela (defasado)
 alert(texto);
 alert("Minha idade: " + idade); // "+" junta dois textos
 alert('Altura: ' + altura + " metros");

 //console.log -> Exibe os dados no console (USE SEMPRE!)
 console.log("=== VARIAVEIS ===");
 console.log(texto);
 console.log("Minha idade: " + idade);
 // Podemos passar vários elementos usando a vírgula
 console.log("Altura: ", altura, " metros");

 //Problema de ser fracamente tipado!
 var numero = 500;
 console.log("Numero: ", typeof numero); //typeof mostra o tipo da variavel no console
 var numeroComoTexto = "500";
 console.log("Texto: ", typeof numeroComoTexto);

 console.log("Numero + Texto ", numero + numeroComoTexto);
 console.log("Numero + Numero", numero + idade)

 //Ler entrada do Usuário
 var valorRecebido = prompt("Digite alguma coisa:");
 console.log("Foi digitado: ", valorRecebido);
 
 var inteiro = parseInt(prompt("Digite um número inteiro:"));
 console.log("Numero inteiro + idade: ", inteiro + idade);

 var flutuante = parseFloat(prompt("Numero flutuante: "));
 console.log("Flutuante + altura", flutuante + altura);
 
 //Estruturas condicionais

 console.log(" ==== IF / ELSE ====")
 if(idade >= 18){
     console.log("Pessoa maior de idade!");
 }else if(idade >=16){
     console.log("Menor, deve estar acompanhado dos pais");
 }else{
     console.log("Menor de 16 anos, não pode entrar!");
 }

 console.log(" ==== SWITCH/CASE ====")
 var dia = parseInt(prompt("Digite um número de 1 a 7"));
 switch(dia){
    case 1: //Compara se a variavel dia é igual a 1.
    console.log("Segunda-Feira");
    break; //interrompe a execução.

    case 2:
    console.log("Terça-Feira");
    break; 

    case 3:
    console.log("Quarta-Feira");
    break; 

    case 4:
    console.log("Quinta-Feira");
    break; 

    case 5:
    console.log("Sexta-Feira");
    break; 

    case 6:
    console.log("Sábado");
    break; 

    case 7:
    console.log("Domingo");
    break; 

    default:
        console.log("Não é um numero de 1 a 7");
 }

 //Estrutura de repetição
 console.log(" ==== WHILE ==== ");
 //Math.random() gera um numero aleatorio de 0 a 1 EX: 0.5
 //Multiplicando por um inteiro, vamos ter o valor de 0
 //até esse inteiro.
 var sorteado = parseInt(Math.random() * 11);
 var acertou = false;
 var qtde = 0;
 while(acertou == false){
     var chute = parseInt(prompt("Digite um número de 0 a 10."));
     qtde++;
     if (chute == sorteado){
         acertou = true;
         console.log("Chutou: ", chute);
         console.log("Sorteado: ", sorteado);
         console.log("Tentativas: ", qtde);
     }
 }

 var media = 0;
 console.log(" ==== FOR ==== ")
 // Quando temos uma quantidade finita de repetições
 // 1º cria uma variavel de contagem, geralmente "i" atribui um valor inicial
 // 2º condição de parada, comparar o "i" com a quantidade fim de repetição
 // 3º incremento da variavel de contagem, geralmente i++, porém, pode ser outros 
 for(var i = 0; i < 3; i++){
     var nota = parseFloat(prompt(`digite a nota nº[${i}]: `));
     media = media + nota;      //'Digite a nota nº[' + i + ']:'
 }
 media = media / 3;
 console.log(`A média do aluno é ${media}`);