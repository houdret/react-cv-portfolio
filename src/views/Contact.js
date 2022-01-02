import React from "react";
import Navigation from "../components/Navigation";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Contact = () => {
  return (
    <div className="contact">
      <Navigation />
      <div className="contactContent">
        <div className="header"></div>
        <div className="contactBox">
          <h1>Contactez-moi</h1>
          <ul>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span> Fontaine l'Evêque 6140 Belgique</span>
            </li>
            <li>
              <i className="fas fa-mobile-alt"></i>
              <CopyToClipboard text="0498525685">
                <span
                  className="clickInput"
                  onClick={() => {
                    alert("Téléphone copié !");
                  }}
                >
                  {" "}
                  0498 52 56 85
                </span>
              </CopyToClipboard>
            </li>
            <li>
              <i className="far fa-envelope"></i>
              <CopyToClipboard text="jeanhoudret2006@hotmail.com">
                <span
                  className="clickInput"
                  onClick={() => {
                    alert("E-mail copié !");
                  }}
                >
                  {" "}
                  jeanhoudret2006@hotmail.com
                </span>
              </CopyToClipboard>
            </li>
          </ul>
        </div>
        <div className="socialNetwork">
          <ul>
            <a
              href="https://www.linkedin.com/in/jean-louis-houdret-88250255/"
              target="_blank"
              rel="noreferrer"
            >
              <h4>Linkedin</h4>
              <i className="fab fa-linkedin "></i>
            </a>

            <a
              href="https://twitter.com/jeanhoudret"
              target="_blank"
              rel="noreferrer"
            >
              <h4>Twitter</h4>
              <i className="fab fa-twitter "></i>
            </a>

            <a
              href="https://www.facebook.com/jeanlouis.houdret.1/"
              target="_blank"
              rel="noreferrer"
            >
              <h4>Facebook</h4>
              <i className="fab fa-facebook "></i>
            </a>

            <a
              href="https://github.com/houdret"
              target="_blank"
              rel="noreferrer"
            >
              <h4>Github</h4>
              <i className="fab fa-github"></i>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Contact;
