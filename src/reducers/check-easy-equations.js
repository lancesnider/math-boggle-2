import T from 'i18n-react'

const checkEasyEquations = (equation, newOperand) => {
  if(newOperand === 0){
    switch(equation[equation.length - 1]) {
      case "*":
        return T.texts.feedback.multiplyByZero
      case "/":
        return T.texts.feedback.divideByZero
      case "^":
        return T.texts.feedback.factorByZero
      default:
        return ""
    }
  }
  return ""
}

export default checkEasyEquations
