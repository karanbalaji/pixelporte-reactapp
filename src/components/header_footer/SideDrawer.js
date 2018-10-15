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
                offset: -150

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
                <ListItem button onClick={()=> console.log('Featured')}>
                    Home
                </ListItem>

                <ListItem button onClick={()=> console.log('Venue NFO')}>
                    About
                </ListItem>

                <ListItem button onClick={()=> scrollToElement('highlights')}>
                    Portfolio
                </ListItem>

                <ListItem button onClick={()=> console.log('Pricing')}>
                    Team
                </ListItem>

                <ListItem button onClick={()=> console.log('Location')}>
                    Contact
                </ListItem>

            </List> 
        </Drawer>
    );
};

export default SideDrawer;