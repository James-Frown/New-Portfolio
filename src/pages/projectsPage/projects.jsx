// importing jsx tools
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// importing image
import Image from "../../assets/images/ProfileImg_2.jpg";
import NextJSTutorial from "../../assets/projects/NextJS-Tutorial-1.jpg";

// importing page elements
import Nav from "../../components/navigation/nav";
import Footer from "../../components/footer/footer";

// Element Styling import
import './projects.css';

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

    return (
        <>
            {isLoading ? (
                <>
                    <div className="LoadingContainer">
                        <div className="LoadingText">
                            <motion.h1
                                initial={{
                                    x: "-100rem"
                                }}
                                animate={{
                                    x: 0
                                }}
                                transition={{
                                    duration: 1
                                }}
                            >
                                Loading
                            </motion.h1>
                            <motion.h1
                                initial={{
                                    x: "100rem"
                                }}
                                animate={{
                                    x: 0
                                }}
                                transition={{
                                    duration: 1.3
                                }}
                            >
                                .
                            </motion.h1>
                            <motion.h1
                                initial={{
                                    x: "100rem"
                                }}
                                animate={{
                                    x: 0
                                }}
                                transition={{
                                    duration: 1.6
                                }}
                            >
                                .
                            </motion.h1>
                            <motion.h1
                                initial={{
                                    x: "100rem"
                                }}
                                animate={{
                                    x: 0
                                }}
                                transition={{
                                    duration: 1.9
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
                        <h1>
                            My Projects
                        </h1>
                    </div>
                    <div>
                        <ProjectCard
                            title="Tutorial Project - NextJS Image Gallery"
                            link="https://next-js-tutorial-1.vercel.app/"
                            description="This was a project i undertook to try and learn more about NextJS, by Coding In Flow."
                            thumbnail={NextJSTutorial}
                        />
                    </div>
                    <div className="image_wrapper" >
                        <img src={Image} className="image_selector" />
                    </div>
                    <Footer />
                </>
            )}
        </>
    );
};

export default Projects;