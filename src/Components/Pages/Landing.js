import React, { useContext } from 'react';
import { FaLongArrowAltDown } from 'react-icons/fa';

import styles from './Landing.module.css';
import StyleData from '../../Store/styleContext';
import signature from '../../Images/signature2.png';

const Landing = () => {
    const stylectx = useContext(StyleData);

    return (
        <React.Fragment>
            <div className={styles.primaryContainer} id="home">
                <div className={styles.contentContainer}>
                    <div className={styles.nameContainer}>
                        <img className={styles.nameImg} src={signature} alt="Signature of Joshua Bergman"/>
                    <div className={styles.subTextContainer}>
                        <h2 style={stylectx.mainTextColor} className={styles.subText}>Full Stack Developer</h2>
                    </div>
                    </div>
                </div>
            </div>
            <div className={styles.arrowContainer}>
                <FaLongArrowAltDown style={stylectx.mainTextColor} className={styles.arrow} />
            </div>
        </React.Fragment>
    );
};

export default Landing;