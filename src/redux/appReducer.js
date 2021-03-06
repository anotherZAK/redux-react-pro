import { HIDE_LOADER, SHOW_LOADER, HIDE_ALERT, SHOW_ALERT } from "./types"

const initialState = {
  loading: false,
  alert: null
}

export const appReducer = (state = initialState, action) => {
  switch(action.type) {
    case SHOW_LOADER:
      return {...state, loading: true};
    case HIDE_LOADER:
      return {...state, loading: false};
    case SHOW_ALERT:
      return {...state, loading: true};
    case HIDE_ALERT:
      return {...state, loading: false};
    default:
      return state;
  }
}