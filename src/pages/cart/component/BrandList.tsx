import { useEffect, useRef, useState } from "react";
import styles from "./BrandList.module.css";
import { useBrands } from "../../detail/data/brandsData";
import ScrollBox from "./common/ScrollBox";
import BrandIcon from "./common/BrandIcon";
import { brandNameMapping } from "../../detail/filter/FilterContext";

interface BrandListProps {
    selectedBrand: string;
    setSelectedBrand: (id: string) => void;
}

export default function BrandList({ selectedBrand, setSelectedBrand }: BrandListProps) {
    const { brands, loading, error } = useBrands();
    const [brandDropdownOpen, setBrandDropdownOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
                setBrandDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    if (loading) {
        return <div className={styles.loadingSpinner}>브랜드를 불러오는 중...</div>;
    }

    if (error) {
        return <div className={styles.error}>{error}</div>;
    }

    return (
        <div className={styles.container} ref={wrapperRef}>
            <h2>BRAND</h2>
            <div className={styles.dropdown}>
                <button
                    className={styles.dropdownToggle}
                    onClick={() => {
                        setBrandDropdownOpen(!brandDropdownOpen);
                    }}
                >
                    {brandNameMapping[selectedBrand]}
                </button>
                {brandDropdownOpen && (
                    <div className={styles.brandContainer}>
                        <ScrollBox maxHeight="28rem" className={styles.brandGrid}>
                            {brands &&
                                brands.map((brand) => (
                                    <BrandIcon
                                        key={brand.id}
                                        selected={brand.id === selectedBrand}
                                        logo={brand.logo}
                                        name={brand.name}
                                        onClick={() => {
                                            setSelectedBrand(brand.id);
                                            setBrandDropdownOpen(false);
                                        }}
                                    />
                                ))}
                        </ScrollBox>
                    </div>
                )}
            </div>
        </div>
    );
}
