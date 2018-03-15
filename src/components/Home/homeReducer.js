import { createActions, handleActions } from 'redux-actions'

export const fetchContent = createActions('FETCH_CONTENT')

const initialState = {
  content: ''
}
export default handleActions({
  [fetchContent]: (state = initialState, { payload }) => ({
    ...state,
    content: payload
  })
})
