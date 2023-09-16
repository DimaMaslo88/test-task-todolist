import React, {ReactElement, useState,useRef} from 'react';
import style from 'styles/ToolTip.module.css'

type PropsType = {
    children: ReactElement;
    text: string;
};
export const ToolTip = ({children,text}:PropsType) => {
    const toolRef = useRef<undefined | ReturnType<typeof setTimeout>>()
    const [openToolTip,setOpenToolTip] = useState<boolean>(false)
    const onMouseEnterHandler = ()=>{
        toolRef.current = setTimeout(()=>{
            setOpenToolTip(true)
        },600)
    }
    const onMouseLeaveHandler =()=>{
        clearTimeout(toolRef.current)
        setOpenToolTip(false)
    }
    return (
        <div className={style.tooltipContainer} onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}>

            {children}
            { openToolTip && <div className={style.tooltip}>
                {text}
            </div>
            }
        </div>
    );
};

