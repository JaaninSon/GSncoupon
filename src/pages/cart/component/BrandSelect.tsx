import { useState } from "react";
import styles from "./BrandSelect.module.css";

const brands = [
    "스타벅스",
    "투썸플레이스",
    "빽다방",
    "이디야커피",
    "GS25",
    "컴포즈커피",
    "스타벅스 금액권",
    "파리바게뜨",
    "매머드커피",
    "굽네치킨",
    "BHC",
    "메가MGC커피",
];
export default function BrandSelect() {
    const [brandDropdownOpen, setBrandDropdownOpen] = useState(false);

    return (
        <div className={styles.container}>
            <h2>BRAND</h2>
            <div className={styles.dropdown}>
                <button
                    className={styles.dropdownToggle}
                    onClick={() => {
                        setBrandDropdownOpen(!brandDropdownOpen);
                    }}
                >
                    브랜드 선택
                </button>
                {brandDropdownOpen && (
                    <div className={styles.brandGrid}>
                        {brands.map((brand) => (
                            <div key={brand} className={styles.brandCard}>
                                <div className={styles.brandImage} />
                                <span>{brand}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
