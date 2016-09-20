import React, {Component} from 'react'
import Operands from './Operands'

class Calculator extends Component {
  render() {
    return (
      <div>
        <div className="feedback">
          <div className="hidden" >+10</div>
        </div>
        <div className="operands">
          {
            Operands(this.props)
          }
        </div>
        <div>
          <div className="operators">
            <button onClick={ () => this.props.clickOperator("+") } className="button">+</button>
            <button onClick={ () => this.props.clickOperator("-") } className="button">-</button>
            <button onClick={ () => this.props.clickOperator("*") } className="button">*</button>
            <button onClick={ () => this.props.clickOperator("/") } className="button">/</button>
            <button onClick={ () => this.props.clickOperator("^") } className="button">^</button>
          </div>
          <button onClick={ () => this.props.clickOperator("=") } className="button green equals">=</button>
        </div>
      </div>
    )
  }
}

export default Calculator