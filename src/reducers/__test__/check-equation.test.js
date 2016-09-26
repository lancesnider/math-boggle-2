import checkEquation from '../check-equation'
import T from 'i18n-react'
import Texts from '../../texts.js'

it('checks for the correct answer', () => {
  expect(checkEquation([8, "^", 2, "=", 64])).toEqual("correct")
  expect(checkEquation([2])).toEqual("pending")
  expect(checkEquation([5, "*", 4, "/", 2, "*", 3,"=", 30])).toEqual("correct")
  expect(checkEquation([20, "/", 2, "*", 9, "/", 3,"=", 30])).toEqual("correct")
  expect(checkEquation([7, "+", 1, "+", 9, "=", 1])).toEqual("pending")
  expect(checkEquation([7, "+", 1, "+", 9, "=", 17])).toEqual("correct")
  expect(checkEquation([7, "+", 1, "+", 9, "-", 3, "+", 8, "+", 4, "=", 26])).toEqual("correct")
  expect(checkEquation([7, "+", 1, "*", 9, "-", 3, "*", 8, "-", 4, "=", -12])).toEqual("correct")
  expect(checkEquation([7, "+", 1, "*", 9, "-", 3, "*", 8, "-", 4, "=", "-"])).toEqual("pending")
  expect(checkEquation([7, "+", 1, "*", 9, "-", 3, "*", 8, "-", 4, "=", -1])).toEqual("pending")
  expect(checkEquation([7, "+", 1, "*", 9, "-", 3, "*", 8, "-", 4, "=", 2])).toEqual(T.texts.feedback.incorrect)
  expect(checkEquation([7, "+", 1, "*", 9, "-", 3, "*", 8, "-", 4, "=", -2])).toEqual(T.texts.feedback.incorrect)
})
