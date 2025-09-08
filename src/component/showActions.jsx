import { Link } from "react-router-dom"
export const ShowActions = ({ id, pathDetails, pathEdite }) => {

    return (
        <div className="border border-gray-200 p-1 rounded-lg bg-white shadow-lg">
            <Link to={`/${pathDetails}`} className="block text-gray-500 text-center text-sm px-3 py-0.5 mb-1">details</Link>
            <button className="block text-red-600 cursor-pointer text-center text-sm px-3 py-0.5 mb-1">delete</button>
            <Link to={`/${pathEdite}/${id}`} className="block text-gray-950 text-center text-sm px-3 py-0.5">edite</Link>
        </div>
    )
}
