import React from "react";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Footer(props) {
  return (
    <footer>
      <div className="container">
        <span>Sexuali-TEA</span>
        <FontAwesomeIcon icon={faFacebook}
          className="socialIcon"
          href="https://www.facebook.com/" />
        <FontAwesomeIcon icon={faInstagram} className="socialIcon"
          href="https://www.instagram.com/" />
        <FontAwesomeIcon icon={faTwitter} className="socialIcon"
          href="https://twitter.com" target="_blank"/>
      </div>
    </footer>
  )
}