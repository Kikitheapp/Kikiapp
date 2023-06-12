import * as React from 'react';
import './escape.css';
import { BsFillXCircleFill } from 'react-icons/bs';


function Escape(props) {
  return (
    <div className="d-inline-block sticky-top start-50 m-2 escape">
      <a href="https://google.com" className="btn btn-escape bg-peach-puff">
        <BsFillXCircleFill className="escape-icon"></BsFillXCircleFill>
        EXIT NOW - Press ESC x 3
      </a>
    </div>
  );
}

export default Escape;
