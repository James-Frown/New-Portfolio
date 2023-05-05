import './hero.css';

import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <>
            <div className='Hero__Container'>
                <div className='Image__Wrapper'>
                    <img />
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
                    <div className='Button__Wrapper'>
                        <a className="Page__Link__Primary">
                            <Link exact to="/projects" className="Page__Link__Primary">
                                Learn More
                            </Link>
                        </a>
                        <a className="Page__Link__Secondary">
                            <Link exact to="/projects" className="Page__Link__Secondary">
                                My CV
                            </Link>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;