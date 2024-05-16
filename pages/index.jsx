import MainSlider from "@/components/mainSlider/mainSlider";
import GalleryCard from "@/components/categoryCard/galleryCard";

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
    </main>
  );
};