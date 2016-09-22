const isNumber = (equation, index) => {

  let thisItem = equation[index]

  // If it's a number, return true
  if(Number.isInteger(thisItem))
    return true

  // If it's an operator and it's not `-`, return false
  if(thisItem !== "-")
    return false

  /*
    A `-` can be considered a number, rather than an operand, if:
      it's the ONLY item in the equation
      it's the first item in the equation AND it's followed by a number
      it's preceded by a SINGLE operator AND it's the last item
      it's preceded by a SINGLE operator AND it's followed by a number
  */

  // If it's `-` and it's the only item, return false
  if(equation.length === 1){
    return true
  }

  // If it's the first item and it's followed by a number, return true
  if(index === 0){
    if(Number.isInteger(equation[index + 1])){
      return true
    }
    return false
  }

  let previousItem =  equation[index - 1]
  let previousItemIsInteger = Number.isInteger(previousItem)
  let isLastItem = index === equation.length -1 ? true : false

  // If it's preceded by a SINGLE operator AND it's the last item
  if(isLastItem){
    if(previousItemIsInteger){
      return true
    }
    return false
  }

  // If it's preceded by a SINGLE operator AND it's followed by a number
  let nextItemIsInteger = Number.isInteger(equation[index + 1])
  if(previousItemIsInteger && nextItemIsInteger){
    return true
  }

  return false
}

const checkOperators = (equation) => {

  /*
    Rules:
      Can't start with operator
      No 2 operators in a row
      Sometimes a `-` is part of a number, rather than an operand `-5`
  */
  var operatorsArray = []

  for (var i = 0; i < equation.length; i++) {
    let isOperator = !isNumber(equation, i)
    operatorsArray.push(isOperator)

    if(i === 0 && isOperator){
      return false
    }

    if(isOperator && operatorsArray[i - 1] === true){
      return false
    }
  }


  return true
}

export default checkOperators
