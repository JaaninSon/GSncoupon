import styles from "./Product.module.css";

export default function Product() {
    return (
        <div className={styles.container}>
            <img src="" alt="" />
            <div className={styles.info}>
                <div className={styles.badge}>30일</div>
                <div className={styles.name}>스타벅스 디카페인 카페라테 T</div>
                <div className={styles.price}>
                    <span className={styles.originalPrice}>5,500원</span>
                    5,120원
                    <span className={styles.discount}>[-7%]</span>
                </div>
            </div>
        </div>
    );
}
