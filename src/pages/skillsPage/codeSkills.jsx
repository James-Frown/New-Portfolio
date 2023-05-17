// import developer icons
import CSS from '../../assets/skills/code/CSS3_Icon.svg';
import HTML from '../../assets/skills/code/HTML5_Icon.svg';
import JS from '../../assets/skills/code/JS_Icon.svg';
import Java from '../../assets/skills/code/Java_Icon.svg';
import Firebase from '../../assets/skills/code/Firebase_Icon.svg';
import Git from '../../assets/skills/code/Git_Icon.svg';
import MySql from '../../assets/skills/code/MySql_Icon.svg';
import Netlify from '../../assets/skills/code/Netlify_Icon.svg';
import React from '../../assets/skills/code/ReactNative_Icon.svg';
import Saas from '../../assets/skills/code/Saas_Icon.svg';
import StoryBook from '../../assets/skills/code/StoryBook_Icon.svg';
import Tailwind from '../../assets/skills/code/TailwindCSS_Icon.svg';
import TypeScript from '../../assets/skills/code/TypeScript_Icon.svg';

// importing styling
import './filterSkills.css';

const Code = () => {
    return (
        <>
            <h1>
                Code...
            </h1>
            <div>
                <img src={CSS} />
            </div>
            <div>
                <img src={HTML} />
            </div>
            <div>
                <img src={JS} />
            </div>
            <div>
                <img src={Java} />
            </div>
            <div>
                <img src={Firebase} />
            </div>
            <div>
                <img src={Git} />
            </div>
            <div>
                <img src={MySql} />
            </div>
            <div>
                <img src={Netlify} />
            </div>
            <div>
                <img src={React} />
            </div>
            <div>
                <img src={Saas} />
            </div>
            <div>
                <img src={StoryBook} />
            </div>
            <div>
                <img src={Tailwind} />
            </div>
            <div>
                <img src={TypeScript} />
            </div>
        </>
    );
};

export default Code;