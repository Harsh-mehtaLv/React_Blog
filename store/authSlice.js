import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  userDate: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.userDate = action.payload.userData;
    },
    logout: (state, action) => {
      state.status = false;
      state.userDate = null;
    },
  },
});

export const { login, logout } = authSlice.actions; // reducer ke andar login and logout actions hai
// now the store and reducer is ready 

export default authSlice.reducer;

// one more improvent here 
// ki post ka bhi aap store bana skte hai 
