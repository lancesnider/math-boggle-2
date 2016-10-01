const getTileRowColumn = (newTile, lastTile) => {

  let lastColumnNum = lastTile % 5
  let lastRowNum = Math.floor(lastTile/5)
  let newColumnNum = newTile % 5
  let newRowNum = Math.floor(newTile/5)

  return {
    rowDistance: newRowNum - lastRowNum,
    columnDistance: newColumnNum - lastColumnNum
  }
}

export default getTileRowColumn
