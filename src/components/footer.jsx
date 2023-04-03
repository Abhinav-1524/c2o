import React from 'react';
import '../styles/footer.css';

function handleClick_contribute() {
  window.location.href = 'https://traboda.com/';
}

const Footer = () => {
  return (
    <div className="bg-blue-950 m-4 rounded-md shadow-lg rounded-t-lg:rounded-lg flex flex-wrap justify-center translate-y-24 footer_container">
      <footer className="bg-aqua-600 text-center dark:bg-blue-950 lg:text-left">
        <div className="container p-6 text-neutral-800 dark:text-neutral-200">
          <div className="flex justify-center mb-6 md:mb-0 sm:flex-col">
            <button
              onClick={handleClick_contribute}
              className="btn-contribute bg-blue-950 py-3 px-9  text-lg sm:text-xl hover:bg-white hover:text-green-900 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 mb-4 sm:mb-0 sm:mr-0 sm:ml-auto mx-2 mx-md-4 my-2 my-md-0"
            >
              Contribute Now
            </button>
            <button
              onClick={handleClick_contribute}
              className="btn-bank-transfer bg-blue-950 py-3 px-9 rounded-full text-lg sm:text   -xl hover:bg-white hover:text-green-900 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 sm:ml-4 mx-2 mx-md-4 my-2 my-md-0"
            >
              Contribute Through Bank Transfer
            </button>
          </div>
          <div className="text-white text-center text-neutral-800 dark:text-neutral-400 mt-4 text-sm sm:text-base">
            Funds will be collected and receipts disbursed through our partner entity – Traboda Solutions
          </div>
        </div>
        <div className="bg-blue-950 py-2 text-center text-white text-xs sm:text-sm">
          © 2023 Tailwind Elements. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
