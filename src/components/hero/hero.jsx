// importing profile image
import HeroImage from "../../assets/images/ProfileImg_3.jpg";

// importing routes
import { Link } from 'react-router-dom';

// importing styling
import './hero.css';

const Hero = () => {
    return (
        <>
            <div className='Hero__Container'>
                <div className='Image__Wrapper'>
                    <img src={HeroImage} className='Image__Selector' />
                </div>
                <div className='Text__Wrapper'>
                    <p className='Text__1'>
                        Welcome,
                    </p>
                    <p className='Text__2'>
                        My name is <span className='Text__A'> James Brown </span>
                    </p>
                    <p className='Text__3'>
                        I am a <span className='Text__B'> Designer-Developer </span>
                    </p>
                    <div className='Button__Wrapper Left'>
                        <a>
                            <Link exact to="/about" className="Page__Link__Primary">
                                Learn More
                            </Link>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;