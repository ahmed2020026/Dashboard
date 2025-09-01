import { useEffect } from "react";
import { callUser } from "../redux/callApi";
import { useDispatch, useSelector } from "react-redux";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';


export const AllUsers = () => {
    const User = useSelector(state => state.users.users);
    const Dispatch = useDispatch();
    useEffect(() => {
            if (!User || User.length == 0) Dispatch(callUser())
        }, [Dispatch, User])


    return (
        <div className="w-full overflow-x-auto bg-white rounded-md shadow-lg">
            <table className="w-full min-w-[700px] border-collapse">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="border-b border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-700">
                            User
                        </th>
                        <th className="border-b border-gray-200 px-4 py-3 text-center text-sm font-semibold text-gray-700">
                            Phone
                        </th>
                        <th className="border-b border-gray-200 px-4 py-3 text-center text-sm font-semibold text-gray-700">
                            Role
                        </th>
                        <th className="border-b border-gray-200 px-4 py-3 text-center text-sm font-semibold text-gray-700">
                            View
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {User[0]?.users.map(
                        (user, index) =>(
                                <tr
                                    key={index}
                                    className="border-b border-gray-100 hover:bg-gray-50 transition"
                                >
                                    {/* User info */}
                                    <td className="px-4 py-3 flex items-center gap-3">
                                        <div className="overflow-hidden rounded-full shrink-0 w-10 h-10">
                                            <img
                                                src={user.image}
                                                alt="user avatar"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <h1 className="font-medium text-sm text-gray-800">
                                                {user.name}
                                            </h1>
                                            <p className="text-xs text-gray-500">{user.email}</p>
                                        </div>
                                    </td>

                                    {/* Phone */}
                                    <td className="px-4 py-3 text-center text-sm text-gray-700">
                                        {user.phone}
                                    </td>

                                    {/* Role */}
                                    <td className="px-4 py-3 text-center">
                                        <select
                                            className="border border-gray-300 bg-white text-sm rounded-md p-1 px-2 cursor-pointer focus:ring-1 focus:ring-sky-400 outline-none"
                                            defaultValue={user.role}
                                        >
                                            <option value="admin">Admin</option>
                                            <option value="customer">Customer</option>
                                            <option value="seller">Seller</option>
                                        </select>
                                    </td>

                                    {/* View */}
                                    <td className="px-4 py-3 text-center">
                                        <button className="text-gray-600 hover:text-sky-500 bg-gray-100 hover:bg-gray-200 inline-flex rounded-md p-1 transition">
                                            <RemoveRedEyeOutlinedIcon style={{ fontSize: "18px" }} />
                                        </button>
                                    </td>
                                </tr>
                            )
                    )}
                </tbody>
            </table>
        </div>
    );
}