import React from "react";
import { Link } from "react-router-dom";
import styles from "./QuickMenu.module.css";

function QuickMenu() {
    return (
        <div className={styles.quickMenu}>
            {/* router 견적서페이지로 */}
            <Link to="/cart" className={styles.online}>
                <span>
                    <img
                        src={`https://www.gsncoupon.co.kr/resources/pc/images/renewal/main_quick_cate_login01.png`}
                        alt=""
                    />
                    <div className={styles.onlineTitle}>온라인견적서</div>
                </span>

                <ul className={styles.onlineText}>
                    <li>모든 상품 조회 및 가격 확인</li>
                    <li>견적 출력 및 다운로드</li>
                    <li>비회원 OK 회원 OK</li>
                </ul>
            </Link>

            <ul className={styles.cateList}>
                <li className={styles.cateItem}>
                    <div className={styles.cateIcon}>
                        <img
                            src={`https://www.gsncoupon.co.kr/resources/pc/images/renewal/main_quick_cate_login03.png`}
                            alt="이용가이드 다운로드"
                        />
                    </div>
                    <div className={styles.title}>이달의 소식</div>
                </li>

                <li className={styles.cateItem}>
                    <div className={styles.cateIcon}>
                        <img
                            src={`https://www.gsncoupon.co.kr/resources/pc/images/renewal/main_quick_cate_login02.png`}
                            alt="자주하는 질문"
                        />
                    </div>
                    <div className={styles.title}>
                        자주하는
                        <br />
                        질문
                    </div>
                </li>

                <li className={styles.cateItem}>
                    <div className={styles.cateIcon}>
                        <img
                            src={`https://www.gsncoupon.co.kr/resources/pc/images/renewal/main_quick_cate_counsel.png`}
                            alt="비회원상담&amp;제휴문의"
                        />
                    </div>
                    <div className={styles.title}>
                        비회원상담
                        <br />· 제휴문의
                    </div>
                </li>

                <li className={styles.cateItem}>
                    <div className={styles.cateIcon}>
                        <img
                            src={`https://www.gsncoupon.co.kr/resources/pc/images/renewal/main_quick_cate03.png`}
                            alt="발송양식 다운로드"
                        />
                    </div>
                    <div className={styles.title}>
                        발송양식
                        <br />
                        다운로드
                    </div>
                </li>

                <li className={styles.cateItem}>
                    <div className={styles.cateIcon}>
                        <img
                            src={`https://www.gsncoupon.co.kr/resources/pc/images/renewal/main_quick_cate_login06.png`}
                            alt="이용가이드 다운로드"
                        />
                    </div>
                    <div className={styles.title}>
                        이용가이드
                        <br />
                        다운로드
                    </div>
                </li>

                <li className={styles.cateItem}>
                    <div className={styles.cateIcon}>
                        <img
                            src={`https://www.gsncoupon.co.kr/resources/pc/images/renewal/main_quick_cate_login09.png`}
                            alt="상품목록 다운로드"
                        />
                    </div>
                    <div className={styles.title}>
                        상품목록
                        <br />
                        다운로드
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default QuickMenu;
