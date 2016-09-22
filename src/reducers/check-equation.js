import T from 'i18n-react'

let operationOrder = ["^", "/", "*", "+", "-"]

const runOperationsOfType = (equation, operator) => {
  // This runs through the equation based on the order of operations until you have a
  // single number, which is the answer
  /*
    [5, "+", 2, "^", 2, "/", 4]          // Initial equation
    [5, "+", 4, "/", 4]                  // Replaces `2, "^", 2` with 4
    [5, "+", 1]                          // Replaces `4, "/", 4` with 1
    [6]                                  // Replaces `5, "+", 1` with 6, which the your answer
  */
  let operatorIndex = equation.indexOf(operator)
  // If there are no operators left, just return the answer
  if(operatorIndex === -1){
    return equation
  }
  var operationResult
  let firstNum = equation[operatorIndex - 1 ]
  let secondNum = equation[operatorIndex + 1 ]

  if(operator === "^"){
    operationResult = Math.pow(firstNum, secondNum)
  }else if(operator === "/"){
    operationResult = firstNum / secondNum
  }else if(operator === "*"){
    operationResult = firstNum * secondNum
  }else if(operator === "+"){
    operationResult = firstNum + secondNum
  }else if(operator === "-"){
    operationResult = firstNum - secondNum
  }

  // replace the current operation with its result
  equation.splice(operatorIndex-1, 3, operationResult)
  if(equation.indexOf(operator) > -1){
    return (runOperationsOfType(equation, operator))
  }

  return equation
}

const runEquation = (equation) => {

  var newEquation = []
  // Keep running the equation through runOperationsOfType until you have an answer
  for(let operator of operationOrder){
    newEquation = runOperationsOfType(equation, operator)
    // If there's only 1 item in newEquation, that's your answer
    if(newEquation.length === 1)break
  }
  return newEquation[0]

}

const convertArrayToNumbers = (equation) => {
  // This turns all numbers that are separate items in the array to numbers
  // [ 1, 0, "+", "-", 5 ] => [10, "+", -5]
  var lastOperatorIndex = -1
  var newEquation = []

  for (var i = 0; i < equation.length; i++) {
    // If there's an operator, add it and the previous number to newEquation
    // Unless it's a `-` that's preceded by another operator, which should be treated as an operand
    if(!Number.isInteger(equation[i]) && !(equation[i] === "-" && lastOperatorIndex === i - 1)){
      let fullNumber = parseInt(equation.slice(lastOperatorIndex + 1, i).join(''), 10)
      newEquation.push(fullNumber, equation[i])
      lastOperatorIndex = i
    }
    // If it's the last item, add the number to newEquation
    else if(i === equation.length - 1){
      let fullNumber = parseInt(equation.slice(lastOperatorIndex + 1).join(''), 10)
      newEquation.push(fullNumber)
    }
  }

  return newEquation
}

const checkAnwers = (clickedAnswer, actualAnswer) => {

  if(parseInt(clickedAnswer.join(''), 10) === actualAnswer){
    return "correct"
  }

  // This is for negative numbers when they've only typed "-", which isn't a number
    // Technically this should never happen because `checkAnswers` only runs when
    // an operand is clicked, but better safe than sorry. :)
  if(
    clickedAnswer.length === 1 &&
    clickedAnswer[0] === "-" &&
    actualAnswer < 0
  ){
    return "pending"
  }

  for (var i = 0; i < clickedAnswer.length; i++) {
    if(clickedAnswer[i] !== parseInt(actualAnswer.toString()[i], 10)){
      return T.texts.feedback.incorrect
    }
  }

  return "pending"
}

const checkEquation = (equation) => {

  let equalsIndex = equation.indexOf("=")
  // If there's no equals sign, the player isn't done with the equation yet
  if(equalsIndex === -1){
    return "pending"
  }

  let equationWithNumbers = convertArrayToNumbers(equation.slice(0, equalsIndex))
  let actualAnswer = runEquation(equationWithNumbers)
  let clickedAnswer = equation.slice(equalsIndex + 1)

  // Returns "correct", "pending", or an error
  return checkAnwers(clickedAnswer, actualAnswer)
}

export default checkEquation
