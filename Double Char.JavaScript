function doubleChar(str) {
  let word = [] ;
  for(var i = 0 ; i<str.length ; i++){
      var char = str[i] ;
      char = char.repeat(2);
      word.push(char);
  }
  return word.join("");
}
