import { createSlice } from '@reduxjs/toolkit'
import * as aa from "./Actions";

const articlesSlice = createSlice({
    name: 'articles',
    initialState: {
        articles: [],
        loading: false,
        error: '',
        counter: 0
    },
    reducers: {
      addArticle(state, { payload }) {
        state.articles = state.articles.concat(payload)
      },
      increment(state) {
          state.counter++
      }
    },
    extraReducers: {
      [aa.addRandomArticle.pending]: (state) => {
        state.loading = true
      },
      [aa.addRandomArticle.fulfilled]: (state, { payload }) => ({
        ...state,
        articles: state.articles.concat(payload),
        loading: false
      }),
      [aa.addRandomArticle.rejected]: (state, action) => ({
        ...state,
        error: action.error?.message || 'Error',
        loading: false
      }),
    },
});
  

export const { addArticle, increment } = articlesSlice.actions
export default articlesSlice.reducer;