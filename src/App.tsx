import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './themes/theme';
import Routes from './routes';
import Loading from './components/Loading';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Loading />
      <CssBaseline />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
