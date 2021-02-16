import { createReducer } from '@reduxjs/toolkit'
import * as aa from "./Types";

const initialState = {
    articles: [],
    loading: false,
    error: ''
};

const articleReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(aa.addArticleAction, (state, { payload }) => {
            state.articles = state.articles.concat(payload)
        })
        .addCase(aa.articleLoadingAction, (state, { payload: { loading }}) => {
            state.loading = loading
        })
        .addCase(aa.articleErrorAction, (state, { payload: { error }}) => {
            state.error = error
        })
        .addDefaultCase((state, action) => {})
})


export default articleReducer;