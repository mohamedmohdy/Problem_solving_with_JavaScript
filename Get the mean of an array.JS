function getAverage(marks){
   var count = 0 , sumtion = 0  , result = 0 ;

   for(let i = 0 ; i < marks.length ; i++){
      sumtion+= marks[i] ; //8   
      count++ ; //4
   }

   sumtion /= count ; //8 = 8 / 4 
    return result = Math.floor(sumtion);

 }
