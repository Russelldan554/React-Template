import { createAction } from '@reduxjs/toolkit'

export const addArticleAction = createAction("article/addArticleAction");
export const articleLoadingAction = createAction("article/articleLoading");
export const articleErrorAction = createAction("article/articleError");