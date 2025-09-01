import { Route, Routes } from "react-router-dom"
import { Dashboard } from "./Dashboard"
import { AllProducts } from "./AllProducts"
import { AllOrders } from "./AllOrders"
import { AllUsers } from "./AllUsers"
import { AddUsers } from "./AddUser"

export const MainPage = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/allProducts' element={<AllProducts />} />
                <Route path='/allOrders' element={<AllOrders />} />
                <Route path='/allUsers' element={<AllUsers />} />
                <Route path='/addUser' element={<AddUsers />} />
            </Routes>
        </>
    )
}
