// features/counter/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: []
};

const characterSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    addCharacter: (state, action) => {
      state.data.push(action.payload);
    },
    removeCharacter: (state, action) => {
      state.data.splice(action.payload, 1);
    },
    loadAllCharacters: (state, action) => {
      state.data = action.payload;
      console.log(state.data)
    },
  },
});

export const { addCharacter, removeCharacter, loadAllCharacters} = characterSlice.actions;
export default characterSlice.reducer;
