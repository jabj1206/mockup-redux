export default (state = [], action) => {
  // console.log(action.payload);
 switch (action.type) {
   case 'INITIAL_STATE':
      return action.payload
   default:
     return state
 }
}
