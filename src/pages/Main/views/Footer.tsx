import styles from "./Footer.module.css";

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerInner}>
                <div className={styles.topSection}>
                    <img src="/assets/NavImg/ft_logo.png" alt="GS엠비즈" className={styles.logo} />
                    <nav className={styles.linkNav}>
                        <span>회사소개</span>
                        <span>이용약관</span>
                        <span>
                            <b>개인정보처리방침</b>
                        </span>
                        <span>사이트맵</span>
                        <span>패밀리 사이트</span>
                    </nav>
                </div>

                <div className={styles.middleSection}>
                    <div className={styles.infoBox}>
                        <h6>COMPANY INFO</h6>
                        <p>GS엠비즈주식회사 | 대표이사 김범수</p>
                        <p>[07207] 서울 영등포구 양평로21길 26, 아이에스비즈타워 24층</p>
                        <p>
                            <b>사업자등록번호</b> 214-81-65071
                        </p>
                        <p>
                            <b>통신판매업신고</b> 2019-서울영등포-0198
                        </p>
                        <p>
                            <b>전자금융업신고</b> 선불전자지급수단 발행 및 관리업 02-002-00125
                        </p>
                        <p>
                            <b>개인정보보호 책임자</b> 남택민
                        </p>
                        <p>T. 1544-1151</p>
                        <p>F. 02-490-9321</p>
                    </div>
                </div>
                <div className={styles.rightSection}>
                    <div className={styles.infoBox}>
                        <p>
                            <b>제휴문의</b> bahng@gsmbiz.co.kr
                        </p>
                        <br />
                        <p>
                            <b>예금주</b> GS엠비즈주식회사
                        </p>
                        <p>신한은행 562075-97-328431</p>
                        <br />

                        <h6 className={styles.subTitle}>CS CENTER</h6>
                        <p className={styles.phone}>1544-1151</p>
                        <p>상담시간 09:00~17:30 (주말/공휴일 휴무)</p>
                    </div>
                </div>

                <div className={styles.noticeSection}>
                    <strong>선불전자지급수단 상환채무보증 안내</strong>
                    <p>
                        GS&쿠폰은 고객님께서 선불 충전하신 금액에 대해 '선불전자지급수단
                        상환채무보증' 계약을 체결하여 안전거래를 보장합니다.
                    </p>
                    <span>서비스 가입사실 확인 ▶</span>
                </div>

                <div className={styles.copyRight}> Copyright ⓒ GSMbiz. All rights reserved.</div>
            </div>
        </footer>
    );
}

export default Footer;
