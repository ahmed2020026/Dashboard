import { useDispatch, useSelector } from "react-redux";
import { callOrder } from "../redux/callApi";
import { useEffect, useRef, useState } from "react";
import { useOutsideClick } from "../hooks/useOutSide";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { ShowActions } from "../component/showActions";

export const AllOrders = () => {
    const Order = useSelector(state => state.orders.orders.orders);
    const Dispatch = useDispatch();
    useEffect(() => {
        if (!Order || Order.length == 0) Dispatch(callOrder())
    }, [Dispatch, Order])

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
        <div className="w-full overflow-x-auto mt-4">
            <table className="w-full table-fixed border-collapse min-w-[700px] bg-white rounded-lg overflow-hidden shadow-md">
                <thead>
                    <tr>
                        <th className="border-b border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-700">
                            ID
                        </th>
                        <th className="border-b border-gray-200 px-4 py-3 text-center text-sm font-semibold text-gray-700">
                            NAME
                        </th>
                        <th className="border-b border-gray-200 px-4 py-3 text-center text-sm font-semibold text-gray-700">
                            COUNTRY
                        </th>
                        <th className="border-b border-gray-200 px-4 py-3 text-center text-sm font-semibold text-gray-700">
                            STATUS
                        </th>
                        <th className="border-b border-gray-200 px-4 py-3 text-center text-sm font-semibold text-gray-700">
                            PRICE
                        </th>
                        <th className="border-b border-gray-200 px-4 py-3 text-center text-sm font-semibold text-gray-700">
                            ACTION
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {Order?.map((order, index) => (
                        <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                            <td className="px-4 py-3 flex items-start gap-3 text-right">
                                {order.id}
                            </td>
                            <td className="px-4 py-3 text-center whitespace-nowrap overflow-hidden text-ellipsis">{order.customerName}</td>
                            <td className="px-4 py-3 text-center whitespace-nowrap overflow-hidden text-ellipsis">{order.shippingAddress}</td>
                            <td className={`px-4 py-3 text-center ${order.status == 'pending' ? 'text-yellow-500' : order.status == 'shipped' ? 'text-sky-500' : order.status == 'delivered' ? 'text-green-500' : 'text-red-500'}`}>{order.status}</td>
                            <td className="px-4 py-3 text-center">{order.totalPrice}$</td>

                            <td className="px-4 py-3 text-center relative">
                                <button aria-label="actions" onClick={() => selectElement(index)} className="text-gray-600 cursor-pointer bg-gray-100 inline-flex rounded-md p-1 hover:bg-gray-200 transition-colors" ref={index == ID ? btnOfElement : null}>
                                    <MoreVertIcon style={{ fontSize: '18px' }} />
                                </button>
                                <div className={`absolute left-0 bg-white rounded-md duration-300 bottom-0 shadow-md border border-b-0 border-gray-100 ${index == ID && open ? '' : 'hidden'}`} ref={index == ID ? catchElement : null}>
                                    <button className={`block px-2 py-1 mb-1 text-sm text-green-500  ${order.status == 'canceled' || order.status == 'delivered' ? 'cursor-not-allowed' : 'cursor-pointer hover:bg-gray-100'}  rounded-t-md w-full`} disabled={order.status == 'canceled' || order.status == 'delivered'}>Complete</button>
                                    <button className={`block px-2 py-1 text-sm text-red-500  ${order.status == 'canceled' || order.status == 'delivered' ? 'cursor-not-allowed' : 'cursor-pointer hover:bg-gray-100'}  rounded-b-md w-full`} disabled={order.status == 'canceled' || order.status == 'delivered'}>Reject</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}