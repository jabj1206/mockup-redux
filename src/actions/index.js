import data from "../data";
import departures from "../apis/departures";
import history from "../history";

export const initialState = () => {
  return {
    type: "INITIAL_STATE",
    payload: data
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

export const fetchDepartures = () => async dispatch => {
  
  const response = await departures.get("/departures");
  dispatch({ type: "FETCH_DEPARTURES", payload: response.data });
};

export const createDepartures = formValues => async (dispatch) => {
 
  const response = await departures.post("/departures", { ...formValues });

  dispatch({ type: "CREATE_DEPARTURE", payload: response.data });
  history.push("/");
};
