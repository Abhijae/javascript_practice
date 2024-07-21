a=[2,7,11,15,5,4]

t = 9

function getIndex(array,target){
    for(i=0;i<array.length;i++){
        for(j=1;j<array.length;j++){
            if((array[i]+array[j])==target){
                console.log(i,j)
            }
        }
    }
}

getIndex(a,t)