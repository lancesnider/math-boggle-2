import checkOperators from '../check-operators'

it('checks operators correctly', () => {

  let equations = [
    {
      equation: [5, "-", 9, "-"],
      result: true
    },
    {
      equation: [5, "-", "-", "-", 6],
      result: false
    },
    {
      equation: ["-"],
      result: true
    },
    {
      equation: [5],
      result: true
    },
    {
      equation: ["*"],
      result: false
    },
    {
      equation: ["-", 5],
      result: true
    },
    {
      equation: [5, "-", 9, "="],
      result: true
    },
    {
      equation: [5, "+", "+"],
      result: false
    }
  ]

  expect(checkOperators(equations[0].equation)).toEqual(equations[0].result)
  expect(checkOperators(equations[1].equation)).toEqual(equations[1].result)
  expect(checkOperators(equations[2].equation)).toEqual(equations[2].result)
  expect(checkOperators(equations[3].equation)).toEqual(equations[3].result)
  expect(checkOperators(equations[4].equation)).toEqual(equations[4].result)

})
