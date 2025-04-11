import Button, { btnType } from "../../../components/Button";
import ScrollBox from "../../../components/ScrollBox";
import styles from "./CartList.module.css";
import Product from "./Product";

export default function CartList() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h2>
                    견적상품
                    <span className={styles.count}>
                        총 <span>0</span>건 (최대20건까지 추가 가능)
                    </span>
                </h2>
                <button className={styles.resetBtn}>전체삭제</button>
            </div>
            <ul className={styles.list}>
                <ScrollBox maxHeight="400px">
                    {/* <div className={styles.empty}>추가된 상품이 없습니다.</div> */}
                    {Array.from({ length: 10 }).map((_, i) => (
                        <CartItem key={i} />
                    ))}
                </ScrollBox>
            </ul>

            <div className={styles.summary}>
                <div>
                    <span>총 견적수량</span>
                    <span>0 건</span>
                </div>
                <div>
                    <span>총 상품금액</span>
                    <span>0 원</span>
                </div>
                <div>
                    <span>총 할인금액</span>
                    <span>0 원</span>
                </div>
                <div className={styles.totalPrice}>
                    <strong>총 견적금액</strong>
                    <strong>
                        <span className={styles.total}>0</span> 원
                    </strong>
                </div>
            </div>
            <div className={styles.buttons}>
                <Button btnType={btnType.Black}>견적서작성</Button>
                <Button btnType={btnType.Green}>바로구매</Button>
            </div>
        </div>
    );
}

function CartItem() {
    return (
        <li className={styles.product}>
            <Product />
            <div className={styles.btns}>
                <div className={styles.fixCount}>
                    <button className={styles.countBtn}>-</button>
                    <span>{1}</span>
                    <button className={styles.countBtn}>+</button>
                </div>
                <button className={styles.removeBtn}>-</button>
            </div>
            {/* <button className={styles.disable}>추가됨</button> */}
        </li>
    );
}
