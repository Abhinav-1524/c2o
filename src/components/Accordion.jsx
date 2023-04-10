import React from 'react';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import './Accordian.css'

export default function Events() {
    return (
        <>
        <h2 id="calender" className="heading">EVENTS</h2>
        <div className='parent-div'>
        <Accordion >
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    April 5
                    
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <div className='element' >
                    <div className='column'>            
                    <img className='image' src="https://teachyourkidscode.com/wp-content/uploads/2022/02/Creation-Crate-Review.jpg" />
                    </div>
                    <div className='column'><p>
                    Technology and Education
                    </p>
                    
                    </div>
                    </div>
                   
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    April 8
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <div className='element' >
                    <div className='column'>            
                    <img className='image' src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Is_Cybersecurity_Hard_to_Learn.jpg" />
                    </div>
                    <div className='column'><p>
                    Safety and Cybersecurity
                    </p>
                    </div>
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    April 17
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <div className='element' >
                    <div className='column'>            
                    <img className='image' src="https://imageio.forbes.com/specials-images/imageserve/60e207eff769772aafaa4e5b/The-Ethics-of-AI/960x0.jpg?format=jpg&width=960" />
                    </div>
                    <div className='column'><p>
                    AI, Ethics and Data Governance
                    </p>
                    </div>
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    April 26 
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <div className='element' >
                    <div className='column'>            
                    <img className='image' src="https://www.abounaja.com/images/world-intellectual-property-day-2020.webp" />
                    </div>
                    <div className='column'><p>
                    World Intellectual Property day
                    </p>
                    </div>
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    May 13 to 14  
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <div className='element' >
                    <div className='column'>            
                    <img className='image' src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F477668369%2F462238473072%2F1%2Foriginal.20230325-191823?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C33%2C1640%2C820&s=cb5c4598bdc4dbad27a5f514c3ac0a05" />
                    </div>
                    <div className='column'><p>
                    INTL conference on Technology Security and Transperancy
                    </p>
                    </div>
                    </div>

                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
        </div>
        </>
    );
}