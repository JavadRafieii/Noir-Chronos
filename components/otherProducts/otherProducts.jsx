import ProductCard from "../productCard/productCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function OtherProducts({ products, type }) {

    return (
        <div className="my-10">
            <h2 className="font-Roboto-Bold text-white text-3xl xl:text-4xl text-center mb-10">You may also like</h2>
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
                    if (item.type === type) {
                        return (
                            <SwiperSlide key={item.id}>
                                <ProductCard product={item} />
                            </SwiperSlide>
                        );
                    };
                    return null;
                })}
            </Swiper>
        </div>
    );
};

export default OtherProducts;