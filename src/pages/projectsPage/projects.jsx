// importing jsx tools
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// importing images
import Image from "../../assets/images/ProfileImg_2.jpg";
import NextJSTutorial from "../../assets/projects/NextJS-Tutorial-1.jpg";
import BasicNFT from "../../assets/projects/Basic-NFT.jpg";
import BasicProduct from "../../assets/projects/Basic-Product.jpg";
import BasicSaaS from "../../assets/projects/Basic-SaaS.jpg";
import BasicClone from "../../assets/projects/Basic-Netflix.jpg";

// importing page elements
import Nav from "../../components/navigation/nav";
import Footer from "../../components/footer/footer";

// Element Styling import
import "./projects.css";

// importing project card
import ProjectCard from "../../components/projects/ProjectCard";

const Projects = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // set a timer to change isLoading state after 3 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  });

  const vercelLogo = "https://yt3.googleusercontent.com/ytc/AOPolaTWbjhVRtPrUtUPqrx3NFAP57KRFK9BDInW_GNlLw=s176-c-k-c0x00ffffff-no-rj-mo";

  return (
    <>
      {isLoading ? (
        <>
          <div className="LoadingContainer">
            <div className="LoadingText">
              <motion.h1
                initial={{
                  x: "-100rem",
                }}
                animate={{
                  x: 0,
                }}
                transition={{
                  duration: 1,
                }}
              >
                Loading
              </motion.h1>
              <motion.h1
                initial={{
                  x: "100rem",
                }}
                animate={{
                  x: 0,
                }}
                transition={{
                  duration: 1.3,
                }}
              >
                .
              </motion.h1>
              <motion.h1
                initial={{
                  x: "100rem",
                }}
                animate={{
                  x: 0,
                }}
                transition={{
                  duration: 1.6,
                }}
              >
                .
              </motion.h1>
              <motion.h1
                initial={{
                  x: "100rem",
                }}
                animate={{
                  x: 0,
                }}
                transition={{
                  duration: 1.9,
                }}
              >
                .
              </motion.h1>
            </div>
          </div>
        </>
      ) : (
        <>
          <Nav />
          <div>
            <h1>My Projects</h1>
          </div>
          <div>
            <h2>Basic Sites:</h2>
          </div>
          <div className="project_cards">
            <ProjectCard
              title="Tutorial Project"
              subtitle="NextJS Ecommerce Store"
              link="https://next-store-james-frown.vercel.app/"
              description="I Learnt about NextJS, API's, MongoDB, Next-Auth, Server Actions, Prisma and so much more! It is by Coding In Flow."
              thumbnail={vercelLogo}
            />
            <ProjectCard
              title="Tutorial Project"
              subtitle="NextJS Image Gallery"
              link="https://next-js-tutorial-1.vercel.app/"
              description="This was a project I undertook to try and learn more about NextJS, from a tutorial by Coding In Flow."
              thumbnail={NextJSTutorial}
            />
            <ProjectCard
              title="Tutorial Project"
              subtitle="Basic Netflix Clone"
              link="https://basic-streaming-clone.netlify.app/"
              description="This was a project I tried to cpoy the look and feel of soap2day, and Netflix inorder to make a fake streaming service."
              thumbnail={BasicClone}
            />
            <ProjectCard
              title="Tutorial Project"
              subtitle="Basic SaaS Site"
              link="https://basic-saas-website.netlify.app/"
              description="This was a project I tried to copy the look and feel of a SaaS site for a university project, however it was left unfinnished."
              thumbnail={BasicSaaS}
            />
          </div>
          <div>
            <h2>Digital Products:</h2>
          </div>
          <div className="project_cards">
            <ProjectCard
              title="Tutorial Project"
              subtitle="Basic Product Card"
              link="https://basic-product-card.netlify.app/"
              description="This was a project I tried to copy the look and feel of a Product card of private company's product."
              thumbnail={BasicProduct}
            />
            <ProjectCard
              title="Tutorial Project"
              subtitle="Basic NFT Card"
              link="https://basic-nft-card.netlify.app/"
              description="This was a project I undertook to try and copy the look and feel of NFT's."
              thumbnail={BasicNFT}
            />
          </div>
          <div className="image_wrapper">
            <img src={Image} className="image_selector" />
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default Projects;
