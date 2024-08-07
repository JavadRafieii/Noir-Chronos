import { useSelector, useDispatch } from "react-redux";
import Container from "@/theme/container";
import CartCard from "@/components/cartCard/cartCard";
import { selectCartProductIds, selectSubtotal, defaultUpdateStatus } from "@/reduxConfiguration/basketSlice";
import { formatPriceWithComma } from "@/features/features";
import Link from "next/link";
import CircularProgress from '@mui/material/CircularProgress';
import Swal from 'sweetalert2';


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

function CartPage() {

    const selectIds = useSelector(state => selectCartProductIds(state));
    const updateStatus = useSelector(state => state.cart.updateStatus);
    const status = useSelector(state => state.cart.status);
    const total = useSelector(state => selectSubtotal(state));

    const dispatch = useDispatch();

    if (updateStatus === "error") {
        dispatch(defaultUpdateStatus());
    };

    if (updateStatus === "error") {
        Toast.fire({
            icon: "warning",
            title: "Please try again"
        });
    };

    return (
        <Container>

            {updateStatus === "loading" ?
                <div className="w-full h-full flex items-center justify-center fixed top-0 left-0 z-50 bg-[#171717b3]">
                    <CircularProgress sx={{ color: "#bb9d7b" }} size={"1.5rem"} />
                </div> :
                null
            }

            {status === "rejected" ?
                <div className="my-20">
                    <p className="font-Roboto-Medium text-light-gray text-base text-center">There is a problem. Please try again.</p>
                </div> :
                status === "loading" ?
                    <div className="flex justify-center my-20">
                        <CircularProgress sx={{ color: "#fff" }} size={"2rem"} />
                    </div> :
                    selectIds.length !== 0 ?
                        <>
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
                                        <span className="font-Roboto-Bold text-light-gray text-lg">${formatPriceWithComma(total)}</span>
                                    </div>
                                    <span className="font-Roboto-Regular text-base text-light-gray block text-center md:text-right my-3">Taxes and shipping calculated at checkout</span>
                                    <Link href={"/checkout"}>
                                        <button className="w-full bg-golden py-3 px-6 rounded-md font-Roboto-Medium text-base text-dark-gray duration-[.5s] hover:bg-white">
                                            {updateStatus === "loading" ?
                                                <CircularProgress sx={{ color: "#171717" }} size={"1.2rem"} /> :
                                                "Check out"
                                            }
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </> :
                        <div className="my-20 flex flex-col items-center gap-5">
                            <h1 className="font-Roboto-Bold text-white text-4xl text-center">Your cart is empty</h1>
                            <Link href={"/products"}>
                                <button className="w-fit bg-golden py-3 px-6 rounded-md font-Roboto-Medium text-base text-dark-gray duration-[.5s] hover:bg-white">Continue shopping</button>
                            </Link>
                        </div>
            }

        </Container>
    );
};

export default CartPage;
