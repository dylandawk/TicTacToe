const React = require("react");

function Clockface(props)
{
  return <h2>The time is {props.hours}:{props.minutes}:{props.seconds}</h2>
}

module.exports = Clockface;