// Atualiza o valor total do produto
let inputquantidades = document.querySelector("#qtd")
let outputtotal = document.querySelector("#total")


inputquantidades.oninput = function(){
    let qtd = inputquantidades.value // captura a quandiade
    let preco = document.querySelector("#preco")
    let strPreco = preco.textContent.replace('R$','').replace(',','.')
    let totalCompra = parseFloat(strPreco) * qtd
    totalCompra = totalCompra.toFixed(2)
    totalCompra = totalCompra.replace('.',',')
    outputtotal.value = `R$ ${totalCompra}`
} 
