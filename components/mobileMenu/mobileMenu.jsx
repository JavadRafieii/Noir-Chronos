import { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

function MobileMenu() {

    const pathname = usePathname()

    const [open, setOpen] = useState(false);

    const handelOpenMenu = () => {
        setOpen(true);
    };

    const handelCloseMenu = () => {
        setOpen(false);
    };

    const DrawerList = (
        <Box sx={{ width: 350, height: "100%", backgroundColor: "#1b1b1b", display: "flex", flexDirection: "column", justifyContent: "space-between" }} onClick={handelCloseMenu}>
            <ul className="mobile-menu font-Roboto-Regular text-base text-light-gray py-5">
                <li className={`duration-[.5s] hover:text-white py-3 px-5 hover:bg-[#202020] ${pathname === '/' ? 'active-mobile-link' : ''}`}>
                    <Link href={"/"}>
                        HOME
                    </Link>
                </li>
                <li className={`duration-[.5s] hover:text-white py-3 px-5 hover:bg-[#202020] ${pathname === '/products' ? 'active-mobile-link' : ''}`}>
                    <Link href={"/products"}>
                        SHOP
                    </Link>
                </li>
                <li className={`duration-[.5s] hover:text-white py-3 px-5 hover:bg-[#202020] ${pathname === '/about-us' ? 'active-mobile-link' : ''}`}>
                    <Link href={"/about-us"}>
                        ABOUT US
                    </Link>
                </li>
                <li className={`duration-[.5s] hover:text-white py-3 px-5 hover:bg-[#202020] ${pathname === '/contact' ? 'active-mobile-link' : ''}`}>
                    <Link href={"/contact"}>
                        CONTACT US
                    </Link>
                </li>
            </ul>
            <ul className="flex items-center justify-center gap-5 bg-[#202020] py-5">
                <li>
                    <InstagramIcon sx={{ color: "#fff" }} />
                </li>
                <li>
                    <TelegramIcon sx={{ color: "#fff" }} />
                </li>
                <li>
                    <EmailIcon sx={{ color: "#fff" }} />
                </li>
                <li>
                    <FacebookIcon sx={{ color: "#fff" }} />
                </li>
                <li>
                    <YouTubeIcon sx={{ color: "#fff" }} />
                </li>
            </ul>
        </Box >
    );

    return (
        <div>
            <button onClick={handelOpenMenu}>
                <MenuOutlinedIcon sx={{ color: "#ffffffbf", fontSize: 25 }} />
            </button>
            <Drawer open={open} anchor="left">
                <div className='bg-[#1b1b1b] text-white p-3 border-b-[1px] border-[#ffffff14]'>
                    <CloseIcon onClick={handelCloseMenu} sx={{ cursor: "pointer" }} />
                </div>
                {DrawerList}
            </Drawer>
        </div>
    );
};

export default MobileMenu;