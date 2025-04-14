import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import styles from "./LocationCouponSlide.module.css";
import { useUserRegion } from "../hooks/useUserRegion";
import { PiMapPinAreaFill } from "react-icons/pi";

interface Coupon {
    id: number;
    coupon_name: string;
    brand_name: string;
    price: number;
    category: string;
    discount_rate: number;
    image: string;
    brand_image: string;
    expiry_date: string;
    location: string;
}

const MapIcon = PiMapPinAreaFill as unknown as React.FC<{ size?: number }>;

function LocationCouponSlide() {
    const { region, isFallback } = useUserRegion();
    const [coupons, setCoupons] = useState<Coupon[]>([]);

    useEffect(() => {
        if (!region) return;

        const fetchCoupons = async () => {
            try {
                const res = await fetch("/products.json");
                const data: Coupon[] = await res.json();
                const filteredCoupons = data.filter((coupon) => coupon.location === region);

                setCoupons(filteredCoupons);
                console.log("filteredCoupons", filteredCoupons);
            } catch (error) {
                console.error("쿠폰 데이터를 불러오는데 실패하였습니다.", error);
            }
        };

        fetchCoupons();
    }, [region]);

    return (
        <div className={styles.wrapper}>
            <h5 className={styles.titleWrap}>
                <span className={styles.locationTag}>
                    <MapIcon size={22} />
                    &nbsp;
                    {region || "부산"}
                </span>
                <span className={styles.title}>지역 추천 쿠폰</span>
            </h5>
            {isFallback && (
                <p className={styles.notice}>
                    * 위치 정보를 확인할 수 없어 <strong>부산</strong> 기준으로
                    <br /> 추천 쿠폰이 보여집니다.
                </p>
            )}

            <div className={styles.sliderWrap}>
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={12}
                    slidesPerView={2}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    loop={true}
                    grabCursor={true}
                >
                    {coupons.map((coupon) => (
                        <SwiperSlide key={coupon.id} className={styles.slide}>
                            <Link
                                to={`/detail/product_detail/${coupon.id}`}
                                className={styles.couponCard}
                            >
                                <img src={coupon.image} alt={coupon.coupon_name} />
                                <div className={styles.couponText}>
                                    <p>{coupon.coupon_name}</p>
                                    <span className={styles.brand}>{coupon.brand_name}</span>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default LocationCouponSlide;
