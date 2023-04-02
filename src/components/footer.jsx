import React from 'react'

function handleClick_contribute() {
  window.location.href = 'https://traboda.com/';
}

const Footer = () => {
  return (
    <div className="bg-blue-950 m-4 rounded-md shadow-lg rounded-t-lg:rounded-lg flex flex-wrap justify-center translate-y-24">
      <footer className="bg-blue-950 text-center dark:bg-blue-950 lg:text-left">
        <div className="container p-6 text-neutral-800 dark:text-neutral-200">
          <div className="flex justify-center mb-6 md:mb-0">
            <button
              onClick={handleClick_contribute}
              className="bg-amber-600 py-3 px-6 rounded-full text-xl hover:bg-white hover:text-amber-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 mr-4"
            >
              Contribute Now
            </button>
            <button
              onClick={handleClick_contribute}
              className="bg-amber-600 py-3 px-6 rounded-full text-xl hover:bg-white hover:text-amber-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              Contribute Through Bank Transfer
            </button>
          </div>
          <div className="text-center text-neutral-800 dark:text-neutral-400 mt-4">
            Funds will be collected and receipts disbursed through our partner entity – Traboda Solutions
          </div>
        </div>
        <div className="bg-amber-600 py-2 text-center text-white">
          © 2023 Tailwind Elements. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default Footer
