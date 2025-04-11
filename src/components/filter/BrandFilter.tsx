import React from "react";
import { BrandFilterProps } from "./types";
import { useBrands } from "../data/brandsData";
import styles from "./Filter.module.css";

// 브랜드 매핑 테이블 - 브랜드 ID와 실제 데이터의 brand_name 일치시키기
const brandNameMapping: Record<string, string> = {
    starbucks: "스타벅스",
    ediya: "이디야",
    twosome: "투썸플레이스",
    megacoffe: "메가커피",
    hollys: "할리스",
    paik: "빽다방",
    coffeebean: "커피빈",
    paulbasset: "폴바셋",
    compose: "컴포즈커피",
    gongcha: "공차",
    theventi: "더벤티",
    tomntoms: "탐앤탐스",
    caffebene: "카페베네",
};

const BrandFilter: React.FC<BrandFilterProps> = ({ selectedBrands, onBrandClick }) => {
    // 브랜드 데이터 로드
    const { brands, loading, error } = useBrands();

    if (loading) {
        return <div className={styles.loadingSpinner}>브랜드를 불러오는 중...</div>;
    }

    if (error) {
        return <div className={styles.error}>{error}</div>;
    }

    return (
        <div className={styles.brandSection}>
            <div className={styles.sectionHeaderLeft}>브랜드</div>
            <div className={styles.brandsGridWrapper}>
                <div className={styles.brandsGrid}>
                    {brands &&
                        brands.map((brand) => (
                            <div
                                key={brand.id}
                                className={`${styles.brandItem} ${
                                    selectedBrands.includes(brand.id)
                                        ? styles.brandItemSelected
                                        : ""
                                }`}
                                onClick={() => onBrandClick(brand.id)}
                                data-brand-name={brandNameMapping[brand.id] || brand.name}
                            >
                                {selectedBrands.includes(brand.id) && (
                                    <div className={styles.brandOverlay} />
                                )}
                                <div className={styles.brandLogo}>
                                    <img
                                        src={brand.logo}
                                        alt={brand.name}
                                        className={styles.brandImage}
                                    />
                                </div>
                                <p className={styles.brandName}>{brand.name}</p>
                            </div>
                        ))}
                </div>
                <div className={styles.fadeShadow}></div>
            </div>
        </div>
    );
};

export default BrandFilter;
