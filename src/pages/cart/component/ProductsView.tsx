import { useState } from "react";
import BrandList from "./BrandList";
import ProductList from "./ProductList";
import styles from "./ProductsView.module.css";

export default function ProductsView() {
    const [selectedBrand, setSelectedBrand] = useState("all");
    return (
        <div className={styles.container}>
            <BrandList selectedBrand={selectedBrand} setSelectedBrand={setSelectedBrand} />
            <ProductList selectedBrand={selectedBrand} />
            <div className={styles.service}>
                * 찾으시는 상품이 없을 경우 1:1 게시판 또는 고객센터 1544-1151로 문의하여 주세요
                <button>1:1 게시판 문의</button>
            </div>
        </div>
    );
}
