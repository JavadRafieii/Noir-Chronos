import RadioSizes from "../radioSizes/radioSizes";
import NumberInput from "../numberInput/numberInput";
import { useState, useRef, createContext } from "react";

function SizeAndNumber({ sizes }) {

    const ref = useRef(null);

    const [values, setValues] = useState({
        size: 4,
        number: 1,
    });

    const handelProductToBasket = () => {
        console.log("size: " + values.size + " number: " + values.number);
    };

    const handelChangeSize = (size) => {
        setValues(prevState => ({
            ...prevState,
            size
        }));
    };

    const handelChangeNumber = () => {
        let number = ref.current.lastChild.value;
        setValues(prevState => ({
            ...prevState,
            number
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
                number={values.number}
            />
            <button onClick={handelProductToBasket} className="w-full bg-golden py-3 px-6 rounded-md font-Roboto-Medium text-base text-dark-gray duration-[.5s] hover:bg-white">Add to cart</button>
        </div>
    );
};

export default SizeAndNumber;