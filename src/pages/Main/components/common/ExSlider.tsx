import { useEffect, useState } from "react";
import styles from "./ExSlider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

interface Product {
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

interface SliderProps {
    title?: string;
    type: "best" | "discount";
}

function ExSlider({ type }: SliderProps) {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch("/products.json");
                if (!res.ok) throw new Error("ExSlider 서버 응답 실패");
                const data: Product[] = await res.json();
                setProducts(data);
            } catch (error) {
                console.error("ExSlider 상품 데이터를 불러오는데 실패했습니다.", error);
            }
        };

        fetchProducts();
    }, []);

    const bestSelling = [...products].slice(0, 10);

    console.log("bestSelling:", bestSelling);

    const bestDiscount = [...products]
        .sort((a, b) => b.discount_rate - a.discount_rate)
        .slice(0, 10);

    console.log("bestDiscount:", bestDiscount);

    return (
        <div>
            <Swiper
                //  modules={[Autoplay]}
                slidesPerView={4}
                spaceBetween={16}
                loop={true}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                className={styles.productSlider}
                /*  breakpoint={{
                    0: {
                        slidesPerView: 2,
                        spaceBetween: 12,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 16,
                    },
                }} */
            >
                {type === "best" &&
                    bestSelling.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className={styles.productCard}>
                                <img src={item.image} alt={item.coupon_name} />
                                <div className={styles.productInfo}>
                                    <p>{item.coupon_name}</p>
                                    <strong>{item.price.toLocaleString()}원</strong>
                                    <span className={styles.discount}>-{item.discount_rate}%</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}

                {type === "discount" &&
                    bestDiscount.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className={styles.productCard}>
                                <img src={item.image} alt={item.coupon_name} />
                                <div className={styles.productInfo}>
                                    <p>{item.coupon_name}</p>
                                    <strong>{item.price.toLocaleString()}원</strong>
                                    <span className={styles.discount}>-{item.discount_rate}%</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
    );
}

export default ExSlider;
