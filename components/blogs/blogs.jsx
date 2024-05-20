import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import BlogCard from '../blogCard/blogCard';

function Blogs() {
    return ( 
        <Swiper
            slidesPerView={1.2}
            spaceBetween={15}
            breakpoints={{
                640: {
                    slidesPerView: 1.5,
                },
                1024: {
                    slidesPerView: 3,
                },
            }}
        >
            <SwiperSlide>
                <BlogCard />
            </SwiperSlide>
            <SwiperSlide>
                <BlogCard />
            </SwiperSlide>
            <SwiperSlide>
                <BlogCard />
            </SwiperSlide>
        </Swiper>
     );
};

export default Blogs;