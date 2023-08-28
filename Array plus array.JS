function arrayPlusArray(arr1, arr2) {
   var arays = [] , sumtion = 0 ;
   arays = arr1.concat(arr2);
   for(var i = 0 ; i< arays.length ; i++){
        sumtion = sumtion + arays[i] ;
   }
   return sumtion ;
  }
