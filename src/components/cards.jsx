import React from 'react';
import '../styles/cards.css';
import {motion} from 'framer-motion';

function FadeInWhenVisible({ children }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="move"
      viewport={{ once: false }}
      transition={{ duration: 1 }}
      variants={{
        move: { opacity: 1, translateY: 0 },
      hidden: { opacity: 0, translateY: 100 }
      }}
    >
      {children}
    </motion.div>
  );
}

const Card = ({ title }) => (
  <div className="col-lg-4 col-md-6 mb-4">
    <div className="card bg-amber-600 rounded-lg overflow-hidden shadow-md transform transition hover:scale-110 h-full">
      <div className="card-body bg-amber-600 hover:bg-blue-950 hover:text-amber-600 flex flex-col justify-center">
        <h3 className="card-title text-center text-2xl">{title}</h3>
      </div>
    </div>
  </div>
);

const AboutCards = () => {
  return (
    <div className="g-blue-950 shadow-lg rounded-lg ">
      <div className="container py-5">
        <h1 id="commitment" className="text-center text-7xl pt-32 text-amber-600">
          OUR COMMITMENT, WHAT WE DO
        </h1>
        <p className="text-center text-4xl text-amber-600 m-6">
          We bring together the Global Community of Experts, Civil Society Organizations, Stakeholders, Policy Makers, Industry Groups To Deliberate & Create Recommendation Framework for G20. This will involve,
        </p>
        <FadeInWhenVisible>
        <div className="row justify-content-center">
          <Card title="Presentation of Worldwide Best Practices in Technology for Empowerment AI & Data for Society Transparency, Trust and Disinformation Safety, Security and Resilience." />
          <Card title="Policy Dialogues: Participation in constructive dialogue towards creation of policy recommendations to G20 nations." />
          <Card title="Novel Platform to Amplify the Voice of Thousands of Worldwide Civil Societies." />
        </div>
        </FadeInWhenVisible>
      </div>
    </div>
  );
};

export default AboutCards;