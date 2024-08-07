import Container from "@/theme/container";
import PaginatedItems from "@/components/productPagination/productPagination";

export async function getStaticProps() {
    const res = await fetch('https://my-json-server.typicode.com/JavadRafieii/database/products');
    const products = await res.json();
    return {
        props: {
            products,
        },
    };
};

function ProductsPage({ products }) {
    return (
        <>
            <h1 className="bg-golden font-Roboto-Bold text-4xl text-dark-gray text-center py-6">Products</h1>
            <Container>
                <PaginatedItems itemsPerPage={6} products={products} />
            </Container>
        </>
    );
};

export default ProductsPage;