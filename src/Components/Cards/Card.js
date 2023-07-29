import React from 'react';
import '../Cards/Card.css';


const Card = () => {
  return (
    <div className='Cards-container'>
        <div className='vision'>
             <h1>Hi, I'm Joseph, <span>Your Vitual Assistant.</span> </h1>
             <p className='paraghy'>
             In the ever-evolving and highly competitive business landscape, with countless ventures on the rise, each endeavoring to carve a niche for themselves, our dedicated team is here to provide unwavering support. Our primary objective is to empower entrepreneurs and start-up businesses to focus wholeheartedly on their core missions and strengths, while we take charge of developing a wide variety of cutting-edge applications. These tailor-made applications will serve as a bridge, seamlessly connecting these businesses to their target audience, fostering stronger customer relationships, and fueling growth.
             </p>
        </div>
        <div className='Cards-items'>
          <div className='Joseph-slide'>
             <h2>CEO--Mr Joseph Solomon Chigozie</h2>
          </div>
          <div className='Biola-slide'>
          <h2>HR--Biola</h2>
          </div>
          <div className='Moses-slide'>
          <h2>Team Lead--Christopher Osawel      Moses</h2>
          </div>
        </div>  
    </div>
  )
}

export default Card