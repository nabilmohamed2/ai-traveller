import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Use localStorage as default storage
import userReducer from "./userSlice";
import travelReducer from "./travelSlice";

// Configure persistence for both reducers
const persistConfig = {
  key: "root",
  storage,
};

// Combine reducers
const rootReducer = combineReducers({
  user: userReducer,
  travel: travelReducer,
});

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store
const appStore = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(appStore);
export default appStore;