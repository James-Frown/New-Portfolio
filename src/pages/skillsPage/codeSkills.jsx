// importing developer icons
import IconCSS from '../../../public/skills/code/CSS3_Icon.svg';
import IconHTML from '../../../public/skills/code/Html5_Icon.svg';
import IconJS from '../../../public/skills/code/JS_Icon.svg';
import IconJava from '../../../public/skills/code/Java_Icon.svg';
import IconFirebase from '../../../public/skills/code/Firebase_Icon.svg';
import IconGit from '../../../public/skills/code/Git_Icon.svg';
import IconMySql from '../../../public/skills/code/MySql_Icon.svg';
import IconNetlify from '../../../public/skills/code/Netlify_Icon.svg';
import IconReactNative from '../../../public/skills/code/ReactNative_Icon.svg';
import IconStoryBook from '../../../public/skills/code/StoryBook_Icon.svg';
import IconTailwind from '../../../public/skills/code/TailwindCSS_Icon.svg';
import IconTypeScript from '../../../public/skills/code/TypeScript_Icon.svg';

// importing styling
import './filterSkills.css';

const Code = () => {
    return (
        <>

            <div className='wrapper__center'>
                <h2 className='wrapper__title'>
                    Foundational Skills
                </h2>
                <div className='wrapper__wrap'>
                    <div>
                        <img className='icon__selector' src={IconJava} />
                    </div>
                    <div>
                        <img className='icon__selector' src={IconMySql} />
                    </div>
                </div>
            </div>
            <div className='wrapper__center'>
                <h2 className='wrapper__title'>
                    Core Developer Langauges
                </h2>
                <div className='wrapper__wrap'>
                    <div>
                        <img className='icon__selector' src={IconCSS} />
                    </div>
                    <div>
                        <img className='icon__selector' src={IconHTML} />
                    </div>
                    <div>
                        <img className='icon__selector' src={IconJS} />
                    </div>
                    <div>
                        <img className='icon__selector' src={IconReactNative} />
                    </div>
                </div>
            </div>
            <div className='wrapper__center'>
                <h2 className='wrapper__title'>
                    Source Controll
                </h2>
                <div className='wrapper__wrap'>
                    <div>
                        <img className='icon__selector' src={IconGit} />
                    </div>
                </div>
            </div>
            <div className='wrapper__center'>
                <h2 className='wrapper__title'>
                    Online Deployment & Database Management
                </h2>
                <div className='wrapper__wrap'>
                    <div>
                        <img className='icon__selector' src={IconNetlify} />
                    </div>
                    <div>
                        <img className='icon__selector' src={IconFirebase} />
                    </div>
                </div>
            </div>
            <div className='wrapper__center'>
                <h2 className='wrapper__title'>
                    Future CSS Frameworks
                </h2>
                <div className='wrapper__wrap'>
                    <div>
                        <img className='icon__selector' src={IconStoryBook} />
                    </div>
                    <div>
                        <img className='icon__selector' src={IconTailwind} />
                    </div>
                </div>
            </div>
            <div className='wrapper__center'>
                <h2 className='wrapper__title'>
                    Future Development langauges
                </h2>
                <div className='wrapper__wrap'>
                    <div>
                        <img className='icon__selector' src={IconTypeScript} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Code;