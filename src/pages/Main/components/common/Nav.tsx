import React from "react";
import { useRecoilState } from "recoil";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";
import { loginState } from "../../../../constants/loginState";
import AuthBtn from "./AuthBtn";

function Nav() {
    const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState);
    // console.log("isLoggedIn:", isLoggedIn);  // data 확인용

    return (
        <>
            <img
                className={styles.mainBanner}
                src={`https://www.gsncoupon.co.kr/file/imgTopBannerViewer.do`}
            />
            <div className={styles.headerContainer}>
                <div className={styles.headerMenu}>
                    <span>GS&쿠폰 처음이세요?</span>
                    {isLoggedIn ? (
                        <>
                            <span
                                className={styles.logoutText}
                                onClick={() => setIsLoggedIn(false)}
                            >
                                로그아웃
                            </span>
                            <span>|</span>
                            <span>고객센터</span>
                        </>
                    ) : (
                        <>
                            <span>고객센터</span>
                        </>
                    )}
                </div>

                <div className={styles.headerContents}>
                    <h1 className={styles.logo}>
                        <Link to="/">
                            <img src="/assets/NavImg/hd_logo.png" />
                        </Link>
                    </h1>
                    <div className={styles.searchHeader}>
                        <input type="text" className={styles.input} />
                        <button className={styles.searchBtn}></button>
                    </div>

                    {isLoggedIn ? (
                        <ul className={styles.userInfo}>
                            {/* 추후 router 연동시 Link 태그 추가 예정입니다. */}
                            <li>
                                <div className={styles.userInfoIcon}>
                                    <img src="/assets/NavImg/hd_mypage.png" />
                                    마이페이지
                                </div>
                            </li>
                            <li>
                                <Link to="/cart" className={styles.userInfoIcon}>
                                    <img src="/assets/NavImg/hd_cart.png" />
                                    장바구니
                                </Link>
                            </li>
                            <li>
                                <div className={styles.userInfoIcon}>
                                    <img src="/assets/NavImg/hd_online.png" />
                                    온라인견적서
                                </div>
                            </li>
                        </ul>
                    ) : (
                        <div className={styles.userInfo}>
                            <div className={styles.loginBox}>
                                <AuthBtn label="로그인" onClick={() => setIsLoggedIn(true)} />
                                <AuthBtn label="회원가입" />
                            </div>
                        </div>
                    )}
                </div>

                {/* gnb 는 경로설정이 안되어 span 으로 감쌌습니다. 경로 설정하게 되면 Link 태그로 변경 */}
                <div className={styles.headerGnb}>
                    <div className={styles.allCategory}>
                        <div>
                            전체상품보기
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <ul className={styles.categoryList}>
                        <li>
                            <Link to="/detail/category">
                                <span>커피/음료</span>
                            </Link>
                        </li>
                        <li>
                            <span>상품권</span>
                        </li>
                        <li>
                            <span>배달/페이</span>
                        </li>
                        <li>
                            <span>편의점/마트</span>
                        </li>
                        <li>
                            <span>치킨/피자/버거</span>
                        </li>
                        <li>
                            <span>빵/아이스크림</span>
                        </li>
                        <li>
                            <span>주유/결합쿠폰</span>
                        </li>
                        <li>
                            <span>문화/생활</span>
                        </li>
                        <li>
                            <span>외식</span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Nav;
