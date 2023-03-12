import React from 'react';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import theme from './theme';
import AboutPage from "./Pages/AboutPage";
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import ServicePage from './Pages/ServicePage';
import ContactPage from './Pages/ContactPage'
function App() {
  return (

    <ThemeProvider theme={theme}>
      {/* <LoginPage /> */}
      <HomePage />
      {/* <ServicePage /> */}
      {/* <AboutPage /> */}
      {/* <ContactPage /> */}
    </ThemeProvider>

  );
}

export default App;
