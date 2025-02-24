// importing jsx tools
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// importing images
import Image from "../../assets/images/ProfileImg_2.jpg";
import NextJSTutorial from "../../assets/projects/NextJS-Tutorial-1.jpg";
import BasicNFT from "../../assets/projects/Basic-NFT.jpg";
import BasicProduct from "../../assets/projects/Basic-Product.jpg";
import BasicClone from "../../assets/projects/movies-icon.jpg";
import BasicDiscode from "../../assets/projects/Discode.jpg";
import MajorHair from "../../assets/projects/Major-Star-Hair-icon.jpg";
import FunStore from "../../assets/projects/store-icon.jpg";

// importing page elements
import Nav from "../../components/navigation/nav";
import Footer from "../../components/footer/footer";

// Element Styling import
import "./projects.css";

// importing project card
import ProjectCard from "../../components/projects/ProjectCard";
import FeaturedProject from "../../components/projects/FeaturedProject";

const Projects = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // set a timer to change isLoading state after 3 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 2200);
  });
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
            <h2>Featured Project:</h2>
          </div>
          <div className="featured_project">
            <FeaturedProject
              title="Major Hair Cape Town"
              subtitle="Custom Frontend with Wix Headless"
              link="https://google.com"
              description="A sleek Next.js & Wix Headless store for a local hairdresser—fast, modern, and easy to manage. Book appointments & shop hair products hassle-free! 🚀✨"
              thumbnail={MajorHair}
            />
          </div>
          <div>
            <h2>FullStack Sites:</h2>
          </div>
          <div className="project_cards">
            <ProjectCard
              title="Full Stack Tutorial Project"
              subtitle="NextJS Ecommerce Store"
              link="https://next-store-james-frown.vercel.app/"
              description="This project uses Next.js, MongoDB, Next-Auth, API integration, and Prisma in an e-commerce platform with secure authentication. I aim to expand with Web Scraping, TypeScript, and Puppeteer."
              thumbnail={FunStore}
            />
            <ProjectCard
              title="Full Stack Tutorial Project"
              subtitle="NextJS Discord Clone"
              link="https://discode-v1-production.up.railway.app/"
              description="This tutorial project features a messaging app with real-time chat, file sharing via UploadThing, 1:1 calls, and robust member management. Built with TailwindCSS, ShadcnUI, Prisma, MySQL, and Clerk for secure authentication."
              thumbnail={BasicDiscode}
            />
          </div>
          <div>
            <h2>Intermediate Sites:</h2>
          </div>
          <div className="project_cards">
            <ProjectCard
              title="Tutorial Project"
              subtitle="NextJS Image Gallery"
              link="https://next-js-tutorial-1.vercel.app/"
              description="This was a project I undertook to try and learn more about NextJS, from a tutorial by Coding In Flow."
              thumbnail={NextJSTutorial}
            />
            <ProjectCard
              title="Tutorial Project"
              subtitle="Streaming Site Clone"
              link="https://basic-streaming-clone.netlify.app/"
              description="This was a project I tried to cpoy the look and feel of soap2day, and Netflix inorder to make a realistic streaming service."
              thumbnail={BasicClone}
            />
          </div>
          <div>
            <h2>Digital Product Cards:</h2>
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
              description="This project was an attempt to replicate the look and feel of NFTs, capturing their unique style and essence."
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
