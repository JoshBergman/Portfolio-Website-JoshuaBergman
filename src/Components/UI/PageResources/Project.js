import React, { useContext } from 'react';

import styles from './Project.module.css';
import StyleData from '../../../Store/styleContext';

const Project = (props) => {
    const stylectx = useContext(StyleData);

    return (
        <div style={stylectx.mutedColorBackground} className={styles.projectContainer}>
            <div className={styles.previewContainer}>
                <img style={{"borderColor" : stylectx.mainTextColor["color"]}} src={props.img} alt={props.imgAlt} className={styles.img} />
            </div>
            <div className={styles.textContainer}>
                <h3 style={stylectx.mainTextColor} className={styles.headerText} >
                    {props.title}
                </h3>
                    {props.children}
            </div>
        </div>
    );
};

export default Project;