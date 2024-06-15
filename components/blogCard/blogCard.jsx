import Image from "next/image";

const imageStyleBlog = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
}

function BlogCard() {
    return (
        <div className="hover:border-[1px] hover:border-shellfish hover:bg-[#1b1b1b]">
            <figure>
                <Image
                    src={"/images/blog-1.webp"}
                    alt="..."
                    width={0}
                    height={0}
                    sizes='100vw'
                    style={imageStyleBlog}
                />
            </figure>
            <div className="p-2 mt-5">
                <h4 className="font-Roboto-Bold text-white text-xl text-center">THE PERFECT CHRISTMAS GIFT</h4>
                <span className="font-Roboto-Medium text-white text-xs text-center block my-2">JANUARY 30, 2024</span>
                <p className="font-Roboto-Medium text-light-gray text-base text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium fugiat cumque rem inventore eius ad incidunt iure corrupti architecto vero.</p>
            </div>
        </div>
    );
};

export default BlogCard;