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
    <div className="accordion-wrapper">
      <div className="row justify-content-center">
        <div className="col-md-8  col-lg-6">
          <div className={`row align-items-center accordion-title ${isOpen ? "open" : ""}`}
            onClick={() => setOpen(!isOpen)}
          >
            <div className="col-auto accordion-icon">
              <FaPlus></FaPlus>
            </div>
            <div className="col accordion-text">
              <h3
                className={`${isOpen ? "open" : ""}`}
                onClick={() => setOpen(!isOpen)}
              >
                {title}
              </h3>
            </div>
          </div>
          <div className={`accordion-body ${!isOpen ? "collapsed" : ""}`}>
            <div className="accordion-content flex-column d-flex justify-content-center">{children}</div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Accordion;