import React from 'react';
import '../styles/Footer.css'; 

const ThreeColumnLayout = () => {
  return (
    <div className='footer_'>
    <div className="container_footer">
      <div className="column">
        <h4 className='heading_footer'>About C20</h4>
        <hr></hr>
        <p className='footer-items'>Civil 20 Engagement Group provides a platform for Civil Society Organisations (CSO) worldwide to voice the people's aspirations with the world's leaders in G20.
        </p>
      </div>
      <div className="column">
        <h4 className='heading_footer'>Working Groups</h4>
        <hr></hr>
        <p>
        <ul>
            <li> Education and Digital Transformation</li>
            <li>Gender Equality & Disability</li>
            <li>Integrated Holistic Health</li>
            <li>Sustainable abd Resilient Communities</li>
            <li>Technology Security and Transperancy</li>
        </ul>
        </p>
      </div>
      <div className="column">
        <h4 className='heading_footer'>
            Other Links
        </h4>
        <hr></hr>
        <p className='footer-items'>
            <ul>
                <li>News</li>
                <li>Events</li>
                <li>G20 India Portal</li>
                <li>C20 India Portal</li>
            </ul>
        </p>
      </div>
      
    </div>
    <div className='funds'>
    Funds will be collected and receipts disbursed through our partner entity – Traboda CyberLabs
    </div>
    
    </div>
  );
};

export default ThreeColumnLayout;

