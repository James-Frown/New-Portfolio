import Behance from "../../assets/footer/Behance.svg";
import Github from "../../assets/footer/GitHub.svg";
import Instagram from "../../assets/footer/Instagram.svg";
import LinkedIn from "../../assets/footer/LinkedIn.svg";
import Slack from "../../assets/footer/Slack.svg";

import './footer.css';

const Footer = () => {
    return (
        <>
            <div className='intrests__wrapper'>
                <div className='intrests__content'>
                    <div className='content__icons__wrapper'>
                        <div className='icon__wrapper'>
                            <img src={Behance} className='icon__selector' />
                        </div>
                        <div className='icon__wrapper'>
                            <img src={Github} className='icon__selector' />
                        </div>
                        <div className='icon__wrapper'>
                            <img src={Instagram} className='icon__selector' />
                        </div>
                        <div className='icon__wrapper'>
                            <img src={LinkedIn} className='icon__selector' />
                        </div>
                        <div className='icon__wrapper'>
                            <img src={Slack} className='icon__selector' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;