import React from 'react';
import { Link } from 'react-router-dom';
import classes from './item.scss';
import { useItem } from '../../talons/Gallery/useItem';
import { handleImageError } from 'src/util/handleImageError';
import { ConfigurableAttribute, IProduct } from 'src/interfaces/product';
import Rating from 'react-star-ratings';

interface Props {
    item: IProduct,
    rootClass?: any
}

const Item:React.FC<Props> = ({item, rootClass}: Props) => {
    const { 
        handleAddToWishlist, 
        name, 
        imageSrc,
        price,
        discountedPrice,
        inWishList,
        currency
    } = useItem({item});
    
    return (
        <div className={`${classes.root} ${rootClass && classes.flexRoot}`}>
            <Link to={`/product/${item._id}`}>
                <div className={classes.image}>
                    <img onError={handleImageError} src={imageSrc} className={classes.itemImage}/>
                </div>        
            </Link>
            <div title={`${inWishList ? "Ջնջել Նախընտրելիներից" : "Ավելացնել Նախընտրելիներում"}`} className={`${classes.heart} ${inWishList ? classes.red : null} ${rootClass && classes.left}`} onClick={() =>  handleAddToWishlist(item._id || "")}>
                <i className="fas fa-heart"></i>
            </div>
            <div className={rootClass && classes.details}>
                <Link to={`/product/${item._id}`}>
                    <div className={`${classes.title} ${rootClass && classes.flexTitle}`}>
                        <span>{name}</span>
                    </div>  
                </Link>
                <div className={classes.attributes}>
                    {
                        item.configurableAttributes.map((a:ConfigurableAttribute) => {
                            if (a.attribute.type == "colorSwatch") {    
                                return (
                                    <div style={{
                                        width: "25px",
                                        height: "25px",
                                        marginTop: "15px",
                                        borderRadius: "50%",
                                        background: "" + a.value.name + ""
                                    }}></div>
                                )
                            } else {
                                return null
                            }
                        })
                    }
                </div>
                <div className={classes.rating}>
                    <Rating 
                        maxRating={6} 
                        rating={item.averageRating} 
                        starDimension="25px"
                        starSpacing="0px"
                        starRatedColor="#00ff50"
                        starHoverColor="#00ff50"
                        isSelectable={false}
                    />
                </div>                
            </div>

            <div className={classes.actions}>
                <div className={`${rootClass && classes.actionFlex}`}>
                    <div className={`${classes.itemFooter} ${rootClass && classes.flexFooter}`}>
                        <div className={classes.priceField}>
                            {
                                discountedPrice
                                ?   <div className={classes.discountedPriceField}>
                                        <span className={classes.newPrice}>{discountedPrice} {currency.name}</span>
                                        <span className={classes.oldPrice}>{price} {currency.name}</span>
                                    </div>
                                :   <div className={classes.price}>
                                        <span className={classes.newPrice}>{price} {currency.name}</span>
                                    </div>
                            }
                        </div>
                    </div>  
                </div>
                {
                    rootClass 
                    ?   <div className={classes.description} dangerouslySetInnerHTML={{__html: item.description}}></div>
                    :   null
                }
            </div>
              
        </div>
    )
} 

export default Item;