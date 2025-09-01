import { NavBar } from "./component/NavBar"
import { SideBar } from "./component/SideBar"
import { Dashboard } from "./pages/Dashboard"
import { MainPage } from "./pages/MainPage"
import { Route, Routes } from "react-router-dom"


export const App = () => {
  return (
    <>
      <header className="shadow-xl md:shadow bg-white fixed w-full z-10">
        <NavBar />
      </header>
      <main className="flex min-h-screen pt-21 relative">
        <aside className="w-0 md:w-60">
          <SideBar />
        </aside>
        <div className="p-4 flex-1 relative overflow-hidden">
          <MainPage />
        </div>
      </main>
    </>
  )
}