import Image from "next/image";

function BannerCard({ img, title, content, link }) {
    return (
        <div data-aos="fade-up">
            <figure className="relative">
                <Image
                    src={img}
                    alt="..."
                    loading="lazy"
                    width={0}
                    height={0}
                    sizes='100vw'
                    style={{ width: "100%", height: "400px", objectFit: "cover" }}
                />
                <figcaption className="px-5 py-10 xl:p-10 absolute top-0 left-0 w-full h-full flex flex-col justify-end items-start bg-[#00000040]">
                    <h4 className="font-Sacramento-Regular text-4xl xl:text-5xl text-golden mb-3" data-aos="fade-up">{title}</h4>
                    <p className="font-Roboto-Medium text-base text-white mb-5" data-aos="fade-up">{content}</p>
                    <button className="bg-white py-3 px-6 rounded-md font-Roboto-light text-sm text-dark-gray duration-[.5s] hover:bg-golden" data-aos="fade-up">Explore</button>
                </figcaption>
            </figure>
        </div>
    );
};

export default BannerCard;