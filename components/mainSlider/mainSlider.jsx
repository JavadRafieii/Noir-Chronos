import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

function MainSlider() {
    return (
        <Swiper
            navigation={true}
            modules={[Navigation, Autoplay, Pagination]}
            speed={1000}
            className="mainSlider"
            loop={true}
            autoplay={{
                delay: 3500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            }}
            pagination={{
                clickable: true,
            }}
        >
            <SwiperSlide>
                <figure className="relative">
                    <Image
                        src="/images/slide-1.webp"
                        alt="..."
                        priority
                        width={0}
                        height={0}
                        sizes='100vw'
                        style={{ width: "100%", height: "600px", objectFit: "cover" }}
                    />
                    <figcaption className="absolute top-0 left-0 xl:left-[calc(50%-650px)] w-full max-w-[1300px] h-full px-5 lg:px-10 xl:px-20 flex items-center">
                        <div>
                            <h4 className="font-Sacramento-Regular text-4xl sm:text-5xl lg:text-6xl text-golden">Style Ascent</h4>
                            <h1 className="font-Roboto-Bold text-4xl sm:text-5xl lg:text-6xl text-white leading-[3rem] sm:leading-[3.5rem] lg:leading-[4rem] my-3 sm:my-4 lg:my-5">Elevate Your Wrist <br /> Game Now</h1>
                            <button className="bg-white py-3 px-6 rounded-md font-Roboto-light text-sm text-dark-gray">SHOP NOW</button>
                        </div>
                    </figcaption>
                </figure>
            </SwiperSlide>
            <SwiperSlide>
                <figure>
                    <Image
                        src="/images/slide-2.webp"
                        alt="..."
                        priority
                        width={0}
                        height={0}
                        sizes='100vw'
                        style={{ width: "100%", height: "600px", objectFit: "cover" }}
                    />
                    <figcaption className="absolute top-0 left-0 xl:left-[calc(50%-650px)] w-full max-w-[1300px] h-full px-5 lg:px-10 xl:px-20 flex items-center justify-center">
                        <div className="flex flex-col items-center">
                            <h4 className="font-Sacramento-Regular text-4xl sm:text-5xl lg:text-6xl text-golden">Refined Sophistication</h4>
                            <h1 className="font-Roboto-Bold text-4xl sm:text-5xl lg:text-6xl text-white text-center leading-[3rem] sm:leading-[3.5rem] lg:leading-[4rem] my-3 sm:my-4 lg:my-5">Crafted Elegance for <br /> Every Wrist</h1>
                            <button className="bg-white py-3 px-6 rounded-md font-Roboto-light text-sm text-dark-gray">SHOP NOW</button>
                        </div>
                    </figcaption>
                </figure>
            </SwiperSlide>
        </Swiper>
    );
};

export default MainSlider;