import { Box, Container } from '@mui/material';
import Navbar from '../components/navbar/Navbar';

interface MainLayoutProps {
    children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {

    return (
        <>
            <Navbar />
            <Box
                sx={{
                    display: 'flex',
                    flex: '1 1 auto',
                    flexDirection: 'column',
                    width: '100%',
                }}
            >
                {children}
            </Box>
        </>
    );
};
