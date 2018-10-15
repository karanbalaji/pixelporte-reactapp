import React from 'react';

const Location = () => {
    return (
        <div className='location_wrapper'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2885.247885769241!2d-79.34893950000003!3d43.684609699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cc90646e9c31%3A0x828115dc7d7eabe!2sCentennial+College+-+Story+Arts+Centre!5e0!3m2!1sen!2sca!4v1539574535264" 
            title='Centennial College'
            width="100%" 
            height="500px"
            frameBorder="0"
            
            allowFullScreen></iframe>

            <div className='location_tag'>
            <div>Location</div>
            </div>
        </div>
    );
};

export default Location;