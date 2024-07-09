import Container from "@/theme/container";
import HomeIcon from '@mui/icons-material/Home';
import Link from "next/link";

function PageNotFound() {
    return (
        <Container>
            <div className="my-20">
                <h1 className="font-Roboto-Bold text-white text-6xl md:text-8xl text-center">404</h1>
                <h2 className="font-Roboto-Bold text-white text-3xl md:text-4xl text-center my-10">Page Not Found</h2>
                <div className="flex justify-center">
                    <Link href={"/"}>
                        <button className="w-fit bg-golden py-3 px-6 rounded-md font-Roboto-Medium text-base text-dark-gray duration-[.5s] hover:bg-white flex items-center gap-1">
                            <HomeIcon />
                            Home Page
                        </button>
                    </Link>
                </div>
            </div>
        </Container>
    );
};

export default PageNotFound;