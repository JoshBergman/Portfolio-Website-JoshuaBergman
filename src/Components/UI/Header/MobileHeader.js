import React, { useContext, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgDarkMode } from 'react-icons/cg';

import styles from "./MobileHeader.module.css";
import StyleData from "../../../Store/styleContext";
import HamburgerModal from "./HamburgerModal";

const MobileHeader = (props) => {
  const stylectx = useContext(StyleData);
  const [isShowingMenu, setIsShowingMenu] = useState(false);

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

  const menuToggler = () => {
    setIsShowingMenu((prevState) => {return !prevState;});
  };

  return (
    <React.Fragment>
      <div style={stylectx.mainColorBackground} className={styles.headerDiv}>
        <div className={styles.logoDiv}>
          <a href="#home">
            <img src={props.logoImg} className={styles.logoImg} alt="Logo" />
          </a>
        </div>
        <div className={styles.hamburgerContainer}>
          <button
            style={stylectx.mainTextColor}
            onClick={menuToggler}
            className={styles.buttonBurger}
          >
            <GiHamburgerMenu
              className={styles.hamburgerIcon}
              style={
                  isShowingMenu
                  ? { transform: "rotate(90deg)" }
                  : { transform: "rotate(0deg)" }
                }
            />
          </button>
        </div>
            <button className={styles.buttonDark} onClick={darkModeHandler}><CgDarkMode style={darkModeIconStyle} className={styles.darkModeIcon} /></button>
      </div>
      {isShowingMenu && <HamburgerModal menuToggler={menuToggler} />}
    </React.Fragment>
  );
};

export default MobileHeader;