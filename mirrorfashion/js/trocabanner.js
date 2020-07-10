// Troca imagem destaques

let imagem = document.querySelector('#banner')
let banners = ['img/destaque-home-2.png', 'img/destaque-home.png']
let bannerAtual = 0
function trocarImg(){
    console.log(bannerAtual)
    bannerAtual = (bannerAtual + 1) % 2 
    imagem.src = banners[bannerAtual]
}
setInterval(trocarImg, 4000)