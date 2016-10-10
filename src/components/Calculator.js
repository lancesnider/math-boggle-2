import React, {Component} from 'react'
import Operands from './Operands'

class Calculator extends Component {
  render() {
    return (
      <div>
        <div className="operands">
          {
            Operands(this.props)
          }
        </div>
        <div>
          <div className="operators">
            <button onMouseDown={ () => this.props.clickOperator("+") } className="button">+</button>
            <button onMouseDown={ () => this.props.clickOperator("-") } className="button">−</button>
            <button onMouseDown={ () => this.props.clickOperator("*") } className="button">×</button>
            <button onMouseDown={ () => this.props.clickOperator("/") } className="button">÷</button>
            <button onMouseDown={ () => this.props.clickOperator("^") } className="button">ˆ</button>
          </div>
          <button onMouseDown={ () => this.props.clickOperator("=") } className="button green equals">=</button>
        </div>
      </div>
    )
  }
}

export default Calculator