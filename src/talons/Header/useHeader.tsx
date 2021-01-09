import { ICategory } from 'src/store/types/category'

const categories:ICategory[] = [
    {id: 1, title: "Cat1", children_count: 5, children: [], include_in_menu: true},
    {id: 2, title: "Cat2", children_count: 0, children: [], include_in_menu: true},
    {id: 3, title: "Cat3", children_count: 3, children: [], include_in_menu: true},
    {id: 4, title: "Cat4", children_count: 0, children: [], include_in_menu: true},
    {id: 5, title: "Cat5", children_count: 0, children: [], include_in_menu: true},
    {id: 6, title: "Cat6", children_count: 0, children: [], include_in_menu: true},
    {id: 7, title: "Cat7", children_count: 0, children: [], include_in_menu: true},
    {id: 8, title: "Cat8", children_count: 0, children: [], include_in_menu: true},
    {id: 9, title: "Cat9", children_count: 0, children: [], include_in_menu: true},
    {id: 10, title: "Cat10", children_count: 4, children: [],  include_in_menu: false},
    {id: 11, title: "Cat11", children_count: 1, children: [],  include_in_menu: false},
    {id: 12, title: "Cat12", children_count: 7, children: [],  include_in_menu: false}
]

export const useHeader = () => {
    return {
        categories
    }
}