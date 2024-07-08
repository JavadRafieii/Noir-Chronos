import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const texts = [
    "FREE DELIVERY WORLDWIDE.",
    "FREE DELIVERY WORLDWIDE.",
];

const TextSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 20000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        arrows: false,
        pauseOnHover: false
    };

    return (
        <div className="mt-16">
            <Slider {...settings}>
                {texts.map((text, index) => (
                    <div key={index} className="font-Roboto-Light text-2xl sm:text-5xl lg:text-7xl xl:text-8xl 2xl:text-[7rem] text-white text-center">
                        {text}
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default TextSlider;