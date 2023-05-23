// importing icons
import Bitcoin from "../../assets/interests/Bitcoin_Icon.svg";
import Blockchain from "../../assets/interests/Blockchain_Icon.svg";
import Responsive from "../../assets/interests/Responsive_Icon.svg";
import WebDesign from "../../assets/interests/WebDesign_Icon.svg";
import Sourcecode from "../../assets/interests/SourceCode_Icon.svg";

// importing styling
import './intrests.css';

const Intrests = () => {
    return (
        <>
            <div className='intrests__wrapper'>
                <div className='intrests__content'>
                    <div className='content__title__wrapper'>
                        <h1 className='content__title'>
                            My Interests:
                        </h1>
                    </div>
                    <div className='content__icons__wrapper'>
                        <div className='icon__wrapper'>
                            <img src={Responsive} className='icon__selector' />
                            <h3 className='icon__text'>
                                Responsive Web Design
                            </h3>
                        </div>
                        <div className='icon__wrapper'>
                            <img src={WebDesign} className='icon__selector' />
                            <h3 className='icon__text'>
                                Progressive Web Apps
                            </h3>
                        </div>
                        <div className='icon__wrapper'>
                            <img src={Sourcecode} className='icon__selector' />
                            <h3 className='icon__text'>
                                Software Development
                            </h3>
                        </div>
                        <div className='icon__wrapper'>
                            <img src={Blockchain} className='icon__selector' />
                            <h3 className='icon__text'>
                                BlockChain Technology
                            </h3>
                        </div>
                        <div className='icon__wrapper'>
                            <img src={Bitcoin} className='icon__selector' />
                            <h3 className='icon__text'>
                                Bitcoin & Crypto Currency
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Intrests;