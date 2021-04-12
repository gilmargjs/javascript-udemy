const funcs = []

for (var i = 0;i < 10;i++){
    funcs.push(function(){
        console.log(i)
    })
}
funcs[2]()//devido a var não ter escopo de funão o resultado será  10 
funcs[8]()//devido a var não ter escopo de funão o resultado  será 10
it