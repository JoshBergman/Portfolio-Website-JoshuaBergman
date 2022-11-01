import React, { useContext } from "react";
import { CgDarkMode } from 'react-icons/cg';

import styles from "./DesktopHeader.module.css";
import StyleData from "../../../Store/styleContext";

const DesktopHeader = (props) => {
  const stylectx = useContext(StyleData);

  const darkModeHandler = () => {
    stylectx.toggleDarkMode();
  };

  const darkModeIconStyle = {
    "transform" : "rotate(0deg)",
    "color" : stylectx.mainTextColor["color"]
  }

  if (stylectx.isDark) {
    darkModeIconStyle["transform"] = "rotate(180deg)"
    darkModeIconStyle["color"] = stylectx.mainTextColor["color"]
  }

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
        </div>
      </div>
      <button className={styles.button} onClick={darkModeHandler}><CgDarkMode style={darkModeIconStyle} className={styles.darkModeIcon} /></button>
    </div>
  );
};

export default DesktopHeader;
