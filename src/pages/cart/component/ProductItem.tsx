import { Link } from "react-router-dom";
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
            <Link to={`/detail/product_detail/${product.id}`}>
                <img src={product.image} alt={product.coupon_name} />
            </Link>
            <div className={styles.info}>
                <Badge date={product.expiry_date} isMini={true} />
                <div className={styles.name}>
                    <Link to={`/detail/product_detail/${product.id}`}>{product.coupon_name}</Link>
                </div>
                <div className={styles.price}>
                    <span className={styles.originalPrice}>{product.price.toLocaleString()}원</span>
                    {discountedPrice.toLocaleString()}원
                    <span className={styles.discount}>-{product.discount_rate}%</span>
                </div>
            </div>
        </div>
    );
}
