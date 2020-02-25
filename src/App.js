import React from 'react';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/global.css';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <Footer />
    </BrowserRouter>
  )
}

export default App;
