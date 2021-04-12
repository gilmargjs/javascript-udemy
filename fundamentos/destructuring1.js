const pessoa = {
    nome:"Ana",
    idade:5,
    endereco:{
        logradouro:"Rua ABC",
        numero:1000
    }
}

const { nome, idade } = pessoa//busca os atributos dentro de pessoa
console.log(nome,idade)

const { nome: n, idade:i } = pessoa
console.log(n, i)

const { sobrenome, benhumorado = true } = pessoa
console.log(sobrenome, benhumorado)


//buscando dentro de endereço
const { endereco: {logradouro, numero}} = pessoa
console.log(logradouro, numero)


//busca sem o elemento pertençer vai retornar um erro
const {conta: {ag, num} } = pessoa
console.log(ag, num)
