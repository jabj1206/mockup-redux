export default (state=[], action) =>{
  switch (action.type) {
    case 'CREATE_DEPARTURE':
      return [...state, action.payload]
    case 'LIST_DEPARTURES':
      return state
    case 'FETCH_DEPARTURES':
      return action.payload
    default:
      return state
  }
}