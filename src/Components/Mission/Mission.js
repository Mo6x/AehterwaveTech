import React from 'react';
import Courage from '../../assert/courages.jpeg';
// import Humunity from '../../assert/humunity.png';
import '../Mission/Mission.css';


const Mission = () => {
  return (
    <div className='mission-container'>
        <h1 className='visions-h1'>Our Vision</h1>
        <div className='mission-cards'>
           <div className='mission-card'>
              <div className='h1-images'>
                 <img src={Courage} alt='Courages' className='courage-img'/>
                 <h1>Courage</h1>
              </div>
              <p className='mission-p'>
              AetherWave Technologies aims to have a level of openness with all stakeholders so that, they would have the courage to say and do what needs to be done at the right time. This is necessary to promote a transformative spirit in the work done by the company.
              </p>
           </div>

           <div className='mission-card'>
              <div className='h1-images'>
                 <img src={Courage} alt='Courages' className='courage-img'/>
                 <h1>Humility</h1>
              </div>
              <p className='mission-p'>
              AetherWave Technologies strives to have an inclusive ecosystem where there is room to safely make mistakes and learn from them
              </p>
           </div>

           <div className='mission-card'>
              <div className='h1-images'>
                 <img src={Courage} alt='Courages' className='courage-img'/>
                 <h1>Honesty</h1>
              </div>
              <p className='mission-p'>
              Honesty is an important prerequisite to promote three dimensional diversity. It is only when all stakeholders are honest about their needs, thoughts and opinions, that true development and collaboration be achieved.
              </p>
           </div>

           <div className='mission-card'>
              <div className='h1-images'>
                 <img src={Courage} alt='Courages' className='courage-img'/>
                 <h1>Lean Thinking</h1>
              </div>
              <p className='mission-p'>
              The Lean Thinking business methodology at Pericius includes using the SCRUM methodology to systematically achieve our goals. To fulfil the vision of Customer Orientation, we at Pericius aim to eliminate obstacles that could deviate us from our organisational goals.
              </p>
           </div>
        </div>
    </div>
  )
}

export default Mission;