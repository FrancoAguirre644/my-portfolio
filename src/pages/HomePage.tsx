import React from "react";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";
import Button from "@mui/material/Button";
import { MainLayout } from "../layouts/MainLayout";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {

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

export default HomePage;