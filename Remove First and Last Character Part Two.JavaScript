function array(string) {
  const sequences = string.split(',');
  if (sequences.length < 3) {
    return null;
  }
  sequences.shift(); // Remove the first item
  sequences.pop(); // Remove the last item
  return sequences.join(' ');
}
