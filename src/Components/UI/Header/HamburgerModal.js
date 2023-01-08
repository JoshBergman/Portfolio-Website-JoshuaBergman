import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-scroll";

import styles from "./HamburgerModal.module.css";
import StyleData from "../../../Store/styleContext";

const HamburgerModal = (props) => {
  const stylectx = useContext(StyleData);

  return (
    ReactDOM.createPortal(
      <div className={styles.modalDiv} onClick={props.menuToggler}>
        <div style={stylectx.mutedColorBackground} className={styles.menuDiv}>
            <div className={styles.menuSpacer} />
              <Link
                style={stylectx.mainTextColor}
                className={styles.navAnchor}
                to="home"
                smooth={true}
              >
                Home
              </Link>
              <Link
                style={stylectx.mainTextColor}
                className={styles.navAnchor}
                to="work"
                smooth={true}
              >
                Work
              </Link>
              <Link
                style={stylectx.mainTextColor}
                className={styles.navAnchor}
                to="about"
                smooth={true}
              >
                About Me
              </Link>
              <Link
                style={stylectx.mainTextColor}
                className={styles.navAnchor}
                to="contact"
                smooth={true}
              >
                Contact
              </Link>
            </div>
      </div>
    ,
    document.getElementById('portal-root'))
  );
};

export default HamburgerModal;
