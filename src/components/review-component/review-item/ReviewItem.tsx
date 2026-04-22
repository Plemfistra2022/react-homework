import type {FC} from "react";
import type {IReview} from "../../../models/IProducts.ts";

interface ReviewProp {
    review: IReview
}

export const ReviewItem: FC<ReviewProp> = ({review}) => {
    return (
        <>
            <p><strong>{review.reviewerName}:</strong> {review.comment} ({review.rating}⭐)</p>
        </>
    );
};