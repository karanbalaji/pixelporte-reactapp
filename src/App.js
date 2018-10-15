import React, { Component } from 'react';
import './resources/styles.css';
import { Element } from 'react-scroll';

import Header from './components/header_footer/Header';
import Featured from './components/featured'
import VenueNfo from './components/venueInfo';
import Highlights from './components/Highlights';
import Pricing from './components/Pricing/Pricing';
import Location from './components/location';
import Footer from './components/header_footer/Footer';
class App extends Component {
  render() {
    return (
      <div className="App" style={{ height:"1500px",background:'white'}}>
        <Header/>
        <Featured/>
        <VenueNfo/>
        <Element name='highlights'>
        <Highlights/>
        </Element>
        <Pricing/>
        <Location/>
        <Footer/>
      </div>
    );
  }
}

export default App;
