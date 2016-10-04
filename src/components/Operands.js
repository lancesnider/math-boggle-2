import React from 'react'
import visualEquation from '../containers/visualEquation'

const Operands = (propsData) => (
  propsData.tileNumbers.map(function(number, key){
    let clickedTileIndex = propsData.clickedTiles.indexOf(key)
    let isDisabled = clickedTileIndex>-1 ? true : false
    return (
      <div className="operands-holder" key={key}>
        <div className="visual-equation">
          {isDisabled ? <div className="active-circle" /> : ""}
          {clickedTileIndex > 0  ? visualEquation(propsData.clickedTiles, clickedTileIndex, propsData.equation) : ""}
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
