import React from "react";
const Accordion = ({ title, children }) => {
    const [isOpen, setOpen] = React.useState(false);
    return (
      <div className="accordion-wrapper">
        <div className="row justify-content-center">
          <div className="col-md-8  col-lg-6">
            <div className={`row align-items-center accordion-title ${isOpen ? "open" : ""}`}
                  onClick={() => setOpen(!isOpen)}
              >
              <div className="col-auto">
                <i className="bi bi-plus"></i>
                </div>
              <div className="col">      
                <h3
                  className={`accordion-title ${isOpen ? "open" : ""}`}
                  onClick={() => setOpen(!isOpen)}
                  >
                  {title}
                </h3>
              </div>
              <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
                <div className="accordion-content flex-column d-flex justify-content-center">{children}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Accordion