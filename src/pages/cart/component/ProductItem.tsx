import Badge from "./common/Badge";
import styles from "./ProductItem.module.css";

export interface Product {
    id: number;
    coupon_name: string;
    price: number;
    discount_rate: number;
    image: string;
    expiry_date: number | string;
}

export interface ProductItemProps {
    product: Product;
}

export default function ProductItem({ product }: ProductItemProps) {
    const discountedPrice = Math.floor(product.price * (1 - product.discount_rate / 100));

    return (
        <div className={styles.container}>
            <img src={product.image} alt={product.coupon_name} />
            <div className={styles.info}>
                <Badge date={product.expiry_date} isMini={true} />
                <div className={styles.name}>{product.coupon_name}</div>
                <div className={styles.price}>
                    <span className={styles.originalPrice}>{product.price.toLocaleString()}원</span>
                    {discountedPrice.toLocaleString()}원
                    <span className={styles.discount}>-{product.discount_rate}%</span>
                </div>
            </div>
        </div>
    );
}
