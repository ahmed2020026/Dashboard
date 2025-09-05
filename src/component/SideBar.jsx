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
            <div
                ref={SidebarEle}
                className={`fixed top-20.5 -left-full md:left-0 h-full w-60 bg-white p-4 shadow-xl z-10 text-sm font-medium transition-all duration-300 md:shadow-none
        ${openMenu ? "-left-full" : "left-0"}`}
            >
                <ul className="text-gray-700 space-y-1">
                    {routesLinks.map((item, index) =>
                        !item.subRoute ? (
                            <li
                                key={index}
                                className="flex items-center gap-2 mb-2 px-3 py-2 rounded-xl font-medium bg-gray-50 hover:bg-sky-50 hover:text-sky-600 transition-colors"
                            >
                                <span className="flex items-center text-sky-500">{item.icon}</span>
                                <Link to={`${item.path}`} className="flex-1">
                                    {item.route}
                                </Link>
                            </li>
                        ) : (
                            <li
                                key={index}
                                ref={current == index ? ele : null}
                                style={{ height: current == index ? `${height}px` : "40px" }}
                                className="overflow-hidden transition-all duration-200 rounded-xl"
                            >
                                <button
                                    aria-label='list-menu'
                                    onClick={(e) => toggle(index)}
                                    className="flex items-center gap-2 w-full px-3 py-2 rounded-xl bg-gray-50 hover:bg-sky-50 hover:text-sky-600 transition-colors relative"
                                >
                                    <span className="flex items-center text-sky-500">
                                        {item.icon}
                                    </span>
                                    <span className="flex-1 text-left">{item.route}</span>
                                    <span
                                        className={`absolute right-2 transition-transform ${current == index ? "rotate-180" : ""
                                            }`}
                                    >
                                        <KeyboardArrowDownIcon style={{ fontSize: "18px" }} />
                                    </span>
                                </button>

                                <ul className="mt-1 pl-6 space-y-1">
                                    {item.subRoute.map((subitem, i) => (
                                        <li
                                            key={i}
                                            className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-gray-600 hover:text-sky-600 hover:bg-sky-50 transition-colors cursor-pointer"
                                        >
                                            <RadioButtonUncheckedIcon style={{ fontSize: "12px" }} />
                                            <Link to={`${subitem.path}`} className="flex-1">
                                                {subitem.linkTxt}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        )
                    )}
                </ul>
            </div>
        </>
    );

}