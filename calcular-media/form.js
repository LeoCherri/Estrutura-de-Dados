function calcularMedia(){
    var nota1 = document.getElementById('nota1').value; //document.getElementById busca um elemento no html pelo seu Id
    var nota2 = document.getElementById('nota2').value;
    var nota3 = document.getElementById('nota3').value;

    nota1 = parseFloat(nota1); //parseFloat transforma uma string
    nota2 = parseFloat(nota2); // em número com casas decimais
    nota3 = parseFloat(nota3);

    var media = (nota1 + nota2 + nota3) / 3; // calcula a media das 3 notas

    var spanMedia = document.getElementById('media');
    spanMedia.textContent = media;
    // spanMedia.innerHTML = `<p>${media}<p>`; injeta HTML na tela
}