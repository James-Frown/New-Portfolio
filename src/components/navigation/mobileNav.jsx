import './nav.css';

import { Link } from "react-router-dom";

const MobileNav = () => {
    return (
        <>
            <ul className="Nav__Menu__Mobile">
                <li className="Nav__Item__Mobile">
                    <a className="Nav__Link">
                        <Link exact to="/about" className="Nav__Link">
                            About
                        </Link>
                    </a>
                </li>
                <li className="Nav__Item__Mobile">
                    <a className="Nav__Link">
                        <Link exact to="/skills" className="Nav__Link">
                            Skills
                        </Link>
                    </a>
                </li>
                <li className="Nav__Item__Mobile">
                    <a className="Nav__Link">
                        <Link exact to="/projects" className="Nav__Link">
                            Projects
                        </Link>
                    </a>
                </li>
                <li className="Nav__Item__Mobile">
                    <a href="#Pricing" className="Nav__Link">Pricing</a>
                </li>
                <li className="Nav__Item__Mobile">
                    <a href="#Contact" className="Nav__Link">Contact Us</a>
                </li>
            </ul>
        </>
    );
};

export default MobileNav;