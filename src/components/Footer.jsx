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
            <li><a href="https://c20.amma.org/edt-wg/">Education and Digital Transformation</a></li>
            <li><a href="https://c20.amma.org/ged-wg/">Gender Equality & Disability</a></li>
            <li><a href="https://c20.amma.org/ihh-wg/">Integrated Holistic Health</a></li>
            <li><a href="https://c20.amma.org/sustainable-and-resilient-communities/">Sustainable abd Resilient Communities</a></li>
            <li><a href="https://c20.amma.org/tst-wg/">Technology Security and Transperancy</a></li>
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
                <li><a href="https://c20.amma.org/news/">News</a></li>
                <li><a href="https://c20.amma.org/events/">Events</a></li>
                <li><a href="https://www.g20.org/en/">G20 India Portal</a></li>
                <li><a href="https://civil20.net/">C20 India Portal</a></li>
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

