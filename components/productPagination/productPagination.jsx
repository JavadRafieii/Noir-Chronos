import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import ProductCard from '../productCard/productCard';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import FilterProducts from '../filterProducts/filterProducts';
import FilterPrice from '../filterPrice/filterPrice';

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
    const [minPrice, setMinPrice] = useState(null);
    const [maxPrice, setMaxPrice] = useState(null);
    const [erorr, setErorr] = useState(false);
    const [filter, setFilter] = useState(false);

    useEffect(() => {
        document.getElementsByClassName("container-paginate")[0].children[1].firstChild.click();
    }, [gender, minPrice]);

    let items;
    let currentItems;
    let pageCount;

    const endOffset = itemOffset + itemsPerPage;

    function calcutePageCountAndCurrentItems(items) {
        pageCount = Math.ceil(items.length / itemsPerPage);
        currentItems = items.slice(itemOffset, endOffset);
    };

    if (minPrice && !gender) {
        items = products.filter(item => {
            if (item.costs.price >= minPrice && item.costs.price <= maxPrice) {
                return true;
            };
            return false;
        });
        calcutePageCountAndCurrentItems(items);
    } else if (gender && minPrice === null) {
        items = products.filter(item => {
            if (item.gender === gender) {
                return true;
            };
            return false;
        });
        calcutePageCountAndCurrentItems(items);
    } else if (gender && minPrice) {
        items = products.filter(item => {
            if (item.gender === gender && (item.costs.price >= minPrice && item.costs.price <= maxPrice)) {
                return true;
            };
            return false;
        });
        calcutePageCountAndCurrentItems(items);
    } else {
        currentItems = products.slice(itemOffset, endOffset);
        pageCount = Math.ceil(products.length / itemsPerPage);
    };

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % products.length;
        setItemOffset(newOffset);
    };

    const handleChangeGender = (event) => {
        setGender(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!event.target[0].value || !event.target[1].value) {
            setErorr(true);
        } else {
            setErorr(false);
            setFilter(true);
            setMinPrice(Number(event.target[0].value));
            setMaxPrice(Number(event.target[1].value));
        };
    };

    const handelDeleteFilters = () => {
        setMinPrice(null);
        setMaxPrice(null);
        setGender("");
        setFilter(false);
    };

    console.log(currentItems);

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 my-10">
                <div className="md:col-span-6 lg:col-span-4 flex items-center">
                    <FilterPrice
                        handleSubmit={handleSubmit}
                        erorr={erorr}
                        filter={filter}
                        handelDeleteFilters={handelDeleteFilters}
                    />
                </div>
                <div className="md:col-span-6 lg:col-span-4">
                    <FilterProducts
                        gender={gender}
                        handleChangeGender={handleChangeGender}
                    />
                </div>
                <div className="md:col-span-12 lg:col-span-4 flex items-center justify-end">
                    <span className="font-Roboto-Medium text-light-gray text-base text-right w-1/2">
                        {currentItems.length} {(currentItems.length === 1 || currentItems.length === 0) ? "product" : "products"} out of {products.length}
                    </span>
                </div>
            </div>
            {currentItems.length === 0
                ? <p className="font-Roboto-Medium text-light-gray text-base my-10">There is no product here.</p>
                : <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
                    <Items currentItems={currentItems} />
                </div>
            }
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