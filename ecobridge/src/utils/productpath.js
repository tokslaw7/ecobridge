let productPath = (product_uid) => {
    if (!product_uid) {
        return "/product/"; // require(`../assets/img/logo.png`);
    } else {
        return  "/product/"+ product_uid; // require(`../assets/img/${location}`);
    }
};

export default productPath