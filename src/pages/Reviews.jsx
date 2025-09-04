import { useDispatch, useSelector } from "react-redux"
import { callReview } from "../redux/callApi";
import { useEffect } from "react";
import { CartReview } from "../component/CartReview";
export const Reviews = () => {
    const Reviews = useSelector(state => state.reviews.reviews);
    const Dispatch = useDispatch();

    useEffect(() => {
        if (!Reviews || Reviews.length == 0) Dispatch(callReview())
    }, [Dispatch, Reviews])
    return (
        <div className="">
            <div className="border-b border-gray-200 pb-5">
                <h1 className="mb-5 font-bold text-xl relative before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-12 before:h-[2px] before:bg-blue-500">Review for Products</h1>
                <div>
                    {
                        Reviews['reviews-for-products']?.map((review , index) => (
                            <CartReview avater={review.avatar} name={review.username} date={review.date} rate={review.rating} review={review.comment} key={index} />
                        ))
                    }
                </div>
            </div>
            <div className="mt-10">
                <h1 className="mb-5 font-bold text-xl relative before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-12 before:h-[2px] before:bg-blue-500">Review for Services</h1>
                <div>
                    {
                        Reviews['reviews-for-website']?.map((review, index) => (
                            <CartReview avater={review.avatar} name={review.name} date={review.date} rate={review.rating} review={review.comment} key={index} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}