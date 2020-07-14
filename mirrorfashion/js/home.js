// Troca imagem destaques
let imagem = document.querySelector('#banner')
let btnpause = document.querySelector('.pause')
let banners = ['img/destaque-home-2.png', 'img/destaque-home.png']
let bannerAtual = 0
const segundosBanners = 4000
function trocarImg(){
    bannerAtual = (bannerAtual + 1) % 2 
    imagem.src = banners[bannerAtual]
}
let time = setInterval(trocarImg, segundosBanners)

// Pausa a animação
function pauseContinue(){
    if (btnpause.className == 'pause') {
        pausar()
    }else{
        continuar()
    }
}
    
function pausar(){
    clearInterval(time)
    btnpause.className = 'continuar'
}

function continuar(){
    time = setInterval(trocarImg, segundosBanners)
    btnpause.className = 'pause'
}
// fim troca imagem destaque

$('.novidades button').click(function () {
    $('.novidades').toggleClass('painel-ativo') 
    // ! A função toggleClass remove ou adiciona a classe dependendo se ela existe
    // ! ou não
})