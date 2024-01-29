let mat1 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

console.log(mat1)

console.log(mat1[0][0])

console.log(mat1[0])


for(i=0;i<mat1.length;i++){
    console.log(mat1[i])
}

console.log('---------------------------------')

for (x=0; x<mat1.length;x++){
    for(y=0; y<mat1[0].length;y++){
        console.log(mat1[x][y])
    }
}



function transposeMatrix(mat){

    tx =[]
    for (x=0; x<mat.length;x++){
        tx[x]=[]
        for(y=0; y<mat[0].length;y++){

            tx[x][y]=mat[y][x]
            //console.log(tx[x][y])
        }
    }

    return tx
}

let result=transposeMatrix(mat1)
console.log("--------------")
console.log(result)