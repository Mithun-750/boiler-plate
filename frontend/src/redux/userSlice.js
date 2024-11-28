import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : null,
  isLoading: false,
  error: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    setUser: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
      state.error = null;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.user = null;
      state.error = null;
      localStorage.removeItem('user');
    },
  },
});

export const { setLoading, setError, setUser, logout } = userSlice.actions;

export default userSlice.reducer;
