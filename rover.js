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
    myRover.positionX -= 1;
    writeAlertPosition();
  }
  if (myRover.positionY > 0 && myRover.positionY > gridLimit) {
    myRover.positionY -= 1;
    writeAlertPosition();
  }
  if (myRover.positionX < 0 && myRover.positionX < gridLimit) {
    myRover.positionX += 1;
    writeAlertPosition();
  }
  if (myRover.positionY < 0 && myRover.positionY < gridLimit) {
    myRover.positionY += 1;
    writeAlertPosition();
  }

}
function detectObstacle()
{
  for (i = 0; i < obstacles.length; i++) {

    if (!obstacles[0] || !obstacles[1] || !obstacles[2]) {
    writePosition();
    } else{
      if (myRover.positionX === obstacles[0] || myRover.positionX === obstacles[1] || myRover.positionX === obstacles[2]) {
        myRover.positionX -= 1;
        myRover.positionY -= 1;
        writeAlertPosition();
      }
      if (myRover.positionY === obstacles[0] || myRover.positionY === obstacles[1] || myRover.positionY === obstacles[2]) {
        myRover.positionX -= 1;
        myRover.positionY -= 1;
        writeAlertPosition();
      }
    }
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
