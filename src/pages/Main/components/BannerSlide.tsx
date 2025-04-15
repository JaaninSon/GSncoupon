import styles from "./BannerSlide.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const images = [
    "https://www.gsncoupon.co.kr/imgViewer.do?commonFileHisSeq=89383",
    "https://www.gsncoupon.co.kr/imgViewer.do?commonFileHisSeq=90556",
    "https://www.gsncoupon.co.kr/imgViewer.do?commonFileHisSeq=88405",
    "https://www.gsncoupon.co.kr/imgViewer.do?commonFileHisSeq=90418",
    "https://www.gsncoupon.co.kr/imgViewer.do?commonFileHisSeq=90684",
    "https://www.gsncoupon.co.kr/imgViewer.do?commonFileHisSeq=90556",
    "https://www.gsncoupon.co.kr/imgViewer.do?commonFileHisSeq=92029",
    "https://www.gsncoupon.co.kr/imgViewer.do?commonFileHisSeq=91008",
];

function BannerSlide() {
    return (
        <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation
            className={styles.bannerSwiper}
        >
            {images.map((src, index) => (
                <SwiperSlide key={index} className={styles.swiperSlide}>
                    <img src={src} alt={`slide ${index + 1}`} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default BannerSlide;
