
const addToScore = (oldScore, equation) => {

  var scoreToAdd = equation.length
  for (var i = 0; i < equation.length; i++) {
    if(equation[i] == "+")
      scoreToAdd += 1
    if(equation[i] == "-")
      scoreToAdd += 2
    if(equation[i] == "*")
      scoreToAdd += 4
    if(equation[i] == "/")
      scoreToAdd += 5
    if(equation[i] == "^")
      scoreToAdd += 8
  }

  console.log(scoreToAdd)

  return {
    feedback: "+"+scoreToAdd,
    score: oldScore + scoreToAdd
  }
}

export default addToScore
