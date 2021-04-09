//função sem retorno
function imprimirSoma(a,b){
    console.log(a + b)
}
imprimirSoma(2, 3)//chamada da função

//função com retorno
function soma(a, b = 2){
    return a + b

}
console.log(soma(2))
console.log(soma(1,8))
console.log(soma())

