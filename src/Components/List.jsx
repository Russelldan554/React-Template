import React from "react";
import { useSelector } from 'react-redux';

export const List = () => {
    const { articles } = useSelector(({ articles }) => ({
        articles: articles.articles
    }));
    return (
        <div>
            <h1>Articles</h1>
            <div>
                {articles?.map(el => (
                <div key={el.id}>
                    <h4>{el.title}</h4>
                    <p>{el.body}</p>
                </div> 
                ))}
            </div>
        </div>
    );
};

export default List;