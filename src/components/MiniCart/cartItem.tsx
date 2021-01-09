import React from 'react';
import { Link } from 'react-router-dom';
import { img2 } from '../../talons/Product/useProduct';
import classes from './cartItem.scss';

type Props = {
    showDescription: boolean
}

const CartItem:React.FC<Props> = (props: Props) => {
    const { showDescription } = props;
    return (
        <div className={classes.root}>
            <div className={classes.body}>
                <div className={classes.image}>
                    <img src={img2} />
                </div>
                <div className={classes.rightActions}>
                    <div className={classes.title}>
                        <Link to="/product/aad1">
                            <h4>ADAD adad sadasd asdasd Aad Ldasd</h4>
                        </Link>
                    </div>
                    {showDescription 
                    ?   <div className={classes.description}>
                            <p>
                                Lorem ipsum dolor sit amet consectetur 
                                adipisicing elit. Voluptas earum 
                                provident ad libero. Sapiente incidunt ut, 
                                repellat doloremque quis sequi molestiae libero 
                                autem molestias possimus labore temporibus 
                                eligendi tempore laboriosam?
                            </p>
                        </div>
                    : null
                    }
                    <div className={classes.quantity}>
                        <div className={classes.qty}>
                            Qty:
                        </div>
                        <div className={classes.qtyNumber}>
                            <i className="fas fa-chevron-left"></i>
                            <input type="number"  min={1} defaultValue={1}/>
                            <i className="fas fa-chevron-right"></i>
                        </div>
                        <div className={classes.price}>
                            <span>$1347</span>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
        </div>
    )
} 

export default CartItem;
