
export const Kpi = ({ total, icon, title, bgColor }) => {


    return (
        <div
            className={`${bgColor} text-white shadow-lg rounded-2xl p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1 cursor-pointer flex justify-between items-start`}
        >
            <div>
                <p className="mb-1 text-gray-200 text-sm tracking-wide">{title}</p>
                <h1 className="font-semibold text-3xl">{total}</h1>
            </div>

            <span className="bg-white/20 p-3 inline-flex rounded-xl">
                {icon}
            </span>
        </div>
    );

}