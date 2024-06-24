function calculateDiscountedPrice(price, off) {
    const discountedPrice = price - (price * off / 100);
    const formattedPrice = discountedPrice.toLocaleString('en-US');
    return formattedPrice;
};

function calculateFinalPrice(price, off, multiplier = 1) {
    const discountedPrice = price - (price * off / 100);
    const finalPrice = discountedPrice * multiplier;
    const formattedPrice = finalPrice.toLocaleString('en-US');
    return formattedPrice;
}

function formatPriceWithComma(price, multiplier = 1) {
    const finalPrice = price * multiplier;
    return finalPrice.toLocaleString('en-US');
};

export { calculateDiscountedPrice, calculateFinalPrice, formatPriceWithComma };