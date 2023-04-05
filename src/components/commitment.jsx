import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import {ReactComponent as Icon7} from '../images/download.svg'
import {ReactComponent as Icon8} from '../images/download (1).svg'
import {ReactComponent as Icon9} from '../images/download (2).svg'
import '../styles/commitment.css'


const Card7 = ({ icon, title, content }) => {
  return(
  <div className="co-card">
    <div className='icons1'><Icon7/></div>
    <h3 className="titles">{title}</h3>
    <p className="contents">{content}</p>
  </div>
);}

const Card8 = ({ icon, title, content }) => {
  return(
  <div className="co-card">
    <div className='icons1'><Icon8/></div>
    <h3 className="titles">{title}</h3>
    <p className="contents">{content}</p>
  </div>
);}

const Card9 = ({ icon, title, content }) => {
  return(
  <div className="co-card">
    <h3 className="titles">{title}</h3>
    <div className='icons1'><Icon9/></div>
    <p className="contents">{content}</p>
  </div>
);}


export const commitment = () => {
  return (
    <div>
      <div>
        <h1 id="commitment" className='head'>
          OUR COMMITMENTS, WHAT WE DO 
        </h1>
        <p1 className='para'>
        We bring together the Global Community of Experts, Civil Society Organizations, Stakeholders, Policy Makers, Industry Groups To Deliberate & Create Recommendation Framework for G20. This will involve,
        </p1>
      </div>
        <Card7 
        content="Presentation of Worldwide Best Practices in Technology for Empowerment AI & Data for Society Transparency, Trust and Disinformation Safety, Security and Resilience."
         />

        <Card8 
        content="Policy Dialogues: Participation in constructive dialogue towards creation of policy recommendations to G20 nations."
        />

        <Card9 
        content="Novel Platform to Amplify the Voice of Thousands of Worldwide Civil Societies."
        />


    </div>
  )
}

export default commitment;