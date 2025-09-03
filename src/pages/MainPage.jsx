import { Route, Routes } from "react-router-dom"
import { Dashboard } from "./Dashboard"
import { AllProducts } from "./AllProducts"
import { AllOrders } from "./AllOrders"
import { AllUsers } from "./AllUsers"
import { AddUsers } from "./AddUser"
import { NotFound } from "./404"
import { AddProduct } from "./AddProduct"
import { Settings } from "./Settings"

export const MainPage = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/allProducts' element={<AllProducts />} />
                <Route path='/addProduct' element={<AddProduct />} />
                <Route path='/editeProduct/:id' element={<AddProduct />} />
                <Route path='/allOrders' element={<AllOrders />} />
                <Route path='/allUsers' element={<AllUsers />} />
                <Route path='/addUser' element={<AddUsers />} />
                <Route path='/editeUser/:id' element={<AddUsers />} />
                <Route path='/settings' element={<Settings />} />
                <Route path='/*' element={<NotFound />} />
            </Routes>
        </>
    )
}
