let valor //não inicializada
console.log(valor)

valor = null // ausência de valor
console.log(valor)

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
console.log(produto)

produto.preco = null // o mesmo que sem preço
console.log(!!produto.preco)
console.log(produto)
