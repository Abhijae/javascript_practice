function cube(n){
    return n*n*n
}


function square(n){
    return n*n
}

function callfn(a,b,fn){
    x_1=fn(a)
    x_2=fn(b)
    return x_1 +x_2
}

sqaure_results=callfn(1,2,square)
console.log(sqaure_results)