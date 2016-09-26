import T from 'i18n-react'

const checkEasyEquations = (equationWithNumbers, isIntArray) => {

  for (var i = 0; i < equationWithNumbers.length; i++) {
    if(equationWithNumbers[i] === 0){
      if(equationWithNumbers.indexOf("=") === -1 || equationWithNumbers.indexOf("=") > i)
        return T.texts.feedback.zero
    }
  }

  let equalsIndex = equationWithNumbers.indexOf('=')
  if(equalsIndex === -1)
    return ""

  // check that there's at least one operator before `=`
  if(isIntArray.slice(0, equalsIndex).indexOf(false) === -1)
    return T.texts.feedback.tooShort

  return ""
}

export default checkEasyEquations
