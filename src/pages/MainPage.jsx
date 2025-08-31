import { Route, Routes } from "react-router-dom"
import { Dashboard } from "./Dashboard"

export const MainPage = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Dashboard />} />
            </Routes>
        </>
    )
}
