function promiseFunction(){
    let p = new Promise(function(resolve){
        resolve("this is the output from the promise fn")
    })
    return p
}

/*
function main(){
    let wb=promiseFunction()
    wb.then(function(x){
        console.log(x)
    })
}
*/     

// another way of calling the same fn as async

async function main(){  
    let wb = await promiseFunction()  // await is only valid in async function
    console.log(wb)                   // every await needs to be wrapped inside async fn
}

main()


//sample2


