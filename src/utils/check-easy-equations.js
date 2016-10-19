import T from 'i18n-react'

const checkEasyEquations = (equation, isIntArray) => {

  for (var i = 0; i < equation.length; i++) {
    // using 0 on its own is too easy 5*0=0
    if(equation[i] === 0 && !isIntArray[i-1]){
      if(equation.indexOf("=") === -1 || equation.indexOf("=") > i)
        return T.texts.feedback.zero
    }

    // to the power of 1 is too easy 1^123202=1
    if(equation[i] === "^"){
      if(equation[i - 1] === 1 && !isIntArray[i-2]){
        return T.texts.feedback.powerOf1
      }
    }
  }

  let equalsIndex = equation.indexOf('=')
  if(equalsIndex === -1)
    return ""

  // check that there's at least one operator before `=`
  if(isIntArray.slice(0, equalsIndex).indexOf(false) === -1)
    return T.texts.feedback.tooShort

  return ""
}

export default checkEasyEquations
