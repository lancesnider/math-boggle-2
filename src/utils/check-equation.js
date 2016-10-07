import T from 'i18n-react'

let operationOrder = ["^", "/", "*", "+-"]

const runOperationsOfType = (equation, operator) => {
  // This runs through the equation based on the order of operations until you have a
  // single number, which is the answer
  /*
    [5, "+", 2, "^", 2, "/", 4]          // Initial equation
    [5, "+", 4, "/", 4]                  // Replaces `2, "^", 2` with 4
    [5, "+", 1]                          // Replaces `4, "/", 4` with 1
    [6]                                  // Replaces `5, "+", 1` with 6, which the your answer
  */
  var operatorIndex
  var operatorActual = operator

  if(operator === "+-"){
    for (var i = 0; i < equation.length; i++) {
      if(equation[i] === "+"){
        operatorActual = "+"
        break
      }else if(equation[i] === "-"){
        operatorActual = "-"
        break
      }
    }
  }


  operatorIndex = equation.indexOf(operatorActual)


  // If there are no operators left, just return the answer
  if(operatorIndex === -1){
    return equation
  }
  var operationResult
  let firstNum = equation[operatorIndex - 1 ]
  let secondNum = equation[operatorIndex + 1 ]

  if(operatorActual === "^"){
    operationResult = Math.pow(firstNum, secondNum)
  }else if(operatorActual === "/"){
    operationResult = firstNum / secondNum
  }else if(operatorActual === "*"){
    operationResult = firstNum * secondNum
  }else if(operatorActual === "+"){
    operationResult = firstNum + secondNum
  }else if(operatorActual === "-"){
    operationResult = firstNum - secondNum
  }

  // replace the current operation with its result
  equation.splice(operatorIndex-1, 3, operationResult)
  if(equation.indexOf(operator) > -1 || equation.indexOf("+") > -1 || equation.indexOf("-") > -1){
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
    let answerToString = actualAnswer.toString()[i]
    if(
      clickedAnswer[i] !== parseInt(answerToString, 10) &&
      !(answerToString === "-" && clickedAnswer[i] === "-")
    ){
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

  let equationWithNumbers = equation.slice(0, equalsIndex)
  let actualAnswer = runEquation(equationWithNumbers)
  var clickedAnswer = equation.slice(equalsIndex + 1)
  if(clickedAnswer < 0){
    clickedAnswer = ["-", Math.abs(clickedAnswer)]
  }

  // Returns "correct", "pending", or an error
  return checkAnwers(clickedAnswer, actualAnswer)
}

export default checkEquation
