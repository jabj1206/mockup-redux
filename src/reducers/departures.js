import data from "../data";
import _ from "lodash";

const initialState = { departures: [...data] };

export default (state = initialState, action) => {
  switch (action.type) {
    case "LIST_DEPARTURE":
      const find = state.departures.find(
        x => x.id === Number.parseInt(action.payload)
      );
      return { ...state, find };
    case "CREATE_DEPARTURE":
      const PayloadId = { ...action.payload, id: state.departures.length };
      console.log(PayloadId);

      return Object.assign({}, state, {
        departures: state.departures.concat(PayloadId)
      });

    case "DELETE_DEPARTURE":
      const result = state.departures.filter(
        departure => departure.id !== action.payload
      );
      return { departures: result };

    case "UPDATE_DEPARTURE":
      return {
        ...state,
        departures: state.departures.map(departure => {
          if (departure.id === action.payload.id) {
            console.log(action.payload);
            return action.payload;
          }
          return departure;
        })
      };

    case "LIST_DEPARTURES":
      return state;
    case "FETCH_DEPARTURES":
      return action.payload;
    case "SEARCH":
      const data = state.departures;
      if (action.payload) {
        const value = action.payload.toLowerCase();
        const result = state.departures.filter(val => {
          return (
            val["from"].toLowerCase().includes(value) ||
            val["to"].toLowerCase().includes(value)
          );
        });
        return { departures: result };
      } else {
        return { departures: data };
      }
    case "FILTER":
      if (action.payload) {
        const newState = state.departures.sort((a, b) =>
          a.date > b.date ? 1 : -1
        );
        return { departures: newState };
      } else {
        const newState = state.departures.sort((a, b) =>
          a.date > b.date ? -1 : 1
        );
        return { departures: newState };
      }
    default:
      return state;
  }
};
