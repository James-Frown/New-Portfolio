// importing jsx tools
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// importing elements
import Nav from "../../components/navigation/nav";
import Hero from "../../components/hero/hero";

// Element Styling import
import './landing.css';

const Landing = () => {
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
                    <Hero />
                </>
            )}
        </>
    );
};

export default Landing;