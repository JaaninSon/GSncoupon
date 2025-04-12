import clsx from "clsx";
import styles from "./Button.module.css";

export enum btnType {
    Black = "black",
    Green = "green",
    Transparent = "transparent",
}

interface props {
    children: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    btnType: btnType;
}

export default function Button({ children, onClick, btnType }: props) {
    return (
        <button className={clsx(styles.btn, styles[btnType])} onClick={onClick}>
            {children}
        </button>
    );
}
