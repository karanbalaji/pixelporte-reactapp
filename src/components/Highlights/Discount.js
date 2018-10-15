import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import MyButton from '../Ui/MyButton';
import ButtonIcon from '../../resources/images/icons/menu.png';


class Discount extends Component {
   state={
    discountStart:0,
    discountEnd:30,

   }
   porcentage = () => {
       if (this.state.discountStart < this.state.discountEnd){
            this.setState({
                discountStart: this.state.discountStart + 1
            })
       }
   }
   componentDidUpdate(){
       setTimeout(()=>{
            this.porcentage()
       },30)
   }
   
   
    render() {
        return (
            <div className='center_wrapper'>
                <div className='discount_wrapper'>
                    <Fade
                    onReveal = {()=> this.porcentage()}
                    >
                    <div className='discount_porcentage'>
                    <span>{this.state.discountStart}%</span>
                    <span>OFF</span>
                    </div>
                    </Fade>
                    <Slide>
                    <div className='discount_description'>
                <h3>Get in touch before the launch & get discount</h3>
                <MyButton
                        text='Enquire Now'
                        bck='#ffa800'
                        color='#ffffff'
                        icon={ButtonIcon}
                        
                        />
                 </div> 
                 
                 </Slide>
                </div> 
                 
            </div>
        );
    }
}

export default Discount;