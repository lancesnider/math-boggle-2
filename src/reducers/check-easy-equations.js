const checkEasyEquations = (equation, newOperand) => {
  if(newOperand === 0){
    switch(equation[equation.length - 1]) {
      case "*":
        return "Can't multiply by 0"
      case "/":
        return "Can't divide by 0"
      case "^":
        return "Can't factor by 0"
      default:
        return ""
    }
  }
  return ""
}

export default checkEasyEquations
