import { NavBar } from "./component/NavBar"
import { SideBar } from "./component/SideBar"
import { Dashboard } from "./pages/Dashboard"
import { MainPage } from "./pages/MainPage"
import { Route, Routes } from "react-router-dom"


export const App = () => {
  return (
    <>
      <header className="shadow-xl md:shadow bg-white fixed w-full z-10 py-3">
        <NavBar />
      </header>
      <main className="flex min-h-screen pt-21 ">
        <aside className="w-0 md:w-60">
          <SideBar />
        </aside>
        <div className="p-4 flex-1">
          <MainPage />
        </div>
      </main>
    </>
  )
}