import React from 'react';
import classes from './reviews.scss';
import { IProduct } from 'src/interfaces/product';
import { useReviews } from 'src/talons/Reviews/useReviews';
import Rating from 'react-star-ratings';

type Props = {
    product: IProduct | null,
}

const Reviews: React.FC<Props> = (props: Props) => {
    const { product } = props;
    const { reviews } = useReviews({product});

    return (
        <div className={classes.root}>
            {
                reviews && reviews.length 
                ?   reviews.map((review) => {
                        return (
                            <div className={classes.reviewField} key={review._id}>
                                <div className={classes.rating}>
                                    <Rating 
                                        maxRating={6} 
                                        rating={review.rating} 
                                        starDimension="20px"
                                        starSpacing="0px"
                                        starRatedColor="#00ff50"
                                        starHoverColor="#00ff50"
                                        isSelectable={false}
                                    />
                                </div>
                                <div className={classes.commentField}>
                                    <p className={classes.comment}>
                                        {review.comment}
                                    </p>
                                </div>
                                <div className={classes.customerField}>
                                    <div className={classes.customer}>
                                        {review.customer.firstName} {review.customer.lastName}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                :   <h3 className={classes.empty}>Մեկնաբանություններ չկան</h3>
            }
        </div>
    )
}

export default Reviews;