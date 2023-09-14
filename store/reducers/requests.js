import { createSlice, configureStore } from "@reduxjs/toolkit";

const requestSlice = createSlice({
  name: "requests",
  initialState: [],
  requests: [],
  loading: false,
  reducers: {
    fetchRequests :(state=initialState, action)=> {
      switch(action.type){
        case actionTypes.FETCH_REQUESTS_REQUESTED:
      return { ...state, loading: true };
    case actionTypes.FETCH_REQUESTS_SUCCESS:
      return { ...state, requests: action.payload };
    case actionTypes.FETCH_REQUESTS_FAILED:
      return { ...state, loading: false, errors: action.payload };
      }
    },
  },
});



export const fetchRequests= requestSlice.actions.fetchRequests;
export default requestSlice.reducer;