import { configureStore } from '@reduxjs/toolkit'
import thunk from "redux-thunk";
import articlesReducer from "./Articles/Reducer";

const rootReducer = {
    articles: articlesReducer,
}

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;