import React from 'react'
import visualEquation from '../containers/visualEquation'
import checkAdjacentTile from '../utils/check-adjacent-tile'

const Operands = (propsData) => (
  propsData.tileNumbers.map(function(number, key){
    let clickedTileIndex = propsData.clickedTiles.indexOf(key)
    let isDisabled = clickedTileIndex>-1 ? true : false

    var notAdjacentStyle = {}
    if(checkAdjacentTile(propsData.clickedTiles, key).length === 0){
      notAdjacentStyle = {
        backgroundColor: '#aaaaaa'
      }
    }

    return (
      <div className="operands-holder" key={key}>
        <div className="visual-equation">
          {isDisabled ? <div className="active-circle" /> : ""}
          {clickedTileIndex > 0  ? visualEquation(propsData.clickedTiles, clickedTileIndex, propsData.equation) : ""}
        </div>
        <button
          onClick={ () => propsData.clickOperand(number, key) }
          className="button"
          style={notAdjacentStyle}
          disabled={isDisabled}
        >
          {number}
        </button>
      </div>
    )
  })
)

export default Operands
