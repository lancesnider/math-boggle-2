import React from 'react'
import getRelativeTilePosition from '../utils/get-relative-tile-position'

const circleConnector = (clickedTiles, index) => {

  let relativeTilePosition = getRelativeTilePosition(clickedTiles[index], clickedTiles[index-1])
  /*
    column, row, total for each tile in relation to the last

    -1 -1 -2     0 -1 -1     1 -1  0
    -1  0 -1                 1  0  1
    -1  1  0     0  1  1     1  1  2
  */
  let buttonSize = 60
  let connectorHeight = 3
  let relativeRowPlusColumn = relativeTilePosition.rowDistance + relativeTilePosition.columnDistance
  let relativeRowPlusColumnAbsolute = Math.abs(relativeRowPlusColumn)
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

  var leftPosition = buttonSize/2 -connectorWidth/2

  if(relativeTilePosition.columnDistance === 1){
    leftPosition = -connectorWidth/2
  }else if(relativeTilePosition.columnDistance === -1){
    leftPosition = -connectorWidth/2 + buttonSize
  }

  var topPosition = buttonSize/2 -connectorHeight/2
  if(relativeTilePosition.rowDistance === 1){
    topPosition = -connectorHeight/2
  }else if(relativeTilePosition.rowDistance === -1){
    topPosition = -connectorHeight/2 + buttonSize
  }



  let connectorStyle = {
    ...rotation,
    width: connectorWidth,
    left: leftPosition,
    top: topPosition
  }
  console.log(relativeTilePosition, connectorStyle)

  return (
    <div className="circle-connector" style={connectorStyle} />
  )
}

const Operands = (propsData) => (
  propsData.tileNumbers.map(function(number, key){
    let clickedTileIndex = propsData.clickedTiles.indexOf(key)
    let isDisabled = clickedTileIndex>-1 ? true : false
    return (
      <div className="operands-holder" key={key}>
        <div className="visual-equation">
          {isDisabled ? <div className="active-circle" /> : ""}
          {clickedTileIndex > 0  ? circleConnector(propsData.clickedTiles, clickedTileIndex) : ""}
        </div>
        <button
          onClick={ () => propsData.clickOperand(number, key) }
          className="button"
          disabled={isDisabled}
        >
          {number}
        </button>
      </div>
    )
  })
)

export default Operands
