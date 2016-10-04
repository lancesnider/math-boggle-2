import React from 'react'
import getRelativeTilePosition from '../utils/get-relative-tile-position'

const getOperatorPositions = (clickedTiles, index, equation) => {

  var operatorCount = 0
  for (var i = 0; i < equation.length; i++) {

    if(!Number.isInteger(equation[i])){
      if(i - operatorCount === index){
        switch(equation[i]){
          case "*":
            return "×"
          case "^":
            return "⌃"
          default:
            return equation[i]
        }
      }
      operatorCount++
    }
  }

  return ""

}

const visualEquation = (clickedTiles, index, equation) => {

  let thisOperator = getOperatorPositions(clickedTiles, index, equation)
  let relativeTilePosition = getRelativeTilePosition(clickedTiles[index], clickedTiles[index-1])
  /*
    column, row, total for each tile in relation to the last

    -1 -1 -2     0 -1 -1     1 -1  0
    -1  0 -1                 1  0  1
    -1  1  0     0  1  1     1  1  2
  */
  let buttonSize = 60
  let relativeRowPlusColumnAbsolute = Math.abs(relativeTilePosition.rowDistance + relativeTilePosition.columnDistance)
  let isDiagonal = relativeRowPlusColumnAbsolute === 1 ? false : true
  let connectorWidth = isDiagonal ? 46 : 22

  var rotation = {}
  if(isDiagonal){
    if(relativeRowPlusColumnAbsolute === 2){
      rotation = {
        transform: 'rotate(45deg)',
        WebkitTransform: 'rotate(45deg)'
      }
    }else{
      rotation = {
        transform: 'rotate(-45deg)',
        WebkitTransform: 'rotate(-45deg)'
      }
    }
  }else{
    if(relativeTilePosition.columnDistance === 0){
      rotation = {
        transform: 'rotate(90deg)',
        WebkitTransform: 'rotate(90deg)'
      }
    }
  }

  let connectorStyle = {
    left: -buttonSize/2 * relativeTilePosition.columnDistance,
    top: -buttonSize/2 * relativeTilePosition.rowDistance
  }

  let lineConnectorStyle = {
    ...rotation,
    width: connectorWidth
  }

  return (
    <div className="connector" style={connectorStyle}>
      {thisOperator !== "" ? <div className="visual-operator">{thisOperator}</div> : ""}
      <div className="line-connector" style={lineConnectorStyle} />
    </div>
  )
}

export default visualEquation
