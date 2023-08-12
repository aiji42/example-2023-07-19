import { StarIcon } from "@heroicons/react/20/solid";
import { classNames } from "~/helpers";
import { portable, previewify } from "@react-portable/core";

type Props = {
  reviews: {
    average: number;
    totalCount: number;
  };
};

const Component = ({ reviews }: Props) => {
  return (
    <>
      <h3 className="sr-only">Reviews</h3>
      <div className="flex items-center">
        <div className="flex items-center">
          {[0, 1, 2, 3, 4].map((rating) => (
            <StarIcon
              key={rating}
              className={classNames(
                reviews.average > rating ? "text-orange-500" : "text-gray-200",
                "h-8 w-8 flex-shrink-0"
              )}
              aria-hidden="true"
            />
          ))}
        </div>
        <p className="sr-only">{reviews.average} out of 5 stars</p>
        <span className="ml-3 text-sm font-medium text-gray-500">
          {reviews.totalCount} reviews
        </span>
      </div>
    </>
  );
};

export const Review = previewify(Component, "review");
