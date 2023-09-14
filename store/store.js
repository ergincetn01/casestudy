import { configureStore } from "@reduxjs/toolkit";
import requests, {requestsReducers} from "./reducers/requests"

export const store= configureStore({
    reducer: {
        requestReducer: requests
    }
})
