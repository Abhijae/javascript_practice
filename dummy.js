/*
let a = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
console.log(a.length)

for(i=0;i<a.length;i++){
    m_l=a.length
    for(j=0;j<a[i].length;j++){   
        a[i][j]=a[j][i]
        console.log(a[i][j])
    }
}

*/

let a_1=[
    [1,1,1],
    [2,2,2],
    [4,4,4]
]

let a_2=[
    [1,1,1],
    [2,2,2],
    [4,4,4]
]



function MatricMultiply(a,b){
    result=[]
    let v1=a
    let v1_length=a.length

    let v2=b
    let v2_length=b.length

    for(i=0;i<v1.length;i++){
        //console.log(v1[i])
        result[i]=[]
        
        for(j=0;j<v2_length;j++){
            //console.log(v1[i][j])
            //console.log(v2[j][i],v1[i][j])
            let sum=0
            console.log('-------------------------')
            //sum=sum+(v2[j][i]*v1[i][j])
            console.log(v2[j][i])
            console.log('-------------------------')
            for(k=0;k<v1_length;k++){
                sum=sum+(v2[k][i]*v1[i][k])
            }

            console.log(sum)
            result[i][j]=sum
            
        }
        //console.log(sum)
    }
    return result

}



x=MatricMultiply(a_1,a_2)
console.log(x)
