import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
export const OrderComponent = ({ Order }) => {
    return (
        Order?.orders?.map((order, index) => (
            <div key={index} className='flex items-start justify-between mb-2 hover:shadow-none shadow-md border cursor-pointer border-gray-200 p-2 rounded-lg'>
                <div>
                    <h1 className='font-medium text-lg'>{order.customerName}</h1>
                    <p className='text-sm text-gray-400'>{order.shippingAddress}</p>
                    <p className='price bg-sky-50 w-fit text-sky-500 text-sm px-2 rounded-md mt-2 border border-sky-600'>{`${order.totalPrice}$`}</p>
                </div>
                {order.status == 'pending' ?
                    <span className='text-yellow-500'> <AccessTimeIcon /></span>
                    : order.status == 'shipped' ?
                        <span className='text-sky-500'><LocalShippingOutlinedIcon /></span>
                        : order.status == 'delivered' ?
                            <span className='text-green-500'><CheckCircleOutlineOutlinedIcon /></span>
                            : <span className='text-red-500'><CancelOutlinedIcon /></span>
                }
            </div>
        ))
    )
}