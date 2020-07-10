// Capturado os dois elementos
let rangeTamanho = document.querySelector("#tamanho")
let tamanhOut = document.querySelector("output")

// Verifica se o valor de tange foi auterado

rangeTamanho.oninput = function(){
    tamanhOut.value = rangeTamanho.value
}