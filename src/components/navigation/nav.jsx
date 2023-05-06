import './nav.css';

import { Link } from "react-router-dom";
import { useState } from 'react';

import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'

"../../assets/Closed_Icon.svg"
"../../assets/Hamburger_Icon.svg"

import MobileNav from './mobileNav';
import DesktopNav from './desktopNav';

const Nav = () => {

    const [Nav, setNav] = useState(DesktopNav);
    const [Menu, setMenu] = useState(null);
    const [Icon, setIcon] = useState(<GiHamburgerMenu size={30} />);
    const [Count, setCount] = useState(1);

    const eventHandler = () => {
        var holder = Count;
        var test = holder % 2;

        if (test !== 0) {
            console.log("Open")
            holder++;
            setCount(holder);
            //  setIcon(<GrClose size={30} />);
            setIcon(<link rel="icon" type="image/svg+xml" href="/vite.svg" />);
            setNav(DesktopNav);
            setMenu(MobileNav);
        }

        if (test == 0) {
            console.log("Hidden")
            holder++;
            setCount(holder);
            setIcon(<GiHamburgerMenu size={30} />);
            setNav(DesktopNav);
            setMenu(null);
        }

    }

    return (
        <>
            <header>
                <nav className="Nav__Container">
                    <a className="Nav__Logo">
                        <Link exact to="/" className="Nav__Logo">
                            {"<James-Frown>"}
                        </Link>
                    </a>
                    {Nav}
                    <button onClick={eventHandler} className="btn">
                        {Icon}
                    </button>
                </nav>
                {Menu}
            </header>
        </>
    );
};

export default Nav;