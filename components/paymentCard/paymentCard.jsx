import { useSelector } from 'react-redux';
import { selectProductById } from '@/reduxConfiguration/basketSlice';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import {calculateFinalPrice, formatPriceWithComma } from '@/features/features';

const StyledBadge = styled(Badge)({
    '& .MuiBadge-badge': {
        backgroundColor: '#666666',
        color: "#fff",
    },
});

function PaymentCard({id}) {

    const product = useSelector((state) => selectProductById(state, id));

    const { name, brand, type, img, sizes, costs: { price, off }, size, quantity } = product;

    return ( 
        <li className="grid grid-cols-12 gap-5 mb-5 last-of-type:mb-0">
            <div className="col-span-3 md:col-span-2 border border-[#c4c4c4] rounded-md">
                <StyledBadge badgeContent={quantity}>
                    <img src={`/images/products/${img}-min.png`} alt="..." />
                </StyledBadge>
            </div>
            <div className="col-span-6 md:col-span-5 flex items-center">
                <div className="font-Roboto-Regular text-dark-gray text-base">
                    <p>{name}</p>
                    <span>Size: {size}</span>
                </div>
            </div>
            <div className="col-span-3 md:col-span-5 flex items-center justify-end">
                <p className="font-Roboto-Regular text-dark-gray text-base">
                    {off ? "$" + calculateFinalPrice(price, off, quantity) : "$" + formatPriceWithComma(price, quantity)}
                </p>
            </div>
        </li>
     );
};

export default PaymentCard;