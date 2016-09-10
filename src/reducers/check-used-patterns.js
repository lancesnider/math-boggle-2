// We need to make sure the player can't just repeat the same patterns. For example, if they
// already got `1+2=3`, `2+1=3` is not longer a valid equation. Simiarly, if the same equation
// appears on the board twice, the player should only be able to get it once.
//
// By assigning each number (0 - 9) a unique prime number (0=3, 1=5), and by multiplying each
// prime number for each number in the equation, we can we can give each equation a unique
// identifier. Ex:
//   Equation:                    1 + 2 = 3
//   Associated prime numbers:    5,  7,  11
//   Unique ID for this pattern:  5*7*11 = 385
// The ID for `1+2=3`, `2+1=3` will be the same, so the player will only get points for the first.
const primeNumbers = [3,5,7,11,13,17,19,23,29,31]

const checkUsedPatterns = (usedPatterns, equation) => {

  var uniqueId = 1
  equation.map(function(item){
    if(item.isInteger(item)){
      uniqueId *= primeNumbers[item]
    }
  })

  if(usedPatterns.indexOf(uniqueId) > -1){
    return 0
  }

  return uniqueId
}

export default checkUsedPatterns
