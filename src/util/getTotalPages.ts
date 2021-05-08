export const getTotalPages = (totalProducts: number, perPage: number) => {
    if(!totalProducts || !perPage) {
        return 0
    }
    if(totalProducts < perPage) {
        return 0
    }
    const latestPage = totalProducts % perPage > 0 ? 1 : 0;
    const pages = Math.round(totalProducts / perPage);
    return pages + latestPage;
}