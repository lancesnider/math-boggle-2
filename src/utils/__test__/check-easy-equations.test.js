import checkEasyEquation from '../check-easy-equations'
import T from 'i18n-react'
import Texts from '../../texts.js'

it('checks for easy equations', () => {
  expect(checkEasyEquation([2, 2, "="], [true, true, false])).toEqual(T.texts.feedback.tooShort),
  expect(checkEasyEquation([2, 2, "*", 2, "="], [true, true, false])).toEqual(""),
  expect(checkEasyEquation([2, 2, "*", 0], [true, true, false, true])).toEqual(T.texts.feedback.zero),
  expect(checkEasyEquation([0, "/"], [true, false])).toEqual(T.texts.feedback.zero),
  expect(checkEasyEquation([2, 2, "^", 2, "="], [true, true, false, true, false])).toEqual(""),
  expect(checkEasyEquation([4, "+", 0, "*", 300], [true, false, true, false, true, true, true])).toEqual(T.texts.feedback.zero),
  expect(checkEasyEquation([0], [true])).toEqual(T.texts.feedback.zero)
  expect(checkEasyEquation([5, 6, 5, "*", 3, "="], [true, true, true, false, true, false])).toEqual("")
  expect(checkEasyEquation([5,0], [true, true])).toEqual("")
  expect(checkEasyEquation([5,"^", 1, "="], [true, false, true, false])).toEqual("")
  expect(checkEasyEquation([5,"^", 1, 0], [true, false, true, true])).toEqual("")
  expect(checkEasyEquation([1,"^", 5], [true, false, true])).toEqual(T.texts.feedback.powerOf1)
  expect(checkEasyEquation([1, "+", 1,"^", 5], [true, false, true, false, true])).toEqual(T.texts.feedback.powerOf1)
  expect(checkEasyEquation([1,1,"^", 5], [true, true, false, true])).toEqual("")
})
