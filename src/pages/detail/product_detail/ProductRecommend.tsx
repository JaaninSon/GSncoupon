import React, { useEffect, useState } from "react";
import styles from "./ProductRecommend.module.css";
import { Product, ProductRecommendProps } from "./types";
import { useProducts } from "../data/productData";

const ProductItem: React.FC<{ product: Product }> = ({ product }) => {
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
        <a href={`/detail/product_detail/${product.id}`} className={styles.productLink}>
            <div className={styles.productCard}>
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
                    {/* 상품명 */}
                    <h3 className={styles.productName}>{product.coupon_name}</h3>

                    {/* 가격 정보 */}
                    <div className={styles.priceContainer}>
                        <div className={styles.originalPrice}>
                            <span className={styles.originalPriceText}>
                                {product.price.toLocaleString()}원
                            </span>
                        </div>
                        <div className={styles.discountedPriceContainer}>
                            <span className={styles.discountedPrice}>
                                {discountedPrice.toLocaleString()}원
                            </span>
                            <span className={styles.discountRate}>-{product.discount_rate}%</span>
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
        </a>
    );
};

// ProductRecommend 컴포넌트는 변경 없음

const ProductRecommend: React.FC<ProductRecommendProps> = ({ category, currentProductId }) => {
    const [recommendedProducts, setRecommendedProducts] = useState<Product[]>([]);

    // useProducts 훅을 사용하여 상품 데이터 가져오기
    const { products, loading, error } = useProducts();

    useEffect(() => {
        if (!loading && products.length > 0) {
            // 현재 상품을 제외한 동일 카테고리 상품 필터링
            const filtered = products.filter(
                (product) => product.category === category && product.id !== currentProductId,
            );

            // 최대 4개까지만 표시
            setRecommendedProducts(filtered.slice(0, 4));
        }
    }, [category, currentProductId, products, loading]);

    if (loading) {
        return <div className={styles.loading}>추천 상품을 불러오는 중...</div>;
    }

    if (error) {
        return <div className={styles.error}>{error}</div>;
    }

    if (recommendedProducts.length === 0) {
        return null; // 추천 상품이 없으면 섹션 자체를 표시하지 않음
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.mainTitle}>비슷한 가격 다른 상품</h2>
            <div className={styles.grid}>
                {recommendedProducts.map((product) => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductRecommend;
