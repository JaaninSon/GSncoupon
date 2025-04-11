import React from "react";
import styles from "./ScrollBox.module.css";
import clsx from "clsx";

interface ScrollBoxProps {
    children: React.ReactNode;
    className?: string;
    maxHeight?: string;
}

export default function ScrollBox({ children, className, maxHeight = "400px" }: ScrollBoxProps) {
    return (
        <div className={clsx(styles.scrollBox, className)} style={{ maxHeight }}>
            {children}
        </div>
    );
}
