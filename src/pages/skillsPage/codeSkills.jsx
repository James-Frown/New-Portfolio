// importing developer icons from file
import IconCSS3 from "../../assets/skills/code/CSS3_Icon.svg";
import IconHTML from "../../assets/skills/code/Html5_Icon.svg";
import IconJS from "../../assets/skills/code/JS_Icon.svg";
import IconJava from "../../assets/skills/code/Java_Icon.svg";
import IconFirebase from "../../assets/skills/code/Firebase_Icon.svg";
import IconGit from "../../assets/skills/code/Git_Icon.svg";
import IconMySql from "../../assets/skills/code/MySQL_Icon.svg";
import IconNetlify from "../../assets/skills/code/Netlify-Icon.svg";
import IconReactNative from "../../assets/skills/code/ReactNative_Icon.svg";
import IconStoryBook from "../../assets/skills/code/StoryBook-Icon.svg";
import IconTailwind from "../../assets/skills/code/TailwindCSS_Icon.svg";
import IconTypeScript from "../../assets/skills/code/TypeScript_Icon.svg";
import IconSCSS from "../../assets/skills/code/SCSS_Icon.svg";
import IconNextJs from "../../assets/skills/code/NextJs-Icon.svg";
import IconPrisma from "../../assets/skills/code/Prisma_Icon.svg";
import IconVite from "../../assets/skills/code/Vite-Icon.svg";
import IconJira from "../../assets/skills/code/Jira-Icon.svg";
import IconVercel from "../../assets/skills/code/Vercel-Icon.svg";
import IconMongo from "../../assets/skills/code/MongoDB_Icon.svg";
import IconBit from "../../assets/skills/code/BitBucket_Icon.svg";
import IconNode from "../../assets/skills/code/NodeJs_Icon.svg";

// importing styling
import "./filterSkills.css";

const Code = () => {
  return (
    <>
      <div className="wrapper__center">
        <h2 className="wrapper__title">Source Control</h2>
        <div className="wrapper__wrap">
          <div>
            <img className="icon__selector" src={IconGit} />
          </div>
          <div>
            <img className="icon__selector" src={IconJira} />
          </div>
          <div>
            <img className="icon__selector" src={IconBit} />
          </div>
        </div>
      </div>
      <div className="wrapper__center">
        <h2 className="wrapper__title">Foundational Skills</h2>
        <div className="wrapper__wrap">
          <div>
            <img className="icon__selector" src={IconJava} />
          </div>
          <div>
            <img className="icon__selector" src={IconMySql} />
          </div>
          <div>
            <img className="icon__selector" src={IconCSS3} />
          </div>
          <div>
            <img className="icon__selector" src={IconHTML} />
          </div>
          <div>
            <img className="icon__selector" src={IconJS} />
          </div>
        </div>
      </div>
      <div className="wrapper__center">
        <h2 className="wrapper__title">Current Front-End Languages</h2>
        <div className="wrapper__wrap">
          <div>
            <img className="icon__selector" src={IconNextJs} />
          </div>
          <div>
            <img className="icon__selector" src={IconVite} />
          </div>
          <div>
            <img className="icon__selector" src={IconReactNative} />
          </div>
          <div>
            <img className="icon__selector" src={IconTypeScript} />
          </div>
          <div>
            <img className="icon__selector" src={IconTailwind} />
          </div>
        </div>
      </div>
      <div className="wrapper__center">
        <h2 className="wrapper__title">
          Online Deployment & Database Management
        </h2>
        <div className="wrapper__wrap">
          <div>
            <img className="icon__selector" src={IconNetlify} />
          </div>
          <div>
            <img className="icon__selector" src={IconFirebase} />
          </div>
          <div>
            <img className="icon__selector" src={IconVercel} />
          </div>
          <div>
            <img className="icon__selector" src={IconMongo} />
          </div>
        </div>
      </div>
      <div className="wrapper__center">
        <h2 className="wrapper__title">Future Frameworks & Skills</h2>
        <div className="wrapper__wrap">
          <div>
            <img className="icon__selector" src={IconStoryBook} />
          </div>
          <div>
            <img className="icon__selector" src={IconSCSS} />
          </div>
          <div>
            <img className="icon__selector" src={IconPrisma} />
          </div>
          <div>
            <img className="icon__selector" src={IconNode} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Code;
