import React, { useContext } from "react";

import styles from "./DesktopHeader.module.css";
import StyleData from "../../../Store/styleContext";

const DesktopHeader = (props) => {
  const stylectx = useContext(StyleData);

  const darkModeHandler = () => {
    stylectx.toggleDarkMode();
  };

  return (
    <div style={stylectx.mainColorBackground} className={styles.headerDiv}>
      <div className={styles.contentContainer}>
        <div className={styles.logoDiv}>
          <a href="#home">
            <img src={props.logoImg} className={styles.logoImg} alt="Logo"/>
          </a>
        </div>
        <div className={styles.navDiv}>
          <a style={stylectx.mainTextColor} className={styles.navAnchor} href="#work">
            Work
          </a>
          <a style={stylectx.mainTextColor} className={styles.navAnchor} href="#contact">
            Contact
          </a>
          <button onClick={darkModeHandler}>Dark Mode</button>
        </div>
      </div>
    </div>
  );
};

export default DesktopHeader;
