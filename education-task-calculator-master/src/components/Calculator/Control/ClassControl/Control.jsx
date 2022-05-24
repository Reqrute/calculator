import React from 'react'

import { connect } from 'react-redux'

import {
  CalculatorContainer,
  ControlPanelContainer,
} from '../components'

import Display from '@/components/Calculator/Display/ClassDisplay'
import Keypad from '@/components/Calculator/Keypad/ClassKeypad'
import Histrory from '@/components/Calculator/History/ClassHistory'

import {
  calculate,
  setExpression,
  clearExpression,
  clearElement,
} from '@/actions'


class Calculator extends React.Component {
  onHandleClick = key => {
    switch (key) {
      case '=':
        return this.props.calculate(this.props.expr)
      case 'C':
        return this.props.clearExpression()
      case 'CE':
        return this.props.clearElement()
      default:
        return this.props.setExpression(key)
    }
  }

  render() {
    return (
      <CalculatorContainer>
        <ControlPanelContainer>
          <Display expr={this.props.expr} />
          <Keypad handleClick={this.onHandleClick} />
        </ControlPanelContainer>
        <Histrory history={this.props.history} />
      </CalculatorContainer>
    )
  }
}
const mapStateToProps = state => ({
  expr: state.calculator.expr,
  history: state.calculator.history,
})
export default connect(mapStateToProps, {
  calculate,
  setExpression,
  clearExpression,
  clearElement,
})(Calculator)

