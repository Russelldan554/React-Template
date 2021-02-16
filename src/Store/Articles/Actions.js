import * as aa  from "./Types";
import { getArticle } from './Api'

export const addArticle = () => {
    return async dispatch => {
        dispatch({ type: aa.articleLoadingAction.type, payload: {loading: true}})
        try {
            const data = await getArticle();
            dispatch({ type: aa.articleLoadingAction.type, payload: {loading: false}})
            dispatch({ type: aa.addArticleAction.type, payload: data})
        } catch (error) {
            dispatch({ type: aa.articleErrorAction.type, payload: {error: error.message}})
        } finally {
            dispatch({ type: aa.articleLoadingAction.type, payload: {loading: false}})
        }
    };
}