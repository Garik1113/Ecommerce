export type TCategory = {
    _id?: String,
    name: string,
    include_in_menu: boolean
}

export const GET_CATEGORIES_REQUEST = "GET_CATEGORIES_REQUEST";
export const GET_CATEGORIES_RECEIVE = "GET_CATEGORIES_RECEIVE";

export interface GetCategoriesRequest {
    type: typeof GET_CATEGORIES_REQUEST;
}

export interface GetCategoriesReceive {
    type: typeof GET_CATEGORIES_RECEIVE,
    categories: TCategory[];
}

export type CategoryActions = 
    | GetCategoriesRequest
    | GetCategoriesReceive



