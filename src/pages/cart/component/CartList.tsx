import Button, { btnType } from "./common/Button";
import ScrollBox from "./common/ScrollBox";
import { useFilter } from "../../detail/filter/FilterContext";
import { useCart } from "../store/useCart";
import styles from "./CartList.module.css";
import ProductItem, { Product } from "./ProductItem";

interface CartProps {
    product: Product & {
        count: number;
    };
}

export default function CartList() {
    const { products, loading, error } = useFilter();
    const { items, removeAll } = useCart();

    if (loading) {
        return <div className={styles.loading}>상품 정보를 불러오는 중...</div>;
    }

    if (error) {
        return <div className={styles.error}>{error}</div>;
    }

    const sortedItems = Object.values(items).sort((a, b) => a.timestamp - b.timestamp);
    const cartItems = sortedItems.map((item) => {
        const product = products.find((p) => p.id === item.id);
        return product
            ? {
                  ...product,
                  count: item.count,
              }
            : null;
    });

    const totalCount = cartItems.reduce((acc, cur) => (acc += cur.count), 0);
    const totalOriginalPrice = cartItems.reduce((acc, cur) => (acc += cur.price * cur.count), 0);
    const resultPrice = cartItems.reduce(
        (acc, cur) => (acc += Math.floor(cur.price * (1 - cur.discount_rate / 100) * cur.count)),
        0,
    );
    const totalDiscount = totalOriginalPrice - resultPrice;

    const handleRemoveAll = () => {
        if (confirm("견적상품을 모두 삭제하시겠어요?")) {
            removeAll();
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h2>
                    견적상품
                    <span className={styles.count}>
                        총 <span>{cartItems?.length}</span>건 (최대20건까지 추가 가능)
                    </span>
                </h2>
                <button className={styles.resetBtn} onClick={handleRemoveAll}>
                    전체삭제
                </button>
            </div>
            <ul className={styles.list}>
                <ScrollBox maxHeight="430px">
                    {cartItems && cartItems.length > 0 ? (
                        cartItems.map((product) => <CartItem key={product.id} product={product} />)
                    ) : (
                        <div className={styles.empty}>추가된 상품이 없습니다.</div>
                    )}
                </ScrollBox>
            </ul>

            <div className={styles.summary}>
                <div>
                    <span>총 견적수량</span>
                    <span>{totalCount} 건</span>
                </div>
                <div>
                    <span>총 상품금액</span>
                    <span>{totalOriginalPrice.toLocaleString()} 원</span>
                </div>
                <div>
                    <span>총 할인금액</span>
                    <span>{totalDiscount.toLocaleString()} 원</span>
                </div>
                <div className={styles.totalPrice}>
                    <strong>총 견적금액</strong>
                    <strong>
                        <span className={styles.total}>{resultPrice.toLocaleString()}</span> 원
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

function CartItem({ product }: CartProps) {
    const { removeItem, increaseCount, decreaseCount } = useCart();

    return (
        <li className={styles.product}>
            <ProductItem product={product} />
            <div className={styles.btns}>
                <div className={styles.fixCount}>
                    <button className={styles.countBtn} onClick={() => decreaseCount(product.id)}>
                        -
                    </button>
                    <span>{product.count}</span>
                    <button className={styles.countBtn} onClick={() => increaseCount(product.id)}>
                        +
                    </button>
                </div>
                <button className={styles.removeBtn} onClick={() => removeItem(product.id)}>
                    -
                </button>
            </div>
            {/* <button className={styles.disable}>추가됨</button> */}
        </li>
    );
}
