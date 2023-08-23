//size 6 ==> 010101
function stringy (size){
    let numpers = [] ; //101010
        for(var i = 0 ; i<size ; i++){
                if(i % 2 == 0 ){
                    var e = '1';
                    numpers.push(e);
                }else{
                    e = '0';
                    numpers.push(e)
                }
        }
    return numpers.join("");
}
