import React from "react";
import styles from "./Filter.module.css";

// 가격대 버튼 컴포넌트
export const PriceRangeButtons: React.FC<{
    priceRangeOptions: Array<{ id: string; label: string }>;
    selectedPriceRange: string;
    onPriceRangeClick: (priceRangeId: string) => void;
}> = ({ priceRangeOptions, selectedPriceRange, onPriceRangeClick }) => (
    <div className={styles.filterGroup}>
        <div className={styles.filterLabel}>가격대</div>
        <div className={styles.filterContent}>
            <div className={styles.priceButtonsGrid}>
                {priceRangeOptions.map((option) => (
                    <button
                        key={option.id}
                        className={`${styles.priceButton} ${
                            selectedPriceRange === option.id ? styles.priceButtonSelected : ""
                        }`}
                        onClick={() => onPriceRangeClick(option.id)}
                    >
                        {option.label}
                    </button>
                ))}
            </div>
        </div>
    </div>
);

// 가격 직접 입력 컴포넌트
export const PriceDirectInput: React.FC<{
    minPrice: string;
    maxPrice: string;
    onMinPriceChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onMaxPriceChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ minPrice, maxPrice, onMinPriceChange, onMaxPriceChange }) => (
    <div className={styles.filterGroup}>
        <div className={styles.filterLabel}>직접입력</div>
        <div className={styles.filterContent}>
            <div className={styles.priceInputContainer}>
                <input
                    type="text"
                    value={minPrice}
                    onChange={onMinPriceChange}
                    placeholder="최저가격"
                    className={`${styles.priceInput} ${minPrice ? styles.priceInputActive : ""}`}
                />
                <span className={styles.priceInputConnector}>~</span>
                <input
                    type="text"
                    value={maxPrice}
                    onChange={onMaxPriceChange}
                    placeholder="최고가격"
                    className={`${styles.priceInput} ${maxPrice ? styles.priceInputActive : ""}`}
                />
            </div>
        </div>
    </div>
);

// 할인율 선택 컴포넌트
export const DiscountRangeSelector: React.FC<{
    discountValue: number | string;
    onDiscountChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ discountValue, onDiscountChange }) => (
    <div className={styles.filterGroup}>
        <div className={styles.filterLabel}>할인율</div>
        <div className={styles.filterContent}>
            <div className={styles.discountContainer}>
                <div className={styles.rangeLabels}>
                    <div className={styles.rangeLabel}>0%</div>
                    <div className={styles.rangeLabel}>50%</div>
                </div>
                <div className={styles.rangeSliderContainer}>
                    <input
                        type="range"
                        min="0"
                        max="50"
                        step="5"
                        value={discountValue}
                        onChange={onDiscountChange}
                        className={styles.rangeSlider}
                        style={{
                            background: `linear-gradient(to right, #4ade80 0%, #4ade80 ${Number(discountValue) * 2}%, #e5e7eb ${Number(discountValue) * 2}%, #e5e7eb 100%)`,
                        }}
                    />
                </div>
                <div className={styles.rangeValueWrap}>
                    <div className={styles.rangeValue}>
                        {Number(discountValue) > 0 ? `${discountValue}% 이상` : ""}
                    </div>
                </div>
            </div>
        </div>
    </div>
);

// 상품명 검색 컴포넌트
export const ProductNameSearch: React.FC<{
    productName: string;
    onProductNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ productName, onProductNameChange }) => (
    <div className={styles.filterGroup}>
        <div className={styles.filterLabel}>상품명</div>
        <div className={styles.filterContent}>
            <input
                type="text"
                value={productName}
                onChange={onProductNameChange}
                placeholder="상품명을 입력하세요"
                className={`${styles.productNameInput} ${
                    productName ? styles.productNameInputActive : ""
                }`}
            />
        </div>
    </div>
);

