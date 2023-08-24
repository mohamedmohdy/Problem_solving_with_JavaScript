function pipeFix(numbers){
    var numpers = [] ;
    var min = numbers[0];
    var max = numbers.pop();
    for(var i = min ; i<=max ; i++){
        numpers.push(i);
    }
    return numpers;
  }
