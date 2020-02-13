import React, { Component } from "react";
import { Link } from 'react-router-dom';
import LangDropdown from './LangDropdown'
import IntlMessages from './IntlMessages'

class Header extends Component {

    render() {
        return <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to={'/'} className="navbar-brand"><IntlMessages id='react-title' /></Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to={'/create'} className="nav-link"><IntlMessages id='create' /></Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/list'} className="nav-link"><IntlMessages id='index' /></Link>
                        </li>
                    </ul>
                </div>
                <LangDropdown />
            </nav>
        </React.Fragment>;
    }
}

export default Header;