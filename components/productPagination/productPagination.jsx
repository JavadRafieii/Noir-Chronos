import { useEffect, useState, createRef } from 'react';
import ReactPaginate from 'react-paginate';
import ProductCard from '../productCard/productCard';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import FilterProducts from '../filterProducts/filterProducts';

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
    const [gender, setGender] = useState('');

    useEffect(() => {
        document.getElementsByClassName("container-paginate")[0].children[1].firstChild.click();
    }, [gender]);

    let items;
    let currentItems;
    let pageCount;

    const endOffset = itemOffset + itemsPerPage;

    function calcutePageCountAndCurrentItems(items) {
        pageCount = Math.ceil(items.length / itemsPerPage);
        currentItems = items.slice(itemOffset, endOffset);
        return [pageCount, currentItems];
    };

    switch (gender) {
        case "MEN":
            items = products.filter(item => {
                if (item.gender === "MEN") {
                    return true;
                };
                return false
            });
            calcutePageCountAndCurrentItems(items);
            break;
        case "WOMEN":
            items = products.filter(item => {
                if (item.gender === "WOMEN") {
                    return true;
                };
                return false
            });
            calcutePageCountAndCurrentItems(items);
            break;
        case "LUXURY":
            items = products.filter(item => {
                if (item.gender === "LUXURY") {
                    return true;
                };
                return false
            });
            calcutePageCountAndCurrentItems(items);
            break;

        default:
            currentItems = products.slice(itemOffset, endOffset);
            pageCount = Math.ceil(products.length / itemsPerPage);
            break;
    };

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % products.length;
        setItemOffset(newOffset);
    };

    const handleChangeGender = (event) => {
        setGender(event.target.value);
    };

    return (
        <>
            <div className="grid grid-cols-3 gap-5 my-10">
                <div>
                    <FilterProducts
                        gender={gender}
                        handleChangeGender={handleChangeGender}
                    />
                </div>
                <div></div>
                <div className='flex items-center justify-end'>
                    <span className="font-Roboto-Medium text-light-gray text-base">
                        {currentItems.length} products out of {products.length} products
                    </span>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-10">
                <Items currentItems={currentItems} />
            </div>
            <ReactPaginate
                breakLabel="..."
                nextLabel={<ArrowRightIcon />}
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel={<ArrowLeftIcon />}
                containerClassName="container-paginate"
                activeClassName="active-page"
                pageLinkClassName="paginate-links"
            />
        </>
    );
};

export default PaginatedItems;