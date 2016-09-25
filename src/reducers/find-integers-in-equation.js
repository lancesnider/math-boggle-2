const findIntegersInEquation = (equation) => {
  // Figure out which items in the array are integers and which are operators
  // The `-` makes this a bit more complicated
    // 3-2   => [int, operator, int]
    // -3-2  => [int, int, operator, int]
    // 3*-2  => [int, operator, int, int]

  var newEquation = []
  var isIntArray = []
  var lastOperatorIndex = -1

  for (var i = 0; i < equation.length; i++) {

    let thisItem = equation[i]
    // check if the item is an operator or an operand
    var isInt = Number.isInteger(thisItem)
    if(!isInt && thisItem === "-"){
      // check if `-` is part of a number or an operator

      // if it's the only
      if(equation.length === 1){
        isInt = true
      }

      // if it's the first item
      if(i === 0){
        // and the next item is a number
        if( Number.isInteger(equation[i + 1]) ){
          isInt = true
        }
      }
      // if it's the last item
      else if(i === equation.length -1){
        // and the previous item was an operator
        if(!isIntArray[i - 1]){
          isInt = true
        }
      }else{
        // if the previous item mas an operator and the next is a number
        if(!isIntArray[i - 1] && Number.isInteger(equation[i + 1])){
          isInt = true
        }
      }
    }

    isIntArray.push(isInt)

  }

  return isIntArray

}

export default findIntegersInEquation
