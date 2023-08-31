function solution(start, finish) {
  var sum = 0;
  for(var i = start; i < finish-1; i += 3) {
    sum++;
  }
  if(i != finish) {
    sum++;
  }
  return sum;
}
