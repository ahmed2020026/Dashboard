import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
export const OrderComponent = ({ Order }) => {
    return (
        Order?.orders?.map((order, index) => (
            <div
                key={index}
                className="flex items-center justify-between mb-3 bg-white hover:shadow-md shadow-sm border border-gray-200 p-4 rounded-xl transition-all duration-200"
            >
                {/* Left side */}
                <div>
                    <h3 className="font-semibold text-lg text-gray-800">{order.customerName}</h3>
                    <p className="text-sm text-gray-500">{order.shippingAddress}</p>
                    <p className="mt-2 inline-block bg-sky-50 text-sky-600 text-sm font-medium px-3 py-1 rounded-md border border-sky-500">
                        {`${order.totalPrice}$`}
                    </p>
                </div>

                {/* Right side - Status */}
                <div className="shrink-0">
                    {order.status === "pending" ? (
                        <span className="text-yellow-500" title="Pending">
                            <AccessTimeIcon />
                        </span>
                    ) : order.status === "shipped" ? (
                        <span className="text-sky-500" title="Shipped">
                            <LocalShippingOutlinedIcon />
                        </span>
                    ) : order.status === "delivered" ? (
                        <span className="text-green-500" title="Delivered">
                            <CheckCircleOutlineOutlinedIcon />
                        </span>
                    ) : (
                        <span className="text-red-500" title="Canceled">
                            <CancelOutlinedIcon />
                        </span>
                    )}
                </div>
            </div>
        ))
    );

}