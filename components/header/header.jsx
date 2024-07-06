import Container from "@/theme/container";
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { styled } from '@mui/material/styles';
import { useSelector } from "react-redux";
import Link from "next/link";
import WishlistDrawer from "../wishlistDrawer/wishlistDrawer";
import { selectWishlistIds } from "@/reduxConfiguration/wishlistSlice";
import { usePathname } from 'next/navigation';
import MobileMenu from "../mobileMenu/mobileMenu";

const StyledBadgeCart = styled(Badge)(({ theme }) => ({
    color: "#ffffffbf",
    '& .MuiBadge-badge': {
        backgroundColor: "#bb9d7b",
        color: "#171717",
        border: ".5px solid",
        right: 4,
        top: 20,
    },
}));

const StyledBadgeWishlist = styled(Badge)(({ theme }) => ({
    color: "#ffffffbf",
    '& .MuiBadge-badge': {
        backgroundColor: "#bb9d7b",
        color: "#171717",
        border: ".5px solid",
        right: 2,
        top: 22,
    },
}));

const StyledBadgeCheckout = styled(Badge)(({ theme }) => ({
    color: "#bb9d7b",
}));


function Header() {

    const numberOfProducts = useSelector(state => Object.keys(state.cart.entities).length);
    const favoriteNumber = useSelector(state => selectWishlistIds(state).length);

    const pathname = usePathname()

    return (
        <>
            <nav className="default-nav bg-dark-gray border-b-[1px] border-[#ffffff14] py-4 lg:py-6">
                <Container>
                    <div className="grid grid-cols-12 gap-5">
                        <div className="col-span-4 lg:col-span-2 order-2 lg:order-1">
                            <Link href={"/"}>
                                <span className="block font-Roboto-Bold text-base sm:text-xl text-center lg:text-left text-light-gray hover:text-white duration-[.5s] cursor-pointer">Noir Chronos</span>
                            </Link>
                        </div>
                        <div className="col-span-4 lg:col-span-8 order-1 lg:order-2">
                            <ul className="hidden lg:flex items-center justify-center gap-x-10 font-Roboto-Regular text-base text-light-gray">
                                <li className="duration-[.5s] hover:text-white">
                                    <Link href={"/"} className={`${pathname === '/' ? 'active-link' : ''}`}>
                                        HOME
                                    </Link>
                                </li>
                                <li className="duration-[.5s] hover:text-white">
                                    <Link href={"/products"} className={`${pathname === '/products' ? 'active-link' : ''}`}>
                                        SHOP
                                    </Link>
                                </li>
                                <li className="duration-[.5s] hover:text-white">
                                    <Link href={"/about-us"} className={`${pathname === '/about-us' ? 'active-link' : ''}`}>
                                        ABOUT US
                                    </Link>
                                </li>
                                <li className="duration-[.5s] hover:text-white">
                                    <Link href={"/contact"} className={`${pathname === '/contact' ? 'active-link' : ''}`}>
                                        CONTACT US
                                    </Link>
                                </li>
                                <li className="duration-[.5s] hover:text-white">TRACK YOUR ORDER</li>
                            </ul>
                            <span className="lg:hidden">
                                <MobileMenu />
                                {/* <MenuOutlinedIcon sx={{ color: "#ffffffbf", fontSize: 25 }} /> */}
                            </span>
                        </div>
                        <div className="col-span-4 lg:col-span-2 order-3">
                            <div className="flex items-center gap-x-3 justify-end">
                                <SearchOutlinedIcon sx={{ color: "#ffffffbf", fontSize: 25 }} />
                                <StyledBadgeWishlist badgeContent={favoriteNumber} sx={{ cursor: "pointer" }}>
                                    <WishlistDrawer />
                                </StyledBadgeWishlist>
                                <Link href={'/cart'}>
                                    <StyledBadgeCart badgeContent={numberOfProducts}>
                                        <ShoppingCartOutlinedIcon />
                                    </StyledBadgeCart>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </nav>
            <nav className="checkout-nav bg-white border-b-[1px] border-[#dedede] py-4 lg:py-6">
                <Container>
                    <div className="grid grid-cols-2 gap-5">
                        <div>
                            <Link href={"/"}>
                                <span className="block font-Roboto-Bold text-base sm:text-xl text-dark-gray hover:text-golden duration-[.5s] cursor-pointer">Noir Chronos</span>
                            </Link>
                        </div>
                        <div>
                            <div className="flex items-center gap-x-3 justify-end">
                                <Link href={'/cart'}>
                                    <StyledBadgeCheckout>
                                        <ShoppingCartOutlinedIcon />
                                    </StyledBadgeCheckout>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </nav>
        </>
    );
};

export default Header;