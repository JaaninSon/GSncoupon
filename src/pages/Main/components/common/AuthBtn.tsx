import styles from "./AuthBtn.module.css";

interface AuthButtonProps {
    label: string;
    onClick?: () => void;
}

function AuthBtn({ label, onClick }: AuthButtonProps) {
    return (
        <button className={styles.authBtn} onClick={onClick}>
            {label}
        </button>
    );
}

export default AuthBtn;
