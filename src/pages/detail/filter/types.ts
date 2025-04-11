import { Brand, PriceRangeOption, FilterMode } from "../../types";

// BrandFilter 컴포넌트 Props
export interface BrandFilterProps {
    brands: Brand[];
    selectedBrands: string[];
    onBrandClick: (brandId: string) => void;
}

// 가격대 버튼 컴포넌트 Props
export interface PriceRangeButtonsProps {
    priceRangeOptions: PriceRangeOption[];
    selectedPriceRange: string;
    onPriceRangeClick: (priceRangeId: string) => void;
}

// 가격 직접 입력 컴포넌트 Props
export interface PriceDirectInputProps {
    minPrice: string;
    maxPrice: string;
    onMinPriceChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onMaxPriceChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// 할인율 선택 컴포넌트 Props
export interface DiscountRangeSelectorProps {
    discountValue: number | string;
    onDiscountChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// 상품명 검색 컴포넌트 Props
export interface ProductNameSearchProps {
    productName: string;
    onProductNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// 유효기간 선택 컴포넌트 Props
export interface DateRangeSelectorProps {
    dateRange: string;
    onDateRangeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// 필터 버튼 컴포넌트 Props
export interface FilterButtonsProps {
    onApply: () => void;
    onReset: () => void;
}

// 검색 조건 메인 컴포넌트 Props
export interface SearchConditionProps
    extends PriceRangeButtonsProps,
        PriceDirectInputProps,
        DiscountRangeSelectorProps,
        ProductNameSearchProps,
        DateRangeSelectorProps,
        FilterButtonsProps {}

// 필터 메인 컴포넌트 Props
export interface FilterProps {
    className?: string;
}
