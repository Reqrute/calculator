// @todo: add some actions
import { evaluate } from 'mathjs' 

import {
  CALCULATE,
  SET_EXPRESSION,
  ADD_TO_HISTORY,
  CLEAR,
  CLEAR_ELEMENT,
  CLEAR_HISTORY,
  CHANGE_THEME,
} from '@/constants/actions'

const calculate = expr => async (dispatch, getState) => {
  const answer = evaluate(expr)
  try {
    if (expr.search(/[-+*/.]/) !== -1) {
      dispatch({
        type: ADD_TO_HISTORY,
        payload: { expr: expr },
      })
    }
    const state = getState(state => state)
    sessionStorage.setItem(
      'history',
      JSON.stringify(state.calculator.history),
    )
    dispatch({
      type: CALCULATE,
      payload: {
        expr: answer.toString(),
      },
    })
  } catch (error) {
    console.log(error)
  }
}

  const setExpression = key => async (dispatch, getState) => {
    try {
      const state = getState(state => state)
      if (state.calculator.expr.length < 20) {
        dispatch({
          type: SET_EXPRESSION,
          payload: {
            expr: key,
          },
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

  const clearExpression = () => {
    return {
      type: CLEAR,
      payload: {
        expr: '',
      },
    }
  }

  const clearElement = () => {
    return {
      type: CLEAR_ELEMENT,
    }
  }

  const clearHistory = () => {
    try {
      sessionStorage.removeItem('history')
      return {
        type: CLEAR_HISTORY,
      }
    } catch (error) {
      console.log(error)
    }
  }

  const changeTheme = selectedTheme => {
    try {
      sessionStorage.setItem('theme', selectedTheme)
      return {
        type: CHANGE_THEME,
        payload: {
          theme: selectedTheme,
        },
      }
    } catch (error) {
      console.log(error)
    }
  }
  
  export {
    calculate,
    setExpression,
    clearExpression,
    clearElement,
    clearHistory,
    changeTheme,
  }