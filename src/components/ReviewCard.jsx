import { Star } from "lucide-react";

function ReviewCard({ name, rating, comment, date }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition duration-300">

      <div className="flex justify-between items-center mb-3">
        <h3 className="font-bold text-lg">
          {name}
        </h3>

        <span className="text-gray-500 text-sm">
          {date}
        </span>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 mb-4">

        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            size={18}
            className={
              index < rating
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-300"
            }
          />
        ))}

      </div>

      {/* Comment */}
      <p className="text-gray-600 leading-7">
        {comment}
      </p>

    </div>
  );
}

export default ReviewCard;