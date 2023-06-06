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
            {/*<NavLink*/}
            {/*    to="/trainings"*/}
            {/*    clickHandle={props.clickHandle}*/}
            {/*>*/}
            {/*    Мої тренування*/}
            {/*</NavLink>*/}
            <NavLink
                to="/converter"
                clickHandle={props.clickHandle}
            >
                Конвертер
            </NavLink>
            <NavLink
                to="/encyclopedia"
                clickHandle={props.clickHandle}
            >
                Лучна енциклопедія
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
                Лучна карта України (сайт)
            </NavLink>
            <NavLink
                to="https://uarchery.org/events"
                target="_blank"
                clickHandle={props.clickHandle}
            >
                Календар лучних подій (сайт)
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