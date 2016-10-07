const simplifyEquationNumbers = (equation, isIntArray) => {
  if(isIntArray.length === 1 && isIntArray[0] === true)
    return equation

  var newEquation = []
  var lastOperatorIndex = -1
  for (var i = 0; i < isIntArray.length; i++) {

    if(isIntArray[i] === false){

      if(i !== 0 && lastOperatorIndex !== i - 1){
        let fullNumber = parseInt(equation.slice(lastOperatorIndex + 1, i).join(''), 10)
        newEquation.push(fullNumber)
      }

      newEquation.push(equation[i])
      lastOperatorIndex = i

    }else if(i === isIntArray.length -1){
      let newNumberLength = i - lastOperatorIndex
      if(newNumberLength === 1 && equation[i] === "-"){
        newEquation.push("-")
      }else if(lastOperatorIndex !== i - 1){
        var fullNumber = parseInt(equation.slice(lastOperatorIndex + 1).join(''), 10)
        newEquation.push(fullNumber)
      }else if(newNumberLength === 1){
        newEquation.push(equation[i])
      }
    }

  }

  return newEquation

}

export default simplifyEquationNumbers
