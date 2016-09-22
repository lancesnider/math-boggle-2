import checkEquation from '../check-equation'

it('runs an equation correctly', () => {

  let equations = [
    {
      equation: [5, "-", 9, "=", "-", 4],
      feedback: "correct"
    },
    {
      equation: [5, "-", 9, "=", 4],
      feedback: "Incorrect"
    },
    {
      equation: [2, "+", 2, "^", 2, "=", 1, 6],
      feedback: "Incorrect"
    },
    {
      equation: [2, "+", 2, "^", 2, "=", 6],
      feedback: "correct"
    },
    {
      equation: [5, "*", "-", 2, "=", "-", 1, 0],
      feedback: "correct"
    },
    {
      equation: [5, "*", "-", 2, "+", 6, "=", "-", 4],
      feedback: "correct"
    },
    {
      equation: [1, 0, 6, "/", 2, "+", 6, "*", 3, "=", 7, 1],
      feedback: "correct"
    }

  ]

  for(test of equations){
    console.log(test.equation, test.feedback)
    expect(checkEquation(test.equation)).toEqual(test.feedback)
  }
})
