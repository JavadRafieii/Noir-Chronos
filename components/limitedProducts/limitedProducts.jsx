import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ProductCard from '../productCard/productCard';

function LimitedProducts() {
    return ( 
        <Swiper
            slidesPerView={1.5}
            spaceBetween={20}
            breakpoints={{
                640: {
                    slidesPerView: 2.5,
                },
                1024: {
                    slidesPerView: 3.5,
                },
                1280: {
                    slidesPerView: 4.5,
                }
            }}
        >
            <SwiperSlide>
                <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
                <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
                <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
                <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
                <ProductCard />
            </SwiperSlide>
        </Swiper>
     );
};

export default LimitedProducts;