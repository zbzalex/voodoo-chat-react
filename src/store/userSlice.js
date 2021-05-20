import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    _authenticated: false,

    id: 0,
    nick: null,
    canonNick: null,
    htmlNick: null,
    gender: null,
  },
  reducers: {},
});

export default userSlice.reducer;
