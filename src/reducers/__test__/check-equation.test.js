import checkEquation from '../check-equation'
import T from 'i18n-react'
import Texts from '../../texts.js'

it('runs an equation correctly', () => {

  let equations = [
    {
      equation: [5, "-", 9, "=", "-", 4],
      feedback: "correct"
    },
    {
      equation: [5, "-", 9, "=", 4],
      feedback: T.texts.feedback.incorrect
    },
    {
      equation: [2, "+", 2, "^", 2, "=", 1, 6],
      feedback: T.texts.feedback.incorrect
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
    },
    {
      equation: [1, 0, 6, "/", 2, "+", 6, "*", 3, "=", 7],
      feedback: "pending"
    },
    {
      equation: [5, "-", 6, "=", "-"],
      feedback: "pending"
    }

  ]

  for(test of equations){
    // console.log(test.equation, test.feedback)
    expect(checkEquation(test.equation)).toEqual(test.feedback)
  }
})
