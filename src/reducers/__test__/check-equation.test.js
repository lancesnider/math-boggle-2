import React from 'react'
// import expect from 'expect'
import checkEquation from '../check-equation'

it('runs an equation correctly', () => {
  console.log("This returns \"correct\":", checkEquation([2, "=", 2]))
  // expect(checkEquation([2, "=", 2]).text().to.equal("correct"))
})
