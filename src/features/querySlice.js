import { createSlice } from "@reduxjs/toolkit";

const querySlice = createSlice({
  name: "queries",
  initialState: {
    history: [],
    result: null,
    loading: false,
    error: null,
  },
  reducers: {
    submitQuery: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    setQueryResult: (state, action) => {
      state.loading = false;
      state.result = action.payload;
      state.history.push(action.payload.query);
    },
    setQueryError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { submitQuery, setQueryResult, setQueryError } = querySlice.actions;
export default querySlice.reducer;
