const { CHANGE_THEME } = require('@/constants')

const theme = sessionStorage.getItem("theme")
const INITIAL_STATE = {
  currentTheme: theme || "light",
}

function themeReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        currentTheme: action.payload.theme,
      }
    default:
      return state
  }
}

export { themeReducer }