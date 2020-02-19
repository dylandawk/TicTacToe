const React = require("react");

function PlayerStatus(props)
{
  switch(props.gameState){
    case 0:
      return <h2>It is Player {props.playerTurn}'s Turn</h2>;
      break;
    case 1:
      return <h2>Player {props.playerTurn} Won!</h2>;
      break;
    case 2:
      return <h2>It is a tie -_-</h2>;
      break;
  }
  
}

module.exports = PlayerStatus;