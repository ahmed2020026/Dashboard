
export const Kpi = ({ total, icon, title }) => {


    return (
        <div className="bg-white shadow-md rounded-md p-3 hover:shadow-none cursor-pointer flex justify-between items-start">
            <div>
                <p className="my-2 text-gray-800">{title}</p>
                <h1 className="text-gray-600 font-medium text-2xl">{total}</h1>
            </div>
            <span className="bg-gray-100 p-2 inline-flex rounded">{icon}</span>
        </div>
    )
}