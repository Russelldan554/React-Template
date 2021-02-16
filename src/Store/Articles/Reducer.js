import { createSlice } from '@reduxjs/toolkit'
import * as aa from "./Actions";

const articlesSlice = createSlice({
    name: 'articles',
    initialState: {
        articles: [],
        loading: false,
        error: ''
    },
    reducers: {
      addArticle(state, { payload }) {
        state.articles = state.articles.concat(payload)
      }
    },
    extraReducers: {
      [aa.addRandomArticle.pending]: (state, { payload }) => {
        state.loading = true
      },
      [aa.addRandomArticle.fulfilled]: (state, { payload }) => ({
        ...state,
        articles: state.articles.concat(payload),
        loading: false
      }),
      [aa.addRandomArticle.rejected]: (state, action) => ({
        ...state,
        error: action.payload,
        loading: false
      }),
    },
});
  

export const { addArticle } = articlesSlice.actions
export default articlesSlice.reducer;