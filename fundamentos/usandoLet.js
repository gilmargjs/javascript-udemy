let numero = 1
{
    let numero = 2
    console.log('dentro = ',numero)
}
console.log('fora = ',numero)

{
    let numero2 = 2
    console.log('dentro = ',numero)//como encotra dentro ele vai buscar fora do bloco
}
console.log('fora = ',numero)
