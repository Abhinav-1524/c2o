import React from 'react';
import {ReactComponent as Icon1} from '../images/agree-svgrepo-com.svg';
import {ReactComponent as Icon2} from '../images/networking-teamwork-svgrepo-com.svg';
import {ReactComponent as Icon3} from '../images/sustainable-sustainability-svgrepo-com.svg';
import {ReactComponent as Icon4} from '../images/training-class-svgrepo-com.svg';
import {ReactComponent as Icon5} from '../images/help-svgrepo-com.svg';
import {ReactComponent as Icon6} from '../images/connected-connections-global-svgrepo-com.svg';
import './Partner.css';

const Card1 = ({ icon, title, content }) => {
  return(
  <div className="colcard">
    <div className='icon'><Icon1 /></div>
    <h3 className="title">{title}</h3>
    <p className="content">{content}</p>
  </div>
);}

const Card2 = ({ icon, title, content }) => {
  return(
  <div className="colcard">
    <div className='icon'><Icon2 /></div>
    <h3 className="title">{title}</h3>
    <p className="content">{content}</p>
  </div>
);}


const Card3 = ({ icon, title, content }) => {
  return(
  <div className="colcard">
    <div className='icon'><Icon3 /></div>
    <h3 className="title">{title}</h3>
    <p className="content">{content}</p>
  </div>
);}

const Card4 = ({ icon, title, content }) => {
  return(
  <div className="colcard">
    <div className='icon'><Icon4 /></div>
    <h3 className="title">{title}</h3>
    <p className="content">{content}</p>
  </div>
);}

const Card5 = ({ icon, title, content }) => {
  return(
  <div className="colcard">
    <div className='icon'><Icon5 /></div>
    <h3 className="title">{title}</h3>
    <p className="content">{content}</p>
  </div>
);}

const Card6 = ({ icon, title, content }) => {
  return(
  <div className="colcard">
    <div className='icon'><Icon6 /></div>
    <h3 className="title">{title}</h3>
    <p className="content">{content}</p>
  </div>
);}







const CardGrid = () => (
  <div>
  <h1 id="partnership" className='heading'>WHY PARTNER WITH US</h1>
  <div className="card-grid">
    <div className="card-column">
      <Card1    
        content="Your support of TST working group will help the group reach out to the best minds and organizations to formulate policy for G20.."
      />
      <Card2
        
        content="Obtain excellent networking opportunities during the event for your organization.."
      />
      <Card3
        
        content="Provides the opportunity to build your commitment to social justice and show the world you care about sustainable development goals."
      />
    </div>
    <div className="card-column">
      <Card4
        
        content="Training CSOs with Technology, Security and Transparency practices and tools."
      />
      <Card5
        
        content="Assist CSOs in their participation of Civil20 activities – Policy Dialogues, Travel for Meetings, Technology Infrastructure."
      />
      <Card6
        
        content="Help CSO’s get access to an interested, influential, local & international audience."
      />
    </div>
  </div>
  </div>
);

export default CardGrid;
