import React, { useContext } from 'react';
import StyleData from '../../../Store/styleContext';

import styles from './HeadingText.module.css';

const HeadingText = (props) => {
    const stylectx = useContext(StyleData);

    return (
        <div className={styles.headingContainer}>
            <h1 style={stylectx.mainTextColor} className={styles.title}>
                {props.children}
            </h1>
            <div style={{"backgroundColor" : stylectx.mainTextColor["color"]}}className={styles.bar} />
        </div>
    );
};

export default HeadingText;