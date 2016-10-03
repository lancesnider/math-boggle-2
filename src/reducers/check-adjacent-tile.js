import getRelativeTilePosition from '../utils/get-relative-tile-position'

const checkAdjacentTile = (clickedTiles, newClickedTile) =>  {
  // If this is the first tile clicked, just return the new tile
  let clickedTilesLength = clickedTiles.length
  if(clickedTilesLength === 0){
    return [newClickedTile]
  }

  // Figure out column and row numbers based on tile number (tile 20 = col 0, row 4)
  let relativeTilePosition = getRelativeTilePosition(newClickedTile, clickedTiles[clickedTilesLength - 1])

  if(Math.abs(relativeTilePosition.rowDistance) < 2 && Math.abs(relativeTilePosition.columnDistance) < 2){
    return [...clickedTiles, newClickedTile]
  }

  return []
}

export default checkAdjacentTile
