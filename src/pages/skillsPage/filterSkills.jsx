// import react tools
import { useState } from 'react';


// import page content
import Design from './designSkills';
import Code from './codeSkills';

// importing styling
import './filterSkills.css';

const Filter = () => {
    return (
        <>
            <div className='Skills__wrapper'>
                <div className='Skills__content'>
                    <div className='title__wrapper'>
                        <h1 className='title__heading'>
                            My Road-Map
                        </h1>
                        <p className='title__description'>
                            Interaction design is the process of creating digital products or services that are intuitive and easy to use. It involves designing the interface, user flow, and overall user experience to ensure that people can interact with technology in a natural and efficient way. Interaction designers consider factors such as usability, accessibility, and human-computer interaction to create engaging interfaces that meet the needs of users. Good interaction design is critical for creating products that are not only functional but also enjoyable to use.
                        </p>
                    </div>
                    <div className='button__wrapper'>

                    </div>
                    <div className='content__wrapper'>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Filter;