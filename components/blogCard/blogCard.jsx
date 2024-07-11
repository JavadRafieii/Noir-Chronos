import Image from "next/image";
import Link from "next/link";

const imageStyleBlog = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
}

function BlogCard({ blog }) {

    const { id, title, body, date, img } = blog;

    return (
        <Link href={`/blog/${id}`}>
            <div className="hover:border-[1px] hover:border-shellfish hover:bg-[#1b1b1b]">
                <figure>
                    <Image
                        src={`/images/${img}-min.png`}
                        alt="..."
                        width={0}
                        height={0}
                        sizes='100vw'
                        style={imageStyleBlog}
                        priority
                    />
                </figure>
                <div className="p-2 mt-5">
                    <h4 className="font-Roboto-Bold text-white text-xl text-center">{title}</h4>
                    <span className="font-Roboto-Medium text-white text-xs text-center block my-2">{date}</span>
                    <p className="font-Roboto-Medium text-light-gray text-base text-center">{body.slice(0, 100)}...</p>
                </div>
            </div>
        </Link>
    );
};

export default BlogCard;