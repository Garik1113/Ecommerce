import React from 'react';
import classes from './reviewForm.scss';
import { Button, TextArea, Rating } from 'semantic-ui-react';
import { IProduct } from 'src/interfaces/product';
import { useReviewForm } from 'src/talons/ReviewForm/useReviewForm';
type Props = {
    product: IProduct,
    isSubmittingReview: any
    setIsSubmittingReview: any
}

const ReviewForm: React.FC<Props> = (props: Props) => {
    const { 
        product,
        isSubmittingReview,
        setIsSubmittingReview
    } = props;
    const { formik } = useReviewForm({ product, isSubmittingReview, setIsSubmittingReview });

    return (
        <div className={classes.root}>
            <div className={classes.title}>Add Review</div>
            <form onSubmit={formik.handleSubmit}>
                <div className={classes.ratingField}>
                    <Rating 
                        maxRating={6} 
                        rating={formik.values.rating} 
                        onRate={(e, data) => formik.setFieldValue("rating", data.rating)} 
                        size="huge"
                        icon='star'
                        className={classes.rating}
                    />
                </div>
                <div className={classes.commentField}>
                    <TextArea
                        name="comment"
                        onChange={formik.handleChange}
                        value={formik.values.comment}
                        className={classes.comment}
                        rows={6}
                        columns={8}
                    />
                </div>
                <div className={classes.buttons}>
                    <Button type="submit" primary>Add Review</Button>
                </div>
            </form>
        </div>
    )
}

export default ReviewForm;