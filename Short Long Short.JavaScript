function solution(a, b){
    var Long , Short ;
    if(a.length > b.length){
        Short = b ;
        Long = a ;
    }else{
        Short = a ;
        Long = b ;
    }

    return`${Short}${Long}${Short}`;
}
