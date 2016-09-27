
import {equationOverGameData}  from './reducer-game-data.js'
import findIntegersInEquation from './find-integers-in-equation'
import simplifyEquationNumbers from './simplify-equation-numbers'
import validateOperators from './validate-operators'
import checkAdjacentTile from './check-adjacent-tile'
import checkEasyEquations from './check-easy-equations'
import checkEquation from './check-equation'
import addToScore from './add-to-score'

const validateEquation = (equation, state, tileClicked = -1) => {

  // If if clicked tiles are adjacent
  // Check valid operation
  // Check if `=`
    // Check if easy
    // Check if repeat
    // Check if Correct, Pending, or Invalid

  // If if clicked tiles are adjacent
  var newClickedTiles = state.clickedTiles
  if(tileClicked > -1){
    newClickedTiles = checkAdjacentTile(state.clickedTiles, tileClicked)
    if(newClickedTiles.length === 0) {
     return Object.assign({}, state, equationOverGameData)
    }
  }

  // Check valid operation
  let isIntArray = findIntegersInEquation(equation)
  let validOperators = validateOperators(isIntArray)
  if(!validOperators){
    return Object.assign({}, state, equationOverGameData)
  }

  let equationWithNumbers = simplifyEquationNumbers(equation, isIntArray)
  let easyFeedback = checkEasyEquations(equation, isIntArray)
  if(easyFeedback !== ""){
    return Object.assign({}, state, {
      ...equationOverGameData,
      feedback: easyFeedback
    })
  }

  let equationFeedback = checkEquation(equationWithNumbers)
  if(equationFeedback === "pending"){
    return Object.assign({}, state, {
      equation: equation,
      clickedTiles: newClickedTiles
    })
  }else if(equationFeedback === "correct"){
    let newScore = addToScore(state.score, equation)
    return Object.assign({}, state, {
      ...equationOverGameData,
      ...newScore
    })
  }else{
    return Object.assign({}, state, {
      ...equationOverGameData,
      feedback: equationFeedback
    })
  }
}

export default validateEquation
