import styles from "./ProductDetail.module.css";
import type { ProductDetailProps } from "./types";

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onAddToCart, onBuyNow }) => {
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
        <div className={styles.productDetail}>
            {/* 상품 이미지 */}
            <div className={styles.productImageContainer}>
                <img
                    src={product.image}
                    alt={product.coupon_name}
                    className={styles.productImage}
                />
            </div>

            {/* 상품 정보 */}
            <div className={styles.productInfo}>
                {/* 상품명과 배지 */}
                <div className={styles.titleContainer}>
                    <h1 className={styles.productTitle}>{product.coupon_name}</h1>
                    <span className={`${styles.badge} ${getBadgeClassName(product.expiry_date)}`}>
                        {product.expiry_date}일
                    </span>
                </div>

                {/* 가격 정보 */}
                <span className={styles.originalPrice}>{product.price.toLocaleString()}원</span>
                <div className={styles.priceInfo}>
                    <br />
                    <span className={styles.discountedPrice}>
                        {discountedPrice.toLocaleString()}원
                    </span>
                    <span className={styles.discountRate}>
                        {product.discount_rate < 0 ? "" : "-"}
                        {product.discount_rate}%
                    </span>
                </div>

                {/* 구분선 */}
                <div className={styles.divider}></div>

                {/* 상품 정보 표 */}
                <div className={styles.productInfoTable}>
                    <div className={styles.infoRow}>
                        <div className={styles.infoLabel}>유효기간</div>
                        <div className={styles.infoValue}>발송일로부터 {product.expiry_date}일</div>
                    </div>
                    <div className={styles.infoRow}>
                        <div className={styles.infoLabel}>이용안내</div>
                        <div className={styles.infoValue}>유효기간 만료 후 연장 및 환불 불가</div>
                    </div>
                </div>

                {/* 버튼 영역 */}
                <div className={styles.actionButtons}>
                    <button className={styles.orderButton} onClick={() => onAddToCart(product, 1)}>
                        주문하기
                    </button>

                    <button className={styles.directBuyButton} onClick={() => onBuyNow(product, 1)}>
                        전적서 출력
                    </button>
                    <button
                        className={styles.addToCartButton}
                        onClick={() => onAddToCart(product, 1)}
                    >
                        장바구니
                    </button>
                </div>

                {/* 상품 설명 */}
                {product.description && (
                    <div className={styles.description}>
                        <h3 className={styles.descriptionTitle}>상품 설명</h3>
                        <p className={styles.descriptionText}>{product.description}</p>
                    </div>
                )}

                {/* 사용 방법 */}
                {product.how_to_use && (
                    <div className={styles.howToUse}>
                        <h3 className={styles.howToUseTitle}>사용 방법</h3>
                        <p className={styles.howToUseText}>{product.how_to_use}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductDetail;
