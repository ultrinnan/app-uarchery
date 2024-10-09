import React from 'react';
import './Header.scss';
import {NavLink} from "react-router-dom";
import NavMenu from "./NavMenu/NavMenu";
import UserMenu from "./UserMenu/UserMenu";

function Header() {
    return (
        <header>
            <NavMenu />

            {/*page header here on other pages*/}
            <div className="header_logo">
                <NavLink to="/" />
            </div>

            <UserMenu />
        </header>
    );
}

export default Header;
