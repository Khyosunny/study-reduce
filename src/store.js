
export const INITAL_STATE = {
  isLoading: null,
  users: null,
  error: null
}

export function reducer(state, action){
  switch(action.type){
    case 'START_LOADING':
      return {
        ...state,
        isLoading: true
      }
    case 'SUCCESS':
      return {
        ...state,
        isLoading: false,
        users: action.users
      }
    case 'ERROR':
      return {
        isLoading: null,
        users: null,
        error: action.error
      }
    default:
      return state
  }
}