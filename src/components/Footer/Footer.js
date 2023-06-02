import React from 'react';
import './Footer.scss';
import {Link, NavLink} from "react-router-dom";

const Footer = () => (
    <footer>
        <NavLink to="/converter">Конвертер</NavLink>
        <Link
            to="https://uarchery.org"
            target="_blank"
            className="central_button"
        />
        <NavLink to="/about">Про додаток</NavLink>
    </footer>
);

export default Footer;