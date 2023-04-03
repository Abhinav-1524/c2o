import React from 'react';
import { Card, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/partnership.css';


const cardsData = [
  {
    id: 1,
    title: '',
    description: 'Your support of TST working group will help the group reach out to the best minds and organizations to formulate policy for G20.',
  },
  {
    id: 2,
    title: '',
    description: 'Obtain excellent networking opportunities during the event for your organization.',
  },
  {
    id: 3,
    title: '',
    description: 'Provides the opportunity to build your commitment to social justice and show the world you care about sustainable development goals.',
  },
  {
    id: 4,
    title: '',
    description: 'Training CSOs with Technology, Security and Transparency practices and tools.',
  },
  {
    id: 5,
    title: '',
    description: 'Assist CSOs in their participation of Civil20 activities – Policy Dialogues, Travel for Meetings, Technology Infrastructure.',
  },
  {
    id: 6,
    title: '',
    description: 'Help CSO’s get access to an interested, influential, local & international audience.',
  },
];




const Partnership = () => {
  const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate__animated', 'animate__flipInX');
      } else {
        entry.target.classList.remove('animate__animated', 'animate__flipInX');
      }
    });
  };

  React.useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.3 });
    const targets = document.querySelectorAll('.card');

    targets.forEach((target) => {
      observer.observe(target);
    });

    return () => {
      targets.forEach((target) => {
        observer.unobserve(target);
      });
    };
  }, []);

  return (
    <div>
      <div className='title'>
      <h1>Why Partner with us?</h1>
      </div>
    <div className="container">
      <div className="row">
        {cardsData.map((card) => (
          <div className="col-md-4" key={card.id}>
            <Card className="card my-3 hover" style={{ height: "200px" }}>
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.description}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Partnership;

