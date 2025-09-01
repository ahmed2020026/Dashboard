import { Kpi } from "../component/kpi"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { callOrder, callProduct, callUser } from "../redux/callApi"
import ViewListIcon from '@mui/icons-material/ViewList';
import RealEstateAgentIcon from '@mui/icons-material/RealEstateAgent';
import CategoryIcon from '@mui/icons-material/Category';
import GroupIcon from '@mui/icons-material/Group';
import { Chart } from "../component/Chart";
import { OrderComponent } from "../component/OrderComponent";
import { UsersComponent } from "../component/UsersComponent";

export const Dashboard = () => {
    const Order = useSelector(state => state.orders.orders);
    const Product = useSelector(state => state.products.products)
    const User = useSelector(state => state.users.users)

    const Dispatch = useDispatch();
    useEffect(() => {
        if (!Order || Order.length == 0) Dispatch(callOrder())
    }, [Dispatch, Order])
    useEffect(() => {
        if (!Product || Product.length == 0) Dispatch(callProduct())
    }, [Dispatch, Product])
    useEffect(() => {
        if (!User || User.length == 0) Dispatch(callUser())
    }, [Dispatch, User])

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                <Kpi title='Total Users' bgColor={'bg-gradient-to-r from-indigo-500 to-purple-500'} icon={<GroupIcon />} total={`${User[0]?.total}k`} />
                <Kpi title='Total Products' bgColor={'bg-gradient-to-r from-teal-400 to-cyan-500'} icon={<CategoryIcon />} total={`${Order.salesVolume}k`} />
                <Kpi title='Total Orders' bgColor={'bg-gradient-to-r from-orange-400 to-pink-500'} icon={<ViewListIcon />} total={`${Order.total}k`} />
                <Kpi title='Total Sales' bgColor={'bg-gradient-to-r from-green-400 to-emerald-600'} icon={<RealEstateAgentIcon />} total={`${Order.totalSales}$`} />
            </div>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3 md:gap-3 items-start">
                <div className="md:col-span-2">
                    <div className="pr-4 pt-3 shadow-md bg-white rounded-md">
                        <Chart data={['Total Users', 'Total Products', 'Total Orders', 'Total Sales']} value={[28, 60, 38, 100]} />
                    </div>
                    <div className="mt-3 p-4 shadow-md bg-white rounded-md">
                        <h1 className="text-xl font-bold border-b pb-2 border-gray-300">Users</h1>
                        <div className="mt-4">
                            <UsersComponent users={User} />
                        </div>
                    </div>
                </div>
                <div className="shadow-md bg-white p-4 rounded-md col-span-2 md:col-span-1">
                    <h1 className="text-xl font-bold border-b pb-2 border-gray-400">Orders</h1>
                    <div className="pt-4">
                        <OrderComponent Order={Order}/>
                    </div>
                </div>
            </div>
        </>
    )
}

