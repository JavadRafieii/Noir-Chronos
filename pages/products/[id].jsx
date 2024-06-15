import Container from "@/theme/container";
import { formatPriceWithComma, calculateDiscountedPrice } from "@/features/features";
// import RadioSizes from "@/components/radioSizes/radioSizes";
// import NumberInput from "@/components/numberInput/numberInput";
import SizeAndNumber from "@/components/size-number/sizeAndNumber";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import GalleryZoom from "@/components/galleryZoom/galleryZoom";
import Accordions from "@/components/accordion/accordion";
import ProductTab from "@/components/tab/tab";
import OtherProducts from "@/components/otherProducts/otherProducts";

export async function getStaticProps({ params }) {

    const { id } = params;

    const res1 = await fetch(`http://localhost:8000/Products/${id}`);
    const product = await res1.json();
    const res2 = await fetch("http://localhost:8000/Products");
    const products = await res2.json();

    return {
        props: {
            product,
            products,
        },
    };
};

export async function getStaticPaths() {

    const res = await fetch('http://localhost:8000/Products');
    const products = await res.json();

    const paths = products.map(item => (
        {
            params: {
                id: String(item.id)
            },
        }
    ));

    return { paths, fallback: true };
};

function SingleProductPage({ product, products }) {

    const { id, name, brand, type, img, sizes, costs: { price, off } } = product;

    return (
        <>
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10 my-10">
                    <div>
                        <div className="border-[1px] border-[#ffffff14] sticky top-10">
                            <GalleryZoom img={img} alt={name} />
                        </div>
                    </div>
                    <div>
                        <div>
                            <span className="block font-Roboto-Light text-light-gray text-xs mb-2">{brand}</span>
                            <h1 className="font-Roboto-Bold text-white text-3xl lg:text-4xl">{name}</h1>
                            <div className="flex items-start flex-col gap-2 my-5 relative">
                                {off ?
                                    <span className="font-Roboto-Medium text-light-gray text-sm sale-line">${formatPriceWithComma(price)}
                                        <span className="absolute -top-1 left-20 bg-golden font-Roboto-Regular text-dark-gray text-xs py-1 px-3 rounded-xl">Sale</span>
                                    </span> :
                                    <span className="font-Roboto-Medium text-white text-lg">${formatPriceWithComma(price)}</span>}
                                {off && <span className="font-Roboto-Medium text-white text-lg">${calculateDiscountedPrice(price, off)}</span>}
                            </div>
                            <SizeAndNumber sizes={sizes} />
                           
                            <span className="font-Roboto-Light text-light-gray text-base flex items-center gap-x-1 mt-5 cursor-pointer">
                                <FavoriteBorderIcon />
                                Add to wishlist
                            </span>
                        </div>
                        <Accordions />
                    </div>
                </div>
                <ProductTab />
            </Container>
            <OtherProducts
                products={products}
                type={type}
            />
        </>
    );
};

export default SingleProductPage;