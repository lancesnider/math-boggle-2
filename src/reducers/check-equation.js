/*
  The answer to an equation can be:
    - pending (not right or wrong yet)
    - correct
    - incorrect
      - Wrong answer
      - Don't [operator] by 0
      - Invalid operation
*/

export const checkEquation = (equation, newItem) => {

  return {
    equation: [...equation, newItem]
  }
}

export const checkAdjacentTile = (clickedTiles, newClickedTile) =>  {

  // If this is the first tile clicked, just return the new tile
  let clickedTilesLength = clickedTiles.length
  if(clickedTilesLength === 0){
    return [newClickedTile]
  }

  // Figure out column and row numbers based on tile number (tile 20 = col 0, row 4)
  let lastClickedTile = clickedTiles[clickedTilesLength - 1]
  let lastColumnNum = lastClickedTile % 5
  let lastRowNum = Math.floor(lastClickedTile/5)
  let newColumnNum = newClickedTile % 5
  let newRowNum = Math.floor(newClickedTile/5)

  // Check if the new and previous tile are adjacent
  if(Math.abs(lastColumnNum - newColumnNum) < 2 && Math.abs(lastRowNum - newRowNum) < 2) {
    return [...clickedTiles, newClickedTile]
  }

  // If they're not, return an empty array
  return []

}

export const checkEasyEquations = (equation, newOperand) => {

  if(newOperand === 0){

    //let lastEquationItem = equation[equation.length - 1]
    switch(equation[equation.length - 1]) {
      case "*":
        return "Can't multiply by 0"

    }

    //if(lastEquationItem === "*")
    //if( newOperand === 0 && !Number.isInteger(equation[equation.length - 1])) {

    //}
  }

  return ""

}
