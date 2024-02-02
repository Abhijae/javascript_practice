function matrixMul(a,b){
    result=[]
    for(i=0;i<a.length;i++){
        
        for(j=0;j<b.length;j++){
            result[i]=[]
            sum=0
            for(k=0;k<a.length;k++){
                sum=sum+(a[i][k]*b[k][i])
            }
            result[i][j]=sum
        }
    }
    return result
}

a=[
    [1,1,1],
    [2,2,2],
    [3,3,3]
]


b=matrixMul(a,a)
console.log(b)