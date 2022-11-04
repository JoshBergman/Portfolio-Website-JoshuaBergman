import React, { useContext } from "react";

import styles from "./Work.module.css";
import mikesFramePic from "../../Images/project1.png";
import quickBudgetToolPic from "../../Images/quickBudgetPic.png";
import wordCheckerPic from '../../Images/wordCheckerPic.png';
import thisWebsitePic from '../../Images/thisWebsitePic.png';

import Project from "../UI/PageResources/Project.js";
import StyleData from "../../Store/styleContext";

const Work = () => {
    const stylectx = useContext(StyleData);

  return (
    <div id="work" className={styles.workContainer}>
      <Project
       title={"This Website"}
       img={thisWebsitePic}
       imgAlt={"The website youre currently on"}
       >
        <p style={stylectx.mainTextColor} className={styles.descText} >
            My best work has unfortunately been signed under NDA,
            of that work all I can say is that I built a small shop using the MERN stack and utilized basic CRUD operations.
        </p>
        <p style={stylectx.mainTextColor} className={styles.descText} >
            Built with React.js. 
        </p>
            <a style={stylectx.mainTextColor} className={styles.link} href="https://JoshuaBergman.dev/" target="_blank" rel="noreferrer">JoshuaBergman.dev</a>
      </Project>
      <Project
        title={"Mike's Frame Service"}
        img={mikesFramePic}
        imgAlt={"Mikes Frame Service Website"}
      >
        <p style={stylectx.mainTextColor} className={styles.descText} >
            Project made for local frame shop, built to client's vision.
            Website optimized to run quickly and smoothly and to include low-tier mobile.
        </p>
        <p style={stylectx.mainTextColor} className={styles.descText} >
            Built using MERN, later optimized to run in React.js only for performance.
        </p>
        <a style={stylectx.mainTextColor} className={styles.link} href="https://mikesframe-25201.web.app/home" target="_blank" rel="noreferrer">MikesFrameService.com</a>
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
            Built using MERN stack. 
        </p>
            <a style={stylectx.mainTextColor} className={styles.link} href="https://quickbudgettool.com/" target="_blank" rel="noreferrer">QuickBudgetTool.com</a>
       </Project>
       <Project
       title={"Word Checker"}
       img={wordCheckerPic}
       imgAlt={"Word Checker Program"}
       >
        <p style={stylectx.mainTextColor} className={styles.descText} >
            User provides a word bank and is able to check for words included in the word bank.
            Uses efficient data structure to provide feedback in linear time.
        </p>
        <p style={stylectx.mainTextColor} className={styles.descText} >
            Built with python. 
        </p>
            <a style={stylectx.mainTextColor} className={styles.link} href="https://github.com/JoshBergman/WordChecker" target="_blank" rel="noreferrer">Word Checker Source Code</a>
       </Project>
    </div>
  );
};

export default Work;