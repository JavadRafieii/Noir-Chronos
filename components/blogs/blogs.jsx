import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import BlogCard from '../blogCard/blogCard';

function Blogs({ blogs }) {
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
            {blogs.map(item => (
                <SwiperSlide key={item.id}>
                    <BlogCard blog={item} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Blogs;