// import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./ProductItem.module.css";
import { Product } from "../product_detail/types";

interface ProductItemProps {
    product: Product;
    isLastColumn?: boolean;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
    // const [isHovered, setIsHovered] = useState<boolean>(false);

    // // 마우스 오버/아웃 핸들러
    // const handleMouseEnter = () => setIsHovered(true);
    // const handleMouseLeave = () => setIsHovered(false);

    // 할인가 계산
    const discountedPrice = Math.floor(product.price * (1 - product.discount_rate / 100));

    // 날짜에 따른 배지 스타일 클래스 결정
    const getBadgeClassName = (days: number | string): string => {
        const daysNum = Number(days);
        if (daysNum === 30) {
            return styles.badge30;
        } else if (daysNum === 60) {
            return styles.badge60;
        } else if (daysNum === 90) {
            return styles.badge90;
        } else {
            return styles.badgeDefault;
        }
    };

    return (
        <Link to={`/detail/product_detail/${product.id}`} className={styles.productLink}>
            <div
                className={styles.productCard}
                // onMouseEnter={handleMouseEnter}
                // onMouseLeave={handleMouseLeave}
            >
                {/* 상품 이미지 영역 */}
                <div className={styles.imageContainer}>
                    <img
                        src={product.image}
                        alt={product.coupon_name}
                        className={styles.productImage}
                    />
                </div>

                {/* 상품 정보 영역 */}
                <div className={styles.infoContainer}>
                    {/* <div className={styles.brandName}>
                        <a href="#" className={styles.brandLink}>
                            {product.brand_name}
                        </a>
                    </div> */}

                    {/* 상품명 */}
                    <h3 className={styles.productName}>{product.coupon_name}</h3>

                    {/* 가격 정보 */}
                    <div className={styles.priceContainer}>
                        <div className={styles.originalPrice}>
                            <span className={styles.originalPriceText}>
                                {product.price
                                    ? product.price.toLocaleString() + "원"
                                    : "가격 정보 없음"}
                            </span>
                        </div>
                        <div className={styles.discountedPriceContainer}>
                            {product.price !== undefined ? (
                                <>
                                    <span className={styles.discountedPrice}>
                                        {discountedPrice.toLocaleString()}원
                                    </span>
                                    <span className={styles.discountRate}>
                                        -{product.discount_rate}%
                                    </span>
                                </>
                            ) : (
                                <span className={styles.discountedPrice}>할인가 없음</span>
                            )}
                        </div>
                    </div>

                    {/* 날짜 표기 배지 */}
                    <div className={styles.badgeContainer}>
                        <span
                            className={`${styles.badge} ${getBadgeClassName(product.expiry_date)}`}
                        >
                            {product.expiry_date}일
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProductItem;
