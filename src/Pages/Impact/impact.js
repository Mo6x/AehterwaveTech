import React from 'react'
import './Impact.css';
import Navbar from '../../Components/Navbar/Navbar';
import Repair from '../../assert/repair.jpeg';
import Quality from '../../assert/quality.png';
import Design from '../../assert/design.jpeg';
import Supply from '../../assert/supply.jpeg';
import Documentation from '../../assert/document.png';
import Compliance from '../../assert/compliance.jpeg';
import Growth from '../../assert/growth.jpeg';
import Network from '../../assert/network.jpeg';
import Sucess from '../../assert/sucess.jpeg';
import Footer from '../../Components/Footer/Footer';
import Footers from '../../Components/Footers/Footers';



const impact = () => {
  return (
    <div className='Impact-container'>
        < Navbar />
        <div className='impact-lists'>
             <h1 className='impact-h1'>Innovative Impact</h1>
             <div className='impact-cards'>
                <div className='impact-card'>
                   <img src={Repair} alt='Repair imges' className='impact-image'/>
                   <h1 className='impact-h2'>Maintenance and Repair</h1>
                   <p className='impact-p'>
                   Genius Technologies can aid technicians in identifying equipment issues and performing repairs efficiently. Using AR-powered smart glasses or mobile devices, technicians can access real-time visual instructions, diagrams, and troubleshooting guides, reducing downtime and minimizing errors.
                   </p>
                </div>

                <div className='impact-card'>
                   <img src={Quality} alt='Quality' className='impact-image'/>
                   <h1 className='impact-h2'>Quality Control and Inspection</h1>
                   <p className='impact-p'>
                   In manufacturing processes, Genius Technologies can enhance quality control by automating visual inspections. AI-powered image recognition can identify defects, deviations, and anomalies in products, ensuring consistency and precision in production.
                   </p>
                </div>

                <div className='impact-card'>
                   <img src={Design} alt='Design' className='impact-image'/>
                   <h1 className='impact-h2'>Design and Prototyping</h1>
                   <p className='impact-p'>
                   In product design and prototyping, Genius Technologies can streamline the development process. Designers can visualize concepts and prototypes in 3D, making it easier to iterate, collaborate, and bring ideas to life.
                   </p>
                </div>

                <div className='impact-card'>
                   <img src={Supply} alt='Supply' className='impact-image'/>
                   <h1 className='impact-h2'>Supply Chain Management</h1>
                   <p className='impact-p'> 
                   Genius Technologie can optimize supply chain operations. AI-powered cameras can monitor inventory levels, track shipments, and ensure efficient warehouse management, reducing waste and improving inventory accuracy.
                   </p>
                </div>

                <div className='impact-card'>
                   <img src={Documentation}  alt='Documentation' className='impact-image'/>
                   <h1 className='impact-h2'>Documentation & Knowledge Sharing</h1>
                   <p className='impact-p'>
                   Genius Technologie can improve documentation processes by capturing and storing visual data from inspections, maintenance, and other operations. This data can then be used for knowledge sharing, historical analysis, and process optimization.
                   </p>
                </div>

                <div className='impact-card'>
                   <img src={Compliance}  alt='Compliance' className='impact-image'/>
                   <h1 className='impact-h2'>Safety &  compliance in industrial settings</h1>
                   <p className='impact-p'> 
                   Genius Technologie can enhance safety protocols and compliance. AR overlays can provide real-time safety instructions and highlight potential hazards, helping workers follow safety guidelines more effectively.
                   </p>
                </div>
             </div>
        </div>

        <div className='impact-vision'>
           <div className='impact-visions'>
                   <img src={Growth}  alt='Growth' className='vision-imges'/>
                   <h1 className='vision-h1'>Our growth</h1>
           </div>
           <div className='impact-visions'>
                   <img src={Network}  alt='Network' className='vision-imges'/>
                   <h1 className='vision-h1'>Partnership</h1>
           </div>
           <div className='impact-visions'>
                   <img src={Sucess}  alt='Sucess' className='vision-imges'/>
                   <h1 className='vision-h1'>Success</h1>
           </div>
        </div>
       <Footer />
       <Footers />
    </div>
  )
}

export default impact;