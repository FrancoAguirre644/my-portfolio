import React from "react";
import { motion } from "framer-motion";
import Typography from "./Typography";
import Typed from 'react-typed';

const Loading: React.FC = () => {

    return (
        <motion.div
            initial={{
                y: 0
            }}
            animate={{
                y: "-100vh"
            }}
            transition={{
                delay: 4.2,
                duration: 0.3
            }}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: '#000000',
                zIndex: 10000,
            }}
        >
            <div style={{ margin: "0 auto", color: "white" }}>
                <Typography color="secondary" variant="h4" marked="center" sx={{ fontWeight: 700 }}>
                    <Typed strings={["Franco Aguirre"]} typeSpeed={60} />
                </Typography>
            </div>
        </motion.div>
    );
};

export default Loading;