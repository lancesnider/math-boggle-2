
import {defaultGameData, equationOverGameData}  from './reducer-game-data.js'

const validateEquation = (equation, state) => {

  // Check valid operation
  // Check if `=`
    // Check if easy
    // Check if repeat
    // Check if Correct, Pending, or Invalid

  // Reduce equation to numbers ["-",2,2] => [-22]


  let newState = Object.assign({}, state, {
    equation: equation
  })

  return {
    status: "pending",
    state: newState
  }
}



export default validateEquation
