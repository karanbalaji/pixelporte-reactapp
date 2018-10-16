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
import BottomNav from './components/header_footer/Bottome_Nav/BottomNav'
class App extends Component {
  render() {
    return (
      <div className="App" style={{ height:"1500px",background:'white'}}>
        <Header/>
        
        <Element name='home'>
        <Featured/>
        </Element>

        <Element name='eventInfo'>
        <VenueNfo/>
        </Element>

        <Element name='highlights'>
        <Highlights/>        
        </Element>

        <Element name='price'>
        <Pricing/>
        </Element>

        <Element name='location'>
        <Location/>
        </Element>

        <Footer/>
        <BottomNav/>
      </div>
    );
  }
}

export default App;
