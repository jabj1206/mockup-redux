export default (state = null, action) => {
  switch (action.type) {
    case "SEARCH":
      if (action.payload) {
        const value = action.payload.toLowerCase();
        const result = action.departures.filter(val => {
          return (
            val["from"].toLowerCase().includes(value) ||
            val["to"].toLowerCase().includes(value)
          );
        });
        return result;
      } else {
        return action.departures;
      }
    default:
      return state;
  }
};
