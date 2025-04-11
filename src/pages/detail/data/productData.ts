import { Product } from "../types";
import { useState, useEffect } from "react";

export const useProducts = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("/products.json");
                if (!response.ok) {
                    throw new Error("Failed to fetch products data");
                }
                const data = await response.json();
                setProducts(data);
                setLoading(false);
            } catch (err) {
                setError("상품 데이터를 불러오는데 실패했습니다.");
                setLoading(false);
                console.error("Error loading products data:", err);
            }
        };

        fetchProducts();
    }, []);

    return { products, loading, error };
};
