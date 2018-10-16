import React, { Component } from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import EventIcon from '@material-ui/icons/Event';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PriceIcon from '@material-ui/icons/AttachMoney';
import AboutIcon from '@material-ui/icons/Info';

import { scroller } from 'react-scroll';



class BottomNav extends Component {
    state = {
        value: 'recents',
      }

      handleChange = (event, value) => {
        this.setState({ value, }
            );
      }

    render() {

       
        const { value } = this.state;
        const scrollToElement = (element) => {

            scroller.scrollTo(element,{
                    duration: 1500,
                    delay:100,
                smooth:true,
                offset: -100
                
            });
        }


        return (
            <BottomNavigation value={value} onChange={this.handleChange}  style={{
            width: '100%',
    position: 'fixed',
    bottom: 0,
            }}>
            
        <BottomNavigationAction onClick={()=> scrollToElement('home')} label="Home" value="recents" icon={<HomeIcon />} />
        <BottomNavigationAction onClick={()=> scrollToElement('eventInfo')} label="Event Info" value="favorites" icon={<EventIcon />} />
        <BottomNavigationAction onClick={()=> scrollToElement('highlights')} label="About" value="info" icon={<AboutIcon/>} />
        <BottomNavigationAction onClick={()=> scrollToElement('price')} label="Price" value="price" icon={<PriceIcon/>} />

        <BottomNavigationAction onClick={()=> scrollToElement('location')} label="Location" value="nearby" icon={<LocationOnIcon/>} />
      </BottomNavigation>
        );
    }
}

export default BottomNav;