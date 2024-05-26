import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ProductCard from '../productCard/productCard';

function LimitedProducts({ products }) {
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
            }}
        >
            {products.map(item => {
                if (item.limited) {
                    return (
                        <SwiperSlide key={item.id}>
                            <ProductCard product={item} />
                        </SwiperSlide>
                    );
                };
                return null
            })}
        </Swiper>
    );
};

export default LimitedProducts;