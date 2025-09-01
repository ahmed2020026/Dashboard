import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { ClickOpenMenu } from '../hooks/openSideBar';

export const NavBar = () => {
    const { openMenu, SetOpenMenu, btnRef } = ClickOpenMenu();
    const toggle = (e) => {
        SetOpenMenu(e)
    }
    return (
        <div className="px-5 py-5 flex justify-between items-center bg-white shadow-md">
            {/* Logo + Menu */}
            <div className="flex items-center gap-5">
                <p className="font-bold text-2xl text-gray-800 tracking-wide">
                    <span className="text-sky-500">G</span>-Store <span className="text-gray-500">Admin</span>
                </p>

                {/* Menu Icon (Mobile only) */}
                <div
                    ref={btnRef}
                    onClick={() => toggle(!openMenu)}
                    className="iconsmenu cursor-pointer bg-sky-500 text-white rounded-md p-1 md:hidden flex items-center justify-center w-9 h-9"
                >
                    <span className={`${openMenu ? "block" : "hidden"}`}>
                        <MenuIcon fontSize="small" />
                    </span>
                    <span className={`${!openMenu ? "block" : "hidden"}`}>
                        <CloseIcon fontSize="small" />
                    </span>
                </div>
            </div>

            {/* Right side icons */}
            <div className="flex gap-3 items-center">
                <button className="relative text-gray-600 bg-gray-100 p-2 rounded-full hover:bg-sky-100 hover:text-sky-500 transition">
                    <NotificationsNoneIcon />
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                        3
                    </span>
                </button>

                <button className="text-gray-600 bg-gray-100 p-2 rounded-full hover:bg-sky-100 hover:text-sky-500 transition">
                    <PersonOutlineIcon />
                </button>
            </div>
        </div>
    );

}

