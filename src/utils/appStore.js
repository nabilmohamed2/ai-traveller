import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import travelReducer from "./travelSlice";

const appStore = configureStore({
    reducer : {
        user : userReducer,
        travel : travelReducer
    }
})

export default appStore;