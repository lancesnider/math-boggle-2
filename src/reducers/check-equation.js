/*
  The answer to an equation can be:
    - pending (not right or wrong yet)
    - correct
    - incorrect
      - Wrong answer
      - Don't [operator] by 0
      - Invalid operation
*/

const checkEquation = (equation, newItem) => {

  return {
    equation: [...equation, newItem]
  }
}

export default checkEquation
