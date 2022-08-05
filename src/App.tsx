import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { motion } from "framer-motion";
import theme from './themes/theme';
import Routes from './routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <CssBaseline />
        <Routes />
      </motion.main>
    </ThemeProvider>
  );
}

export default App;
