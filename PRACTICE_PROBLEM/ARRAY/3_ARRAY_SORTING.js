a=[2,3,6,4,5,1]

for(i=0;i<a.length;i++){
    for(j=i+1;j<a.length;j++){
        if(a[i]>a[j]){
            x=a[j]
            a[j]=a[i]
            a[i]=x

        }
    }
}

console.log(a)