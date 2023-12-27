const fs = require('fs')

function readFile(cb){
    fs.readFile('a.txt',"utf-8",function(err,data){
        cb(data)
    })
}


function onDone(x){
    console.log(x)
}


readFile(onDone)