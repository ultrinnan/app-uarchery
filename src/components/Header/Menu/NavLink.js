import { useMatch, Link } from "react-router-dom";

function NavLink({ to, children, clickHandle }) {
    const match = useMatch(to);
    return (
        <li className={match ? "current-menu-item" : ""}>
            <Link
                to={to}
                onClick={clickHandle}
            >
                {children}
            </Link>
        </li>
    );
}

export default NavLink;
