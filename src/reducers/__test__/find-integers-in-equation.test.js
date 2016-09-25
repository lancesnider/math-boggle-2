import findIntegersInEquation from '../find-integers-in-equation'

it('correctly identifies integers in the equations', () => {
  expect(findIntegersInEquation([2, 2, 2, 2])).toEqual([true,true,true,true])
  expect(findIntegersInEquation([2, "*", 2, 2])).toEqual([true,false,true,true])
  expect(findIntegersInEquation(["-"])).toEqual([true])
  expect(findIntegersInEquation(["-", 2, 2])).toEqual([true,true,true])
  expect(findIntegersInEquation([2, 2, 2, "-"])).toEqual([true,true,true,false])
  expect(findIntegersInEquation([2, 2, "*", "-"])).toEqual([true,true,false,true])
  expect(findIntegersInEquation([2,"-","-","-"])).toEqual([true,false,false,true])
  expect(findIntegersInEquation([2,"-","-","*"])).toEqual([true,false,false,false])
  expect(findIntegersInEquation([2, "=", "-"])).toEqual([true,false,true])
  expect(findIntegersInEquation([2, 2, "*", "-", 2])).toEqual([true,true,false,true, true])
})