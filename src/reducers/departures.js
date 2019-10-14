export default (state=[], action) =>{
  switch (action.type) {
    case 'CREATE_DEPARTURE':
      return [...state, action.payload]
    case 'LIST_DEPARTURES':
      return state
    default:
      return state
  }
}