import RadioSizes from "../radioSizes/radioSizes";
import NumberInput from "../numberInput/numberInput";
import { useState, useRef } from "react";
import { addNewProduct } from "@/reduxConfiguration/basketSlice";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from '@mui/material/CircularProgress';

function SizeAndNumber({ product }) {

    const { id, name, brand, type, img, sizes, costs: { price, off } } = product;

    const status = useSelector(state => state.cart.productAdditionStatus);

    const dispatch = useDispatch();

    const ref = useRef(null);

    const [values, setValues] = useState({
        size: 4,
        quantity: 1,
    });

    const handelAddedNewProduct = () => {
        dispatch(addNewProduct({ ...product, ...values }));
    };

    const handelChangeSize = (size) => {
        setValues(prevState => ({
            ...prevState,
            size
        }));
    };

    const handelChangeNumber = () => {
        let quantity = ref.current.lastChild.value;
        setValues(prevState => ({
            ...prevState,
            quantity
        }));
    };

    return (
        <div>
            <RadioSizes
                handelChangeSize={handelChangeSize}
                sizes={sizes}
                size={values.size}
            />
            <NumberInput
                ref={ref}
                handelChangeNumber={handelChangeNumber}
                productQuantity={values.quantity}
            />
            {status === "loading" ?
                <button className="w-full bg-golden py-3 px-6 rounded-md">
                    <CircularProgress sx={{ color: "#171717" }} size={"1.1rem"} />
                </button> :
                <button onClick={handelAddedNewProduct} className="w-full bg-golden py-3 px-6 rounded-md font-Roboto-Medium text-base text-dark-gray duration-[.5s] hover:bg-white">Add to cart</button>
            }
        </div>
    );
};

export default SizeAndNumber;