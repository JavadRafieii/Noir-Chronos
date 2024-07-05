import { useSelector } from "react-redux";
import { selectProductById } from "@/reduxConfiguration/wishlistSlice";
import { calculateDiscountedPrice, formatPriceWithComma } from "@/features/features";
import Link from "next/link";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from "react-redux";
import { deleteFavorite } from "@/reduxConfiguration/wishlistSlice";

function WishlistCard({ id }) {

    const product = useSelector(state => selectProductById(state, id));

    const { name, brand, type, img, sizes, costs: { price, off }, favorite } = product;

    const dispatch = useDispatch();

    const handelDeleteFavorite = () => {
        dispatch(deleteFavorite(id));
    };

    return (
        <li className="grid grid-cols-12">
            <div className="col-span-4">
                <Link href={`/products/${id}`}>
                <img src={`/images/products/${img}.png`} alt="..." />
                </Link>
            </div>
            <div className="col-span-6 flex flex-col justify-center">
                <Link href={`/products/${id}`}>
                <p className="font-Roboto-Bold text-base text-gray">{name}</p>
                </Link>
                {off
                    ? <span className="font-Roboto-Medium text-light-gray text-sm sale-line w-fit">${formatPriceWithComma(price)}</span>
                    : <span className="font-Roboto-Medium text-white text-base">${formatPriceWithComma(price)}</span>}
                {off && <span className="font-Roboto-Medium text-white text-base">${calculateDiscountedPrice(price, off)}</span>}
            </div>
            <div className="col-span-2 flex items-center justify-center">
                <IconButton onClick={handelDeleteFavorite}>
                    <DeleteIcon sx={{ color: "#c4c4c4"}} />
                </IconButton>
            </div>
        </li>
    );
};

export default WishlistCard;