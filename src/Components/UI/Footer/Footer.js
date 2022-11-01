import React, { useContext } from 'react';

import styles from './Footer.module.css';
import StyleData from '../../../Store/styleContext';

const Footer = () => {
    const stylectx = useContext(StyleData);

    const footerContainerStyle = {
        "backgroundColor" : stylectx.mutedColorBackground["backgroundColor"],
        "borderColor" : stylectx.mainColorBackground["backgroundColor"]
    };

    const anchorStyle = {
        "color" : "#E1E1E1"
    };

    if (!stylectx.isDark) {
        footerContainerStyle["borderColor"] = "#D6D6D6";
        anchorStyle["color"] = "#181818";
    }


    return (
        <div style={footerContainerStyle} className={styles.footerContainer}>
            <div className={styles.footerHalf}>
                <h1 style={stylectx.mainTextColor} className={styles.title}>
                    Navigation
                </h1>
                <a className={styles.desc} style={anchorStyle} href="#home">
                    Home
                </a>
                <a className={styles.desc} style={anchorStyle} href="#work">
                    Work
                </a>
                <a className={styles.desc} style={anchorStyle} href="#contact">
                    Contact
                </a>
            </div>
            <div className={styles.footerHalf}>
                <h1 style={stylectx.mainTextColor} className={styles.title}>
                    Find Me
                </h1>
                <a className={styles.desc}  
                href="https://www.linkedin.com/in/joshua-bergman-399133191/"
                rel="noreferrer"
                target="_blank"
                style={anchorStyle}
                >
                    LinkedIn
                </a>
                <a className={styles.desc} 
                href="https://github.com/JoshBergman"
                rel="noreferrer"
                target="_blank"
                style={anchorStyle}
                >
                    GitHub
                </a>
                <a className={styles.desc} style={anchorStyle} href="mailto:josh.bergman1@pm.me" >
                Email:
                </a>
                <a className={styles.desc} style={anchorStyle} href="mailto:josh.bergman1@pm.me" >
                <strong className={styles.email}>Josh.Bergman1@pm.me</strong>
                </a>
            </div>
        </div>
    );
};

export default Footer;