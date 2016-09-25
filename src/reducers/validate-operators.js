const validateOperators = (isIntArray) => {

  if(isIntArray.length === 1 && isIntArray[0] === false){
    return false
  }

  for (var i = 0; i < isIntArray.length; i++) {
    if(i !== 0 && isIntArray[i] === false && isIntArray[i - 1] === false)
      return false
  }

  return true

}

export default validateOperators
