// importing icons
import Behance from "../../assets/footer/Behance_Icon.svg";
import Github from "../../assets/footer/GitHub_Icon.svg";
import LinkedIn from "../../assets/footer/LinkedIn_Icon.svg";

// importing styling
import './footer.css';

const Footer = () => {
    return (
        <>
            <div className='footer__wrapper'>
                <div className='footer__content'>
                    <div className='icon__wrapper'>
                        <a href="https://www.behance.net/jamesbrown158">
                            <img src={Behance} className='icon__selector' />
                        </a>
                    </div>
                    <div className='icon__wrapper'>
                        <a href="https://github.com/James-Frown">
                            <img src={Github} className='icon__selector' />
                        </a>
                    </div>
                    <div className='icon__wrapper'>
                        <a href="https://www.linkedin.com/in/james-brown-308233171">
                            <img src={LinkedIn} className='icon__selector' />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;