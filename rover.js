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

function turnRoverRight(){
  if (rover.currentPositon +1 <= 3){
      rover.currentPositon++;
  } else {
      rover.currentPositon = 0;
  }
}

function turnRoverLeft(){
  if (rover.currentPositon -1 >= 1){
      rover.currentPositon--;
  } else {
      rover.currentPositon = 0;
  }
}

function moveforward()
{
	switch(rover.direction)
	{
    case 'N':
      rover.position[0]++
      break;
    case 'E':
      rover.position[1]++
      break;
    case 'S':
      rover.position[0]--
      break;
    case 'W':
      rover.position[1]--
      break;
	}
}
function moveBackwards()
{
	switch(rover.direction)
	{
    case 'N':
      rover.position[0]--
      break;
    case 'E':
      rover.position[1]--
      break;
    case 'S':
      rover.position[0]++
      break;
    case 'W':
      rover.position[1]++
      break;
	}
}

function moveRover()
{
	var commands = document.getElementById("instruction").value;

	for (i=0;i<commands.length;i++)
	{
		switch(commands[i])
		{
			case "f":
	  			moveforward();
	  			break;
			case "b":
	 			  moveBackwards();
	  			break;
	  	case "l":
	 			  turnRoverLeft();
	  			break;
			case "r":
	 			  turnRoverRight();
	  			break;
			default:
	  			alert("Syntax error!\nCommand -" + commands[i] + "- unkwnown.");
		}
	}
}
