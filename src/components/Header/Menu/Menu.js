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
                to="/trainings"
                clickHandle={props.clickHandle}
            >
                My trainings
            </NavLink>
            <NavLink
                to="/competition/patrols"
                clickHandle={props.clickHandle}
            >
                Patrol card (demo)
            </NavLink>
            <NavLink
                to="/competition/user"
                clickHandle={props.clickHandle}
            >
                User card (demo)
            </NavLink>
            <NavLink
                to="/converter"
                clickHandle={props.clickHandle}
            >
                Converter
            </NavLink>
            <NavLink
                to="/encyclopedia"
                clickHandle={props.clickHandle}
            >
                Knowledge base
            </NavLink>
            <NavLink
                to="/about"
                clickHandle={props.clickHandle}
            >
                About
            </NavLink>
        </ul>
    </div>
);

export default Menu;