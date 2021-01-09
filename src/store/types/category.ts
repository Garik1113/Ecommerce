export interface ICategory {
    id: number;
    title: string;
    children_count: number,
    include_in_menu: boolean,
    children: ICategory[] | []
}

export const GET_CATEGORIES_REQUEST = "GET_CATEGORIES_REQUEST";
export const GET_CATEGORIES_RECEIVE = "GET_CATEGORIES_RECEIVE";

export interface GetCategoriesRequest {
    type: typeof GET_CATEGORIES_REQUEST;
}

export interface GetCategoriesReceive {
    type: typeof GET_CATEGORIES_RECEIVE,
    categories: ICategory[];
}

export type CategoryActions = 
    | GetCategoriesRequest
    | GetCategoriesReceive



