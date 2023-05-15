// importing jsx tools
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// importing page elements
import Nav from "../../components/navigation/nav";
import Footer from "../../components/footer/footer";

// importing page content
import Summary from "./summery";
import Intrests from "./interests";
import RoadMap from "./roadmap";

// Element Styling import
import './about.css';

const About = () => {
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
                    <Summary />
                    <Intrests />
                    <RoadMap />
                    <Footer />
                </>
            )}
        </>
    );
};

export default About;