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
            {/*<NavLink*/}
            {/*    to="https://uarchery.org"*/}
            {/*    target="_blank"*/}
            {/*    clickHandle={props.clickHandle}*/}
            {/*>*/}
            {/*    Портал UArchery.org (сайт)*/}
            {/*</NavLink>*/}
            <NavLink
                to="https://uarchery.org/map"
                target="_blank"
                clickHandle={props.clickHandle}
            >
                Archery map of Ukraine (external link)
            </NavLink>
            <NavLink
                to="https://uarchery.org/events"
                target="_blank"
                clickHandle={props.clickHandle}
            >
                Archery events calendar (external link)
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