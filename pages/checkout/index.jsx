import Container from "@/theme/container";
import ContactInputs from "@/components/contactInputs/contactInputs";
import DeliveryInputs from "@/components/deliveryInputs/deliveryInputs";
import ShippingMethod from "@/components/shippingMethod/shippingMethod";
import Payment from "@/components/payment/payment";
import PaymentProducts from "@/components/paymentProducts/paymentProducts";
import PaymentTotal from "@/components/paymentTotal/paymentTotal";

function CheckoutPage() {
    return (
        <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="border-[#dedede] lg:border-r-[1px] lg:pr-10">
                    <ContactInputs />
                    <DeliveryInputs />
                    <ShippingMethod />
                    <Payment />
                    <button class="hidden lg:block w-full bg-golden my-10 py-3 px-6 rounded-md font-Roboto-Medium text-base text-dark-gray duration-[.5s] border border-golden hover:bg-gray hover:border-[#707070]">Pay now</button>
                </div>
                <div className="lg:pl-10">
                    <div className="sticky top-10">
                        <PaymentProducts />
                        <PaymentTotal />
                        <button class="lg:hidden w-full bg-golden my-10 py-3 px-6 rounded-md font-Roboto-Medium text-base text-dark-gray duration-[.5s] border border-golden hover:bg-gray hover:border-[#707070]">Pay now</button>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default CheckoutPage;