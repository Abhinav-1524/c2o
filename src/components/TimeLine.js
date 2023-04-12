import React from 'react';
import {ReactComponent as Icon1} from '../images/calender-svgrepo-com (1).svg';
import {ReactComponent as Icon2} from '../images/networking-teamwork-svgrepo-com.svg';
import {ReactComponent as Icon3} from '../images/sustainable-sustainability-svgrepo-com.svg';
import {ReactComponent as Icon4} from '../images/training-class-svgrepo-com.svg';
import {ReactComponent as Icon5} from '../images/help-svgrepo-com.svg';
import {ReactComponent as Icon6} from '../images/connected-connections-global-svgrepo-com.svg';
import './TimeLine.css';

const Card1 = ({ icon, title, content }) => {
  return(
  <div className="event-colcard">
     <div className='event-icon'><Icon1 /></div>
    <h3 className="event-title">{title}</h3>
    <p className="event-content">{content}</p>  
  </div>
);}


const CardGrid = () => (
  <div>
  <h1 id="events" className='heading'>EVENTS</h1>
  <div className="card-grid">
    <div className="card-column">
      <Card1    
      title="April 5"
        content="Technology and Education"
      />
      <Card1
        title="April 8"
        content="Safety and Cybersecurity"
      />

    
      <Card1
        title="April 17"
        content="AI, Ethics and Data Governance "
      />
      <Card1
        title="April 26"
        content="World Intellectual Property Day"
      />
      <Card1
        title="May 13 to 14"
        content="INTL conference on Technology Security and Transperancy"
      />
    </div>
  </div>
  </div>
);

export default CardGrid;
