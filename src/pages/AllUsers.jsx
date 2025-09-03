import React, { useEffect, useRef, useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { callUser } from '../redux/callApi';
import { useDispatch, useSelector } from 'react-redux';
import { ShowActions } from '../component/showActions';
import { useOutsideClick } from '../hooks/useOutSide';
import { Link } from "react-router-dom"

export const AllUsers = () => {

    const User = useSelector(state => state.users.users)

    const Dispatch = useDispatch();
    useEffect(() => {
        if (!User || User.length == 0) Dispatch(callUser())
    }, [Dispatch, User])

    /* select Element And Show Detail, edit , delete */
    const catchElement = useRef();
    const btnOfElement = useRef();
    const [ID, setID] = useState(null);
    const [open, setOpen] = useState(false)
    const selectElement = (e) => {
        setID(e);
        setOpen(!open)
    };
    useOutsideClick(catchElement, btnOfElement, () => setOpen(false))

    return (
        <div className="p-4 rounded-lg shadow-lg bg-white">
            <div className='flex items-center justify-between border-b pb-2 border-gray-400'>
                <h1 className="text-xl font-bold">Users</h1>
                <Link to={'/addUser'} aria-label='Add User' className='bg-sky-500 rounded-md hover:bg-sky-700 transition cursor-pointer text-white flex items-center justify-center text-sm px-2 py-1'>Add User</Link>
            </div>
            <div className="w-full overflow-x-auto mt-4">
                <table className="w-full border-collapse min-w-[700px] bg-white rounded-lg overflow-hidden shadow-md">
                    <thead>
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
                        {User[0]?.users.map((user, index) => (
                            <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                                <td className="px-4 py-3 flex items-start gap-3 text-right">
                                    <div className="overflow-hidden rounded-full shrink-0">
                                        <img src={user.image} width="40" height="40" alt={user.name} className="rounded-full" />
                                    </div>
                                    <div className='text-left'>
                                        <h1 className="font-medium -mb-1">{user.name}</h1>
                                        <p className="text-xs text-gray-600">{user.email}</p>
                                    </div>
                                </td>
                                <td className="px-4 py-3 text-center">{user.phone}</td>
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
                                <td className="px-4 py-3 text-center relative">
                                    <span onClick={() => selectElement(index)} className="text-gray-600 cursor-pointer bg-gray-100 inline-flex rounded-md p-1 hover:bg-gray-200 transition-colors" ref={index == ID ? btnOfElement : null}>
                                        <MoreVertIcon style={{ fontSize: '18px' }} />
                                    </span>
                                    <div className={`absolute -left-10 duration-300 bottom-0 ${index == ID && open ? '' : 'hidden'}`} ref={index == ID ? catchElement : null}>
                                        <ShowActions id={index} pathDetails={'detailsUser'} pathEdite={'editeUser'} />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* إضافة بعض الإحصائيات */}
            {<div className="mt-4 grid grid-cols-3 gap-3 text-center">
                <div className="bg-gray-500 p-2 rounded-lg text-white">
                    <p className="text-sm"> Total Users</p>
                    <p className="font-bold text-lg">{User[0]?.users.length}</p>
                </div>
                <div className="bg-gray-600 p-2 rounded-lg text-white">
                    <p className="text-sm">Total Admins</p>
                    <p className="font-bold text-lg">{User[0]?.users.filter(u => u.role === 'admin').length}</p>
                </div>
                <div className="bg-gray-700 p-2 rounded-lg text-white">
                    <p className="text-sm">Total Sallers</p>
                    <p className="font-bold text-lg">{User[0]?.users.filter(u => u.role === 'seller').length}</p>
                </div>
            </div>}
        </div>
    );
};

