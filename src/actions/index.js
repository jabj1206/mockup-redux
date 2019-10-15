import data from "../data";
import departures from "../apis/departures";

export const initialState = () => {
  return {
    type: "INITIAL_STATE",
    payload: data
  };
};

export const listDeparture = id => {
  return {
    type: "LIST_DEPARTURE",
    payload: id
  };
};

export const listDepartures = () => {
  return {
    type: "LIST_DEPARTURES"
  };
};

export const createDeparture = formValues => {
  return {
    type: "CREATE_DEPARTURE",
    payload: formValues
  };
};

export const updateDeparture = (formValues, id) => {
  return {
    type: "UPDATE_DEPARTURE",
    payload: formValues,
    id: id
  };
};

export const deleteDeparture = idDeparture => {
  return {
    type: "DELETE_DEPARTURE",
    payload: idDeparture
  };
};

export const fetchDepartures = () => async dispatch => {
  const response = await departures.get("/departures");
  dispatch({ type: "FETCH_DEPARTURES", payload: response.data });
};

export const search = data => {
  return {
    type: "SEARCH",
    payload: data
  };
};

export const filter = filter => {
  return {
    type: "FILTER",
    payload: filter
  };
};
