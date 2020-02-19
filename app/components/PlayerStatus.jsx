const React = require("react");

function PlayerStatus(props)
{
  if(props.gameState == 0){
    return <h2>It is Player {props.playerTurn}'s Turn</h2>;
  } else (if gameState =)
  {
      return <h2> Player {props.playerTurn} Won!</h2>
  }
}

module.exports = PlayerStatus;