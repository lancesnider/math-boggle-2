import addToScore from '../add-to-score'

it('returns the correct score', () => {
  expect(addToScore(10, [2, "+", 2, "=", 4])).toEqual({
    feedback: "+6",
    score: 16
  })
  expect(addToScore(0, [7, "+", 1, "*", 9, "-", 3, "*", 8, "-", 4, "=", -2])).toEqual({
    feedback: "+26",
    score: 26
  })
})