import React, {ChangeEvent, useState} from 'react';
import style from 'styles/editableSpan.module.css'


type EditableSpanType={
    value:string
    onChange:(newValue:string)=>void
    status:boolean
}
export const EditableSpan =({value,onChange,status}:EditableSpanType)=>{

    const [editMode, setEditMode] = useState(false);
    const [title, setTitle] = useState(value);

    const activateEditMode = () => {
        setEditMode(true);
        setTitle(value);
    }
    const activateViewMode = () => {
        setEditMode(false);
        onChange(title);
    }
    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    return editMode
        ? <input value={title} onChange={changeTitle}    onBlur={activateViewMode} />
        : <span className={status? style.editableSpanTrue:''} onDoubleClick={activateEditMode}>{value}</span>
}
