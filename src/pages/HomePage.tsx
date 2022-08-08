import React from "react";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";
import Button from "@mui/material/Button";
import { MainLayout } from "../layouts/MainLayout";
import { Link } from "react-router-dom";
import { Grid, Hidden } from "@mui/material";

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
                }}
            >
                <Grid container>
                    <Grid item md={6}>
                        <Typography color="inherit" variant="h4" marked="left">
                            Hi
                        </Typography>
                        <Typography color="secondary" variant="h4" marked="left">
                            I'm Franco Aguirre
                        </Typography>
                        <Typography
                            color="inherit"
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
                    </Grid>
                    <Grid item md={6} sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-end',
                    }}>
                        <Hidden>
                            <img src="https://cdn3d.iconscout.com/3d/premium/thumb/code-3095842-2598685.png" alt="" width={500} />
                        </Hidden>
                    </Grid>
                </Grid>
            </Container>
        </MainLayout>
    );
}

export default HomePage;