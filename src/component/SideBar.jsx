import { Link } from 'react-router-dom'
import { routesLinks } from '../constants/system'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { openSubMenu } from '../hooks/openSubMenu';
import { ClickOpenMenu } from '../hooks/openSideBar';
import { useRef } from 'react';
import { useOutsideClick } from '../hooks/useOutSide';

export const SideBar = () => {
    /* prepare element */
    const { current, ele, height, toggle } = openSubMenu();
    const { openMenu, SetOpenMenu, btnRef } = ClickOpenMenu();

    /* close sidebar when click on Other Area */
    const SidebarEle = useRef(null);
    useOutsideClick(SidebarEle, btnRef, () => SetOpenMenu(true))

    return (
        <>
            <div className={`bg-white p-4 fixed w-60 shadow-xl z-10 md:shadow-none h-full ${openMenu ? '-left-full' : 'left-0'} duration-300 md:left-0`} ref={SidebarEle}>
                <ul className='text-gray-800'>
                    {
                        routesLinks.map((item, index) => (
                            !item.subRoute ? (
                                <li key={index} className='bg-gray-100 py-2 rounded-md mb-1 font-medium flex items-center px-2 gap-2'>
                                    <span className='flex items-center'>{item.icon}</span><Link to={`${item.path}`} className='block flex-1'>{item.route}</Link>
                                </li>
                            ) : (
                                <li key={index} className={`mb-1 overflow-hidden duration-200`} style={{ height: current == index ? `${height}px` : '40px' }} ref={current == index ? ele : null}>
                                    <button className='bg-gray-100 py-2 w-full cursor-pointer rounded-md font-medium flex items-center gap-2 px-2 relative' onClick={(e) => toggle(index)} >
                                        <span className='flex items-center'>{item.icon}</span>
                                        {item.route}
                                        <span className='absolute right-1'><KeyboardArrowDownIcon style={{ fontSize: '18px' }} /></span>
                                    </button>

                                    <ul className='px-3'>
                                        {
                                            item.subRoute.map((subitem, i) => (
                                                <li key={i} className='flex items-center gap-2 whitespace-nowrap mb-1 p-1.5 hover:text-sky-500 rounded duration-150'>
                                                    <RadioButtonUncheckedIcon style={{ fontSize: '12px' }} /><Link to={`${subitem.path}`} className='block flex-1'>{subitem.linkTxt}</Link>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </li>
                            )
                        ))
                    }
                </ul>
            </div>
        </>
    )
}