import React from 'react';
import '../styles/partnership.css';

const Partnership = () => {
  return (
    <div className="bg-blue-950 m-4 rounded-md shadow-lg">
      <p id="partnership" className="text-7xl text-amber-600 text-center pt-16 pb-16">
        Why partner with us?
      </p>
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/2 p-3">
          <div className="bg-amber-600 text-blue-950 hover:bg-amber-700 m-2 p-4 rounded-lg">
            <p className="text-lg font-semibold text-center">
              Your support of TST working group will help the group reach out to the best minds and organizations to formulate policy for G20
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-3">
          <div className="bg-amber-600 text-blue-950 hover:bg-amber-700 m-2 p-4 rounded-lg">
            <p className="text-lg font-semibold text-center">
              Obtain excellent networking opportunities during the event for your organization.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-3">
          <div className="bg-amber-600 text-blue-950 hover:bg-amber-700 m-2 p-4 rounded-lg">
            <p className="text-lg font-semibold text-center">
              Provides the opportunity to build your commitment to social justice and show the world you care about sustainable development goals.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-3">
          <div className="bg-amber-600 text-blue-950 hover:bg-amber-700 m-2 p-4 rounded-lg">
            <p className="text-lg font-semibold text-center">
              Training CSOs with Technology, Security and Transparency practices and tools.
            </p>
          </div>
        </div>
        <div className="w-full p-3">
          <div className="bg-blue-950 text-white m-2 p-4 rounded-lg flex flex-col items-center justify-center">

            <p className="text-lg font-semibold text-center">
              Join our esteemed main partners in supporting TST working group in formulating policy for G20 and contributing towards sustainable development goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partnership;
