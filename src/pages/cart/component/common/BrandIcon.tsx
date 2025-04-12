import clsx from "clsx";
import styles from "./BrandIcon.module.css";

interface BrandIconProps {
    logo: string;
    name: string;
    onClick: React.MouseEventHandler<HTMLDivElement>;
    selected: boolean;
}
export default function BrandIcon({ logo, name, onClick, selected }: BrandIconProps) {
    return (
        <div
            className={clsx(styles.brandItem, { [styles.brandItemSelected]: selected })}
            onClick={onClick}
        >
            {selected && <div className={styles.brandOverlay} />}
            <div className={styles.brandLogo}>
                <img src={logo} alt={name} className={styles.brandImage} />
            </div>
            <p className={styles.brandName}>{name}</p>
        </div>
    );
}
