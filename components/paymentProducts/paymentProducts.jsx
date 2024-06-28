import { useSelector } from "react-redux";
import { selectCartProductIds } from "@/reduxConfiguration/basketSlice";
import PaymentCard from "../paymentCard/paymentCard";

function PaymentProducts() {

    const selectIds = useSelector(state => selectCartProductIds(state));

    return (
        <ul className="mt-10">
            {selectIds.map(item => <PaymentCard key={item} id={item} />)}
        </ul>
    );
};

export default PaymentProducts;