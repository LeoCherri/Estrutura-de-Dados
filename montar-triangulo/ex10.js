function mostrarAltura(){
    var altura = parseInt(document.getElementById('altura').value)


    for (var linha = 1; linha <= altura; linha++) {
        var linhaTriangulo = '';

        
        for (var i = 0; i < linha; i++) {
            linhaTriangulo += '*';
        }


        console.log(linhaTriangulo);
    }
}