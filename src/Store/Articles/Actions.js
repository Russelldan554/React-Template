import { getArticle } from './Api'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { increment, addArticle } from './Reducer'

export const addRandomArticle = createAsyncThunk(
  'articles/addRandomArticle',
  async (payload, thunkapi) => {
    const { articles } = thunkapi.getState();
      console.log(articles.loading);
      const data = await getArticle();
      console.log('counter in article before: ',articles.counter);
      thunkapi.dispatch(increment());
      const newCounter = await thunkapi.dispatch(addtest());
      console.log('counter in article after: ', newCounter);
      return data
  }
)
  
export const addtest = createAsyncThunk(
  'articles/test',
  async (payload, thunkapi) => {
    const { articles } = thunkapi.getState();
      console.log(articles.counter);
      const data = await getArticle();
      thunkapi.dispatch(addArticle(data))
      thunkapi.dispatch(increment());
      return articles.counter
  }
)
  