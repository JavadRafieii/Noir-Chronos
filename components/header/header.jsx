import Container from "@/theme/container";
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { styled } from '@mui/material/styles';
import { useSelector } from "react-redux";
import Link from "next/link";

const StyledBadge = styled(Badge)(({ theme }) => ({
    color: "#ffffffbf",
    '& .MuiBadge-badge': {
        backgroundColor: "#bb9d7b",
        color: "#171717",
        border: ".5px solid",
        right: 4,
        top: 20,
    },
}));

function Header() {

    const numberOfProducts = useSelector(state => Object.keys(state.cart.entities).length );

    return (
        <nav className="bg-dark-gray border-b-[1px] border-[#ffffff14] py-4 lg:py-6">
            <Container>
                <div className="grid grid-cols-12 gap-5">
                    <div className="col-span-4 lg:col-span-2 order-2 lg:order-1">
                        <span className="block font-Roboto-Bold text-base sm:text-xl text-center lg:text-left text-light-gray hover:text-white">Noir Chronos</span>
                    </div>
                    <div className="col-span-4 lg:col-span-8 order-1 lg:order-2">
                        <ul className="hidden lg:flex items-center justify-center gap-x-10 font-Roboto-Regular text-base text-light-gray">
                            <li className="duration-[.5s] hover:text-white">HOME</li>
                            <li className="duration-[.5s] hover:text-white">SHOP</li>
                            <li className="duration-[.5s] hover:text-white">ABOUT US</li>
                            <li className="duration-[.5s] hover:text-white">CONTACT US</li>
                            <li className="duration-[.5s] hover:text-white">TRACK YOUR ORDER</li>
                        </ul>
                        <span className="lg:hidden">
                            <MenuOutlinedIcon sx={{ color: "#ffffffbf", fontSize: 25 }} />
                        </span>
                    </div>
                    <div className="col-span-4 lg:col-span-2 order-3">
                        <div className="flex items-center gap-x-3 justify-end">
                            <SearchOutlinedIcon sx={{ color: "#ffffffbf", fontSize: 25 }} />
                            <StyledBadge badgeContent={0}>
                                <FavoriteBorderOutlinedIcon />
                            </StyledBadge>
                            <Link href={'/cart'}>
                                <StyledBadge badgeContent={numberOfProducts}>
                                    <ShoppingCartOutlinedIcon />
                                </StyledBadge>
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </nav>
    );
};

export default Header;