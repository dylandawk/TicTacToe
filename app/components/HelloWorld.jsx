const React = require("react");
const util = require("../logic/util.js");
const PlayerStatus = require("./PlayerStatus.jsx");

function PageRoot() {
  const rows = 3;
  const columns = 3;
  const [grid, setGrid] = React.useState( [
        [" ", " ", " "],
        [" ", " ", " "],
        [" ", " ", " "],
    ]);
  const [player, setPlayer] = React.useState9(0);
  const PLAYER_ONE = 0;
  const PLAYER_TWO = 1;
  
  const buttonStyle = {
    backgroundColor: "#4CAF50", /* Green */
    border: "none",
    color: "white",
    padding: "15px 32px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px"
  };

  const rowCrossed = () => {
    for (let i=0; i<rows; i++) 
    { 
        if (grid[i][0] == grid[i][1] && 
            grid[i][1] == grid[i][2] &&  
            grid[i][0] != " ") 
            return (true); 
    } 
    return(false); 
  }

  const columnCrossed = () => {
    for (let i=0; i<columns; i++) 
    { 
        if (grid[0][i] == grid[1][i] && 
            grid[1][i] == grid[2][i] &&  
            grid[0][i] != " ") 
            return (true); 
    } 
    return(false); 
  }

  const diagonalCrossed = () => {

    if (grid[0][0] == grid[1][1] && 
      grid[1][1] == grid[2][2] &&  
      grid[0][0] != " ") 
      return(true); 
        
    if (grid[0][2] == grid[1][1] && 
        grid[1][1] == grid[2][0] && 
        grid[0][2] != " ") 
        return(true); 

    return(false); 
  }

  const gameOver = () => {
    return(rowCrossed(grid) || columnCrossed(grid) || diagonalCrossed(grid) );
  }
  
  function playGame(buttonClicked)
  {
  }

  return <div>
    <h2>Hello World!</h2>
    <br></br>
    <h2>The Current Player is: </h2>
    <button style = {buttonStyle}> {grid[0][0]} </button>
    <button style = {buttonStyle}> {grid[0][1]} </button> 
    <button style = {buttonStyle}> {grid[0][2]} </button>
    <br></br>
    <button style = {buttonStyle}> {grid[1][0]} </button>
    <button style = {buttonStyle}> {grid[1][2]} </button>
    <button style = {buttonStyle}> {grid[2][0]} </button>
    <br></br>
    <button style = {buttonStyle}> {grid[2][1]} </button>
    <button style = {buttonStyle}> {grid[2][2]} </button>
    <button style = {buttonStyle}> {grid[2][2]} </button>
  </div>

}

module.exports = PageRoot;
