import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FieldInput } from '../component/FieldInput';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import { InputFile } from '../component/InputFile';
import { useDispatch, useSelector } from 'react-redux';
import { callProduct } from '../redux/callApi';
/* label, value , onChange, icon, placeholder  */
export const AddProduct = () => {
    const { id } = useParams();
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')
    const [discount, setDiscount] = useState('')
    const [image, setImage] = useState(null)
    const [discription, setDiscription] = useState('')
    const [color, setColor] = useState('')
    const [brand, setBrand] = useState('')

    const products = useSelector((state) => state.products.products);
    const dispatch = useDispatch();
    useEffect(() => {
        if (products.length == 0) dispatch(callProduct())
    }, [dispatch, products])

    useEffect(() => {
        if (id) {
            setName(products[id]?.title)
            setCategory(products[id]?.category)
            setPrice(products[id]?.price)
            setDiscount(products[id]?.discount || '0')
            setImage(products[id]?.image || '')
            setDiscription(products[id]?.description)
            setColor(products[id]?.color)
            setBrand(products[id]?.brand)
        } else {
            setName('')
            setCategory('')
            setPrice('')
            setDiscount('')
            setImage('')
            setDiscription('')
            setColor('')
            setBrand('')
        }
    }, [id, products]);
    return (
        <div className='w-full bg-white shadow-lg rounded-lg p-5'>
            <div className="text-center mb-6 py-4">
                <h1 className="text-2xl font-bold text-gray-800">
                    {id ? 'Edite Product' : 'Add New Product'}
                </h1>
                <p className="text-gray-400 text-sm mt-0 capitalize">{id ? 'Fill This Form to Edit Product' : 'Fill This Form to add new Product'}</p>
            </div>
            <form className='space-y-4'>
                <div className='md:grid md:grid-cols-3 gap-5 space-y-10'>
                    <div className='flex items-center justify-center'>
                        <InputFile image={image || '/add-product.png'}
                            onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))} h={'150'} w={'150'} />
                    </div>
                    <div className='space-y-4 col-span-2'>
                        <FieldInput
                            label={'Product Title'}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="product title"
                            icon={<DriveFileRenameOutlineIcon />}
                        />
                        <FieldInput
                            label={'Product Category'}
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            placeholder="product category"
                            icon={<DriveFileRenameOutlineIcon />}
                        />
                        <div className='space-y-4 md:grid md:grid-cols-2 gap-5'>
                            <FieldInput
                                label={'Product Price'}
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                placeholder="product price"
                                icon={<AttachMoneyIcon />}
                            />
                            <FieldInput
                                label={'Product Discount'}
                                value={discount}
                                onChange={(e) => setDiscount(e.target.value)}
                                placeholder="product discount"
                                icon={<AttachMoneyIcon />}
                            />
                        </div>
                        <div className='space-y-4 md:grid md:grid-cols-2 gap-5'>
                            <FieldInput
                                label={'Product Color'}
                                value={color}
                                onChange={(e) => setColor(e.target.value)}
                                placeholder="product color"
                                icon={<ColorLensIcon />}
                            />
                            <FieldInput
                                label={'Product brand'}
                                value={brand}
                                onChange={(e) => setBrand(e.target.value)}
                                placeholder="product brand"
                                icon={<LogoDevIcon />}
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <label htmlFor="disc" className="block text-sm font-medium text-gray-700 mb-1">Discribtion</label>
                    <textarea name="disc" value={discription} onChange={(e) => setDiscription(e.target.value)} id="disc" className="w-full border-2 outline-0 border-gray-300 focus:border-blue-500 py-2 px-4 text-sm rounded-lg min-h-[120px] resize-none" placeholder='description product'></textarea>
                </div>
                <div className="flex justify-start gap-3 mt-8 items-center">
                    <button
                        type="button"
                        className="px-4 py-1 cursor-pointer bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition duration-200"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="px-4 py-1 cursor-pointer bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200 flex items-center"
                    >
                        {id ? 'Update' : 'Add'}
                    </button>
                </div>
            </form>
        </div>
    )
}

