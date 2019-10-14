import data from "../data";

export default (state = data, action) => {
  switch (action.type) {
    case "CREATE_DEPARTURE":
      return [...state, action.payload];
    case "DELETE_DEPARTURE":
      const result = state.filter(departure => departure.id !== action.payload)      
      return result
    case "LIST_DEPARTURES":
      return state;
    case "FETCH_DEPARTURES":
      return action.payload;
    default:
      return state;
  }
};
