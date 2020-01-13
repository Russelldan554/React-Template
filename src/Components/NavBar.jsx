import React, {Component} from 'react';
import { Link } from "react-router-dom";

class NavBar extends Component {
    render() {
        return (
            <nav className={"nav"}>
                <h1 id={"nav-title"}>React Templates</h1>
                <div className={"links"}>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavBar;