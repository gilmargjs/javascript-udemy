//par nome/valor 
const saudacao = 'opa'//contexto léxico 1

function exec() {
    const saudacao = 'falaaa'//contexto léxico 2
    return saudacao
}

// objeto são grupo anonhados de pares nome/valor
const cliente = {
    nome:'pedro',
    idade:32,
    peso:90,
    endereço:{
        logradouro:'Rua Muito Feliz',
        numero:123
    }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)