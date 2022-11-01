import styles from './PageTemplate.module.css';

const PageTemplate = (props) => {
    return (
        <div className={styles.containerDiv}>
            {props.children}
        </div>
    );
};

export default PageTemplate;