const funcs = []

for(let i = 0;i < 10;i++){
    funcs.push(function(){
        console.log(i)
    })
}
funcs[2]()//devido a let ter escopo de funão o resultado  será  2
funcs[8]()//devido a let ter escopo de funão o resultado  será  8