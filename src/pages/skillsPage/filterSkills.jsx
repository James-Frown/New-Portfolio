// import react tools
import { useState } from 'react';


// import page content
import Design from './designSkills';
import Code from './codeSkills';

// importing styling
import './filterSkills.css';

const Filter = () => {

    // state management for Primary buttons
    const [primary, setPrimary] = useState('primary');

    // state management for Secondary buttons
    const [secondary, setSecondary] = useState('secondary');

    // state management for content
    const [content, setContent] = useState(Code);

    // function to set Content to code
    function showCode() {
        console.log("Button Clicked");
        setContent(Code);
        console.log("Show Code");
        setPrimary('primary');
        console.log("Primary Set to Active");
        setSecondary('secondary');
        console.log("Secondary Set to inActive");
    }

    // function to set Content to Design
    function showDesign() {
        console.log("Button Clicked")
        setContent(Design);
        console.log("Show Design");
        setPrimary('secondary');
        console.log("Primary Set to inActive");
        setSecondary('primary');
        console.log("Secondary Set to Active");
    }

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
                        <button onClick={showCode} className={primary}>Code</button>
                        <button onClick={showDesign} className={secondary}>Design</button>
                    </div>
                    <div className='content__wrapper'>
                        {content}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Filter;