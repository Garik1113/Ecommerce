import { ProductParams } from 'src/rootComponents/Product/product';
import { ConfigurableProduct, Product } from 'src/store/types/product'
// export const img1 = "https://www.google.am/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png"
export const img2 = "https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png";
const img3 = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg";
const img4 = "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"

export const productExample: ConfigurableProduct = {
    id: "asd1",
    title: "Comp",
    description: "asd asd a asdasd sdsdf sdfsdf sdfs sdfs sdfs dfsdf sdfsd sdfs sdfsd sdfsdf, sdf.sdf, sdf,.sdfs ksdf sdfksld fksdlf ksdf skdf lsdfk sdf ksdflks asd asd a asdasd sdsdf sdfsdf sdfs sdfs sdfs dfsdf sdfsd sdfs sdfsd sdfsdf, sdf.sdf, sdf,.sdfs ksdf sdfksld fksdlf ksdf skdf lsdfk sdf ksdflks asd asd a asdasd sdsdf sdfsdf sdfs sdfs sdfs dfsdf sdfsd sdfs sdfsd sdfsdf, sdf.sdf, sdf,.sdfs ksdf sdfksld fksdlf ksdf skdf lsdfk sdf ksdflks ",
    __type: "configurableProduct",
    gallery: [ 
        {
            image_path: img2,
            small_image_path: img2,
            thumbnail_path: img2
        },
        {
            image_path: img3,
            small_image_path: img3,
            thumbnail_path: img3
        },
        {
            image_path: img4,
            small_image_path: img4,
            thumbnail_path: img4
        },
    ],
    price: { currency: "USD", value: 540 },
    main_image: img2,
    category_id: "catN12",
    options: [
        {
            title: "Size",
            option_id: 1,
            variant: [
                {
                    title: "SM",
                    id: 1
                },
                {
                    title: "MD",
                    id: 2
                },
                {
                    title: "XL",
                    id: 3
                }
            ]
        },
        {
            title: "Color",
            option_id: 2,
            variant: [
                {
                    title: "blue",
                    id: 1
                },
                {
                    title: "green",
                    id: 2
                },
                {
                    title: "yellow",
                    id: 3
                }
            ]
        }
    ]
}


export const useProduct = ({id}: ProductParams) => {

    return {
        product: productExample
    }
}