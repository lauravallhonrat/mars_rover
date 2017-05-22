var myRover = {
  position: [0, 0],
  direction: ['N', 'E', 'S', 'W'],
  currentPositon: 0,
  stopRover: false
}
function getCommands (commands) {
  var instructions = commands.split(' ');
  return instructions;
}

function turnRoverRight(r){
  if (rover.currentPositon +1 <= 3){
      rover.currentPositon++;
  } else {
      rover.currentPositon = 0;
  }
}

function turnRoverLeft(l){
  if (rover.currentPositon -1 >= 1){
      rover.currentPositon--;
  } else {
      rover.currentPositon = 0;
  }
}

function roverMovements(instructions){
  for (var i = 0; i < instructions.length; i++){

  	if (rover.stopRover === false){

    switch (instructions[i]){
      case 'f':
      moveRover('f');
      break;

      case 'b':
      moveRover('b');
      break;

      case 'l':
      turnRoverLeft();
      break;

      case 'r':
      turnRoverRight();
      break;
    }
  }
}
}
