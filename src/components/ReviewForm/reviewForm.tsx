import React from 'react';
import classes from './reviewForm.scss';
import { IProduct } from 'src/interfaces/product';
import { useReviewForm } from 'src/talons/ReviewForm/useReviewForm';
import TextArea from '../Textarea';
import Button from '../Button';
import Rating from 'react-star-ratings';

type Props = {
    product: IProduct
}

const ReviewForm: React.FC<Props> = (props: Props) => {
    const { 
        product,
    } = props;
    const { formik, message } = useReviewForm({ product });

    return (
        <div className={classes.root}>
            <div className={classes.title}>Add Review</div>
            {message ? <div className={classes.message}>{message}</div> : null}
            <form onSubmit={formik.handleSubmit}>
                <div className={classes.ratingField}>
                    <Rating 
                        maxRating={6} 
                        rating={formik.values.rating} 
                        changeRating={(rate: number) =>formik.setFieldValue("rating", rate)}
                        starDimension="30px"
                        starSpacing="5px"
                        starRatedColor="#00ff50"
                        className={classes.rating}
                        starHoverColor="#00ff50"
                    />
                </div>
                <div className={classes.commentField}>
                    <TextArea
                        name="comment"
                        onChange={formik.handleChange}
                        value={formik.values.comment}
                        className={classes.comment}
                        rows={6}
                        cols={8}
                    />
                </div>
                <div className={classes.buttons}>
                    <Button
                        label="submit"
                        priority="normal"
                        onClick={formik.handleSubmit}
                    />
                </div>
            </form>
        </div>
    )
}

export default ReviewForm;