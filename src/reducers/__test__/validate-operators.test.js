import validateOperators from '../validate-operators'

it('checks that equation has valid combo of operators and operands', () => {
  expect(validateOperators([false])).toEqual(false)
  expect(validateOperators([false, true])).toEqual(false)
  expect(validateOperators([true, false])).toEqual(true)
  expect(validateOperators([true, false, false, true])).toEqual(false)
})
