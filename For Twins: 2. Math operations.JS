function iceBrickVolume(radius, bottleLength, rimLength) {
var brickLength = bottleLength - rimLength;
var brickDepth = radius*2;
var brickHeight = radius; 

return brickLength * brickDepth * brickHeight;

}
