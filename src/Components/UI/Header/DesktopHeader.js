import React, { useContext } from "react";
import { Link } from "react-scroll";
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
          <Link smooth={true} to="home">
            <img src={props.logoImg} className={styles.logoImg} alt="Logo"/>
          </Link>
        </div>
        <div className={styles.navDiv}>
          <Link style={stylectx.mainTextColor} className={styles.navAnchor} smooth={true} to="work">
            Work
          </Link>
          <Link style={stylectx.mainTextColor} className={styles.navAnchor} smooth={true} to="contact">
            Contact
          </Link>
        </div>
      </div>
      <button className={styles.button} onClick={darkModeHandler}><CgDarkMode style={darkModeIconStyle} className={styles.darkModeIcon} /></button>
    </div>
  );
};

export default DesktopHeader;
