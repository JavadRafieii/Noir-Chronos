import Image from "next/image";
import { calculateDiscountedPrice, formatPriceWithComma } from "@/features/features";
import Link from "next/link";

const imageStyleProduct = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
}

function ProductCard({ product }) {

    const { id, name, brand, type, img, sizes, costs: { price, off } } = product;

    return (
        <div className="relative p-5 rounded-3xl bg-[#1b1b1b] border-[1px] border-shellfish group overflow-hidden">
            {off && <span className="absolute top-5 left-5 bg-golden font-Roboto-Regular text-dark-gray text-xs py-1 px-3 rounded-xl">Sale</span>}
            <Link href={`/products/${id}`}>
                <figure>
                    <Image
                        src={`/images/products/${img}-min.png`}
                        alt="..."
                        width={0}
                        height={0}
                        sizes='100vw'
                        loading="lazy"
                        style={imageStyleProduct}
                        className="group-hover:scale-[1.1] group-hover:rotate-6 duration-[.5s]"
                    />
                    <figcaption>
                        <h4 className="font-Roboto-Bold text-white text-lg">{name}</h4>
                        <span className="block font-Roboto-Light text-light-gray text-sm">{brand}</span>
                        <div className="flex items-center gap-2 mt-2">

                            {off
                                ? <span className="font-Roboto-Medium text-light-gray text-sm sale-line">{formatPriceWithComma(price)} $</span>
                                : <span className="font-Roboto-Medium text-white text-base">{formatPriceWithComma(price)} $</span>}
                            {off && <span className="font-Roboto-Medium text-white text-base">{calculateDiscountedPrice(price, off)} $</span>}
                        </div>
                    </figcaption>
                </figure>
            </Link>
        </div>
    );
};

export default ProductCard;