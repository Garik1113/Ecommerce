export const getTotalPages = (totalProducts: number, perPage: number) => {
    const latestPage = totalProducts % perPage > 0 ? 1 : 0;
    const pages = Math.round(totalProducts / perPage);
    return pages + latestPage;
}