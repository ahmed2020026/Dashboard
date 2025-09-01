
export const Kpi = ({ total, icon, title, bgColor }) => {


    return (
        <div className={`${bgColor} text-white shadow-md rounded-md p-5 hover:shadow-none cursor-pointer flex justify-between items-start`}>
            <div>
                <p className="my-2 text-gray-200">{title}</p>
                <h1 className="font-medium text-2xl">{total}</h1>
            </div>
            <span className="bg-gray-100/25 p-2 inline-flex rounded">{icon}</span>
        </div>
    )
}