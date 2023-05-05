import './nav.css';

import { Link } from "react-router-dom";

const DesktopNav = () => {
    return (
        <>
            <ul className="Nav__Menu__Desktop">
                <li className="Nav__Item__Desktop">
                    <a className="Nav__Link">
                        <Link exact to="/about" className="Nav__Link">
                            About
                        </Link>
                    </a>
                </li>
                <li className="Nav__Item__Desktop">
                    <a className="Nav__Link">
                        <Link exact to="/skills" className="Nav__Link">
                            Skills
                        </Link>
                    </a>
                </li>
                <li className="Nav__Item__Desktop">
                    <a className="Nav__Link">
                        <Link exact to="/projects" className="Nav__Link">
                            Projects
                        </Link>
                    </a>
                </li>
                <li className="Nav__Item__Desktop">
                    <a className="Nav-CTA-Link" href="mailto:2022privateequity@gmail.com" target="_blank" rel="noreferrer">
                        Contact
                    </a>
                </li>
            </ul>
        </>
    );
};

export default DesktopNav;