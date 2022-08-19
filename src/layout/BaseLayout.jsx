import React from 'react';
import LandingPage from '../pages/landingpage/LandingPage';
import Footer from './footer/Footer';
import Header from './header/Header';

const BaseLayout = () => {
  return (
    <div>
      <Header/>
      <main>
        <LandingPage/>
      </main>
      <Footer/>
      
    </div>
  );
};

export default BaseLayout;