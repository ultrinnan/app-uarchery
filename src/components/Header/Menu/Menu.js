import React from 'react';
import './Menu.scss';
import NavLink from "./NavLink";
import classNames from "classnames";

const Menu = (props) => (
    <div
        className={classNames("header_menu", {'active': props.active})}
        onClick={props.clickHandle}
    >
        <ul className="menu_list">
            <NavLink
                to="/"
                clickHandle={props.clickHandle}
            >
                Home
            </NavLink>
            <NavLink
                to="/converter"
                clickHandle={props.clickHandle}
            >
                Конвертер
            </NavLink>
            <NavLink
                to="/about"
                clickHandle={props.clickHandle}
            >
                Про додаток
            </NavLink>
        </ul>
    </div>
);

export default Menu;