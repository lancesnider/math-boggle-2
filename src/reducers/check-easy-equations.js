import T from 'i18n-react'

const checkEasyEquations = (equation, isIntArray) => {

  for (var i = 0; i < equation.length; i++) {
    if(equation[i] === 0){
      if(equation.indexOf("=") === -1 || equation.indexOf("=") > i)
        return T.texts.feedback.zero
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
