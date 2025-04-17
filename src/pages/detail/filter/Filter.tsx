import React, { useState, useEffect } from "react";
import BrandFilter from "./BrandFilter";
import SearchCondition from "./SearchCondition";
import { priceRangeOptions, useBrands } from "../data/brandsData";
import { useFilter } from "./FilterContext";
import styles from "./Filter.module.css";

interface FilterProps {
    className?: string;
}

const Filter: React.FC<FilterProps> = ({ className }) => {
    const {
        selectedBrands,
        priceRange,
        discountRate,
        dateRange,
        searchTerm,
        setBrands,
        setPriceRange,
        setDiscountRate,
        setDateRange,
        setSearchTerm,
        resetFilters,
    } = useFilter();

    // 선택된 가격대 버튼 상태
    const [selectedPriceRange, setSelectedPriceRange] = useState("");
    const { brands, loading, error } = useBrands();

    // 가격 범위가 변경되면 선택된 가격대 버튼 상태 업데이트
    useEffect(() => {
        // 현재 가격 범위에 맞는 버튼 ID 찾기
        if (priceRange.min === "" && priceRange.max === "") {
            setSelectedPriceRange("");
            return;
        }

        const min = parseInt(priceRange.min || "0");
        const max = parseInt(priceRange.max || "Infinity");

        if (min === 0 && max <= 3000) setSelectedPriceRange("under3k");
        else if (min >= 3000 && max <= 5000) setSelectedPriceRange("3k-5k");
        else if (min >= 5000 && max <= 10000) setSelectedPriceRange("5k-10k");
        else if (min >= 10000 && max <= 50000) setSelectedPriceRange("10k-50k");
        else if (min >= 50000 && max <= 100000) setSelectedPriceRange("50k-100k");
        else if (min >= 100000) setSelectedPriceRange("over100k");
        else setSelectedPriceRange(""); // 해당하는 범위가 없으면 선택 해제
    }, [priceRange.min, priceRange.max]);

    // 브랜드 선택 핸들러
    const handleBrandClick = (brandId: string) => {
        if (selectedBrands.includes(brandId)) {
            setBrands(selectedBrands.filter((id) => id !== brandId));
        } else {
            setBrands([...selectedBrands, brandId]);
        }
    };

    // 가격대 선택 핸들러
    const handlePriceRangeClick = (priceRangeId: string) => {
        // 이미 선택된 가격대를 다시 클릭하면 해제
        if (selectedPriceRange === priceRangeId) {
            setSelectedPriceRange("");
            setPriceRange("", "");
            return;
        }

        setSelectedPriceRange(priceRangeId);

        // 가격대 범위 설정
        switch (priceRangeId) {
            case "under3k":
                setPriceRange("0", "3000");
                break;
            case "3k-5k":
                setPriceRange("3000", "5000");
                break;
            case "5k-10k":
                setPriceRange("5000", "10000");
                break;
            case "10k-50k":
                setPriceRange("10000", "50000");
                break;
            case "50k-100k":
                setPriceRange("50000", "100000");
                break;
            case "over100k":
                setPriceRange("100000", "");
                break;
            default:
                setPriceRange("", "");
        }
    };

    // 최소 가격 입력 핸들러
    const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, ""); // 숫자만 허용
        setPriceRange(value, priceRange.max);
        // 직접 입력하면 버튼 선택 해제
        setSelectedPriceRange("");
    };

    // 최대 가격 입력 핸들러
    const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, ""); // 숫자만 허용
        setPriceRange(priceRange.min, value);
        // 직접 입력하면 버튼 선택 해제
        setSelectedPriceRange("");
    };

    // 할인율 변경 핸들러
    const handleDiscountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDiscountRate(Number(e.target.value));
    };

    // 상품명 변경 핸들러
    const handleProductNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    // 유효기간 변경 핸들러
    const handleDateRangeChange = (value: string) => {
        setDateRange(value);
    };

    return (
        <div className={`${styles.container} ${className || ""}`}>
            <h1 className={styles.title}>커피/음료</h1>

            <div className={styles.filterContainer}>
                {/* 브랜드 필터 */}
                {loading ? (
                    <div>브랜드 데이터를 불러오는 중...</div>
                ) : error ? (
                    <div>{error}</div>
                ) : (
                    <BrandFilter
                        selectedBrands={selectedBrands}
                        onBrandClick={handleBrandClick}
                        brands={brands}
                    />
                )}

                {/* 검색 조건 */}
                <SearchCondition
                    priceRangeOptions={priceRangeOptions}
                    selectedPriceRange={selectedPriceRange}
                    onPriceRangeClick={handlePriceRangeClick}
                    minPrice={priceRange.min}
                    maxPrice={priceRange.max}
                    onMinPriceChange={handleMinPriceChange}
                    onMaxPriceChange={handleMaxPriceChange}
                    discountValue={discountRate}
                    onDiscountChange={handleDiscountChange}
                    productName={searchTerm}
                    onProductNameChange={handleProductNameChange}
                    dateRange={dateRange}
                    onApply={() => {}}
                    onDateRangeChange={handleDateRangeChange}
                    onReset={resetFilters}
                />
            </div>
        </div>
    );
};

export default Filter;
