const flip=(d, a)=>{
   if(d === 'R'){
     return a.sort(function(a,b){return a - b });
   }else {
    let array = a.sort().reverse();
    return a.sort(function(a,b){return a - b }).reverse();
   }
  }
