import Container from "@/theme/container";
import { formatPriceWithComma, calculateDiscountedPrice } from "@/features/features";
import SizeAndNumber from "@/components/size-number/sizeAndNumber";
import GalleryZoom from "@/components/galleryZoom/galleryZoom";
import Accordions from "@/components/accordion/accordion";
import ProductTab from "@/components/tab/tab";
import OtherProducts from "@/components/otherProducts/otherProducts";
import Swal from 'sweetalert2';
import FavoriteSection from "@/components/favoriteSection/favoriteSection";
import { useSelector, useDispatch } from "react-redux";
import { defaultStateOfProductAddition } from "@/reduxConfiguration/basketSlice";
import CircularProgress from '@mui/material/CircularProgress';

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

    const { id, name, brand, type, img, sizes, costs: { price, off }, favorite } = product;

    const dispatch = useDispatch();

    const status = useSelector(state => state.cart.productAdditionStatus);
    const checked = useSelector(state => state.wishlist.entities[id]?.favorite || false);
    const wishlisStatus = useSelector(state => state.wishlist.status);
    const actionError = useSelector(state => state.wishlist.actionError);

    if (status === "added" || status === "rejected") {
        dispatch(defaultStateOfProductAddition());
    };

    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });

    if (status === "added") {
        Toast.fire({
            icon: "success",
            title: "The product added."
        });
    } else if (status === "rejected") {
        Toast.fire({
            icon: "warning",
            title: "The product is available."
        });
    };

    if (actionError) {
        Toast.fire({
            icon: "warning",
            title: "Please try again"
        });
    };

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
                            <SizeAndNumber sizes={sizes} product={product} />
                            <span className="font-Roboto-Light text-light-gray text-base flex items-center gap-x-1 mt-5 cursor-pointer">
                                {wishlisStatus === "idle" ?
                                    <FavoriteSection
                                        checked={checked}
                                        product={product}
                                    /> :
                                    <CircularProgress sx={{ color: "#fff" }} size={"1.1rem"} />
                                }
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