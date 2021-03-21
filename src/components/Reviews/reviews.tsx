import React from 'react';
import classes from './reviews.scss';
import { Button, TextArea, Rating } from 'semantic-ui-react';
import { IProduct } from 'src/interfaces/product';
import { useReviews } from 'src/talons/Reviews/useReviews';
type Props = {
    product: IProduct | null,
    isSubmittingReview: any
}

const Reviews: React.FC<Props> = (props: Props) => {
    const { product, isSubmittingReview } = props;
    const { reviews } = useReviews({product, isSubmittingReview});

    return (
        <div className={classes.root}>
            {
                reviews.map((review) => {
                    return (
                        <div className={classes.reviewField}>
                            <div className={classes.rating}>
                                <Rating
                                    maxRating={6} 
                                    rating={review.rating}
                                    size="small"
                                    icon='star'
                                    disabled={true}
                                    className={classes.rating}
                                    onRate={() => {}}
                                />
                            </div>
                            <div className={classes.commentField}>
                                <p className={classes.comment}>
                                    {review.comment}
                                </p>
                            </div>
                            <div className={classes.customerField}>
                                <div className={classes.customer}>
                                    <span>{review.customer.firstName}</span>
                                    <span>{review.customer.lastName}</span>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Reviews;