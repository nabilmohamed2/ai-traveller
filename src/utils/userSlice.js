import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    mail: null,
    displayName: null,
    uid: null,
  },
  reducers: {
    setUser(state, action) {
      console.log("Action payload:", action.payload);
      state.mail = action.payload.mail;
      state.displayName = action.payload.displayName;
      state.uid = action.payload.uid;
    },
    clearUser(state) {
      console.log("Clearing user info");
      state.mail = null;
      state.displayName = null;
      state.uid = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;