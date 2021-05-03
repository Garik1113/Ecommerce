export const getTotalPages = (totalProducts: number, perPage: number) => {
    if(!totalProducts || !perPage) {
        return 0
    }
    console.log(totalProducts, perPage)
    if(totalProducts < perPage) {
        return 0
    }
    const latestPage = totalProducts % perPage > 0 ? 1 : 0;
    const pages = Math.round(totalProducts / perPage);
    return pages + latestPage;
}