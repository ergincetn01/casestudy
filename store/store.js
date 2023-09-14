import { configureStore } from "@reduxjs/toolkit";
import requestsReducer from "./reducers/requests"

export const store= configureStore({
    reducer: {
        request_: requestsReducer
    }
})
