import Image from 'next/image';
import Container from '@/theme/container';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import LoopOutlinedIcon from '@mui/icons-material/LoopOutlined';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';

const image1 = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "14% 0 14% 14%",
}
const image2 = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "14% 14% 14% 0",
}

const image3 = {
    width: "100%",
    height: "400px",
    objectFit: "cover",
}

function AboutUsPage() {
    return (
        <>
            <figure className="relative">
                <Image
                    src="/images/slide-2-min.png"
                    alt="..."
                    priority
                    width={0}
                    height={0}
                    sizes='100vw'
                    style={{ width: "100%", height: "400px", objectFit: "cover" }}
                />
                <figcaption className="w-full h-full absolute bg-[#0000008a] left-0 top-0 flex items-center justify-center">
                    <div className="w-full sm:w-2/3 lg:w-1/3 px-5">
                        <h4 className="font-Sacramento-Regular text-4xl sm:text-5xl lg:text-6xl text-golden text-center" data-aos="fade-down">Our Story</h4>
                        <p className="font-Roboto-Bold text-white text-xl text-center my-3 sm:my-4 lg:my-5" data-aos="fade-up">
                            It all started with a vision – a vision to create a sanctuary for watch enthusiasts and style aficionados alike.
                        </p>
                    </div>
                </figcaption>
            </figure>
            <Container>
                <div className="py-10">
                    <span className="block font-Roboto-Light text-xl text-light-gray text-center" data-aos="fade-up">WELCOME TO NOIR CHRONOS</span>
                    <h2 className="font-Roboto-Bold text-3xl sm:text-4xl lg:text-5xl text-white text-center leading-[3rem] sm:leading-[3.5rem] lg:leading-[4rem] my-3 sm:my-4 lg:my-5" data-aos="fade-up">ONE STORE. SINCE 1930</h2>
                    <p className="font-Roboto-Medium text-light-gray text-base text-center lg:w-3/4 mx-auto" data-aos="fade-up">
                        From its humble family origins, our watch brand has transformed into the premier sanctuary for enthusiasts around the globe, offering an unparalleled selection for every taste and preference.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-10 pb-20">
                    <div>
                        <div className="h-full flex flex-col justify-center items-start gap-5">
                            <h3 className="font-Roboto-Bold text-white text-3xl xl:text-4xl" data-aos="fade-up">Beyond the Game</h3>
                            <p className="font-Roboto-Medium text-light-gray text-base" data-aos="fade-up">
                                For us, it's beyond just watches; it's about the lifestyle it embodies. Whether you're a design aficionado or a seasoned timepiece curator, we possess the elements to enhance your personal style. From statement pieces to everyday essentials, we aim to be your ultimate destination for all things watches and adornment.
                            </p>
                        </div>
                    </div>
                    <div>
                        <figure className="relative">
                            <div className="w-[60%] relative z-0 top-10" data-aos="fade-right">
                                <Image
                                    src={"/images/banner-2-min.png"}
                                    alt="..."
                                    width={0}
                                    height={0}
                                    sizes='100vw'
                                    loading="lazy"
                                    style={image2}
                                />
                            </div>
                            <div className="w-[60%] absolute right-0 top-0" data-aos="fade-left">
                                <Image
                                    src={"/images/elite-elegance-min.png"}
                                    alt="..."
                                    width={0}
                                    height={0}
                                    sizes='100vw'
                                    loading="lazy"
                                    style={image1}
                                />
                            </div>
                        </figure>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 py-10">
                    <div className="flex flex-col justify-center items-center" data-aos="fade-up">
                        <LocalShippingOutlinedIcon sx={{ color: "#fff", fontSize: 70 }} />
                        <h4 className="font-Roboto-Bold text-white text-lg my-2">FREE SHIPPING</h4>
                        <p className="font-Roboto-light text-white text-base text-center">FREE Shipping On All Orders Over $100!</p>
                    </div>
                    <div className="flex flex-col justify-center items-center" data-aos="fade-up">
                        <HeadphonesOutlinedIcon sx={{ color: "#fff", fontSize: 70 }} />
                        <h4 className="font-Roboto-Bold text-white text-lg my-2">SUPPORT 24/7</h4>
                        <p className="font-Roboto-light text-white text-base text-center">Contact us 24 hours a day, 7 days a week.</p>
                    </div>
                    <div className="flex flex-col justify-center items-center" data-aos="fade-up">
                        <LoopOutlinedIcon sx={{ color: "#fff", fontSize: 70 }} />
                        <h4 className="font-Roboto-Bold text-white text-lg my-2">30 DAYS RETURN</h4>
                        <p className="font-Roboto-light text-white text-base text-center">Return it within 30 days for an exchange.</p>
                    </div>
                    <div className="flex flex-col justify-center items-center" data-aos="fade-up">
                        <PaymentOutlinedIcon sx={{ color: "#fff", fontSize: 70 }} />
                        <h4 className="font-Roboto-Bold text-white text-lg my-2">SECURE PAYMENT</h4>
                        <p className="font-Roboto-light text-white text-base text-center">We ensure secure payment with PEV.</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10 py-10">
                    <div data-aos="fade-right">
                        <Image
                            src={"/images/slide-2-min.png"}
                            alt="..."
                            width={0}
                            height={0}
                            sizes='100vw'
                            loading="lazy"
                            style={image3}
                        />
                    </div>
                    <div>
                        <div className="h-full flex flex-col justify-center items-start gap-5">
                            <h3 className="font-Roboto-Bold text-white text-3xl xl:text-4xl" data-aos="fade-up">Future Goals</h3>
                            <p className="font-Roboto-Medium text-light-gray text-base" data-aos="fade-up">
                                Our journey extends beyond the elegance of our watches. We are committed to evolving with the dynamic trends in timepieces and adornment, leading in design innovations, and consistently enriching our thoughtfully curated collections. As we gaze towards the future, we cordially invite you to join us in this enchanting odyssey, where the passion for crafting exquisite timepieces knows no boundaries.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default AboutUsPage;