import { createSlice } from '@reduxjs/toolkit';
import { Books as initialBooks } from '../utils/Data';

const savedBooks = JSON.parse(localStorage.getItem('books')) || initialBooks;

const initialState = {
  books: savedBooks,
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
      localStorage.setItem('books', JSON.stringify(state.books));
    },
  },
});

export const { addBook } = bookSlice.actions;

export default bookSlice.reducer;
