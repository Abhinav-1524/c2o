import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './TimeLine.css';
import {motion} from 'framer-motion';

function FadeInWhenVisible({ children }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      transition={{ duration: 0.3 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 }
      }}
    >
      {children}
    </motion.div>
  );
}

function Timeline() {
  return (
    <div className="time">
      <div className="container">
        <h2 className="heading">EVENTS</h2>
        {/* first section */}
        <FadeInWhenVisible>
        <div className="row align-items-center how-it-works d-flex">
          <div className="col-2 text-center bottom d-inline-flex justify-content-center align-items-center">
            <div className="circle font-weight-bold">1</div>
          </div>
          <div className="col-6">
            <h5>FEBRUARY 23</h5>
            <p className='left-para'>
              Online Technology For Application and Impact
            </p>
          </div>  
        </div>
        </FadeInWhenVisible>
        {/* path between 1-2 */}
        <div className="row timeline">
          <div className="col-2">
            <div className="corner top-right"></div>
          </div>
          <div className="col-8">
            <hr />
          </div>
          <div className="col-2">
            <div className="corner left-bottom"></div>
          </div>
        </div>
        {/* second section */}
        <FadeInWhenVisible>
        <div className="row align-items-center justify-content-end how-it-works d-flex">
          <div className="col-6 text-right">
            <h5 className="right-heading">MARCH 6</h5>
            <p className="right-para">
              Policy Dialogue AI
            </p>
          </div>
          <div className="col-2 text-center full d-inline-flex justify-content-center align-items-center">
            <div className="circle font-weight-bold">2</div>
          </div>
        </div>
        </FadeInWhenVisible>
        {/* path between 2-3 */}
        <div className="row timeline">
          <div className="col-2">
            <div className="corner right-bottom"></div>
          </div>
          <div className="col-8">
            <hr />
          </div>
          <div className="col-2">
            <div className="corner top-left"></div>
          </div>
        </div>
        {/* third section */}
        <FadeInWhenVisible>
        <div className="row align-items-center how-it-works d-flex">
          <div className="col-2 text-center top d-inline-flex justify-content-center align-items-center">
            <div className="circle font-weight-bold">3</div>
          </div>
          <div className="col-6">
            <h5>MARCH 8</h5>
            <p className='left-para'>
              Policy Dialogue Security
            </p>
          </div>
        </div>
        </FadeInWhenVisible>
{/* path between 3 and 4*/}
<div className="row timeline">
          <div className="col-2">
            <div className="corner top-right"></div>
          </div>
          <div className="col-8">
            <hr />
          </div>
          <div className="col-2">
            <div className="corner left-bottom"></div>
          </div>
        </div>
        {/*fourth section*/}
        <FadeInWhenVisible>
        <div className="row align-items-center justify-content-end how-it-works d-flex">
          <div className="col-6 text-right">
            <h5 className="right-heading">MARCH 10</h5>
            <p className="right-para">
              Policy Dialogue Technology for Empowerment
            </p>
          </div>
          <div className="col-2 text-center full d-inline-flex justify-content-center align-items-center">
            <div className="circle font-weight-bold">4</div>
          </div>
        </div>
        </FadeInWhenVisible>
        {/* path between 2-3 */}
        <div className="row timeline">
          <div className="col-2">
            <div className="corner right-bottom"></div>
          </div>
          <div className="col-8">
            <hr />
          </div>
          <div className="col-2">
            <div className="corner top-left"></div>
          </div>
        </div>
        {/* third section */}
        <FadeInWhenVisible>
        <div className="row align-items-center how-it-works d-flex">
          <div className="col-2 text-center top d-inline-flex justify-content-center align-items-center">
            <div className="circle font-weight-bold">5</div>
          </div>
          <div className="col-6">
            <h5>MARCH 11</h5>
            <p className='left-para'>
              Policy Dialogue- Trust and Disinformation
            </p>
            <p className='left-para'>Coimbatore Exhibition for Technology and Enablment</p>
            <p className='left-para'>Technology and Mental Health</p>
          </div>
        </div>
        </FadeInWhenVisible>
{/* path between 3 and 4*/}
<div className="row timeline">
          <div className="col-2">
            <div className="corner top-right"></div>
          </div>
          <div className="col-8">
            <hr />
          </div>
          <div className="col-2">
            <div className="corner left-bottom"></div>
          </div>
        </div>
        <FadeInWhenVisible>
        <div className="row align-items-center justify-content-end how-it-works d-flex">
          <div className="col-6 text-right">
            <h5 className="right-heading">MARCH 20-22</h5>
            <p className="right-para">
              Nagpur Inception Meeting In Nagpur
            </p>
          </div>
          <div className="col-2 text-center full d-inline-flex justify-content-center align-items-center">
            <div className="circle font-weight-bold">6</div>
          </div>
        </div>
        </FadeInWhenVisible>
        {/* path between 2-3 */}
        <div className="row timeline">
          <div className="col-2">
            <div className="corner right-bottom"></div>
          </div>
          <div className="col-8">
            <hr />
          </div>
          <div className="col-2">
            <div className="corner top-left"></div>
          </div>
        </div>
        {/* third section */}
        <FadeInWhenVisible>
        <div className="row align-items-center how-it-works d-flex">
          <div className="col-2 text-center top d-inline-flex justify-content-center align-items-center">
            <div className="circle font-weight-bold ">7</div>
          </div>
          <div className="col-6">
            <h5>APRIL 5</h5>
            <p className='left-para'>
              Technology and Education(International Day for Conscience) Co-hosted with EDT Working Group
            </p>
          </div>
        </div>
        </FadeInWhenVisible>
{/* path between 3 and 4*/}
<div className="row timeline">
          <div className="col-2">
            <div className="corner top-right"></div>
          </div>
          <div className="col-8">
            <hr />
          </div>
          <div className="col-2">
            <div className="corner left-bottom"></div>
          </div>
        </div>
        <FadeInWhenVisible>
        <div className="row align-items-center justify-content-end how-it-works d-flex">
          <div className="col-6 text-right">
            <h5 className="right-heading">APRIL 8</h5>
            <p className="right-para">
              Safety and CyberSecurity
            </p>
          </div>
          <div className="col-2 text-center full d-inline-flex justify-content-center align-items-center">
            <div className="circle font-weight-bold">8</div>
          </div>
        </div>
        </FadeInWhenVisible>
        {/* path between 2-3 */}
        <FadeInWhenVisible>
        <div className="row timeline">
          <div className="col-2">
            <div className="corner right-bottom"></div>
          </div>
          <div className="col-8">
            <hr />
          </div>
          <div className="col-2">
            <div className="corner top-left"></div>
          </div>
        </div>
        </FadeInWhenVisible>
        {/* third section */}
        <FadeInWhenVisible>
        <div className="row align-items-center how-it-works d-flex">
          <div className="col-2 text-center top d-inline-flex justify-content-center align-items-center">
            <div className="circle font-weight-bold">9</div>
          </div>
          <div className="col-6">
            <h5>APRIL 17</h5>
            <p className='left-para'>
              AI, Ethics and Data Governance
            </p>
          </div>
        </div>
        </FadeInWhenVisible>
{/* path between 3 and 4*/}
<div className="row timeline">
          <div className="col-2">
            <div className="corner top-right"></div>
          </div>
          <div className="col-8">
            <hr />
          </div>
          <div className="col-2">
            <div className="corner left-bottom"></div>
          </div>
        </div>
        <FadeInWhenVisible>
        <div className="row align-items-center justify-content-end how-it-works d-flex">
          <div className="col-6 text-right">
            <h5 className="right-heading">APRIL 26</h5>
            <p className="right-para">
              World Intellectual Property Day (Exhibition and Talks)
            </p>
          </div>
          <div className="col-2 text-center full d-inline-flex justify-content-center align-items-center">
            <div className="circle font-weight-bold">10</div>
          </div>
        </div>
        </FadeInWhenVisible>
        {/* path between 2-3 */}
        <div className="row timeline">
          <div className="col-2">
            <div className="corner right-bottom"></div>
          </div>
          <div className="col-8">
            <hr />
          </div>
          <div className="col-2">
            <div className="corner top-left"></div>
          </div>
        </div>
        {/* third section */}
        <FadeInWhenVisible>
        <div className="row align-items-center how-it-works d-flex">
          <div className="col-2 text-center top d-inline-flex justify-content-center align-items-center">
            <div className="circle font-weight-bold">11</div>
          </div>
          <div className="col-6">
            <h5>MAY 13-14</h5>
            <p className='left-para'>
              International conference on Technology, Security and Transperancy.
            </p>
          </div>
        </div>
        </FadeInWhenVisible>

        
      </div>
    </div>
  );
}

export default Timeline;
