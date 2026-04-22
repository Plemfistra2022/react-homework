import type {FC} from "react";
import type {IReview} from "../../../models/IProducts.ts";
import {ReviewItem} from "../review-item/ReviewItem.tsx";

interface IReviewsProps {
    reviews: IReview[];
}

export const Reviews: FC<IReviewsProps> = ({reviews}) => {
    return (
        <div className="reviews-section">
            {reviews.map((review, index) => (
                <ReviewItem key={index} review={review}/>
            ))}
        </div>
    );
};