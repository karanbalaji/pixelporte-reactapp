import React, { Component } from 'react';
import MyButton from '../Ui/MyButton';
import Zoom from 'react-reveal/Zoom';
class Pricing extends Component {
   
   state = {
        prices:[35,25,25],
        positions:['Full Stack Developer','Graphic Designers','Customer Experience Design'],
        desc:[
            'Our developers use MERN Stack, Which will be built on RESTful system. Completely future proof and scalable',
            'Our graphic designers bring visuals to prototyping with invision studio',
            'Our CXD team will solve the problem of what the customers actually want using Data Science'],
            linkto:['#1','#2','#3'],
            delay:[500,0,500]

   }
   showBoxes = () => (
       
            this.state.prices.map((box,i)=>(
                <Zoom delay={this.state.delay[i]} key={i} >
                <div className='pricing_item'>
                    <div className='pricing_inner_wrapper'>
                    <div className='pricing_title'>
                    <span>${this.state.prices[i]}/hr</span>
                    <span>{this.state.positions[i]}</span>


                    </div>
                    <div className='pricing_description'>
                    {this.state.desc[i]}
                    </div>
                    
                    <div className='pricing_buttons'>
                    <MyButton 
                        text='Enqire Now'
                        bck='#ffa800'
                        color='#ffffff'
                        link={this.state.linkto[i]}
                        
                    
                    />
                    </div>
                    </div>

                </div>
                </Zoom>

            ))

       
   )
   
   
    render() {
        return (
            <div className='bck_black'>
            <div className='center_wrapper pricing_section'>
            <h2>Pricing</h2>
            <div className='pricing_wrapper'>
           {this.showBoxes()}
            </div>
            </div>
            </div>
        );
    }
}

export default Pricing;