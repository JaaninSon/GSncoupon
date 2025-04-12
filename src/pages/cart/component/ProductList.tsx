import { useEffect, useRef } from "react";
import ScrollBox from "./common/ScrollBox";
import { useFilter } from "../../detail/filter/FilterContext";
import ProductItem, { ProductItemProps } from "./ProductItem";
import styles from "./ProductList.module.css";
import { useCart } from "../store/useCart";
import { FilterTabs } from "../../detail/product_list";
import clsx from "clsx";

export default function ProductList({ selectedBrand }: { selectedBrand: string }) {
    const { filteredProducts, setBrands, setSortBy, loading, error } = useFilter();

    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setBrands([selectedBrand]);

        if (scrollRef.current) {
            requestAnimationFrame(() => {
                setTimeout(() => {
                    scrollRef.current?.scrollTo({
                        top: 0,
                        behavior: "smooth",
                    });
                }, 10);
            });
        }
    }, [selectedBrand]);

    if (loading) {
        return <div className={styles.loading}>상품 정보를 불러오는 중...</div>;
    }

    if (error) {
        return <div className={styles.error}>{error}</div>;
    }

    if (!Array.isArray(filteredProducts)) {
        return <div className={styles.loading}>데이터 준비 중...</div>;
    }

    return (
        <div className={styles.productContainer}>
            {filteredProducts.length > 0 ? (
                <>
                    <FilterTabs
                        onFilterChange={(filter: string) => {
                            setSortBy(filter);
                        }}
                    />
                    <ScrollBox ref={scrollRef} maxHeight="600px" className={styles.list}>
                        <ul>
                            {filteredProducts.map((product) => (
                                <Product key={product.id} product={product} />
                            ))}
                        </ul>
                    </ScrollBox>
                </>
            ) : null}
        </div>
    );
}

function Product({ product }: ProductItemProps) {
    const { items, addItem } = useCart();

    const isAdd = Object.keys(items).includes(product.id.toString());

    return (
        <li
            className={clsx(styles.product, { [styles.add]: isAdd })}
            onClick={() => {
                if (isAdd) return;
                addItem(product.id);
            }}
        >
            <ProductItem product={product} />
            {isAdd ? (
                <button className={styles.disable}>추가됨</button>
            ) : (
                <button className={styles.addBtn}>+</button>
            )}
        </li>
    );
}
