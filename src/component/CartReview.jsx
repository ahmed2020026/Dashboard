import StarRateIcon from '@mui/icons-material/StarRate';
export const CartReview = ({ avater, name, date, rate, review }) => {

    return (
        <div>
            <div className="bg-white rounded-xl shadow-md border-t border-gray-100 p-4 flex flex-col gap-3 mb-4">
                {/* User Info */}
                <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 flex items-center justify-center rounded-full text-white font-bold`}>
                        <img src={avater} alt={name} className="rounded-full" />
                    </div>
                    <div>
                        <h3 className="font-semibold">{name}</h3>
                        <p className="text-sm text-gray-500">{date}</p>
                    </div>
                </div>

                {/* Rating */}
                <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <StarRateIcon
                            key={i}
                            size={18}
                            className={`${i <= rate ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                }`}
                        />
                    ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-700">{review}</p>

                {/* Actions */}
                <div className="flex gap-3">
                    <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-1 cursor-pointer rounded-md">
                        Approve
                    </button>
                    <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 cursor-pointer rounded-md">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}