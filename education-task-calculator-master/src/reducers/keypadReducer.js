/* eslint-disable no-case-declarations */
import {
    CALCULATE,
    SET_EXPRESSION,
    ADD_TO_HISTORY,
    CLEAR,
    CLEAR_ELEMENT,
    CLEAR_HISTORY,
  } from '@/constants'
  
  import { setExpression } from '@/helpers'
  
  const history = JSON.parse(sessionStorage.getItem("history"))
  
  const INITIAL_STATE = {
    expr: ' ',
    history: history || [],
  }
  
  function keypadReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case CALCULATE:
        return {
          ...state,
          expr: action.payload.expr,
        }
      case SET_EXPRESSION:
        const expression = setExpression(state.expr, action)
        return {
          ...state,
          expr: expression,
        }
      case ADD_TO_HISTORY:
        state.history.push(action.payload.expr)
        return {
          ...state,
        }
      case CLEAR:
        return {
          ...state,
          expr: action.payload.expr,
        }
      case CLEAR_ELEMENT:
        return {
          ...state,
          expr: state.expr.slice(0, state.expr.length - 1),
        }
      case CLEAR_HISTORY:
        return {
          ...state,
          history: state.history.splice(),
        }
      default:
        return state
    }
  }
  
  export { keypadReducer }
  