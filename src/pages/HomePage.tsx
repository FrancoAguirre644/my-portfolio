import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";
import Button from "@mui/material/Button";
import { makeStyles, styled, Theme } from "@mui/material";
import { MainLayout } from "../layouts/MainLayout";
import { Link } from "react-router-dom";
import SocialMedia from "../components/SocialMedia";

export default function HeroSection() {

    return (
        <MainLayout>
            <Container
                sx={{
                    mt: 8,
                    mb: 14,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                }}
            >
                <iframe
                    title="background-3d"
                    src="https://my.spline.design/awesomefolio-0c39efc3de701ba97be395cc128e4e2f/"
                    frameBorder="0"
                    height="100%"
                    style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        width: "100%",
                        maxWidth: "600px",
                    }}
                ></iframe>
                <Typography color="inherit" align="center" variant="h2" marked="center">
                    Upgrade your Sundays
                </Typography>
                <Typography
                    color="inherit"
                    align="center"
                    variant="h5"
                    sx={{ my: 4 }}
                >
                    Enjoy secret offers up to -70% off the best luxury hotels every Sunday.
                </Typography>
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
            </Container>
        </MainLayout>
    );
}