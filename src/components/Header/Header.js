import React, {useState} from 'react';
import './Header.scss';
import Menu from "./Menu/Menu";
import {NavLink} from "react-router-dom";
import classNames from "classnames";

function Header() {
    const [active, setActive] = useState(false);

    const hamburgerClick = () => {
        setActive(!active);
        if (!active) {
            document.body.classList.add('lock');
        } else {
            document.body.classList.remove('lock');
        }
    }

    return (
        <header>
            <div
                className={classNames("hamburger", {'hidden_smooth': active})}
                onClick={hamburgerClick}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="header_logo">
                <NavLink to="/" />
            </div>
            <Menu
                active={active}
                clickHandle={hamburgerClick}
            />
            <div className="menu_search">
                <div className="menu_icon search"></div>
                <div className="menu_title">Пошук</div>
            </div>
        </header>
    );
}

export default Header;
