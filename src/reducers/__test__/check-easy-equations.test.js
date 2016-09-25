import checkEasyEquation from '../check-easy-equations'
import T from 'i18n-react'
import Texts from '../../texts.js'

it('checks for easy equations', () => {
  expect(checkEasyEquation([22, "="], [true, false])).toEqual(T.texts.feedback.tooShort),
  expect(checkEasyEquation([22, "*", 2, "="], [true, false])).toEqual(""),
  expect(checkEasyEquation([22, "*", 0], [true, false, true])).toEqual(T.texts.feedback.zero),
  expect(checkEasyEquation([0, "/"], [true, false])).toEqual(T.texts.feedback.zero),
  expect(checkEasyEquation([22, "^", 2, "="], [true, false, true, false])).toEqual(""),
  expect(checkEasyEquation([4, "+", 0, "*", 300], [true, false, true, false, true])).toEqual(T.texts.feedback.zero),
  expect(checkEasyEquation([0], [true])).toEqual(T.texts.feedback.zero)
})
