import Container from "@/theme/container";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import SmartDisplayOutlinedIcon from '@mui/icons-material/SmartDisplayOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

const StyledTextField = styled(TextField)(({ theme }) => ({
    background: "#171717",
    width: "350px",
    ".MuiInputBase-input": {
        fontFamily: "Roboto-Medium",
        color: "#ffffffbf",
        borderRadius: "5px",
    },
    ".MuiFormLabel-root": {
        fontFamily: "Roboto-Medium",
        color: "#ffffffbf",  
    },
    ".MuiFormLabel-root.Mui-focused ": {
        color: "#ffffffbf",  
    },
    ".MuiInputBase-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#ffffffbf",
        color: "#ffffffbf", 
    },
    ".MuiInputBase-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "#ffffffbf",
    },
    ".MuiInputBase-root:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "#ffffffbf",
    },
}));

function Footer() {
    return (
        <footer>
            <div className="bg-[url('/images/banner-4.jpeg')] bg-cover bg-center py-20">
                <Container>
                    <h4 className="font-Roboto-Bold text-white text-3xl lg:text-4xl text-center">Subscribe to our emails</h4>
                    <p className="font-Roboto-Light text-light-gray text-base text-center my-5">Be the first to know about new collections and exclusive offers.</p>
                    <div className="flex justify-center">
                        <StyledTextField id="outlined-basic" label="Outlined" variant="outlined" />
                    </div>
                </Container>
            </div>
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10">
                    <div>
                        <h5 className="font-Roboto-Bold text-white text-lg mb-5">Get in touch</h5>
                        <ul className="font-Roboto-Light text-light-gray flex flex-col gap-4">
                            <li className="flex items-center gap-x-2 duration-[.5s] hover:text-golden">
                                <LocationOnOutlinedIcon />
                                Tehran / Iran
                            </li>
                            <li className="flex items-center gap-x-2 duration-[.5s] hover:text-golden">
                                <EmailOutlinedIcon />
                                info@javadrafiei.ir
                            </li>
                            <li className="flex items-center gap-x-2 duration-[.5s] hover:text-golden">
                                <PhoneOutlinedIcon />
                                09012927502
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-Roboto-Bold text-white text-lg mb-5">Get in touch</h5>
                        <ul className="font-Roboto-Light text-light-gray flex flex-col gap-4">
                            <li className="duration-[.5s] hover:text-golden">FAQ </li>
                            <li className="duration-[.5s] hover:text-golden">Size Guide</li>
                            <li className="duration-[.5s] hover:text-golden">About Us</li>
                            <li className="duration-[.5s] hover:text-golden">Contact Us</li>
                            <li className="duration-[.5s] hover:text-golden">Track Your Order</li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-Roboto-Bold text-white text-lg mb-5">Get in touch</h5>
                        <ul className="font-Roboto-Light text-light-gray flex flex-col gap-4">
                            <li className="duration-[.5s] hover:text-golden">Shipping Policy</li>
                            <li className="duration-[.5s] hover:text-golden">Return Policy</li>
                            <li className="duration-[.5s] hover:text-golden">Terms of Services</li>
                            <li className="duration-[.5s] hover:text-golden">Privacy Policy</li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-Roboto-Bold text-white text-lg mb-5">Get in touch</h5>
                        <ul className="font-Roboto-Light text-light-gray flex flex-col gap-4">
                            <li className="duration-[.5s] hover:text-golden">Share contact information, store details, and brand content with your customers.</li>
                        </ul>
                    </div>
                </div>
                <ul className="text-light-gray flex items-center justify-center gap-x-5 my-5">
                    <li><SmartDisplayOutlinedIcon /></li>
                    <li><SendOutlinedIcon /></li>
                    <li><EmailOutlinedIcon /></li>
                    <li><PhoneOutlinedIcon /></li>
                </ul>
            </Container>
            <div className="p-4 border-t-[1px] border-shellfish">
                <p className="font-Roboto-Medium text-light-gray text-xs text-center">© 2024, Noir Chronos all rights reserved. Powered by LevelUP Themes</p>
            </div>
        </footer>
    );
};

export default Footer;