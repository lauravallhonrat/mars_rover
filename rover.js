var myRover = {
  positionX : 0,
  positionY : 0,
  direction: 'N'
}
var obstacles = [
    [3,2],
    [4,8],
    [12,7]
]
var gridLimit = 25;
var obstacleDetected = false;
var limitsDetected = false;

function turnRoverRight(){
  switch(myRover.direction)
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
    myRover.positionX -= 1;
    limitsDetected = true;
    writePosition();
  }
  if (myRover.positionY > 0 && myRover.positionY > gridLimit) {
    myRover.positionY -= 1;
    limitsDetected = true;
    writePosition();
  }
  if (myRover.positionX < 0 && myRover.positionX < gridLimit) {
    myRover.positionX += 1;
    limitsDetected = true;
    writePosition();
  }
  if (myRover.positionY < 0 && myRover.positionY < gridLimit) {
    myRover.positionY += 1;
    limitsDetected = true;
    writePosition();
  }

}
function detectObstacle()
{
  for (var i = 0; i < obstacles.length; i++) {

      if (myRover.positionX === obstacles[i][0] && myRover.positionY === obstacles[i][1] ) {
        myRover.positionX -= 1;
        myRover.positionY -= 1;
        obstacleDetected = true;
        writePosition();
  }else {
     writePosition();
   }
 }
}

function moveRover()
{
  obstacleDetected = false;
  limitsDetected = false;
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

 function writePosition(){
   if(obstacleDetected === true){
    document.getElementById('position').innerHTML = "<b>Crashed! setting previous position: " + myRover.positionX + " position Y: " + myRover.positionY + " Facing " + myRover.direction + "</b>";
   }
   else if(limitsDetected === true){
     document.getElementById('position').innerHTML = "<b>passed the grid limits! setting previous position: " + myRover.positionX + " position Y: " + myRover.positionY + " Facing " + myRover.direction + "</b>";
   }else if (limitsDetected === false && obstacleDetected === false){
     document.getElementById('position').innerHTML = "<b>Rover Position: position X: " + myRover.positionX + " position Y: " + myRover.positionY + " Facing " + myRover.direction + "</b>";
   }
 }

function reset(){
	myRover.positionX = 0;
	myRover.positionY = 0;
	myRover.direction = 'N'
	document.getElementById('instruction').value = "";
  writePosition();
}
