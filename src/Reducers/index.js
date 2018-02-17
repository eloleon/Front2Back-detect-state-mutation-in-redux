const initialState = {
  text: 'Sample Text'
}
export default (state = initialState, action) => {
  switch (action.type) {
    case 'DO_NOT_MUTATE':
      return {
        ...state,
        text: action.text
      }
    case 'MUTATE':
      return state.text = action.text
    default:
      return state
  }
}
