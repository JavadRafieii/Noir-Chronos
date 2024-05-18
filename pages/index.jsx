import Container from "@/theme/container";
import Image from "next/image";
import MainSlider from "@/components/mainSlider/mainSlider";
import GalleryCard from "@/components/categoryCard/galleryCard";
import { height } from "@mui/system";

const imageStyleSelling1 = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "14% 0 14% 14%",
}
const imageStyleSelling2 = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "14% 14% 14% 0",
}
const imageStyleElite = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "14% 14% 14% 0",
}

export default function HomePage() {
  return (
    <main>
      {/* Main slider */}
      <MainSlider />
      {/* Main slider */}

      {/* Gallery section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div>
          <GalleryCard
            img={"/images/banner-1.webp"}
            title={"Luxe Tock"}
            subTitle={"Women's Watches"}
            content={"Seconds Spark, Style Ignites."}
          />
        </div>
        <div>
          <GalleryCard
            img={"/images/banner-2.jpeg"}
            title={"Bold Pulse"}
            subTitle={"Men's Watches"}
            content={"Precision Beyond Measure, Style That Lasts Always."}
          />
        </div>
        <div>
          <GalleryCard
            img={"/images/banner-3.webp"}
            title={"Swift Chic"}
            subTitle={"Unisex Watchwes"}
            content={"Style in Motion, Grace in Every Second."}
          />
        </div>
      </div>
      {/* Gallery section */}

      {/* Best selling section */}
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-20">
          <div>
            <div className="h-full flex flex-col justify-center items-start gap-5">
              <h4 className="font-Sacramento-Regular text-golden text-4xl xl:text-5xl">Best Selling</h4>
              <h3 className="font-Roboto-Bold text-white text-3xl xl:text-4xl">Discounts up to 20% are waiting for you…</h3>
              <p className="font-Roboto-Medium text-light-gray text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque beatae quia quidem neque, voluptate laborum.</p>
              <button className="bg-golden py-3 px-6 rounded-md font-Roboto-light text-sm text-dark-gray duration-[.5s] hover:bg-white">Explore Now</button>
            </div>
          </div>
          <div>
            <figure className="relative">
              <div className="w-[60%] relative z-0 top-10">
                <Image
                  src={"/images/best-selling-2.webp"}
                  alt="..."
                  width={0}
                  height={0}
                  sizes='100vw'
                  style={imageStyleSelling2}
                />
              </div>
              <div className="w-[60%] absolute right-0 top-0">
                <Image
                  src={"/images/best-selling-1.jpeg"}
                  alt="..."
                  width={0}
                  height={0}
                  sizes='100vw'
                  style={imageStyleSelling1}
                />
              </div>
            </figure>
          </div>
        </div>
      </Container>
      {/* Best selling section */}

      {/* Elite elegance section */}
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
          <div className="order-2 md:order-1">
            <figure>
              <Image
                src={"/images/elite-elegance.webp"}
                alt="..."
                width={0}
                height={0}
                sizes='100vw'
                style={imageStyleElite}
              />
            </figure>
          </div>
          <div className="order-1 md:order-2">
            <div className="h-full flex flex-col justify-center items-start gap-5">
              <h4 className="font-Sacramento-Regular text-golden text-4xl xl:text-5xl">Elite Elegance</h4>
              <h3 className="font-Roboto-Bold text-white text-3xl xl:text-4xl">Timepieces, Beyond Imagination</h3>
              <p className="font-Roboto-Medium text-light-gray text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque beatae quia quidem neque, voluptate laborum.</p>
              <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row sm:items-center md:items-start lg:items-center gap-3">
                <button className="bg-golden py-3 px-6 rounded-md font-Roboto-light text-sm text-dark-gray duration-[.5s] hover:bg-white">SHOP MEN'S WATCHES</button>
                <button className="bg-dark-gray py-3 px-6 rounded-md font-Roboto-light text-sm text-white border duration-[.5s] hover:bg-white hover:text-dark-gray">SHOP WOMEN'S WATCHES</button>
              </div>
            </div>
          </div>
        </div>
      </Container>
      {/* Elite elegance section */}
    </main>
  );
};