// armazenando um função em uma variavel
const imprimirSoma = function(a, b){
    console.log(a + b)
}
imprimirSoma(2, 3)


// Armazenando uma função arrow em uma variavel
const soma = (a, b)=>{
    return a + b
}
console.log(soma(2, 5))

//retorno implicido
const subtracao = (a, b) => a-b
console.log(subtracao(2, 4))

const imprimirSoma2 = a => console.log(a)
imprimirSoma2("legal!!!")