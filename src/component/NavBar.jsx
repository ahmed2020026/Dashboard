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
        <div className='p-3 flex justify-between items-center'>
            <div className="logo pb-1 flex items-center gap-5">
                <p className='font-bold text-black text-2xl'>
                    <span className='text-sky-500'>G</span>-Store Ad.
                </p>
                <div className='iconsmenu cursor-pointer bg-amber-200 md:hidden relative w-6 h-5 p-0' onClick={() => toggle(!openMenu)} ref={btnRef}>
                    <span className={`absolute top-0 left-0 bg-white ${!openMenu ? 'hidden' : ''}`}><MenuIcon /></span>
                    <span className={`absolute top-0 left-0 bg-white ${openMenu ? 'hidden' : ''}`}><CloseIcon /></span>
                </div>
            </div>
            <div className='flex gap-3 items-center'>
                <button className='text-slate-800 shrink-0 bg-gray-100 p-1 flex items-center justify-between rounded-full hover:text-sky-500 cursor-pointer duration-200'>
                    <NotificationsNoneIcon />
                </button>
                <button className='text-slate-800 shrink-0 bg-gray-100 p-1 flex items-center justify-between rounded-full hover:text-sky-500 cursor-pointer duration-200'>
                    <PersonOutlineIcon />
                </button>
            </div>
        </div>
    )
}

