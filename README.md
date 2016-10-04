# Math Boggle

Try to string together equations from the numbers on the board. The longer the equation and the more complex operators, the more points you'll earn. 

Play it online: http://aprendagames.com/games/math-boggle/index.html

![Math Boggle](https://cloud.githubusercontent.com/assets/3202211/19062510/037f6c0a-89b8-11e6-867f-a9b160715d44.gif)

#### Rules

- Each number you click needs to touch the previous number (for `1+2=3`, 1 must touch 2 and 2 must touch 3)
- You need to remember the order of operations (`1+3*2=7`, not `8`)
- You can't multiply, divide, add to, or subtract from zero (bad: `10*0=0`)
- There needs to be at least one operator to the left of the `=` (bad: `123=123`)
- Don't repeat equations, even if they're in a different order (`1+2=3` is the same as `3-1=3`)

## Installation

Clone the repo 
```shell
git clone git@github.com:lancesnider/math-boggle-2.git
```
Install the packages
```shell
npm install
```
Run Math Boggle
```shell
npm start
```
Testing
```shell
npm test
```

#### Differences between [v1](https://github.com/lancesnider/math-boggle) and v2: 

1. This version runs tests (Jest)
2. Rather than using `eval` to solve the equations, this version uses pure functions
3. This version uses Redux so there isn't such a spider web of updating components
