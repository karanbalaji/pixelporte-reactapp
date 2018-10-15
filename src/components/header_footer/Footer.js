import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <footer className='bck_red'>
            <Fade delay={500}>
            <div className='footer_logo_venue'>
            Pixelporte
            </div>
            <div className='footer_copyright'>
            All rights reserved
            </div>
            
            </Fade>
        </footer>
    );
};

export default Footer;