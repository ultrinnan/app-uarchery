import React, {useState} from 'react';
import '../Header.scss';
import classNames from "classnames";
import Menu from "../Menu/Menu";

function NavMenu() {
    const [active, setActive] = useState(false);

    const clickHandler = () => {
        setActive(!active);
        if (!active) {
            document.body.classList.add('lock');
        } else {
            document.body.classList.remove('lock');
        }
    }

    const menuItems = [
        {
            link: "/trainings",
            label: "My trainings"
        },
        {
            link: "/competition",
            label: "Competitions"
        },
        {
            link: "/competition/demo",
            label: "Competition (DEMO)"
        },
        {
            link: "/competition/patrols",
            label: "Patrols list (DEMO)"
        },
        {
            link: "/competition/patrols",
            label: "Patrol (DEMO)"
        },
        {
            link: "/competition/user",
            label: "User card (demo)"
        },
        {
            link: "/converter",
            label: "Converter"
        },
        {
            link: "/encyclopedia",
            label: "Knowledge base"
        },
        {
            link: "/about",
            label: "About"
        },
    ]

    return (
        <>
            <div
                className={classNames("hamburger", {'hidden_smooth': active})}
                onClick={clickHandler}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
            <Menu
                active={active}
                items={menuItems}
                position={"left"}
                clickHandle={clickHandler}
            />
        </>
    );
}

export default NavMenu;
