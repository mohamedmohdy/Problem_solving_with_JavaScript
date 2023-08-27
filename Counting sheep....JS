function countSheeps(arrayOfSheep) {
  var count = 0 ;
    for(var i = 0 ; i< arrayOfSheep.length ; i++){
      if(arrayOfSheep[i] == true){
        count++;
      }else{
        continue;
      }
    }
  return count ;
}
