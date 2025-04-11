import React, { useState } from "react";
import styles from "./FilterTabs.module.css";

interface FilterTabsProps {
    onFilterChange?: (filter: string) => void;
}

const FilterTabs: React.FC<FilterTabsProps> = ({ onFilterChange }) => {
    const filters: string[] = ["유효기간순", "최신등록순", "낮은가격순", "높은가격순", "할인율순"];
    const [activeFilter, setActiveFilter] = useState<string>("인기순");
    const defaultFilter = "인기순";

    const handleFilterClick = (filter: string) => {
        // 이미 선택된 필터를 다시 클릭한 경우
        if (activeFilter === filter) {
            // 기본 필터("인기순")로 초기화
            setActiveFilter(defaultFilter);
            if (onFilterChange) {
                onFilterChange(defaultFilter);
            }
        } else {
            // 다른 필터를 선택한 경우
            setActiveFilter(filter);
            if (onFilterChange) {
                onFilterChange(filter);
            }
        }
    };

    return (
        <div className={styles.filterContainer}>
            {filters.map((filter, index) => (
                <button
                    key={index}
                    className={`${styles.filterButton} ${activeFilter === filter ? styles.activeFilter : ""}`}
                    onClick={() => handleFilterClick(filter)}
                >
                    {filter}
                </button>
            ))}
        </div>
    );
};

export default FilterTabs;
