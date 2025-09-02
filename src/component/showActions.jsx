import { Link } from "react-router-dom"
export const ShowActions = ({id}) => {
    return (
        <div className="border border-gray-200 p-1 rounded-lg bg-white shadow-lg">
            <Link to={'/detailsUser'} className="block text-gray-500 text-center text-sm px-3 py-0.5 mb-1">details</Link>
            <Link to={'/deleteUser'} className="block text-red-600 text-center text-sm px-3 py-0.5 mb-1">delete</Link>
            <Link to={`/editeUser/${id}`} className="block text-gray-950 text-center text-sm px-3 py-0.5">edite</Link>
        </div>
    )
}
