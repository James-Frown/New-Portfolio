// import react tools
import { useState } from 'react';


// import page content
import Design from './designSkills';
import Code from './codeSkills';

// importing styling
import './filterSkills.css';

const Filter = () => {

    // state management for buttons
    const [active, setActive] = useState();

    // state management for content
    const [content, setContent] = useState();

    // function to set Active Button

    // function to set active content

    return (
        <>
            <div className='Skills__wrapper'>
                <div className='Skills__content'>
                    <div className='title__wrapper'>
                        <h1 className='title__heading'>
                            My Skills
                        </h1>
                        <p className='title__description'>
                            Here are some of my skills, choose between Code & Design related content!
                        </p>
                    </div>
                    <div className='button__wrapper'>
                        <button>Code</button>
                        <button>Design</button>
                    </div>
                    <div className='content__wrapper'>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Filter;