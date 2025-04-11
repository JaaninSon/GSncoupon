import styles from "./Breadcrumb.module.css";

const BreadCrumb = ({ title }: { title: string }) => {
    return (
        <div className={styles.breadCrumb}>
            <div className={styles.home}>Home</div>
            <span>&gt;</span>
            <div className={styles.title}>
                {title}
                <div className={styles.downBtn}></div>
            </div>
        </div>
    );
};

export default BreadCrumb;
