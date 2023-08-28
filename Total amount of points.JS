function points(games) {
// totalPoints will store the accumulated points
let totalPoints = 0;
  
  // loop through the games array to get the scores
  for(i=0; i<games.length; i++) {
 
   // assign the scores, since games is an array of strings, we must use Number() to turn the string scores into numbers
    let xScore = Number(games[i].charAt(0)); 
    let yScore = Number(games[i].charAt(2));
    
    // Add points depending on the values of xScore compared to yScore
    if (xScore > yScore) { totalPoints += 3; }
    if (xScore < yScore) { totalPoints += 0; }
    if (xScore === yScore) { totalPoints += 1; }
  }
  
  return totalPoints;
}
