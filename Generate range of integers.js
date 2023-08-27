function generateRange(min, max, step){
  var arays = [] ;
  for(var i = min ; i <=max ; i+=step){
    arays.push(i);
  }
  return arays;
}
