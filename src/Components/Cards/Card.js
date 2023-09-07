import React from 'react';
import '../Cards/Card.css';


const Card = () => {
  return (
    <div className='Cards-container'>
        <div className='vision'>
             <h1 className='myself'>We’re all about
             collective <span className='object'>Tech Inventor and Entrepreneur</span> </h1>
             <p className='paraghy'>
             In the ever-evolving and highly competitive business landscape, with countless ventures on the rise, each endeavoring to carve a niche for themselves, our dedicated team is here to provide unwavering support. Our primary objective is to empower entrepreneurs and start-up businesses to focus wholeheartedly on their core missions and strengths, while we take charge of developing a wide variety of cutting-edge applications. These tailor-made applications will serve as a bridge, seamlessly connecting these businesses to their target audience, fostering stronger customer relationships, and fueling growth.
             </p>
        </div>
        <div className='Cards-items'>
          <div className='Joseph-slide'>
            <div className='Joseph-slide-font'>
             <h2><span className='title-side'>CEO</span> Mr Joseph Solomon Chigozie</h2>
            </div>
            <div className='Joseph-slide-back'></div>
          </div>

          <div className='Biola-slide'>
           <div className='Biola-slide-font'> 
           <h2><span className='title-side'>Product Design</span> </h2>
           </div>
            <div className='Biola-slide-back'></div>
          </div>

          <div className='Moses-slide'>
          <div className='Moses-slide-font'> 
          <h2> <span className='title-side'>Team Lead</span>Mr Christopher Osawel  Moses</h2>
           </div>
           <div className='Moses-slide-back'></div>
          </div>
        </div>  
    </div>
  )
}

export default Card