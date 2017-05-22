var myRover = {
  positionX : 0,
  positionY : 0,
  direction: 'N',
  obstacle1X : 5,
  obstacle1Y : 2,
  obstacle2X : 3,
  obstacle2Y : 7
}

function turnRoverRight(){
  switch(rover.direction)
	{
		case 'N':
			myRover.direction = 'E';
			break;
		case 'S':
			myRover.direction = 'W';
			break;
		case 'E':
			myRover.direction = 'S';
			break;
		case 'W':
			myRover.direction = 'N';
			break;
	}
}

function turnRoverLeft(){
  switch(myRover.direction)
	{
		case 'N':
			myRover.direction = 'W';
			break;
		case 'S':
			myRover.direction = 'E';
			break;
		case 'E':
			myRover.direction = 'N';
			break;
		case 'W':
			myRover.direction = 'S';
			break;
	}
}

function moveforward()
{
	switch(myRover.direction)
	{
    case 'N':
			myRover.positionY += 1;
			break;
		case 'S':
			myRover.positionY -= 1;
			break;
		case 'E':
			myRover.positionX += 1;
			break;
		case 'W':
			myRover.positionX -= 1;
			break;
	}
}

function moveBackwards()
{
	switch(myRover.direction)
	{
    case 'N':
			myRover.positionY -= 1;
			break;
		case 'S':
			myRover.positionY += 1;
			break;
		case 'E':
			myRover.positionX -= 1;
			break;
		case 'W':
			myRover.positionX += 1;
			break;
	}
}
function gridLimits()
{
  if (positionX > 25) {
    alert('You are out of limits!, setting to the default position...');
    reset();
  }
  if (positionY > 25) {
    alert('You are out of limits!, setting to the default position...');
    reset();
  }
}
function detectObstacle()
{
 if (positionX === obstacle1X && positionY === obstacle1Y) {
   alert('your Rover has crashed!, setting to the default position...');
   reset();
 }
 else if (positionX === obstacle2X && positionY === obstacle2Y) {
   alert('your Rover has crashed!, setting to the default position...');
   reset();
 }
 else {
   writePosition();
 }
}
function moveRover()
{
	var commands = document.getElementById("instruction").value;

	for (i=0;i<commands.length;i++)
	{
		switch(commands[i])
		{
			case 'f':
	  			moveforward();
          gridLimits();
	  			break;
			case 'b':
	 			  moveBackwards();
          gridLimits();
	  			break;
	  	case 'l':
	 			  turnRoverLeft();
          gridLimits();
	  			break;
			case 'r':
	 			  turnRoverRight();
          gridLimits();
	  			break;
			default:
	  			alert("Syntax error!\nCommand -" + commands[i] + "- unkwnown.");
		}
	}
  writePosition();
}

function writePosition()
{
	document.getElementById('position').innerHTML = "<b>Rover Position: positionX=" + myRover.positionX + " positionY=" + myRover.positionY + " Facing " + myRover.direction + "</b>";
}
function reset()
{
	myRover.positionX = 0;
	myRover.positionY = 0;
	myRover.direction = 'N'
	document.getElementById('instruction').value = "";
	writePosition();
}
