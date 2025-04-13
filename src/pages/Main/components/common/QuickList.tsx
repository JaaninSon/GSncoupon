import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./QuickList.module.css";

function QuickList() {
    const [showTopBtn, setShowTopBtn] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 300) {
            setShowTopBtn(true);
        } else {
            setShowTopBtn(false);
        }
    };

    const handleGoTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div>
            <ul className={styles.quickList}>
                <li className={styles.productHistory}>
                    <dl className={styles.historyTitle}>
                        {/* router 연동 */}
                        <dt>
                            <Link to="/cart" className={styles.historyCart}>
                                장바구니
                            </Link>
                        </dt>
                        <dt>최근 본 상품</dt>
                        <dd>
                            <div className={styles.currentProduct}>
                                <ul>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                        </dd>
                    </dl>
                </li>

                {showTopBtn && (
                    <li className={styles.goTop}>
                        <button onClick={handleGoTop}>
                            <span>Top</span>
                        </button>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default QuickList;
