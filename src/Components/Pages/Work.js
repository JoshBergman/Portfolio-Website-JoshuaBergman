import React, { useContext } from "react";

import styles from "./Work.module.css";
import mikesFramePic from "../../Images/project1.png";
import quickBudgetToolPic from "../../Images/quickBudgetPic.png";
import Project from "../UI/PageResources/Project.js";
import StyleData from "../../Store/styleContext";

const Work = () => {
    const stylectx = useContext(StyleData);
    
  return (
    <div className={styles.workContainer}>
      <Project
        title={"Mike's Frame Service"}
        img={mikesFramePic}
        imgAlt={"Mikes Frame Service Website"}
      >
        <p style={stylectx.mainTextColor} className={styles.descText} >
            Project made for local frame shop, built to client's vision.
            Website optimized to run quickly and smoothly to include low-tier mobile.
        </p>
        <p style={stylectx.mainTextColor} className={styles.descText} >
            Built using MERN, later optimized to run in react only for performance.
        </p>

      </Project>
      <Project
       title={"Quick Budget Tool"}
       img={quickBudgetToolPic}
       imgAlt={"Quick Budget Tool Website"}
       >
        <p style={stylectx.mainTextColor} className={styles.descText} >
            Project designed to give an estimate of the costs' associated with moving to any given state.
            The tool was later adapted to calculate multiple standardized budgets.
        </p>
        <p style={stylectx.mainTextColor} className={styles.descText} >
            Built using MERN, later optimized to run in react only for performance.
        </p>
       </Project>
    </div>
  );
};

export default Work;
