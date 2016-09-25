
import {defaultGameData, equationOverGameData}  from './reducer-game-data.js'
import findIntegersInEquation from './find-integers-in-equation'
import simplifyEquationNumbers from './simplify-equation-numbers'

const validateEquation = (equation, state) => {

  // Check valid operation
  // Check if `=`
    // Check if easy
    // Check if repeat
    // Check if Correct, Pending, or Invalid

  let isIntArray = findIntegersInEquation(equation)
  let equationWithNumbers = simplifyEquationNumbers(equation, isIntArray)


  let newState = Object.assign({}, state, {
    equation: equation
  })

  return {
    status: "pending",
    state: newState
  }
}



export default validateEquation
