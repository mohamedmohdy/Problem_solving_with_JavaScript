const digitize = (x) => {
  x = `${x}`.split('').reverse();
  let a = []
  for(let i = 0; i < x.length; i++){
    a.push(+x[i])
  }
  return a
}
