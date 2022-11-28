import React from 'react';
import Header from './containers/header/Header';
import Partners from './containers/partners/Partners';
import Section1 from './containers/section-1/Section-1';
import Section2 from './containers/section-2/Section-2';
import Section3 from './containers/section-3/Section-3';
import Stats from './containers/stats/Stats';
import Section4 from './containers/section-4/Section-4';
import Section6 from './containers/section-6/Section-6';
import Newsletter from './containers/newsletter/Newsletter';
import Footer from './containers/footer/Footer';
import Testimonials from './containers/testimonials/Testimonials';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Partners />
      <Section1 />
      <Section2 />
      <Section3 />
      <Stats />
      <Section4 />
      <Testimonials />
      <Section6 />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
