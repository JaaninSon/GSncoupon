import BrandSelect from "./BrandSelect";
import ProductList from "./ProductList";
import styles from "./Products.module.css";

export default function Products() {
    return (
        <div className={styles.container}>
            <BrandSelect />
            <ProductList />
            <div className={styles.service}>
                * 찾으시는 상품이 없을 경우 1:1 게시판 또는 고객센터 1544-1151로 문의하여 주세요
                <button>1:1 게시판 문의</button>
            </div>
        </div>
    );
}
