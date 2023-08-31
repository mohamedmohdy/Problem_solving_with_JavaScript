function rangeBitCount(a, b) {
    let arr = [];
    let total = 0;
    for(let i = a; i <= b; i++){
      arr.push(+(i.toString(2))); //[2,3,4,5,6,7]
    }
    for(const binNum of arr){
      for(let i = 0; i < String(binNum).length; i++){
      if (String(binNum)[i] === '1'){ //11011101111
        total += 1;
        }
      }
    }
    return total;
  }
