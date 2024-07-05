import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import NumberInputCart from '../numberInputCart/numberInputCart';
import { useState, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectProductById } from '@/reduxConfiguration/basketSlice';
import { deleteProduct } from '@/reduxConfiguration/basketSlice';
import { calculateDiscountedPrice, calculateFinalPrice, formatPriceWithComma } from '@/features/features';
import { updateProductQuantity } from '@/reduxConfiguration/basketSlice';

function CartCard({ id }) {

    const product = useSelector((state) => selectProductById(state, id));

    const { name, brand, type, img, sizes, costs: { price, off }, size, quantity } = product;

    const ref = useRef(null);

    const [productQuantity, setProductQuantity] = useState(quantity);

    const dispatch = useDispatch();

    const handelChangeNumber = () => {
        let productQuantity = ref.current.lastChild.value;
        setProductQuantity(productQuantity);
        dispatch(updateProductQuantity({ id, productQuantity }));
    };

    const handelDeleteProduct = () => dispatch(deleteProduct(id));

    return (
        <li className="grid grid-cols-12 gap-4 mb-10 last-of-type:mb-0">
            <div className="col-span-4 md:col-span-2">
                <figure className="border-[1px] border-[#ffffff14]">
                    <img src={`/images/products/${img}.png`} alt="..." className="w-full" />
                </figure>
            </div>
            <div className="col-span-8 sm:col-span-4 md:col-span-4 xl:col-span-3">
                <h4 className="font-Roboto-Bold text-white text-lg">{name}</h4>
                <span className="font-Roboto-Medium text-light-gray text-base block my-2">
                    {off ? "$" + calculateDiscountedPrice(price, off) : "$" + formatPriceWithComma(price)}
                </span>
                <span className="font-Roboto-Medium text-light-gray text-base block">Size: {size}</span>
            </div>
            <div className="col-span-8 sm:col-span-4 md:col-span-4 xl:col-span-3 flex justify-center h-fit">
                <NumberInputCart
                    ref={ref}
                    handelChangeNumber={handelChangeNumber}
                    productQuantity={productQuantity}
                />
            </div>
            <div className="col-span-4 sm:col-span-6 md:col-span-2">
                <span className="font-Roboto-Medium text-white text-base block text-right sm:text-left md:text-right">
                    {off ? "$" + calculateFinalPrice(price, off, quantity) : "$" + formatPriceWithComma(price, quantity)}
                </span>
            </div>
            <div className="col-span-12 sm:col-span-6 md:col-span-12 xl:col-span-2 flex justify-end">
                <Button onClick={handelDeleteProduct} sx={{ height: "fit-content" }} variant="outlined" color="error" startIcon={<DeleteIcon />}>
                    Delete
                </Button>
            </div>
        </li>
    );
};

export default CartCard;