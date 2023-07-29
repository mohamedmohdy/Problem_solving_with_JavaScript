function capitalizeWord(word) {
  var str = word[0].toUpperCase();
  for (let i = 1; i<word.length; i++) {
  str += word[i];
  }
  return str;
}
