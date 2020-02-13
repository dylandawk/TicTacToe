const React = require("react");
const util = require("../logic/util.js");

function PageRoot() 
{
  return <h1>This is my page now! It belongs to {util.getName()}</h1>
}

module.exports = PageRoot;
