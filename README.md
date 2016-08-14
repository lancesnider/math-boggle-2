# Math Boggle

It's like Boggle, but for math nerds. The longer the equation and the more complex operators, the more points you'll earn. 

![math-boggle](https://cloud.githubusercontent.com/assets/3202211/17510781/a88e7888-5e63-11e6-9f70-b16bac39b6fb.gif)

## Development Notes

This is actually v2. You can find a fully functional version of [v1 here](https://github.com/lancesnider/math-boggle). I just wanted to try it again, but better. 

#### Differences between [v1](https://github.com/lancesnider/math-boggle) and v2: 

1. I won't be using `eval` to run the equations. Instead each operation will have its own function. 
2. I'll be using Flux architecture so there isn't such a spider web of updating components. 
3. I'll run tests, specifically using Enzyme. 
