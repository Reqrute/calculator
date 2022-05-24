import React from 'react'

import Display from '@/components/Calculator/Display/FunctionalDispalay'
import Keypad from '@/components/Calculator/Keypad/FunctionalKeypad'
import Histrory from '@/components/Calculator/History/FunctionalHistory'

import { useDispatch, useSelector } from 'react-redux'

import {
  CalculatorContainer,
  ControlPanelContainer,
} from '../components'

import {
  calculate,
  setExpression,
  clearExpression,
  clearElement,
} from '@/actions'

function Calculator() {
  const calculator = useSelector(state => state.calculator)
  const { expr, history } = calculator
  const dispatch = useDispatch()

  const handleClick = key => {
    switch (key) {
      case '=':
        return dispatch(calculate(expr))
      case 'C':
        return dispatch(clearExpression())
      case 'CE':
        return dispatch(clearElement())
      default:
        return dispatch(setExpression(key))
    }
  }

  return (
    <CalculatorContainer>
      <ControlPanelContainer>
        <Display expr={expr} />
        <Keypad handleClick={handleClick} />
      </ControlPanelContainer>
      <Histrory history={history} />
    </CalculatorContainer>
  )
}

export default Calculator