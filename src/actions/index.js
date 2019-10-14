import data from "../data";


export const initialState = () => {
  return {
    type: "INITIAL_STATE",
    payload: data
  };
};

export const listDepartures = ()=> {
  return {
    type: 'LIST_DEPARTURES',
  }
}

export const createDeparture = formValues => {
   return {
    type: "CREATE_DEPARTURE",
    payload: formValues
  }; 
};
