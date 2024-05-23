function calculateDiscountedPrice(price, off) {
    const discountedPrice = price - (price * off / 100);
    const formattedPrice = discountedPrice.toLocaleString('en-US');
    return formattedPrice;
};

function formatPriceWithComma(price) {
    return price.toLocaleString('en-US');
};

export { calculateDiscountedPrice, formatPriceWithComma };