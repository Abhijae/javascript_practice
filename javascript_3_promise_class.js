


let p = new Promise(function(resolve){ // promise class takes a function as an argument then is needs a resolve variable
        resolve('hello there')
})


function onDone(){
    console.log(p)
}

p.then(onDone)

/////////////////////////////// Another way of calling promises//////


let e = new Promise(function(data){
    data("hola amigos")
})


e.then(function(){
    console.log(e)
})


////////////////////// Dummy async function that resoles an async operation

function dummyAsyncFn(){
    let w = new Promise(function(data){
        data("fire bird")
    })
    return w
}

const wb = dummyAsyncFn()

wb.then(function(x){
    console.log(x)
})