import React, { useContext } from "react";
import { FiMonitor } from 'react-icons/fi';
import { BsServer } from 'react-icons/bs';

import styles from "./Work.module.css";
import mikesFramePic from "../../Images/project1.png";
import quickBudgetToolPic from "../../Images/quickBudgetPic.png";
import wordCheckerPic from '../../Images/wordCheckerPic.png';
import thisWebsitePic from '../../Images/thisWebsitePic.png';
import apiPic from '../../Images/APIMONTIOR.png';

import Project from "../UI/PageResources/Project.js";
import StyleData from "../../Store/styleContext";

const Work = () => {
    const stylectx = useContext(StyleData);

  return (
    <div id="work" className={styles.workContainer}>
      <Project
        title={"API Monitor.dev"}
        img={apiPic}
        imgAlt={"A.P.I. Monitor Website"}
      >
        <p style={stylectx.mainTextColor} className={styles.descText} >
            Enables user's to save API endpoint's, headers, action verbs, etc.. either on browser local storage or on the cloud.
            User's are able to then test and analyze the response to their API's. //Guest Credientials: user: guest pass: guest
        </p>
        <p style={stylectx.mainTextColor} className={styles.descText} >
            Built with Typescipt, ReduxTK, and MERN.
        </p>
        <a style={stylectx.mainTextColor} className={styles.link} href="https://apimonitor.dev/" target="_blank" rel="noreferrer">APIMonitor.dev</a>
        <a style={stylectx.mainTextColor} className={styles.linkIcon} href="https://github.com/JoshBergman/Api-Monitor-Frontend" target="_blank" rel="noreferrer"><FiMonitor style={stylectx.mainTextColor} /> Frontend</a>
        <a style={stylectx.mainTextColor} className={styles.linkIcon} href="https://github.com/JoshBergman/Api-Monitor-Backend" target="_blank" rel="noreferrer"><BsServer style={stylectx.mainTextColor} /> Backend</a>
      </Project>
      <Project
       title={"This Website"}
       img={thisWebsitePic}
       imgAlt={"The website youre currently on"}
       >
        <p style={stylectx.mainTextColor} className={styles.descText} >
            Simple React.js website showcasing some of my work.
            Unfortunately my biggest project to date is an NDA project. All I can say is that it involved the MERN stack and it serves as a web store. 
        </p>
        <p style={stylectx.mainTextColor} className={styles.descText} >
            Built with React.js. 
        </p>
            <a style={stylectx.mainTextColor} className={styles.link} href="https://JoshuaBergman.dev/" target="_blank" rel="noreferrer">JoshuaBergman.dev</a>
            <a style={stylectx.mainTextColor} className={styles.linkIcon} href="https://github.com/JoshBergman/Portfolio-Website-JoshuaBergman" target="_blank" rel="noreferrer"><FiMonitor style={stylectx.mainTextColor} /> Frontend</a>
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
        <a style={stylectx.mainTextColor} className={styles.linkIcon} href="https://github.com/JoshBergman/MikesFrameServiceV2" target="_blank" rel="noreferrer"><FiMonitor style={stylectx.mainTextColor} /> Frontend</a>
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
            <a style={stylectx.mainTextColor} className={styles.linkIcon} href="https://github.com/JoshBergman/WordChecker" target="_blank" rel="noreferrer"><BsServer style={stylectx.mainTextColor} /> Code</a>
       </Project>
    </div>
  );
};

export default Work;