import React, { useState, useEffect } from "react";
import ProductItem from "./ProductItem";
import FilterTabs from "./FilterTabs";
import { useFilter } from "../filter/FilterContext";
import styles from "./ProductList.module.css";

const ProductList: React.FC = () => {
    const { filteredProducts, setSortBy, loading, error } = useFilter();
    const [currentPage, setCurrentPage] = useState(1);

    const productsPerPage = 12;

    // 필터 변경시 첫 페이지로 리셋
    useEffect(() => {
        setCurrentPage(1);
    }, [filteredProducts.length]);

    // 필터 변경 핸들러
    const handleFilterChange = (filter: string) => {
        setSortBy(filter);
        setCurrentPage(1);
    };

    // 페이지 변경 핸들러
    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    // 로딩 및 오류 처리
    if (loading) {
        return <div className={styles.loading}>상품 정보를 불러오는 중...</div>;
    }

    if (error) {
        return <div className={styles.error}>{error}</div>;
    }

    // filteredProducts가 배열이 아니면 early return
    if (!Array.isArray(filteredProducts)) {
        return <div className={styles.loading}>데이터 준비 중...</div>;
    }

    // 페이지네이션 로직
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    // 필터링 결과 없음 처리
    if (filteredProducts.length === 0) {
        return (
            <div className={styles.noResults}>
                검색 조건에 맞는 상품이 없습니다. 필터를 변경해보세요.
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>
                    상품이 총{" "}
                    <span className={styles.countHighlight}>{filteredProducts.length}</span>개
                    있습니다.
                </h1>
                <FilterTabs onFilterChange={handleFilterChange} />
            </div>

            <div className={styles.productsGrid}>
                {currentProducts.map((product, index) => {
                    const isLastColumn = index % 4 === 3;
                    return (
                        <ProductItem
                            key={`${product.id}-${index}`}
                            product={product}
                            isLastColumn={isLastColumn}
                        />
                    );
                })}
            </div>

            {/* 페이지네이션 */}
            {totalPages > 1 && (
                <div className={styles.pagination}>
                    <div className={styles.paginationContainer}>
                        <button
                            className={styles.pageButton}
                            onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            이전
                        </button>

                        {(() => {
                            // 표시할 페이지 버튼의 시작 번호와 끝 번호 계산
                            let startPage = Math.max(1, currentPage - 2);
                            let endPage = Math.min(totalPages, startPage + 4);

                            // 페이지 버튼이 5개가 되도록 조정
                            if (endPage - startPage < 4) {
                                startPage = Math.max(1, endPage - 4);
                            }

                            // 페이지 버튼 생성
                            return Array.from({ length: endPage - startPage + 1 }, (_, i) => {
                                const pageNum = startPage + i;
                                return (
                                    <button
                                        key={i}
                                        className={`${styles.pageButton} ${currentPage === pageNum ? styles.activePage : ""}`}
                                        onClick={() => handlePageChange(pageNum)}
                                    >
                                        {pageNum}
                                    </button>
                                );
                            });
                        })()}

                        <button
                            className={styles.pageButton}
                            onClick={() =>
                                currentPage < totalPages && handlePageChange(currentPage + 1)
                            }
                            disabled={currentPage === totalPages}
                        >
                            다음
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductList;
