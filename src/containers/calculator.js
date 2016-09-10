import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {clickOperator, clickOperand} from '../actions/index'

const operands = (propsData) => (
  propsData.tileNumbers.map(function(number, key){
    return (
      <button key={key} onClick={ () => propsData.clickOperand(number, key) } className="button">{number}</button>
    )
  })
)

class Calculator extends Component {
  render() {
    return (
      <div>
        <div className="feedback">
          <div className="hidden" >+10</div>
        </div>
        <div className="operands">
          {
            operands(this.props)
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

function mapStateToProps(state) {
  return {
    tileNumbers: state.gameData.tileNumbers
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    clickOperator: clickOperator,
    clickOperand: clickOperand
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Calculator)
