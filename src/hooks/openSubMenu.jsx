import { useEffect, useRef, useState } from "react"

export const openSubMenu = () => {
    const ele = useRef();
    const [current, setCurrent] = useState(null);
    const [height, setHeight] = useState(null);

    /* toggle */
    const toggle = (ele) => {
        setCurrent(e => e != ele ? ele : null);
    }

    /* return height */
    useEffect(() => {
        if (ele.current) {
            setHeight(ele.current.scrollHeight)
        }
    }, [current]);

    return { current, ele, height, toggle}
}