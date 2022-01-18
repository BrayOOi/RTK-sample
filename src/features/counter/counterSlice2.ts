// file to keep code for local reducer
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const INITIAL_COUNTER_STATE = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState: INITIAL_COUNTER_STATE,
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    incrementLocal: (state) => {
      state.value++;
    },
    decrementLocal: (state) => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmountLocal: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    incrementIfOddLocal: (state, action: PayloadAction<number>) => {
      if (state.value % 2 === 1) {
        state.value += action.payload;
      }
    },
    incrementAsyncLocal: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const {
  incrementLocal,
  decrementLocal,
  incrementByAmountLocal,
  incrementIfOddLocal,
  incrementAsyncLocal,
} = counterSlice.actions;

export default counterSlice.reducer;
