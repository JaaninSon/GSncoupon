// 상품 관련 타입
export interface Product {
    id: number;
    coupon_name: string;
    brand_name: string;
    price: number;
    category: string;
    discount_rate: number;
    image: string;
    brand_image: string;
    expiry_date: number | string;
    location: string;
}

// 브랜드 관련 타입
export interface Brand {
    id: string;
    name: string;
    logo: string;
}

// 가격대 옵션 타입
export interface PriceRangeOption {
    id: string;
    label: string;
}

// 필터 관련 타입
export type FilterMode = "range" | "direct" | "button";
