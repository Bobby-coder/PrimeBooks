import { createSlice } from "@reduxjs/toolkit";
import { bookList } from "../../../utils/books.js";

const initialState = {
  items: [...bookList],
  filteredItems: [...bookList],
  currentCategory: "all",
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.items.push({...action.payload, id:crypto.randomUUID()});
      // Sync filteredItems with items after adding a book
      state.filteredItems = state.items;
    },

    filterBookByCategory: (state, action) => {
      const category = action.payload.toLowerCase();
      state.currentCategory = category;

      if (category === "all") {
        // If "all" is selected, show all items
        state.filteredItems = state.items;
      } else {
        // Filter by category
        state.filteredItems = state.items.filter(
          ({ category: bookCategory }) =>
            bookCategory.toLowerCase() === category
        );
      }
    },

    filterBookByTitleOrAuthor: (state, action) => {
      const searchTerm = action.payload.toLowerCase().trim();

      // first filter by category
      let categoryFilteredItems = state.items;

      if (state.currentCategory !== "all") {
        categoryFilteredItems = state.items.filter(
          ({ category: bookCategory }) =>
            bookCategory.toLowerCase() === state.currentCategory
        );
      }

      // search filter on top of the category-filtered items
      if (searchTerm !== "") {
        state.filteredItems = categoryFilteredItems.filter(
          ({ title, author }) => {
            return (
              title.toLowerCase().includes(searchTerm) ||
              author.toLowerCase().includes(searchTerm)
            );
          }
        );
      } else {
        // If search is empty, show the category-filtered items
        state.filteredItems = categoryFilteredItems;
      }
    },
  },
});

export const { addBook, filterBookByCategory, filterBookByTitleOrAuthor } =
  bookSlice.actions;
export default bookSlice.reducer;
