var myRover = {
  positionX : 0,
  positionY : 0,
  direction: 'N'
}
var obstacles = [
    {x : 1},
    {y : 1},
    {x : 7},
    {y : 4}
]
var gridLimit = 25;

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
  if (myRover.positionX > 0 && myRover.positionX > gridLimit) {
    alert('passed the gridLimits!, going previous position..');
    myRover.positionX -= 1;
    writeAlertPosition();
  }
  if (myRover.positionY > 0 && myRover.positionY > gridLimit) {
    alert('passed the gridLimits!, going previous position..');
    myRover.positionY -= 1;
    writeAlertPosition();
  }
}
function detectObstacle()
{
 if (myRover.positionX === obstacles.x && myRover.positionY === obstacles.y) {
   myRover.positionX -= 1;
   myRover.positionY -= 1;
   alert("your Rover has crashed!, setting to previous position...X:"+myRover.positionX+" Y:"+myRover.positionY);
   writeAlertPosition();
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
          writePosition();
	  			break;
			case 'b':
	 			  moveBackwards();
          writePosition();
	  			break;
	  	case 'l':
	 			  turnRoverLeft();
          writePosition();
	  			break;
			case 'r':
	 			  turnRoverRight();
          writePosition();
	  			break;
			default:
	  			alert("Syntax error!\nCommand -" + commands[i] + "- unkwnown.");
		}
	}

}

function writePosition()
{
	document.getElementById('position').innerHTML = "<b>Rover Position: position X: " + myRover.positionX + " position Y: " + myRover.positionY + " Facing " + myRover.direction + "</b>";
}
function writeAlertPosition(){
  if(detectObstacle()===true){
    document.getElementById('position').innerHTML = "<b>Crashed! setting previous position: " + myRover.positionX + " position Y: " + myRover.positionY + " Facing " + myRover.direction + "</b>";
  }
  if(gridLimits()===true){
    document.getElementById('position').innerHTML = "<b>passed the grid limits! setting previous position: " + myRover.positionX + " position Y: " + myRover.positionY + " Facing " + myRover.direction + "</b>";
  }

}
function reset()
{
	myRover.positionX = 0;
	myRover.positionY = 0;
	myRover.direction = 'N'
	document.getElementById('instruction').value = "";
	writePosition();
}
