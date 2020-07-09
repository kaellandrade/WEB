// Capturado os dois elementos
let rangeTamanho = document.querySelector("#tamanho")
let tamanhOut = document.querySelector("output")

// Verifica se o valor de tange foi auterado
function addValueOutput(){
    tamanhOut.value = rangeTamanho.value
}

rangeTamanho.oninput = addValueOutput