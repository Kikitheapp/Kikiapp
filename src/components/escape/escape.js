import * as React from 'react';
import { useEffect } from 'react';
import './escape.css';
import { BsFillXCircleFill } from 'react-icons/bs';


function Escape(props) {

  // catch escape button press
  useEffect(() => {
    document.addEventListener('keydown', exitButton);
  });

  let keyCount = 0;
  function exitButton(event) {

    event.preventDefault();

    if(event.key === 'Escape') {
      keyCount++;
      if (keyCount === 3) {
        window.location.replace("https://google.com");
      }

      setTimeout(() => {
        keyCount = 0;
      }, 2000);
    }
  }

  function exitClick (event) {
    event.preventDefault();
    window.location.replace("https://google.com");
  }

  return (
    <div className="d-inline-block sticky-top start-50 m-2 escape">
      <a href="https://google.com" className="btn btn-escape bg-peach-puff" onClick={exitClick}>
        <BsFillXCircleFill className="escape-icon"></BsFillXCircleFill>
        EXIT NOW - Press ESC x 3
      </a>
    </div>
  );
}

export default Escape;