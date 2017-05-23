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
  switch(myRover.direction)
	{
		case 'N':
			myRover.direction = 'E';
      gridLimits();
			break;
		case 'S':
			myRover.direction = 'W';
      gridLimits();
			break;
		case 'E':
			myRover.direction = 'S';
      gridLimits();
			break;
		case 'W':
			myRover.direction = 'N';
      gridLimits();
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
      gridLimits();
      detectObstacle();
			break;
		case 'S':
			myRover.positionY -= 1;
      gridLimits();
      detectObstacle();
			break;
		case 'E':
			myRover.positionX += 1;
      gridLimits();
      detectObstacle();
			break;
		case 'W':
			myRover.positionX -= 1;
      gridLimits();
      detectObstacle();
			break;
	}
}

function moveBackwards()
{
	switch(myRover.direction)
	{
    case 'N':
			myRover.positionY -= 1;
      gridLimits();
      detectObstacle();
			break;
		case 'S':
			myRover.positionY += 1;
      gridLimits();
      detectObstacle();
			break;
		case 'E':
			myRover.positionX -= 1;
      gridLimits();
      detectObstacle();
			break;
		case 'W':
			myRover.positionX += 1;
      gridLimits();
      detectObstacle();
			break;
	}
}
function gridLimits()
{
  if (myRover.positionX > 25) {
    alert('You are out of limits!, setting to the default position...');
    reset();
  }
  if (myRover.positionY > 25) {
    alert('You are out of limits!, setting to the default position...');
    reset();
  }
}
function detectObstacle()
{
 if (myRover.positionX === myRover.obstacle1X && myRover.positionY === myRover.obstacle1Y) {
   alert('your Rover has crashed!, setting to the default position...');
   reset();
 }
 else if (myRover.positionX === myRover.obstacle2X && myRover.positionY === myRover.obstacle2Y) {
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
	  			break;
			case 'b':
	 			  moveBackwards();
	  			break;
	  	case 'l':
	 			  turnRoverLeft();
	  			break;
			case 'r':
	 			  turnRoverRight();
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
