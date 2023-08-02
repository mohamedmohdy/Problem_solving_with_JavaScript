function findMultiples(integer, limit) {
    let arays = [] ;
    let numper = parseInt(integer);
    for(let i = numper ; i<= limit ; i+= numper){
        arays.push(i);
    }
    return arays ;
 }
