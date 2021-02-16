import { getArticle } from './Api'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const addRandomArticle = createAsyncThunk(
  'articles/addRandomArticle',
  async () => {
      const data = await getArticle();
      return data
  }
)
  