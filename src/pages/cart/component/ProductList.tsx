import ScrollBox from "../../../components/ScrollBox";
import Product from "./Product";
import styles from "./ProductList.module.css";

export default function ProductList() {
    return (
        <div className={styles.productContainer}>
            <div className={styles.sort}>
                <div>인기상품</div>
                <div>낮은가격</div>
                <div>높은가격</div>
                <div>낮은할인율</div>
                <div>높은할인율</div>
                <div>유효기간</div>
            </div>
            <ScrollBox maxHeight="600px" className={styles.list}>
                <ul>
                    {Array.from({ length: 10 }).map((_, i) => (
                        <ProductItem key={i} />
                    ))}
                </ul>
            </ScrollBox>
        </div>
    );
}

function ProductItem() {
    return (
        <li className={styles.product}>
            <Product />
            <button className={styles.addBtn}>+</button>
            {/* <button className={styles.disable}>추가됨</button> */}
        </li>
    );
}
