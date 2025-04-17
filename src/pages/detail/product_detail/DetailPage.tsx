import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./DetailPage.module.css";
import ProductDetail from "./ProductDetail";
import Note from "./Note";
import ProductRecommend from "./ProductRecommend";
import { Product } from "./types";
import { useProducts } from "../data/productData";

const DetailPage: React.FC = () => {
    // 라우터 훅
    const { productId } = useParams<{ productId: string }>();
    // const navigate = useNavigate();

    // 상태 관리
    const [product, setProduct] = useState<Product | null>(null);

    // 상품 데이터 로딩
    const { products, loading, error } = useProducts();

    // 상품 ID로 상품 찾기
    useEffect(() => {
        if (!loading && products.length > 0 && productId) {
            const productIdNum = Number(productId);
            const foundProduct = products.find((p) => p.id === productIdNum);

            if (foundProduct) {
                setProduct(foundProduct);
            }
        }
    }, [productId, products, loading]);

    // 상품 관련 핸들러
    const handleBuyNow = () => {
        alert(`구매 기능이 곧 추가될 예정입니다.`);
    };

    // 로딩 상태 처리
    if (loading) {
        return <div className={styles.loading}>상품 정보를 불러오는 중...</div>;
    }

    // 에러 처리
    if (error) {
        return <div className={styles.error}>{error}</div>;
    }

    // 상품을 찾지 못한 경우
    if (!product) {
        return <div className={styles.error}>상품을 찾을 수 없습니다.</div>;
    }

    return (
        <>
            <div className={styles.wrap}>
                <div className={styles.container}>
                    {/* 네비게이션 경로 */}
                    <div className={styles.breadcrumb}>
                        <a href="/" className={styles.breadcrumbLink}>
                            Home
                        </a>
                        <span className={styles.breadcrumbSeparator}>›</span>
                        <span
                            className={styles.breadcrumbCurrent}
                            onClick={() => window.history.back()}
                        >
                            커피/음료
                        </span>
                    </div>

                    {/* 상품 상세 정보 */}
                    <div className={styles.productDetailContainer}>
                        <ProductDetail
                            product={product}
                            onAddToCart={handleBuyNow}
                            onBuyNow={handleBuyNow}
                        />
                    </div>
                </div>
            </div>

            {/* 유의사항 */}
            <div className={styles.noteSection}>
                <Note productType={product.category} />
            </div>

            {/* 추천 상품 */}
            <div className={styles.recommendSection}>
                <ProductRecommend category={product.category} currentProductId={product.id} />
            </div>
        </>
    );
};

export default DetailPage;
