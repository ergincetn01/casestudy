import * as actionTypes from "../actions/actionTypes";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const requestSlice = createSlice({
  name: "requests",
  initialState: {
    content: [],
    loading: false,
  },

  reducers: {
    fetchRequests: (state = initialState, action) => {
      switch (action.type) {
        case actionTypes.FETCH_REQUESTS_REQUESTED:
          return { ...state, loading: true };
        case actionTypes.FETCH_REQUESTS_SUCCESS:
          return { ...state, content: action.payload };
        case actionTypes.FETCH_REQUESTS_FAILED:
          return { ...state, loading: false, errors: action.payload };
        default:
          return state;
      }
    },
  },
});

export const fetchRequests = requestSlice.actions.fetchRequests;
export default requestSlice.reducer;
