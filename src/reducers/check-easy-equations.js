import T from 'i18n-react'

const checkEasyEquations = (equationWithNumbers, isIntArray) => {

  let equalsIndex = equationWithNumbers.indexOf('=')
  if(equalsIndex === -1)
    return ""

  // check that there's at least one operator before `=`
  if(isIntArray.slice(0, equalsIndex).indexOf(false) === -1)
    return T.texts.feedback.tooShort

  // if there's a 0, check that there's not a `*` before or after
  for (var i = 0; i < equationWithNumbers.length; i++) {
    if(equationWithNumbers[i] === 0){
      //check before/after, if
    }
  }


  // if(newOperand === 0){
  //   switch(equation[equation.length - 1]) {
  //     case "*":
  //       return T.texts.feedback.multiplyByZero
  //     case "/":
  //       return T.texts.feedback.divideByZero
  //     case "^":
  //       return T.texts.feedback.factorByZero
  //     default:
  //       return ""
  //   }
  // }
  return ""
}

export default checkEasyEquations
