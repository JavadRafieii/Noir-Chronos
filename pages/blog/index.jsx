import Container from "@/theme/container";
import BlogCard from "@/components/blogCard/blogCard";

function BlogPage({ blogs }) {
    return (
        <Container>
            <h1 className="font-Roboto-Bold text-white text-4xl text-center my-20">Noir Chrono Blog</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10 mb-20">
                {blogs.map(item => (
                    <div key={item.id}>
                        <BlogCard blog={item}/>
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default BlogPage;

export async function getStaticProps() {
    const res = await fetch('http://localhost:8000/blog');
    const blogs = await res.json();
    return {
        props: {
            blogs,
        },
    };
};