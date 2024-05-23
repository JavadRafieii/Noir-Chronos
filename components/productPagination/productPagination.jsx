import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import ProductCard from '../productCard/productCard';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

function Items({ currentItems }) {
    return (
        currentItems && currentItems.map(item => (
            <div key={item.id}>
                <ProductCard product={item} />
            </div>
        ))
    );
};

function PaginatedItems({ itemsPerPage, products }) {

    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = products.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(products.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % products.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 my-10">
                <Items currentItems={currentItems} />
            </div>
            <ReactPaginate
                breakLabel="..."
                nextLabel={<ArrowRightIcon />}
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel={<ArrowLeftIcon />}
                renderOnZeroPageCount={null}
                containerClassName="container-paginate"
                activeClassName="active-page"
                pageLinkClassName="paginate-links"
            />
        </>
    );
};

export default PaginatedItems;