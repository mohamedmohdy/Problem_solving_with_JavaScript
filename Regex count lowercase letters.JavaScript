function lowercaseCount(str){
    let aray = [] ;
    for(let i = 0 ; i < str.length ; i++){
        if(str[i] == str[i].match(/[a-z]/g)){
            aray.push(str[i]);
        }
    } 
    return aray.length;
}
