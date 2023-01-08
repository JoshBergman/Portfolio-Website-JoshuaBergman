import React, { useContext } from 'react';
import StyleData from '../../Store/styleContext';

import styles from './AboutMe.module.css';

const AboutMe = () => {
    const stylectx = useContext(StyleData);

    const combinedStyles = {
        ...stylectx.mutedColorBackground,
        ...stylectx.mainTextColor
    }

    return (
        <div id="about" className={styles.aboutMeContainer} style={combinedStyles}>
            <div className={styles.textContainer}>
                <p className={styles.text}>
                    Hello, I am Joshua Bergman. 
                    Thank you for taking the time to look over my site. 
                    A little about myself: I am from Minnesota, a few of my interests include 
                    guitar, cars, and almost anything involving computers. 
                    I have been involved in computers and programming for as long as I can remember. 
                    As a child I started off programming by creating and editing mods for Minecraft. 
                    This naturally transitioned to learning Java (language Minecraft was written in) 
                    where I used it to make programs to do my math homework. 
                </p>
                <p className={styles.text}>
                    This led to me studying computer science at Metropolitan State University 
                    where I got the opportunity to make a website for a caster business. 
                    Since then I have been doing similar work on a contract basis. 
                    My goal now is to join a talented team where I can grow my skills and 
                    contribute to bigger projects.
                </p>
            </div>
        </div>
    );
};

export default AboutMe;