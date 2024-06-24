import { useSelector } from "react-redux";
import Container from "@/theme/container";
import CartCard from "@/components/cartCard/cartCard";
import { selectCartProductIds, selectSubtotal } from "@/reduxConfiguration/basketSlice";
import { formatPriceWithComma } from "@/features/features";

function CartPage() {

    const selectIds = useSelector(state => selectCartProductIds(state));

    const total = useSelector(state => selectSubtotal(state));

    return (
        <Container>
            <h1 className="font-Roboto-Bold text-white text-4xl text-center mt-20">
                Your cart
                <span className="font-Roboto-Medium text-base inline-block ml-2">Continue shopping</span>
            </h1>
            <ul className="border-y-[1px] border-[#ffffff14] mt-20 py-10">
                {selectIds.map(item => <CartCard key={item} id={item} />)}
            </ul>
            <div className="w-full md:w-1/2 lg:w-1/3 md:ml-auto my-20">
                <div>
                    <div className="flex items-center justify-center md:justify-end gap-3">
                        <span className="font-Roboto-Bold text-white text-lg">Subtotal:</span>
                        <span className="font-Roboto-Bold text-light-gray text-lg">{formatPriceWithComma(total)} $</span>
                    </div>
                    <span className="font-Roboto-Regular text-base text-light-gray block text-center md:text-right my-3">Taxes and shipping calculated at checkout</span>
                    <button className="w-full bg-golden py-3 px-6 rounded-md font-Roboto-Medium text-base text-dark-gray duration-[.5s] hover:bg-white">Check out</button>
                </div>
            </div>
        </Container>
    );
};

export default CartPage;
