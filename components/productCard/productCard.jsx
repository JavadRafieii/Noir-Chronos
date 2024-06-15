import Image from "next/image";
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const imageStyleProduct = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    // borderRadius: "14% 14% 14% 0",
}

function ProductCard() {
    return (
        <div className="relative p-5 rounded-3xl bg-[#1b1b1b] border-[1px] border-shellfish group">
            <span className="absolute top-5 left-5 bg-golden font-Roboto-Regular text-dark-gray text-xs py-1 px-3 rounded-xl">Sale</span>
            <figure>
                <Image
                    src={"/images/watch-1.webp"}
                    alt="..."
                    width={0}
                    height={0}
                    sizes='100vw'
                    style={imageStyleProduct}
                />
                <figcaption>
                    <h4 className="font-Roboto-Bold text-white text-sm">Luna Time Watch</h4>
                    <span className="block font-Roboto-Light text-light-gray text-sm">Noir Chronos</span>
                    <div className="flex items-center gap-2 mt-2">
                        <span className="font-Roboto-Medium text-light-gray text-sm sale-line">$159.00 USD</span>
                        <span className="font-Roboto-Medium text-white text-base">$159.00 USD</span>
                    </div>
                </figcaption>
            </figure>
            <div className="px-5 w-full absolute left-0 bottom-24 opacity-0 duration-[.5s] group-hover:bottom-28 group-hover:opacity-100">
                <div className="w-full h-12 flex items-center gap-x-[2px]">
                    <div className="bg-white h-full p-2 flex items-center justify-center rounded-l-md">
                        <RemoveRedEyeOutlinedIcon />
                    </div>
                    <div className="bg-golden h-full w-full flex items-center justify-center gap-2">
                        <ShoppingBasketOutlinedIcon />
                        <span className="font-Roboto-light text-base text-dark-gray">Add to cart</span>
                    </div>
                    <div className="bg-white h-full p-2 flex items-center justify-center rounded-r-md">
                        <FavoriteBorderOutlinedIcon />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;