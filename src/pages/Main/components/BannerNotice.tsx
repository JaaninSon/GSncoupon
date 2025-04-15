import styles from "./BannerNotice.module.css";

function BannerNotice() {
    return (
        <div className={styles.layoutRow}>
            <div className={styles.banner}>
                <img src="/assets/mainSectionImg/login_ex_banner.png" alt="GS&아메리카노쿠폰" />
            </div>

            <div className={styles.banner}>
                <img src="/assets/mainSectionImg/login_banner.png" alt="GS&치킨쿠폰" />
            </div>

            <div className={styles.notice}>
                <div className={styles.noticeHeader}>
                    <h5>공지사항</h5>
                    <span className={styles.more}>더보기 &gt;</span>
                </div>
                <ul className={styles.noticeList}>
                    <li>
                        <span>GS&쿠폰몰 개인정보 처리방침 일부 개정 사전 안내</span>
                        <span>2025.04.11</span>
                    </li>
                    <li>
                        <span>[이벤트 당첨] 25년 4월 첫발송 이벤트 당첨자 결과 발표</span>
                        <span>2025.04.08</span>
                    </li>
                    <li>
                        <span>[가격인상] 투썸플레이스상품 가격 인상 안내의 건</span>
                        <span>2025.04.04</span>
                    </li>
                    <li>
                        <span>[가격인상] 롯데리아 일부 상품 가격인상 안내의 건(4/3~)</span>
                        <span>2025.03.28</span>
                    </li>
                    <li>
                        <span>[판매중단] 롯데리아 일부 상품 운영중단 안내의 건</span>
                        <span>2025.03.28</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default BannerNotice;
