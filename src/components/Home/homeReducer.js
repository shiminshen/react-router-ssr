import { createActions, handleActions } from 'redux-actions'

export const fetchContent = createActions('FETCH_CONTENT')

const initialState = {
  content: ''
}
export default handleActions(
  {
    [fetchContent]: (state, { payload }) => ({
      ...state,
      content: payload
    })
  },
  initialState
)
