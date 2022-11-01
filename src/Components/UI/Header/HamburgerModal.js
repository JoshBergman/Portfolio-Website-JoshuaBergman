import React, { useContext } from "react";
import ReactDOM from "react-dom";

import styles from "./HamburgerModal.module.css";
import StyleData from "../../../Store/styleContext";

const HamburgerModal = (props) => {
  const stylectx = useContext(StyleData);

  return (
    ReactDOM.createPortal(
      <div className={styles.modalDiv} onClick={props.menuToggler}>
        <div style={stylectx.mutedColorBackground} className={styles.menuDiv}>
            <div className={styles.menuSpacer} />
              <a
                style={stylectx.mainTextColor}
                className={styles.navAnchor}
                href="#home"
              >
                Home
              </a>
              <a
                style={stylectx.mainTextColor}
                className={styles.navAnchor}
                href="#work"
              >
                Work
              </a>
              <a
                style={stylectx.mainTextColor}
                className={styles.navAnchor}
                href="#contact"
              >
                Contact
              </a>
            </div>
      </div>
    ,
    document.getElementById('portal-root'))
  );
};

export default HamburgerModal;
