import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import List from "../Components/List";
import { addArticle } from "../Store/Articles/Actions";

export const Home = () => {
    const dispatch = useDispatch();
    const { loading, error } = useSelector(({articles}) => ({
        loading: articles.loading,
        error: articles.error
    }))

    return (
        <div>
            { loading ? 'LOADING...' : 
                <div>
                    <button onClick={() => dispatch(addArticle())}>
                        Get random article
                    </button>
                    {error && <div>
                        <span style={{color: 'red'}}>{error}</span>
                        </div>}
                </div>
            }
            <List />
        </div>
    );
}

export default Home;
