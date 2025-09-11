import StarRateIcon from '@mui/icons-material/StarRate';
export const Rate = ({ rate, size }) => {
    return (
        <div className="flex">
            {[1, 2, 3, 4, 5].map((i) => (
                <StarRateIcon
                    key={i}
                    style={{fontSize: `${size}px`}}
                    className={`${i <= rate ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                        }`}
                />
            ))}
        </div>
    )
}
