import React from 'react'

const Operands = (propsData) => (
  propsData.tileNumbers.map(function(number, key){
    return (
      <button
        key={key}
        onClick={ () => propsData.clickOperand(number, key) }
        className="button"
        disabled={ propsData.clickedTiles.indexOf(key)>-1 ? true : false }
      >
        {number}
      </button>
    )
  })
)

export default Operands
