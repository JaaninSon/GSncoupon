import React, { forwardRef } from "react";
import styles from "./ScrollBox.module.css";
import clsx from "clsx";

interface ScrollBoxProps {
    children: React.ReactNode;
    className?: string;
    maxHeight?: string;
}

const ScrollBox = forwardRef<HTMLDivElement, ScrollBoxProps>(
    ({ children, className, maxHeight = "400px" }, ref) => {
        return (
            <div ref={ref} className={clsx(styles.scrollBox, className)} style={{ maxHeight }}>
                {children}
            </div>
        );
    },
);

export default ScrollBox;
