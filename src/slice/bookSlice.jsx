
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.items.push(action.payload);
    },

    deleteBook: (state, action) => {
      state.items = state.items.filter(
        (book) => book.ISBN !== action.payload
      );
    },
  },
});

export const { addBook, deleteBook } = bookSlice.actions;

export default bookSlice.reducer;
