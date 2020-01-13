import React from "react";
import { connect } from "react-redux";

function ConnectedList({ articles }) {

    return (
        <div>
            <h1>Articles</h1>
            <ul>
                {articles.map(el => (
                    <li key={el.id}>{el.title}</li>
                ))}
            </ul>
        </div>
    );
}

const mapStateToProps = state => {
    return { articles: state.articles };
};

const List = connect(mapStateToProps)(ConnectedList);

export default List;