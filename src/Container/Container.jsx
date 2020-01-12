import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "../Components/NavBar";

//Import Views
import Home from '../Views/Home'


class Container extends React.Component {
    render() {
        return (
            <div className={"container"}>
                <BrowserRouter>
                    <NavBar/>
                    <Switch>
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