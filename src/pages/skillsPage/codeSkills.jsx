// importing developer icons
import IconCSS from '../../assets/skills/code/CSS3_Icon.svg';
import IconHTML from '../../assets/skills/code/HTML5_Icon.svg';
import IconJS from '../../assets/skills/code/JS_Icon.svg';
import IconJava from '../../assets/skills/code/Java_Icon.svg';
import IconFirebase from '../../assets/skills/code/Firebase_Icon.svg';
import IconGit from '../../assets/skills/code/Git_Icon.svg';
import IconMySql from '../../assets/skills/code/MySql_Icon.svg';
import IconNetlify from '../../assets/skills/code/Netlify_Icon.svg';
import IconReactNative from '../../assets/skills/code/ReactNative_Icon.svg';
import IconStoryBook from '../../assets/skills/code/StoryBook_Icon.svg';
import IconTailwind from '../../assets/skills/code/TailwindCSS_Icon.svg';
import IconTypeScript from '../../assets/skills/code/TypeScript_Icon.svg';

// importing styling
import './filterSkills.css';

const Code = () => {
    return (
        <>

            <div className='wrapper__center'>
                <h2>
                    Foundational Skills
                </h2>
                <div className='wrapper__wrap'></div>
                <div>
                    <img className='icon__selector' src={IconJava} />
                </div>
                <div>
                    <img className='icon__selector' src={IconMySql} />
                </div>
            </div>

            <div className='wrapper__center'>
                <h2>
                    Core Developer Langauges
                </h2>
                <div className='wrapper__wrap'></div>
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

            <div className='wrapper__center'>
                <h2>
                    Source Controll
                </h2>
                <div className='wrapper__wrap'></div>
                <div>
                    <img className='icon__selector' src={IconGit} />
                </div>
            </div>

            <div className='wrapper__center'>
                <h2>
                    Online Deployment & Database Management
                </h2>
                <div className='wrapper__wrap'></div>
                <div>
                    <img className='icon__selector' src={IconNetlify} />
                </div>
                <div>
                    <img className='icon__selector' src={IconFirebase} />
                </div>
            </div>

            <div className='wrapper__center'>
                <h2>
                    Future CSS Frameworks
                </h2>
                <div className='wrapper__wrap'></div>
                <div>
                    <img className='icon__selector' src={IconStoryBook} />
                </div>
                <div>
                    <img className='icon__selector' src={IconTailwind} />
                </div>
            </div>

            <div className='wrapper__center'>
                <h2>
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