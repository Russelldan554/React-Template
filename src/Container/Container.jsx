import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "../Components/NavBar";

//Import Views
import Home from '../Views/Home'
import AddArticle from '../Views/AddArticle'


class Container extends React.Component {
    render() {
        return (
            <div className={"container"}>
                <BrowserRouter>
                    <NavBar/>
                    <Switch>
                        <Route path="/addArticle">
                            <AddArticle />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default Container;