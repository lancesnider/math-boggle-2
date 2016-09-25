import simplifyEquationNumbers from '../simplify-equation-numbers'

it('correctly identifies integers in the equations', () => {
  expect(simplifyEquationNumbers([2, 2, 2, 2], [true,true,true,true])).toEqual([2222])
  expect(simplifyEquationNumbers([2, "*", 2, 2], [true,false,true,true])).toEqual([2,"*",22])
  expect(simplifyEquationNumbers(["-"], [true])).toEqual(["-"])
  expect(simplifyEquationNumbers(["-", 2, 2], [true,true,true])).toEqual([-22])
  expect(simplifyEquationNumbers([2, 2, 2, "-"], [true,true,true,false])).toEqual([222,"-"])
  expect(simplifyEquationNumbers([2, 2, "*", "-"], [true,true,false,true])).toEqual([22,"*", "-"])
  expect(simplifyEquationNumbers([2,"-","-","-"], [true,false,false,true])).toEqual([2, "-", "-", "-"])
  expect(simplifyEquationNumbers([2,"-","-","*"], [true,false,false,false])).toEqual([2, "-", "-", "*"])
  expect(simplifyEquationNumbers([2, "=", "-"], [true,false,true])).toEqual([2,"=", "-"])
  expect(simplifyEquationNumbers([2, 2, "*", "-", 2], [true,true,false,true,true])).toEqual([22,"*", -2])
})
