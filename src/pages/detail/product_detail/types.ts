// pages/detail/product_detail/types.ts
export interface Product {
    id: number;
    coupon_name: string;
    price: number;
    discount_rate: number;
    expiry_date: number | string;
    image: string;
    category: string;
    description?: string;
    how_to_use?: string;
}

export interface ProductDetailProps {
    product: Product;
    onAddToCart: (product: Product, quantity: number) => void;
    onBuyNow: (product: Product, quantity: number) => void;
}

export interface ProductRecommendProps {
    category: string;
    currentProductId: number | string;
}
