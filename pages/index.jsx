import Container from "@/theme/container";
import Image from "next/image";
import MainSlider from "@/components/mainSlider/mainSlider";
import GalleryCard from "@/components/galleryCard/galleryCard";
import TrendingProducts from "@/components/trendingProducts/trendingProducts";
import BannerCard from "@/components/bannerCard/bannerCard";
import LimitedProducts from "@/components/limitedProducts/limitedProducts";
import Blogs from "@/components/blogs/blogs";
import TextSlider from "@/components/textSlider/textSlider";
import Link from "next/link";

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

export async function getStaticProps() {
  const res1 = await fetch('https://my-json-server.typicode.com/JavadRafieii/database/products');
  const products = await res1.json();
  const res2 = await fetch('https://my-json-server.typicode.com/JavadRafieii/database/blog');
  const blogs = await res2.json();
  return {
    props: {
      products,
      blogs,
    },
  };
};

export default function HomePage({ products, blogs }) {
  return (
    <main>
      {/* Main slider */}
      <MainSlider />
      {/* Main slider */}

      {/* Gallery section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div>
          <GalleryCard
            img={"/images/banner-1-min.png"}
            title={"Luxe Tock"}
            subTitle={"Women's Watches"}
            content={"Seconds Spark, Style Ignites."}
          />
        </div>
        <div>
          <GalleryCard
            img={"/images/banner-2-min.png"}
            title={"Bold Pulse"}
            subTitle={"Men's Watches"}
            content={"Precision Beyond Measure, Style That Lasts Always."}
          />
        </div>
        <div>
          <GalleryCard
            img={"/images/banner-3-min.png"}
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
              <h4 className="font-Sacramento-Regular text-golden text-4xl xl:text-5xl" data-aos="fade-up">Best Selling</h4>
              <h3 className="font-Roboto-Bold text-white text-3xl xl:text-4xl" data-aos="fade-up">Discounts up to 20% are waiting for you…</h3>
              <p className="font-Roboto-Medium text-light-gray text-base" data-aos="fade-up">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque beatae quia quidem neque, voluptate laborum.</p>
              <Link href={"/products"}>
                <button className="bg-golden py-3 px-6 rounded-md font-Roboto-light text-sm text-dark-gray duration-[.5s] hover:bg-white" data-aos="fade-up">Explore Now</button>
              </Link>
            </div>
          </div>
          <div>
            <figure className="relative">
              <div className="w-[60%] relative z-0 top-10" data-aos="fade-right" >
                <Image
                  src={"/images/best-selling-2-min.png"}
                  alt="..."
                  width={0}
                  height={0}
                  sizes='100vw'
                  loading="lazy"
                  style={imageStyleSelling2}
                />
              </div>
              <div className="w-[60%] absolute right-0 top-0" data-aos="fade-left">
                <Image
                  src={"/images/best-selling-1-min.png"}
                  alt="..."
                  width={0}
                  height={0}
                  sizes='100vw'
                  loading="lazy"
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
          <div className="order-2 md:order-1" data-aos="fade-right">
            <figure>
              <Image
                src={"/images/elite-elegance-min.png"}
                alt="..."
                width={0}
                height={0}
                sizes='100vw'
                loading="lazy"
                style={imageStyleElite}
              />
            </figure>
          </div>
          <div className="order-1 md:order-2">
            <div className="h-full flex flex-col justify-center items-start gap-5">
              <h4 className="font-Sacramento-Regular text-golden text-4xl xl:text-5xl" data-aos="fade-up">Elite Elegance</h4>
              <h3 className="font-Roboto-Bold text-white text-3xl xl:text-4xl" data-aos="fade-up">Timepieces, Beyond Imagination</h3>
              <p className="font-Roboto-Medium text-light-gray text-base" data-aos="fade-up">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque beatae quia quidem neque, voluptate laborum.</p>
              <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row sm:items-center md:items-start lg:items-center gap-3">
                <Link href={"/products"}>
                  <button className="bg-golden py-3 px-6 rounded-md font-Roboto-light text-sm text-dark-gray duration-[.5s] hover:bg-white" data-aos="fade-up">SHOP MEN'S WATCHES</button>
                </Link>
                <Link href={"/products"}>
                  <button className="bg-dark-gray py-3 px-6 rounded-md font-Roboto-light text-sm text-white border duration-[.5s] hover:bg-white hover:text-dark-gray" data-aos="fade-up">SHOP WOMEN'S WATCHES</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
      {/* Elite elegance section */}

      {/* Trending products section */}
      <div className="py-10">
        <Container>
          <h4 className="font-Sacramento-Regular text-golden text-4xl xl:text-5xl text-center" data-aos="fade-up">Best Selling</h4>
          <h3 className="font-Roboto-Bold text-white text-3xl xl:text-4xl text-center my-5" data-aos="fade-up">TRENDING PRODUCTS</h3>
        </Container>
        <TrendingProducts products={products} />
      </div>
      {/* Trending products section */}

      {/* Banner section */}
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <BannerCard
              img={"/images/banner-4-min.png"}
              title={"Harmony Hours"}
              content={"Swift Seconds, Bold Style, Timeless Sophistication."}
            />
          </div>
          <div>
            <BannerCard
              img={"/images/banner-5-min.png"}
              title={"Silent Glam"}
              content={"Chic Moments, Timeless Elegance, Your Timepiece Journey."}
            />
          </div>
        </div>
      </Container>
      {/* Banner section */}

      {/* Text slider */}
      <TextSlider />
      {/* Text slider */}

      {/* 360° Collection section */}
      <div className="pb-10 pt-16">
        <Container>
          <h4 className="font-Sacramento-Regular text-golden text-4xl xl:text-5xl text-center" data-aos="fade-up">360° Collection</h4>
          <h3 className="font-Roboto-Bold text-white text-3xl xl:text-4xl text-center mt-5 mb-10" data-aos="fade-up">LIMITED EDITION</h3>
        </Container>
        <LimitedProducts products={products} />
      </div>
      {/* 360° Collection section */}

      {/* Blog section */}
      <Container>
        <div className="py-10">
          <h4 className="font-Sacramento-Regular text-golden text-4xl xl:text-5xl text-center" data-aos="fade-up">Happenings Around</h4>
          <h3 className="font-Roboto-Bold text-white text-3xl xl:text-4xl text-center mt-5 mb-10" data-aos="fade-up">Blog posts</h3>
          <Blogs blogs={blogs} />
        </div>
      </Container>
      {/* Blog section */}

    </main>
  );
};