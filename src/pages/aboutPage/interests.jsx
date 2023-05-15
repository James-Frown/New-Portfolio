// importing icons
import Icon1 from "../../assets/interests/ICON1.svg";
import Icon2 from "../../assets/interests/ICON2.svg";
import Icon3 from "../../assets/interests/ICON3.svg";
import Icon4 from "../../assets/interests/ICON4.svg";

// importing styling
import './intrests.css';

const Intrests = () => {
    return (
        <>
            <div className='intrests__wrapper'>
                <div className='intrests__content'>
                    <div className='content__title__wrapper'>
                        <h1 className='content__title'>
                            My Intrests:
                        </h1>
                    </div>
                    <div className='content__icons__wrapper'>
                        <div className='icon__wrapper'>
                            <img src={Icon1} className='icon__selector' />
                            <h3 className='icon__text'>
                                Responsive Design
                            </h3>
                        </div>
                        <div className='icon__wrapper'>
                            <img src={Icon2} className='icon__selector' />
                            <h3 className='icon__text'>
                                Web-App Designer
                            </h3>
                        </div>
                        <div className='icon__wrapper'>
                            <img src={Icon3} className='icon__selector' />
                            <h3 className='icon__text'>
                                Blockchain Technology
                            </h3>
                        </div>
                        <div className='icon__wrapper'>
                            <img src={Icon4} className='icon__selector' />
                            <h3 className='icon__text'>
                                Web-App Developer
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Intrests;