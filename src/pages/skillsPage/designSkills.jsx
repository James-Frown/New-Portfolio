// importing designer icons
import IconAIL from '../../assets/skills/design/AdobeIllustrator_Icon.svg';
import IconAID from '../../assets/skills/design/AdobeIndesign_Icon.svg';
import IconAPS from '../../assets/skills/design/AdobePhotoshop_Icon.svg';
import IconAPP from '../../assets/skills/design/AdobePremierePro_Icon.svg';
import IconAXD from '../../assets/skills/design/AdobeXD_Icon.svg';
import IconFIGMA from '../../assets/skills/design/Figma_Icon.svg';

// importing styling
import './filterSkills.css';

const Design = () => {
    return (
        <>
            <h1>
                Design...
            </h1>
            <div>
                <img className='icon__selector' src={IconAIL} />
            </div>
            <div>
                <img className='icon__selector' src={IconAID} />
            </div>
            <div>
                <img className='icon__selector' src={IconAPS} />
            </div>
            <div>
                <img className='icon__selector' src={IconAPP} />
            </div>
            <div>
                <img className='icon__selector' src={IconAXD} />
            </div>
            <div>
                <img className='icon__selector' src={IconFIGMA} />
            </div>
        </>
    );
};

export default Design;