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
        <div className={styles.aboutMeContainer} style={combinedStyles}>
            <div className={styles.textContainer}>
                <h2>General</h2>
                <p>Hello I am Joshua Bergman.</p>
            </div>
        </div>
    );
};

export default AboutMe;