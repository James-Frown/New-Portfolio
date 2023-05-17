// importing designer icons
import IconCSS from '../../assets/skills/code/CSS3_Icon.svg';

// importing styling
import './filterSkills.css';

const Design = () => {
    return (
        <>
            <h1>
                Design...
            </h1>
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
                <img className='icon__selector' src={IconJava} />
            </div>
            <div>
                <img className='icon__selector' src={IconFirebase} />
            </div>
            <div>
                <img className='icon__selector' src={IconGit} />
            </div>
            <div>
                <img className='icon__selector' src={IconMySql} />
            </div>
            <div>
                <img className='icon__selector' src={IconNetlify} />
            </div>
            <div>
                <img className='icon__selector' src={IconReactNative} />
            </div>
            <div>
                <img className='icon__selector' src={IconStoryBook} />
            </div>
            <div>
                <img className='icon__selector' src={IconTailwind} />
            </div>
            <div>
                <img className='icon__selector' src={IconTypeScript} />
            </div>
        </>
    );
};

export default Design;