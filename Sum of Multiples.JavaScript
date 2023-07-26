function sumMul(n,m){ 
    if(m <= 0 ){
        return "INVALID";
    }else{
        let sumtion = 0 ;
        for(let i = n ; i < m ; i+=n){
          sumtion+=i ;
        }
        return sumtion ;
    } 
  }
