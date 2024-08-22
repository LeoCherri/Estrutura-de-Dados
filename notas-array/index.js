function calcularMedia(){

    var nome = document.getElementById('nome').value;
    var nota1 = parseFloat(document.getElementById('nota1').value);
    var nota2 = parseFloat(document.getElementById('nota2').value);
    var nota3 = parseFloat(document.getElementById('nota3').value);

    var arrayDados = [nome, nota1, nota2, nota3];
    // var arrayNome = [nome];

    var media = (arrayDados[1] + arrayDados[2] + arrayDados[3]) / 3;

    console.log(`A média do aluno ${arrayDados[0]} é ${media}`);
}