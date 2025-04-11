import React, { createContext, useState, useEffect, useContext, ReactNode } from "react";
import axios from "axios";

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

// 타입 정의
interface FilterContextType {
    products: any[];
    filteredProducts: any[];

    selectedBrands: string[];
    priceRange: { min: string; max: string };
    discountRate: number;
    dateRange: string;
    searchTerm: string;
    sortBy: string;

    setBrands: (brands: string[]) => void;
    setPriceRange: (min: string, max: string) => void;
    setDiscountRate: (rate: number) => void;
    setDateRange: (date: string) => void;
    setSearchTerm: (term: string) => void;
    setSortBy: (sortType: string) => void;
    resetFilters: () => void;

    loading: boolean;
    error: string | null;
}

// Context 생성
const FilterContext = createContext<FilterContextType | undefined>(undefined);

// Provider 컴포넌트
export const FilterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [products, setProducts] = useState<any[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<any[]>([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
    const [priceRange, setPriceRangeState] = useState({ min: "", max: "" });
    const [discountRate, setDiscountRateValue] = useState(0);
    const [dateRange, setDateRangeValue] = useState("");
    const [searchTerm, setSearchTermValue] = useState("");
    const [sortBy, setSortByValue] = useState("인기순");

    // 상품 데이터 불러오기
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // 파일 경로가 대소문자를 구분할 수 있으니 주의
                const response = await axios.get("/products.json");
                if (response.data && Array.isArray(response.data)) {
                    console.log("상품 데이터 로드 성공:", response.data.length);
                    setProducts(response.data);
                    setFilteredProducts(response.data);
                } else {
                    throw new Error("상품 데이터 형식이 잘못되었습니다.");
                }
            } catch (err) {
                console.error("상품 데이터 로드 오류:", err);
                setError("상품 데이터를 불러오는데 실패했습니다.");
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    // 상품 정렬
    const sortProductsArray = (productsToSort: any[]) => {
        const sorted = [...productsToSort];
        switch (sortBy) {
            case "유효기간순":
                sorted.sort((a, b) => {
                    const expiryA = Number(a.expiry_date);
                    const expiryB = Number(b.expiry_date);
                    return expiryA - expiryB;
                });
                break;
            case "최신등록순":
                sorted.sort((a, b) => b.id - a.id);
                break;
            case "낮은가격순":
                sorted.sort((a, b) => a.price - b.price);
                break;
            case "높은가격순":
                sorted.sort((a, b) => b.price - a.price);
                break;
            case "할인율순":
                sorted.sort((a, b) => b.discount_rate - a.discount_rate);
                break;
            default:
                // 인기순은 원래 순서대로
                break;
        }
        return sorted;
    };

    // 필터 적용
    useEffect(() => {
        if (!products || products.length === 0) {
            console.log("필터링할 상품 데이터가 없습니다.");
            return;
        }

        console.log("필터링 시작:", {
            브랜드: selectedBrands,
            가격범위: priceRange,
            할인율: discountRate,
            유효기간: dateRange,
            검색어: searchTerm,
        });

        let result = [...products];

        // 브랜드 필터링
        if (selectedBrands.length > 0) {
            console.log("브랜드 필터링:", selectedBrands);

            if (selectedBrands.includes("all")) {
                // 전체 선택인 경우 필터링하지 않음
                console.log("모든 브랜드 선택됨");
            } else {
                // 브랜드 ID와 이름 매핑 사용하여 필터링
                result = result.filter((product) => {
                    return selectedBrands.some((brandId) => {
                        // 브랜드 ID가 매핑 테이블에 있는 경우
                        if (brandNameMapping[brandId]) {
                            return product.brand_name === brandNameMapping[brandId];
                        }
                        // 선택된 ID가 매핑 테이블에 없는 경우 직접 비교
                        return product.brand_name.toLowerCase() === brandId.toLowerCase();
                    });
                });

                console.log("브랜드 필터링 결과:", result.length);
            }
        }

        // 가격 필터링
        if (priceRange.min !== "") {
            const minPrice = parseInt(priceRange.min);
            console.log("최소 가격 필터링:", minPrice);
            result = result.filter((product) => product.price >= minPrice);
            console.log("최소 가격 필터링 결과:", result.length);
        }

        if (priceRange.max !== "") {
            const maxPrice = parseInt(priceRange.max);
            console.log("최대 가격 필터링:", maxPrice);
            result = result.filter((product) => product.price <= maxPrice);
            console.log("최대 가격 필터링 결과:", result.length);
        }

        // 할인율 필터링
        if (discountRate > 0) {
            console.log("할인율 필터링:", discountRate);
            result = result.filter((product) => product.discount_rate >= discountRate);
            console.log("할인율 필터링 결과:", result.length);
        }

        // 유효기간 필터링
        if (dateRange !== "") {
            console.log("유효기간 필터링:", dateRange);
            result = result.filter((product) => {
                // expiry_date가 문자열이거나 숫자일 수 있으므로 문자열로 변환하여 비교
                return String(product.expiry_date) === dateRange;
            });
            console.log("유효기간 필터링 결과:", result.length);
        }

        // 검색어 필터링
        if (searchTerm !== "") {
            const term = searchTerm.toLowerCase().trim();
            console.log("검색어 필터링:", term);
            result = result.filter(
                (product) =>
                    product.coupon_name.toLowerCase().includes(term) ||
                    product.brand_name.toLowerCase().includes(term),
            );
            console.log("검색어 필터링 결과:", result.length);
        }

        // 정렬 적용
        const sortedResult = sortProductsArray(result);
        console.log("최종 필터링 및 정렬 결과:", sortedResult.length);
        setFilteredProducts(sortedResult);
    }, [
        selectedBrands,
        priceRange.min,
        priceRange.max,
        discountRate,
        dateRange,
        searchTerm,
        sortBy,
        products,
    ]);

    // 필터 액션 함수
    const setBrands = (brands: string[]) => {
        console.log("브랜드 설정:", brands);
        setSelectedBrands(brands);
    };

    const setPriceRange = (min: string, max: string) => {
        console.log("가격 범위 설정:", { min, max });
        setPriceRangeState({ min, max });
    };

    const setDiscountRate = (rate: number) => {
        console.log("할인율 설정:", rate);
        setDiscountRateValue(rate);
    };

    const setDateRange = (date: string) => {
        console.log("유효기간 설정:", date);
        setDateRangeValue(date);
    };

    const setSearchTerm = (term: string) => {
        console.log("검색어 설정:", term);
        setSearchTermValue(term);
    };

    const setSortBy = (sortType: string) => {
        console.log("정렬 기준 설정:", sortType);
        setSortByValue(sortType);
    };

    // 필터 초기화
    const resetFilters = () => {
        console.log("필터 초기화");
        setSelectedBrands([]);
        setPriceRangeState({ min: "", max: "" });
        setDiscountRateValue(0);
        setDateRangeValue("");
        setSearchTermValue("");
        // 정렬 기준은 초기화하지 않음
    };

    return (
        <FilterContext.Provider
            value={{
                products,
                filteredProducts,
                selectedBrands,
                priceRange,
                discountRate,
                dateRange,
                searchTerm,
                sortBy,
                setBrands,
                setPriceRange,
                setDiscountRate,
                setDateRange,
                setSearchTerm,
                setSortBy,
                resetFilters,
                loading,
                error,
            }}
        >
            {children}
        </FilterContext.Provider>
    );
};

// 커스텀 훅
export const useFilter = () => {
    const context = useContext(FilterContext);
    if (!context) {
        throw new Error("useFilter must be used within a FilterProvider");
    }
    return context;
};
