import styles from "./Section.module.css";
import QuickList from "../components/common/QuickList";
import QuickMenu from "../components/QuickMenu";
import BannerSlide from "../components/BannerSlide";
import LocationCouponSlide from "../components/LocationCouponSlide";
import BannerNotice from "../components/BannerNotice";
import TitleMotion from "../components/common/TitleMotion";
import ExSlider from "../components/common/ExSlider";

function Section() {
    return (
        <div className={styles.main}>
            <QuickList />

            <div className={styles.sectionContainer}>
                <section className={styles.mainSection}>
                    <BannerSlide />

                    {/* component 연결 */}
                    <div className={styles.mainProduct}>
                        <div className={styles.mainTitle}>
                            <TitleMotion title="가장 많이 구매" color="green" />
                        </div>
                    </div>

                    <ul className={styles.productList}>
                        {/* 작업하신 상품 컴포넌트 불러올 예정입니다. */}
                        <ExSlider type="best" />
                    </ul>

                    <div className={styles.mainProduct}>
                        <div className={styles.mainTitle}>
                            <TitleMotion title="가장 많이 할인" color="red" />
                        </div>
                    </div>

                    <ul className={styles.productList}>
                        {/* 작업하신 상품 컴포넌트 불러올 예정입니다. */}
                        <ExSlider type="discount" />
                    </ul>

                    <BannerNotice />
                </section>

                <aside className={styles.mainAside}>
                    <div className={styles.sticky}>
                        <div className={styles.locationCoupon}>
                            <LocationCouponSlide />
                        </div>

                        <div className={styles.youtubeBox}>
                            <iframe
                                src="https://www.youtube.com/embed/tegFNGuzpTs?si=HCeDdtynBU66fH95?controls=0"
                                title="GS&쿠폰 사용설명서"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>

                        <QuickMenu />
                    </div>
                </aside>
            </div>
        </div>
    );
}

export default Section;
