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
      state.mail = action.payload.mail;
      state.displayName = action.payload.displayName;
      state.uid = action.payload.uid;
    },
    clearUser(state) {
      state.mail = null;
      state.displayName = null;
      state.uid = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;