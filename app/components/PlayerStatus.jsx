const React = require("react");

function PlayerStatus(props)
{
  return <h2>It is Player {props.playerTurn}'s Turn</h2>
}

module.exports = PlayerStatus;