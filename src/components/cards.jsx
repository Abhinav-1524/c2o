import React from 'react';
import '../styles/cards.css';

const Card = ({title}) => (
  <div className="col-lg-4 col-md-6 mb-4">
    <div className="card rounded-lg overflow-hidden shadow-md transform transition hover:scale-110">
      <div className="cards_1 ">
        <h3 className="car-title text-center text-xl sm:text-2xl">{title}</h3>
      </div>
    </div>
  </div>
);

const AboutCards = () => {
  return (
    <div className="g-blue-950">
      <div className="container py-5">
        <h1 id="commitment" className="text-center text-5xl md:text-7xl pt-32 text-amber-600 font-serif">
          OUR COMMITMENT, WHAT WE DO
        </h1>
        <p className="some">
          We bring together the Global Community of Experts, Civil Society Organizations, Stakeholders, Policy Makers, Industry Groups To Deliberate & Create Recommendation Framework for G20. This will involve,
        </p>
        <div className="Flex-Container row">
          <Card title="Presentation of Worldwide Best Practices in Technology for Empowerment AI & Data for Society Transparency, Trust and Disinformation Safety, Security and Resilience." />
          <Card title="Policy Dialogues: Participation in constructive dialogue towards creation of policy recommendations to G20 nations." />
          <Card title="Novel Platform to Amplify the Voice of Thousands of Worldwide Civil Societies." />
        </div>
      </div>
    </div>
  );
};

export default AboutCards;
