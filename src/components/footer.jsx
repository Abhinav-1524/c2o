import React from 'react';
import '../styles/footer.css';

function handleClick_contribute() {
  window.location.href = 'https://traboda.com/';
}

const Footer = () => {
  return (
    <footer className='footer_container'>
      <div className='footer_item'>
        Funds will be collected and receipts disbursed through our partner entity – Traboda Solutions
      </div>
      <div className='footer_item'>
        © 2023 Tailwind Elements. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
