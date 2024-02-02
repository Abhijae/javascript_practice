a=[2,3,6,4,5,7]

for(i=0;i<a.length;i++){
    if(a[i]>a[i+1]){
        x=a[i+1]
        a[i+1]=a[i]
        a[i]=x

    }
}

console.log(a)