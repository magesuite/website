import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const initialState = {
  video: "",
  acceptCookies: false
}

export const actionTypes = {
  PLAY_VIDEO: 'P_VIDEO',
  STOP_VIDEO: 'S_VIDEO',
  ACCEPT_COOKIES: 'A_COOKIE',
  SCROLL: 'SCROLL'
}

// REDUCERS
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PLAY_VIDEO:
      return Object.assign({}, state, { video: action.video });
    case actionTypes.STOP_VIDEO:
      return Object.assign({}, state, { video: "" });
    case actionTypes.ACCEPT_COOKIES:
      return Object.assign({}, state, { acceptCookies: true });   
    case actionTypes.SCROLL:
      return Object.assign({}, state, { scrollY: action.scrollY });   s
    default: return state
  }
}

// ACTIONS
export const playVideo = (video) => {
  return { type: actionTypes.PLAY_VIDEO, video };
}

export const stopVideo = () => {
    return { type: actionTypes.STOP_VIDEO };
}

export const acceptCookies = () => {
  return { type: actionTypes.ACCEPT_COOKIES };
}

export const scrollY = (y) => {
  return { type: actionTypes.SCROLL, scrollY: y };
}

export const initStore = (initialState = initialState) => {
  return createStore(reducer, initialState, composeWithDevTools())
}