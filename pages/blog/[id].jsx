import Container from "@/theme/container";
import Image from "next/image";
import ShareIcon from '@mui/icons-material/Share';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Link from "next/link";

const imageStyleBlog = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
};

function SingleBlogPage({ blog }) {

    const { id, title, body, date, img } = blog;

    return (
        <Container>
            <Image
                src={`/images/${img}.webp`}
                alt="..."
                width={0}
                height={0}
                sizes='100vw'
                style={imageStyleBlog}
            />
            <div className="mx-auto lg:w-2/3 my-10">
                <h1 className="font-Roboto-Bold text-white text-2xl sm:text-3xl md:text-4xl mb-2">{title}</h1>
                <span className="block font-Roboto-Medium text-light-gray text-xs">{date}</span>
                <button className="font-Roboto-Medium text-light-gray text-base flex items-center gap-2 my-5">
                    <ShareIcon sx={{ fontSize: 20 }} />
                    <span>Share</span>
                </button>
                <p className="font-Roboto-Medium text-light-gray text-base">{body}</p>
            </div>
            <div className="flex justify-center">
                <Link href={"/blog"}>
                    <button className="font-Roboto-Bold text-white text-base mb-10 flex items-center gap-1">
                        <KeyboardBackspaceIcon />
                        Back to blog
                    </button>
                </Link>
            </div>
        </Container>
    );
};

export default SingleBlogPage;

export async function getStaticProps({ params }) {

    const { id } = params;

    const res = await fetch(`http://localhost:8000/blog/${id}`);
    const blog = await res.json();

    return {
        props: {
            blog
        },
    };
};

export async function getStaticPaths() {

    const res = await fetch('http://localhost:8000/blog');
    const blogs = await res.json();

    const paths = blogs.map(item => (
        {
            params: {
                id: String(item.id)
            },
        }
    ));

    return { paths, fallback: false };
};