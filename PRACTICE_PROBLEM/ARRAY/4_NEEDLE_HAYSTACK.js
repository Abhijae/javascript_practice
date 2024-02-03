text="sadbadcadsadsadsad"
match_sequence="sad"
function checkOccurance(s,m){
    input=s
    match=m
    match_count=0
    occurance=0
    for(i=0;i<input.length;i++){
        if(input[i]==match[0]){
            count=0
            for(k=0;k<match.length;k++){
                if(input[i+k]==match[k]){
                    //console.log(input[i+k])
                    count++
                }
               
            }
            //console.log(count)
            if(count==match.length){
                occurance++
            }
        } 
    }
    return occurance
}

result=checkOccurance(text,match_sequence)
console.log("result",result)