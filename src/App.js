import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppBar from './components/AppBar';
import Hero from './components/Hero';
import getLPTheme from './getLPTheme';
import { ToastContainer } from 'react-toastify';

export default function App() {
  const [mode, setMode] = React.useState('light');
  const [showCustomTheme] = React.useState(true);
  const LPtheme = createTheme(getLPTheme(mode));
  const defaultTheme = createTheme({ palette: { mode } });

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };


  return (
    <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
      <CssBaseline />
      
      <AppBar mode={mode} toggleColorMode={toggleColorMode} />
      <Hero />
    </ThemeProvider>
  );
}
