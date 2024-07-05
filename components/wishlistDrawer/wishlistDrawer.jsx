import { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { selectWishlistIds } from '@/reduxConfiguration/wishlistSlice';
import { useSelector } from 'react-redux';
import WishlistCard from '../wishlistCard/wishlistCard';
import CircularProgress from '@mui/material/CircularProgress';
import Link from 'next/link';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function WishlistDrawer() {

    const wishListIds = useSelector(state => selectWishlistIds(state));
    const isLoadingWishlist = useSelector(state => state.wishlist.isLoading);
    const error = useSelector(state => state.wishlist.error);

    const [open, setOpen] = useState(false);

    const handelOpenDrawer = () => {
        setOpen(true);
    };

    const handelCloseDrawer = () => {
        setOpen(false);
    };

    const DrawerList = (
        <Box sx={{ width: 350, height: "100%", backgroundColor: "#1b1b1b" }}>
            {error ?
                <span className='font-Roboto-Medium text-gray text-base h-full flex items-center justify-center'>There is a problem. Please try again.</span> :
                isLoadingWishlist ?
                    <div className='w-full h-full flex items-center justify-center'>
                        < CircularProgress sx={{ color: "#fff" }} size={"2rem"} />
                    </div> :
                    <ul className='mt-5 h-full'>
                        {wishListIds.length === 0 ?
                            <div className='w-full h-full flex flex-col items-center justify-center gap-5'>
                                <FavoriteBorderIcon sx={{ color: "#ffffffbf", fontSize: 30 }} />
                                <span className='font-Roboto-Bold text-white text-2xl'>Your wishlist is empty</span>
                                <Link href={"/products"}>
                                    <button className="w-fit bg-golden py-3 px-6 rounded-md font-Roboto-Medium text-base text-dark-gray duration-[.5s] hover:bg-white">Continue shopping</button>
                                </Link>
                            </div> :
                            wishListIds.map(item => <WishlistCard key={item} id={item} />)
                        }
                    </ul>
            }
        </Box >
    );

    return (
        <div>
            <button onClick={handelOpenDrawer}>
                <FavoriteBorderOutlinedIcon />
            </button>
            <Drawer open={open} anchor="right">
                <div className='bg-[#1b1b1b] text-white flex items-center justify-between p-5 border-b-[1px] border-[#ffffff14]'>
                    <span className='font-Roboto-Bold text-2xl text-white'>Wishlist</span>
                    <CloseIcon onClick={handelCloseDrawer} sx={{ cursor: "pointer" }} />
                </div>
                {DrawerList}
            </Drawer>
        </div>
    );
};

export default WishlistDrawer;