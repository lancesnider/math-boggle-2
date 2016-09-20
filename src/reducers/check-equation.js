
let operationOrder = ["^", "/", "*", "+", "-"]

const runOperationsOfType = (equation, operator) => {
  let operatorIndex = equation.indexOf(operator)
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


  equation.splice(operatorIndex-1, 3, operationResult)
  if(equation.indexOf(operator) > -1){
    return (runOperationsOfType(equation, operator))
  }

  return equation
}

const runEquation = (equation) => {

  var newEquation = []
  for(let operator of operationOrder){
    newEquation = runOperationsOfType(equation, operator)
    if(newEquation.length === 1)break
  }
  return newEquation[0]

}

const convertArrayToNumbers = (equation) => {

  var lastOperatorIndex = -1
  var newEquation = []

  for (var i = 0; i < equation.length; i++) {
    if(!Number.isInteger(equation[i])){
      let fullNumber = parseInt(equation.slice(lastOperatorIndex + 1, i).join(''), 10)
      newEquation.push(fullNumber, equation[i])
      lastOperatorIndex = i
    }else if(i === equation.length - 1){
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
  for (var i = 0; i < clickedAnswer.length; i++) {
    if(clickedAnswer[i] !== parseInt(actualAnswer.toString()[i], 10)){
      return "Incorrect"
    }
  }
  return "pending"
}

const checkEquation = (equation) => {

  let equalsIndex = equation.indexOf("=")
  if(equalsIndex === -1){
    return "pending"
  }

  let equationWithNumbers = convertArrayToNumbers(equation.slice(0, equalsIndex))
  let actualAnswer = runEquation(equationWithNumbers)
  let clickedAnswer = equation.slice(equalsIndex + 1)
  return checkAnwers(clickedAnswer, actualAnswer)
}

export default checkEquation
