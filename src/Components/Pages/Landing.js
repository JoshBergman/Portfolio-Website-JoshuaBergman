import React, { useContext } from 'react';

import styles from './Landing.module.css';
import StyleData from '../../Store/styleContext';
import signature from '../../Images/signature2.png';

const Landing = () => {
    const stylectx = useContext(StyleData);

    return (
        <div className={styles.primaryContainer}>
            <div className={styles.contentContainer}>
                <div className={styles.nameContainer}>
                    <img className={styles.nameImg} src={signature} />
                <div className={styles.subTextContainer}>
                    <h2 style={stylectx.mainTextColor} className={styles.subText}>Full Stack Developer</h2>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Landing;