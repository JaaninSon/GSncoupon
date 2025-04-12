import clsx from "clsx";
import styles from "./Badge.module.css";

export default function Badge({
    date,
    isMini = false,
}: {
    date: number | string;
    isMini?: boolean;
}) {
    // 날짜에 따른 배지 스타일 클래스 결정
    const getBadgeClassName = (days: number | string): string => {
        const daysNum = Number(days);
        if (daysNum === 30) {
            return styles.badge30;
        } else if (daysNum === 60) {
            return styles.badge60;
        } else if (daysNum === 90) {
            return styles.badge90;
        } else {
            return styles.badgeDefault;
        }
    };

    return (
        <span className={clsx(styles.badge, getBadgeClassName(date), { [styles.mini]: isMini })}>
            {date}일
        </span>
    );
}
