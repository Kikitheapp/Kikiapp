import *  as React from "react";
import './accordion.css';
import { FaPlus } from 'react-icons/fa';

/**
 * Accordion component - When a user clicks on the title, the children are shown or hidden
 * @param {string} title - title of the accordion
 * @param {string} children - Child compentent(s) (content) of the accordion
 */
const Accordion = ({ title, children }) => {

  const [isOpen, setOpen] = React.useState(false);

  return (
        <>
          
          <div className={`${isOpen ? "open" : ""}`} >
            <button type="button" className="btn btn-accordion d-flex justify-content-start" onClick={() => setOpen(!isOpen)}>
              <FaPlus className="accordion-icon me-3"></FaPlus>
              <h4 className={`${isOpen ? "open" : ""}`}>
                {title}
              </h4>
          </button>
          </div>

          <div className={`accordion-body ${!isOpen ? "collapsed" : ""}`}>
            <div className="accordion-content flex-column d-flex justify-content-center mt-0 me-4 mb-4">{children}</div>
          </div>
        </>

  );
};

export default Accordion;
