import React from 'react'
// import getTileRowColumn from '../utils/get-tile-row-column'

const findPreviousTile = (clickedTiles) => {
  for (var i = 1; i < clickedTiles.length; i++) {
    // Figure out column and row numbers based on tile number (tile 20 = col 0, row 4)
    // let newRowColumn = getTileRowColumn(clickedTiles[i])
    // let lastRowColumn = getTileRowColumn(clickedTiles[i - 1])
    // console.log(newRowColumn - lastRowColumn)
  }
}

const Operands = (propsData) => (
  propsData.tileNumbers.map(function(number, key){
    let isDisabled = propsData.clickedTiles.indexOf(key)>-1 ? true : false
    let previousTiles = findPreviousTile(propsData.clickedTiles)
    return (
      <div className="operands-holder" key={key}>
        {isDisabled ? <div className="active-circle" /> : ""}
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
