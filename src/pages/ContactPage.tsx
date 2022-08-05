import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import TextField from '../components/TextField';
import Snackbar from '../components/Snackbar';
import Button from '../components/Button';
import { MainLayout } from '../layouts/MainLayout';
import { Fade } from '@mui/material';

const ContactPage: React.FC = () => {

    const [open, setOpen] = React.useState<boolean>(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <MainLayout>
            <Container component="section" sx={{ mt: 10, display: 'flex' }}>
                <Fade in timeout={1000}>
                    <Grid container>
                        <Grid item xs={12} md={6} sx={{ zIndex: 1 }}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    bgcolor: 'warning.main',
                                    py: 8,
                                    px: 3,
                                }}
                            >
                                <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400 }}>
                                    <Typography variant="h2" component="h2">
                                        Receive
                                    </Typography>
                                    <Typography variant="h5">
                                        Taste the holidays of the everyday close.
                                    </Typography>
                                    <TextField
                                        noBorder
                                        placeholder="Your email"
                                        variant="standard"
                                        sx={{ width: '100%', mt: 1, mb: 1 }}
                                    />
                                    <TextField
                                        noBorder
                                        placeholder="Your email"
                                        variant="standard"
                                        sx={{ width: '100%', mt: 1, mb: 1 }}
                                    />
                                    <Button
                                        type="submit"
                                        color="primary"
                                        variant="contained"
                                        sx={{ width: '100%' }}
                                    >
                                        Keep me updated
                                    </Button>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            md={6}
                            sx={{ display: { md: 'block', xs: 'none' }, position: 'relative' }}
                        >
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: -67,
                                    left: -67,
                                    right: 0,
                                    bottom: 0,
                                    width: '100%',
                                    background: 'url(https://gitlab.create-ion.at/lt/material-ui/-/raw/v4.0.2/static/themes/onepirate/productCTAImageDots.png)',
                                }}
                            />
                            <Box
                                component="img"
                                src="https://images.unsplash.com/photo-1527853787696-f7be74f2e39a?auto=format&fit=crop&w=750"
                                alt="call to action"
                                sx={{
                                    position: 'absolute',
                                    top: -28,
                                    left: -28,
                                    right: 0,
                                    bottom: 0,
                                    width: '100%',
                                    maxWidth: 600,
                                }}
                            />
                        </Grid>
                    </Grid>
                </Fade>
                <Snackbar
                    open={open}
                    closeFunc={handleClose}
                    message="We will send you our best offers, once a week."
                />
            </Container>
        </MainLayout>
    );
}

export default ContactPage;