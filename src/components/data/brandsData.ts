import { Brand, PriceRangeOption } from "../types";
import { useState, useEffect } from "react";

// 가격대 옵션
export const priceRangeOptions: PriceRangeOption[] = [
    { id: "under3k", label: "~3천원" },
    { id: "3k-5k", label: "3~5천원" },
    { id: "5k-10k", label: "5천원~1만원" },
    { id: "10k-50k", label: "1만원~5만원" },
    { id: "50k-100k", label: "5만원~10만원" },
    { id: "over100k", label: "10만원 이상" },
];

// 브랜드 데이터를 가져오는 함수
export const useBrands = () => {
    const [brands, setBrands] = useState<Brand[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBrands = async () => {
            try {
                const response = await fetch("/brands.json");
                if (!response.ok) {
                    throw new Error("Failed to fetch brands data");
                }
                const data = await response.json();
                setBrands(data);
                setLoading(false);
            } catch (err) {
                setError("브랜드 데이터를 불러오는데 실패했습니다.");
                setLoading(false);
                console.error("Error loading brands data:", err);
            }
        };

        fetchBrands();
    }, []);

    return { brands, loading, error };
};
