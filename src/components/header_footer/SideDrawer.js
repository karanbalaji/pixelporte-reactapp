import React from 'react';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { scroller } from 'react-scroll';

const SideDrawer = (props) => {


        const scrollToElement = (element) => {

            scroller.scrollTo(element,{
                    duration: 1500,
                    delay:100,
                smooth:true,
                offset: -100

            });
            props.onClose(false)

        }


    return (
        <Drawer
            anchor="right"
            open={props.open}
            onClose={()=> props.onClose(false)}
        >
            <List component="nav">
                <ListItem button onClick={()=> scrollToElement('home')}>
                    Home
                </ListItem>

                <ListItem button onClick={()=> scrollToElement('eventInfo',)}>
                    Event Info
                </ListItem>

                <ListItem button onClick={()=> scrollToElement('highlights')}>
                    About
                </ListItem>

                <ListItem button onClick={()=> scrollToElement('price')}>
                    Price
                </ListItem>

                <ListItem button onClick={()=> scrollToElement('location')}>
                    Location
                </ListItem>

            </List> 
        </Drawer>
    );
};

export default SideDrawer;