import styles from './Plug.module.css';

const Plug = (props) => {
    return (
        <div className={styles.plugContainer}>
            {props.icon}
            <h1 style={props.textStyle} className={props.smallerText ? styles.smallText : styles.title}>
                {props.children}
            </h1>
        </div>
    );
};

export default Plug;