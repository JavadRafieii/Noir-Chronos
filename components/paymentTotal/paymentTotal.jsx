import { useSelector } from "react-redux";
import { selectSubtotal } from "@/reduxConfiguration/basketSlice";
import { formatPriceWithComma } from "@/features/features";

function PaymentTotal() {

    const total = useSelector(state => selectSubtotal(state));

    return (
        <div className="mt-10">
            <div className="flex items-center justify-between gap-3">
                <span className="font-Roboto-Regular text-dark-gray text-base">Subtotal:</span>
                <span className="font-Roboto-Regular text-dark-gray text-base">{formatPriceWithComma(total)} $</span>
            </div>
            <div className="flex items-center justify-between gap-3 my-2">
                <span className="font-Roboto-Regular text-dark-gray text-base">Shipping</span>
                <span className="font-Roboto-Regular text-dark-gray text-base">Enter shipping address</span>
            </div>
            <div className="flex items-center justify-between gap-3">
                <span className="font-Roboto-Bold text-dark-gray text-xl">Subtotal:</span>
                <span className="font-Roboto-Bold text-dark-gray text-xl">{formatPriceWithComma(total)} $</span>
            </div>
        </div>
    );
};

export default PaymentTotal;