var myRover = {
  position: [0, 0],
  direction: ['N', 'E', 'S', 'W'],
  currentPositon: 0,
  stopRover: false,
  obstacles: [[2, 3], [6, 7], [9, 10]]
}
function getCommands (commands) {
  var instructions = commands.split(' ');
  return instructions;
}