// 유효기간 선택 컴포넌트
// 유효기간 선택 컴포넌트 (박스 형태로 변경)
export const DateRangeSelector: React.FC<{
    dateRange: string;
    onDateRangeChange: (value: string) => void;
}> = ({ dateRange, onDateRangeChange }) => {
    const dateOptions = [
        { id: "30days", value: "30", label: "30일" },
        { id: "60days", value: "60", label: "60일" },
        { id: "90days", value: "90", label: "90일" },
    ];

    const handleDateClick = (value: string) => {
        // 이미 선택된 유효기간을 클릭하면 해제
        if (dateRange === value) {
            onDateRangeChange("");
        } else {
            onDateRangeChange(value);
        }
    };

    return (
        <div className={styles.filterGroup}>
            <div className={styles.filterLabel}>유효기간</div>
            <div className={styles.filterContent}>
                <div className={styles.dateButtonsGrid}>
                    {dateOptions.map((option) => (
                        <button
                            key={option.id}
                            className={`${styles.dateButton} ${
                                dateRange === option.value ? styles.dateButtonSelected : ""
                            }`}
                            onClick={() => handleDateClick(option.value)}
                        >
                            {option.label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

// 필터 버튼 컴포넌트
export const FilterButtons: React.FC<{
    onApply: () => void;
    onReset: () => void;
}> = ({ onReset }) => (
    <div className={styles.buttonsContainer}>
        <button onClick={onReset} className={styles.resetButton}>
            초기화
            <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g transform="translate(1 1)">
                    <path
                        d="M 0.3333 0.3333 L 2.293 2.293 C 1.0842 3.4989 0.3333 5.1618 0.3333 7 C 0.3333 10.676 3.324 13.6667 7 13.6667 C 10.676 13.6667 13.6667 10.676 13.6667 7 C 13.6667 3.324 10.676 0.3333 7 0.3333 L 7 1.6667 C 9.9407 1.6667 12.3333 4.0593 12.3333 7 C 12.3333 9.9407 9.9407 12.3333 7 12.3333 C 4.0593 12.3333 1.6667 9.9407 1.6667 7 C 1.6667 5.5294 2.267 4.1982 3.233 3.233 L 5 5 L 5 0.3333 L 0.3333 0.3333 Z"
                        fill="currentColor"
                    />
                </g>
            </svg>
        </button>
    </div>
);

// 검색 조건 메인 컴포넌트
interface SearchConditionProps {
    priceRangeOptions: Array<{ id: string; label: string }>;
    selectedPriceRange: string;
    onPriceRangeClick: (priceRangeId: string) => void;
    minPrice: string;
    maxPrice: string;
    onMinPriceChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onMaxPriceChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    discountValue: number | string;
    onDiscountChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    productName: string;
    onProductNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    dateRange: string;
    onDateRangeChange: (value: string) => void;
    onApply: () => void;
    onReset: () => void;
}

const SearchCondition: React.FC<SearchConditionProps> = ({
    priceRangeOptions,
    selectedPriceRange,
    onPriceRangeClick,
    minPrice,
    maxPrice,
    onMinPriceChange,
    onMaxPriceChange,
    discountValue,
    onDiscountChange,
    productName,
    onProductNameChange,
    dateRange,
    onDateRangeChange,
    onApply,
    onReset,
}) => {
    return (
        <div className={styles.searchSection}>
            <div className={styles.sectionHeaderRight}>검색조건</div>

            <div className={styles.searchContent}>
                <PriceRangeButtons
                    priceRangeOptions={priceRangeOptions}
                    selectedPriceRange={selectedPriceRange}
                    onPriceRangeClick={onPriceRangeClick}
                />
                <PriceDirectInput
                    minPrice={minPrice}
                    maxPrice={maxPrice}
                    onMinPriceChange={onMinPriceChange}
                    onMaxPriceChange={onMaxPriceChange}
                />
                <DiscountRangeSelector
                    discountValue={discountValue}
                    onDiscountChange={onDiscountChange}
                />
                <ProductNameSearch
                    productName={productName}
                    onProductNameChange={onProductNameChange}
                />
                <DateRangeSelector dateRange={dateRange} onDateRangeChange={onDateRangeChange} />
                <FilterButtons onApply={onApply} onReset={onReset} />
            </div>
        </div>
    );
};

export default SearchCondition;
