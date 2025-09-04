import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { ClickOpenMenu } from '../hooks/openSideBar';
import { SignOprions } from './SignOprions';
import { useRef, useState } from 'react';
import { useOutsideClick } from '../hooks/useOutSide';
import { Notification } from './NotificationCart';

export const NavBar = () => {
    const { openMenu, SetOpenMenu, btnRef } = ClickOpenMenu();
    const [openPerson, setOpenPerson] = useState(0)
    const [openNotifications, setOpenNotifications] = useState(0)
    const refPerson = useRef()
    const btnPerson = useRef()
    const refNot = useRef()
    const btnNot = useRef()
    const toggleOpen = (state, e) => {
        state(e)
    }
    const toggle = (e) => {
        SetOpenMenu(e)
    }
    useOutsideClick(refPerson, btnPerson, () => setOpenPerson(0))
    useOutsideClick(refNot, btnNot, () => setOpenNotifications(0))
    return (
        <div className="px-5 py-5 flex justify-between items-center bg-white shadow-md">
            {/* Logo + Menu */}
            <div className="flex items-center gap-5">
                <p className="font-bold text-2xl text-gray-800 tracking-wide">
                    <span className="text-sky-500">G</span>-Store <span className="text-gray-500"><span className='hidden md:inline-block'>Admin</span></span>
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
                <div className='relative'>
                    <button className="relative text-gray-600 cursor-pointer bg-gray-100 p-2 rounded-full hover:bg-sky-100 hover:text-sky-500 transition" onClick={() => toggleOpen(setOpenNotifications, !openNotifications)} ref={btnNot}>
                        <NotificationsNoneIcon />
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                            3
                        </span>
                    </button>
                    <div className={`absolute w-[120px] right-20 top-[calc(100%+25px)] duration-200 ${openNotifications ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`} ref={refNot}>
                        <Notification />
                    </div>
                </div>

                <div className='relative'>
                    <button className="text-gray-600 bg-gray-100 p-2 cursor-pointer rounded-full hover:bg-sky-100 hover:text-sky-500 transition" onClick={() => toggleOpen(setOpenPerson, !openPerson)} ref={btnPerson}>
                        <PersonOutlineIcon />
                    </button>
                    <div className={`absolute w-[120px] duration-300 right-0 top-[calc(100%+25px)] ${openPerson ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`} ref={refPerson}>
                        <SignOprions />
                    </div>
                </div>
            </div>
        </div>
    );

}

