import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { callProduct } from "../redux/callApi";
import { useOutsideClick } from "../hooks/useOutSide";
import { Link } from "react-router-dom";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { ShowActions } from "../component/showActions";
import { Rate } from '../component/Rate'
import { ProductSkeleton } from "../component/Skilton";

export const AllProducts = () => {
    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();
    useEffect(() => {
        if (products.products.length == 0) dispatch(callProduct())
    }, [dispatch])
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
                <h1 className="text-xl font-bold">Products</h1>
                <Link to={'/addProduct'} aria-label='Add User' className='bg-sky-500 rounded-md hover:bg-sky-700 transition cursor-pointer text-white flex items-center justify-center text-sm px-2 py-1'>Add Product</Link>
            </div>
            <div className="w-full overflow-x-auto mt-4">
                <table className="w-full table-fixed border-collapse min-w-[700px] bg-white rounded-lg overflow-hidden shadow-md">
                    <thead>
                        <tr>
                            <th className="border-b border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-700">
                                Product Information
                            </th>
                            <th className="border-b border-gray-200 px-4 py-3 text-center text-sm font-semibold text-gray-700">
                                Price
                            </th>
                            <th className="border-b border-gray-200 px-4 py-3 text-center text-sm font-semibold text-gray-700">
                                Category
                            </th>
                            <th className="border-b border-gray-200 px-4 py-3 text-center text-sm font-semibold text-gray-700">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            !products.loading ? (
                                products?.products.map((product, index) => (
                                    <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                                        <td className="px-4 py-3 flex items-start gap-3 text-right">
                                            <div className="overflow-hidden rounded-full shrink-0 flex items-center justify-center">
                                                <img src={product.image} alt={'pro'} className="rounded-full w-9 max-h-10" />
                                            </div>
                                            <div className='text-left  overflow-hidden text-ellipsis'>
                                                <h3 className="font-medium text-gray-900 truncate line-clamp-2">{product.title}</h3>
                                                <Rate rate={products?.products[0].rating.rate} size={15} />
                                            </div>
                                        </td>
                                        <td className="px-4 py-3 text-center">{product.price}$</td>

                                        <td className="px-4 py-3 text-center ">{product.category}</td>

                                        <td className="px-4 py-3 text-center relative">
                                            <button aria-label="actions" onClick={() => selectElement(index)} className="text-gray-600 cursor-pointer bg-gray-100 inline-flex rounded-md p-1 hover:bg-gray-200 transition-colors" ref={index == ID ? btnOfElement : null}>
                                                <MoreVertIcon style={{ fontSize: '18px' }} />
                                            </button>
                                            <div className={`absolute left-10 duration-300 bottom-0 ${index == ID && open ? '' : 'hidden'}`} ref={index == ID ? catchElement : null}>
                                                <ShowActions id={index} pathDetails={'detailsProduct'} pathEdite={'editeProduct'} />
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                                    <td className="px-4 py-3 text-center">
                                        <ProductSkeleton />
                                    </td>
                                    <td className="px-4 py-3 text-center">
                                        <ProductSkeleton />
                                    </td>
                                    <td className="px-4 py-3 text-center">
                                        <ProductSkeleton />
                                    </td>
                                    <td className="px-4 py-3 text-center">
                                        <ProductSkeleton />
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

