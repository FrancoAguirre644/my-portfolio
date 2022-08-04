import React from "react";
import { motion, useAnimation } from "framer-motion";
import { Button } from "@mui/material";
import Typography from '../components/Typography';
import { MainLayout } from "../layouts/MainLayout";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {

    const controls = useAnimation();

    return (
        <MainLayout>
                <Typography
                    component={motion.div}
                    animate={controls}
                    custom={0}
                    color="primary"
                    variant="h5"
                    style={{ marginBottom: "0px" }}
                >
                    home_welcome
                    <motion.div
                        style={{ display: "inline-block" }}
                        animate={{ rotate: [50, 90, 50] }}
                        transition={{ repeat: Infinity, duration: 1.4, repeatDelay: 0.7 }}
                    >
                        👋
                    </motion.div>
                    home_i
                </Typography>
                <motion.div animate={controls} custom={1}>
                </motion.div>
                <Typography
                    component={motion.p}
                    animate={controls}
                    custom={2}
                    variant="h2"
                    color="secondary"
                >
                    home_what_i_do
                </Typography>
                <Typography
                    component={motion.p}
                    animate={controls}
                    custom={3}
                    variant="body2"
                    color="initial"
                    style={{ marginBottom: "0" }}
                >
                    home_job
                </Typography>
                <Typography
                    component={motion.p}
                    animate={controls}
                    custom={4}
                    variant="body1"
                    color="initial"
                    style={{ marginBottom: "30px" }}
                >
                    home_location
                </Typography>
                <motion.div animate={controls} custom={5}>
                    <Link to="/contact">
                        <Button
                            sx={{
                                border: '4px solid currentColor',
                                borderRadius: 0,
                                height: 'auto',
                                py: 1,
                                px: 5,
                            }}
                        >
                            <Typography variant="h6" component="span">
                                Get in touch
                            </Typography>
                        </Button>
                    </Link>
                </motion.div>
        </MainLayout>
    );
};

export default HomePage;