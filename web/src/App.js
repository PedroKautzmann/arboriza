import React from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';
import Header from './components/Header';
import Routes from './routes';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <Footer />
      <GlobalStyle />
      <ToastContainer autoclose={3000} />
    </BrowserRouter>
  );
}

export default App;
