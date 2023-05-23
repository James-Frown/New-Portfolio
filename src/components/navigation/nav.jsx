// importing jsx tools
import { Link } from "react-router-dom";
import { useState } from 'react';

// importing icons
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'

// importing nav elements
import MobileNav from './mobileNav';
import DesktopNav from './desktopNav';

// importing styling
import './nav.css';

const Nav = () => {

    const icon1 = <GiHamburgerMenu size={30} color='white' />;
    const icon2 = <GrClose size={30} stroke='white' fill='white' />;

    const [Nav, setNav] = useState(DesktopNav);
    const [Menu, setMenu] = useState(null);
    const [Icon, setIcon] = useState(icon1);
    const [Count, setCount] = useState(1);

    const eventHandler = () => {
        var holder = Count;
        var test = holder % 2;

        if (test !== 0) {
            console.log("Open")
            holder++;
            setCount(holder);
            setIcon(icon2);
            setNav(DesktopNav);
            setMenu(MobileNav);
        }

        if (test == 0) {
            console.log("Hidden")
            holder++;
            setCount(holder);
            setIcon(icon1);
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
                            {"<James-Brown>"}
                        </Link>
                    </a>
                    {Nav}
                    <button onClick={eventHandler} className="btn">
                        <div className="btn_wrapper">
                            {Icon}
                        </div>
                    </button>
                </nav>
                {Menu}
            </header>
        </>
    );
};

export default Nav;