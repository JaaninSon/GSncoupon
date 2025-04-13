import React from "react";
import styles from "./TitleMotion.module.css";

interface TitleProps {
    title: string;
    color: string;
}

function TitleMotion({ title, color }: TitleProps) {
    return (
        <h5 className={styles.title}>
            지금&nbsp;
            {title.split("").map((char, index) => (
                <span
                    key={index}
                    className={styles.char}
                    style={
                        {
                            "--dot-color": char !== " " ? color : "transparent",
                            "--char-delay": `${index * 0.03}s`,
                            color: `${color}`,
                        } as React.CSSProperties
                    }
                >
                    {char === " " ? "\u00A0" : char}
                </span>
            ))}
            &nbsp;해요!
        </h5>
    );
}

export default TitleMotion;
