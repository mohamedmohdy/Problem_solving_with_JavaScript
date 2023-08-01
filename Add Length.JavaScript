function addLength(str) {
  let newA = str.split(' ');
  let result =[];
  for(let i = 0; i<newA.length;i++){
      let length = newA[i].length;
      result.push(newA[i] + ' ' + length);
}
  return result;
}
