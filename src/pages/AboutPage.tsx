import { Container, Divider, Grid, styled } from "@mui/material";
import SocialMedia from "../components/SocialMedia";
import Typography from "../components/Typography";
import { MainLayout } from "../layouts/MainLayout";
import { personalData } from '../data/index';

const Avatar = styled('img')(({ theme }) => ({
    borderRadius: '50%',
    width: "240px",
    height: "240px",
    objectFit: 'cover',
    objectPosition: "0 -20px",
    boxShadow: theme.shadows[1]
}));

const AboutPage: React.FC = () => {

    return (
        <MainLayout>
            <Container component="section" sx={{ p: 4 }}>
                <Typography variant="h4" marked="center" align="center" component="h2">
                    About
                </Typography>
                <Grid
                    container
                    spacing={0}
                    alignItems="center"
                    justifyContent="center"
                >
                    <Grid item md={8} order={{ xs: 2, md: 1, lg: 1 }}>
                        <Typography component="span">
                            {personalData.description}
                        </Typography>
                        <Divider sx={{ py: 1 }} />
                        <SocialMedia />
                    </Grid>
                    <Grid item md={4} p={4} order={{ xs: 1, md: 2, lg: 2 }}>
                        <Avatar src={personalData.photo} alt="Franco Aguirre" />
                    </Grid>
                </Grid>
            </Container>
        </MainLayout>
    )
}

export default AboutPage;